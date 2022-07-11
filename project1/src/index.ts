import express from 'express';
import { applicationRouter } from './routes';

const app = express();

app.use('/api/v1', applicationRouter);

app.get('/ping', (req, res) => {
  return res.json({ ping: 'pong' });
});

app.listen({ host: 'localhost', port: 3000 }, () => {
  console.log(`Started on port 3000`);
});

export default app