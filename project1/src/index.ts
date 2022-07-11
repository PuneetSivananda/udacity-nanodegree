import express from 'express';
import { applicationRouter } from './routes';

const port = 3000;

const app = express();

app.use('/api/v1', applicationRouter);

app.listen({ host: 'localhost', port: port }, () => {
  console.log(`Started on port ${port}`);
});

export default app;
