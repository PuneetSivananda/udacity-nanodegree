import express from 'express';
import { applicationRouter } from './routes';

const cache = {};
const app = express();

app.use('/api/v1', applicationRouter);

app.listen({ host: 'localhost', port: 3000 }, () => {
  console.log(`Started on port 3000`);
});
