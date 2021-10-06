import express from 'express';

import { getBags, getBag } from '../controllers/mybag.js';

const router = express.Router();

router.get('/', getBags);

router.get('/:id', getBag);

export default router;
