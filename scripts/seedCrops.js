import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import mongoose from 'mongoose';
import Crop from '../models/Crop.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'data');

// Tiendas donde la semilla se compra con oro, en orden de prioridad.
// Se dejan fuera Joja, el Mercado Nocturno y el Festival del Desierto.
const GOLD_SHOPS = ['SeedShop', 'Sandy', 'Festival_EggFestival_Pierre', 'Traveler'];

// En Objects.json el nombre viene como referencia: "[LocalizedText Strings\Objects:Parsnip_Name]"
const OBJECT_NAME_TOKEN = /^\[LocalizedText Strings\\Objects:(.+)\]$/;

async function readJson(fileName) {
  const raw = await fs.readFile(path.join(DATA_DIR, fileName), 'utf8');
  return JSON.parse(raw.replace(/^\uFEFF/, '')); // quita el BOM si lo trae
}

function localizedName(obj, esStrings) {
  const key = OBJECT_NAME_TOKEN.exec(obj.DisplayName ?? '')?.[1];
  return { en: obj.Name, es: (key && esStrings[key]) || obj.Name };
}

/**
 * Busca la semilla en las tiendas de oro. Si la entrada trae Price >= 0 se usa ese
 * precio; si trae -1, el juego cobra el precio de venta por defecto del objeto,
 * que es el doble de su Price en Objects.json.
 * Las entradas con TradeItemId son trueque y no cuentan.
 */
function findSeedPrice(seedId, seedObj, shopsJson) {
  for (const shopId of GOLD_SHOPS) {
    const items = shopsJson[shopId]?.Items ?? [];
    const entry = items.find(
      (item) => String(item.ItemId).replace(/^\(O\)/, '') === seedId && !item.TradeItemId
    );
    if (!entry) continue;

    const price = entry.Price >= 0 ? entry.Price : seedObj.Price * 2;
    if (price > 0) return { seedPrice: price, seedSource: shopId };
  }
  return { seedPrice: null, seedSource: null };
}

/**
 * Cruza los cuatro archivos y devuelve los documentos listos para insertar.
 * Es una funcion pura: no toca la base de datos.
 */
export function buildCrops(cropsJson, objectsJson, esStrings, shopsJson) {
  const docs = [];
  const problems = [];

  for (const [seedId, crop] of Object.entries(cropsJson)) {
    const seedObj = objectsJson[seedId];
    const harvestObj = objectsJson[crop.HarvestItemId];

    if (!seedObj || !harvestObj) {
      problems.push(`Cultivo ${seedId}: falta en Objects.json la semilla o el producto ${crop.HarvestItemId}`);
      continue;
    }

    // En algunos cultivos (como el cafe) Max < Min: el juego usa el minimo.
    const harvestMinStack = crop.HarvestMinStack;
    const harvestMaxStack = Math.max(crop.HarvestMinStack, crop.HarvestMaxStack);

    docs.push({
      seedId,
      seedName: localizedName(seedObj, esStrings),
      name: localizedName(harvestObj, esStrings),
      harvestItemId: String(crop.HarvestItemId),
      harvestCategory: harvestObj.Category,
      basePrice: harvestObj.Price,
      ...findSeedPrice(seedId, seedObj, shopsJson),
      seasons: crop.Seasons.map((s) => s.toLowerCase()),
      growthDays: crop.DaysInPhase.reduce((total, days) => total + days, 0),
      regrowDays: crop.RegrowDays,
      harvestMinStack,
      harvestMaxStack,
      extraHarvestChance: crop.ExtraHarvestChance,
      isRaised: crop.IsRaised,
      isPaddyCrop: crop.IsPaddyCrop,
      harvestMethod: crop.HarvestMethod,
    });
  }

  return { docs, problems };
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');

  const [cropsJson, objectsJson, esStrings, shopsJson] = await Promise.all([
    readJson('Crops.json'),
    readJson('Objects.json'),
    readJson('Objects.es-ES.json'),
    readJson('Shops.json'),
  ]);

  const { docs, problems } = buildCrops(cropsJson, objectsJson, esStrings, shopsJson);
  problems.forEach((p) => console.warn(`Aviso: ${p}`));
  console.log(`Cultivos construidos: ${docs.length} de ${Object.keys(cropsJson).length}`);

  // Valida cada documento contra el esquema (no necesita conexion)
  let invalidCount = 0;
  for (const doc of docs) {
    try {
      await new Crop(doc).validate();
    } catch (error) {
      invalidCount += 1;
      console.error(`Invalido ${doc.seedId} (${doc.name.en}): ${error.message}`);
    }
  }
  if (invalidCount > 0) throw new Error('Hay documentos que no cumplen el esquema');

  const noGold = docs.filter((d) => d.seedPrice === null).map((d) => d.seedName.en);
  console.log(`Sin compra por oro (seedPrice: null): ${noGold.length} -> ${noGold.join(', ')}`);

  if (dryRun) {
    console.log('Dry run: no se escribio nada en la base de datos.');
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Falta MONGODB_URI en el archivo .env');

  await mongoose.connect(uri, { dbName: 'junimostats' }); // mismo dbName que server.js
  try {
    await Crop.deleteMany({}); // el seed es la fuente de verdad: se recarga completo
    const inserted = await Crop.insertMany(docs);
    console.log(`Insertados ${inserted.length} cultivos en "${Crop.collection.name}".`);
  } finally {
    await mongoose.disconnect();
  }
}

// Ejecuta main() solo cuando corres `node scripts/seedCrops.js`, no al importarlo.
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
