import { Router } from 'express';
import { resizeImage } from '../controllers';
const applicationRouter = Router();

applicationRouter.get('/ping', (req, res) => {
  return res.json({ ping: 'pong' });
});

const cache = new Map();
applicationRouter.get('/resize', async (req, res) => {
  // get the input parms from query params
  // search if the file exists in cache using fs
  // return file found
  // call generate and return the file from generate
  const data = cache.entries()
  console.log(data)
  const fileDetail = await resizeImage();
  cache.set("entries", fileDetail)
  return res.json({ output: fileDetail });
});

export default applicationRouter;
