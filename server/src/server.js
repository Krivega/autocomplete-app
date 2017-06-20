import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import entries from './routes/entries';

export default function startServer(store) {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());

  app.use('/api/entries', entries(store));

  return app;
}
