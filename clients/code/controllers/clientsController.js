//import data from './clients.json' with { type: 'json' };

//the above will give you a warning
import { readFile } from 'fs/promises';
const data = JSON.parse(
  await readFile(
    new URL('./clients.json', import.meta.url)
  )
);

export async function getAllClients(req, res) {
  try {
    //set header before response
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
}

