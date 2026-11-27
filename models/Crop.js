import mongoose from 'mongoose';

export const SEASONS = ['spring', 'summer', 'fall', 'winter'];

const localizedName = {
  en: { type: String, required: true, trim: true },
  es: { type: String, required: true, trim: true },
};

const cropSchema = new mongoose.Schema(
  {
    // Llave de Crops.json. Casi todas son numericas ("472"), pero cuatro son texto
    // ("CarrotSeeds", "SummerSquashSeeds", "BroccoliSeeds", "PowdermelonSeeds").
    seedId: { type: String, required: true, unique: true, trim: true },
    seedName: localizedName, // "Parsnip Seeds" / "Semillas de chirivía"
    name: localizedName, // producto cosechado: "Parsnip" / "Chirivía"

    harvestItemId: { type: String, required: true, trim: true },
    harvestCategory: { type: Number, required: true }, // categoria de Objects.json (verdura, fruta, flor...)
    basePrice: { type: Number, required: true, min: 0 }, // venta del producto, calidad normal

    // Precio en oro de la semilla y donde se compra. Ambos son null cuando la semilla
    // no se vende por oro (solo trueque, o no se vende en ninguna tienda).
    seedPrice: { type: Number, default: null, min: 1 },
    seedSource: { type: String, default: null },

    seasons: {
      type: [String],
      enum: SEASONS,
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: 'Un cultivo necesita al menos una estacion',
      },
    },

    growthDays: { type: Number, required: true, min: 1 }, // suma de DaysInPhase
    regrowDays: { type: Number, required: true }, // -1 = una sola cosecha

    harvestMinStack: { type: Number, required: true, min: 1 },
    harvestMaxStack: { type: Number, required: true, min: 1 },
    extraHarvestChance: { type: Number, default: 0, min: 0, max: 1 },

    isRaised: { type: Boolean, default: false }, // enrejado
    isPaddyCrop: { type: Boolean, default: false }, // arrozal
    harvestMethod: { type: String, enum: ['Grab', 'Scythe'], default: 'Grab' },
  },
  { collection: 'crops', timestamps: true, versionKey: false }
);

// Consulta tipica: "cultivos de esta estacion"
cropSchema.index({ seasons: 1 });

export default mongoose.model('Crop', cropSchema);
