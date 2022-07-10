import { Router } from 'express';
import { resizeImage } from '../controllers';
const applicationRouter = Router();

applicationRouter.get('/ping', (req, res) => {
  return res.json({ ping: 'pong' });
});

applicationRouter.get('/resize', (req, res) => {
  resizeImage();
  return res.json({ output: 'processed' });
});

export default applicationRouter;
