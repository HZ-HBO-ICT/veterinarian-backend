import express from 'express';
import cors from 'cors';
import {
  getAppointments,
  getAppointmentsForAYear,
  getAppointmentsForAYearAndMonth,
  getAppointmentsForAYearAndMonthAndADay,
  setAppointmentsForAYearAndMonthAndADay,
} from '../controllers/appointmentsController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});
// router.get('/example', checkName, responseExample);
// router.post('/example', checkName, updateExample);

router.options('/appointments', (req, res, next) => {
  try {
    //set header before response
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      Data: Date.now(),
      'Content-length': 0,
    });
    //response
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// get a collection of all the appointments and ou can use a query
router.get('/appointments', cors(), getAppointments);
router.get('/appointments/:year', cors(), getAppointmentsForAYear);
router.get('/appointments/:year/:month', cors(), getAppointmentsForAYearAndMonth);
router.get('/appointments/:year/:month/:day', cors(), getAppointmentsForAYearAndMonthAndADay);
router.post('/appointments/:year/:month/:day', cors(), setAppointmentsForAYearAndMonthAndADay);

export default router;
