import express from 'express';
import { getCitiesController } from '../controllers/cityController';

const router = express.Router();

router.get('/cities', getCitiesController);

export default router;
