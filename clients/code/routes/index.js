import express from 'express';
import { getAllClients } from '../controllers/clientsController.js';
import cors from 'cors';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/clients', cors(), getAllClients);

export default router;
