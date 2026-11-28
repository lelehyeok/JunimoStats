import Crop, { SEASONS } from '../models/Crop.js';

// GET /api/crops            -> todos los cultivos
// GET /api/crops?season=fall -> solo los de esa estacion
export async function getCrops(req, res) {
  try {
    const { season } = req.query;
    const filter = {};

    if (season !== undefined) {
      // Solo se aceptan las cuatro estaciones; cualquier otra cosa es un pedido mal hecho.
      if (!SEASONS.includes(season)) {
        return res
          .status(400)
          .json({ message: `season debe ser una de: ${SEASONS.join(', ')}` });
      }
      filter.seasons = season; // Mongo busca dentro de la lista de estaciones
    }

    const crops = await Crop.find(filter).sort({ 'name.en': 1 }).lean();
    res.json(crops);
  } catch (error) {
    console.error('Error al obtener los cultivos:', error);
    res.status(500).json({ message: 'Error al obtener los cultivos' });
  }
}

// GET /api/crops/:seedId -> un cultivo por el ID de su semilla (ej. /api/crops/472)
export async function getCropBySeedId(req, res) {
  try {
    const crop = await Crop.findOne({ seedId: req.params.seedId }).lean();

    if (!crop) {
      return res.status(404).json({ message: 'Cultivo no encontrado' });
    }

    res.json(crop);
  } catch (error) {
    console.error('Error al obtener el cultivo:', error);
    res.status(500).json({ message: 'Error al obtener el cultivo' });
  }
}