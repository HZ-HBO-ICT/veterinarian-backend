import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
const router = express.Router();

// create a proxy for each microservice
const appointmentProxy = createProxyMiddleware({
  target: 'http://msappointments:3010',
  changeOrigin: true,
});

// create a proxy for each microservice
const clientsProxy = createProxyMiddleware({
  target: 'http://clients:3012',
  changeOrigin: true,
});

router.use('/appointments', cors(), appointmentProxy);
router.use('/clients', cors(), clientsProxy);

export default router;
