import data from './clients.json' with { type: 'json' };

export async function getAllClients(req, res) {
  try {
    //set header before response
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
}

