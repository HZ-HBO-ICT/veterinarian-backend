import {
  getAppointmentsData,
} from '../adapters/supabaseAdapter.js';

// TODO make sure this function will get called when visiting the /appointments route
export async function getAppointments(req, res) {
  try {
   // TODO here you can make a call to the getAppointmentsData function
   // TODO create a json response to
  } catch (err) {
    next(err);
  }
}