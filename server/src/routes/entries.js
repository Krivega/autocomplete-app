import express from 'express';
import { getEntries } from '../reducers';

export default function entries(store) {
  const router = express.Router();

  router.get('/', function(req, res) {
    const params = req.query;
    const json = getEntries(store.getState(), params);
    return res.json(json);
  });

  return router;
}
