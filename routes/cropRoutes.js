import { Router } from 'express';
import { getCrops, getCropBySeedId } from '../controllers/cropController.js';

const router = Router();

// Estas rutas cuelgan de /api/crops (se monta en server.js)
router.get('/', getCrops); //          GET /api/crops
router.get('/:seedId', getCropBySeedId); // GET /api/crops/472

export default router;