
import { Request, Response, Router } from 'express';
import { resizeImage } from '../controllers';
import urlParser from "../utils/urlParser"
const applicationRouter = Router();

applicationRouter.get('/ping', (req, res) => {
  return res.json({ ping: 'pong' });
});

const cache = new Map();

applicationRouter.get('/resize', urlParser, async (req, res) => {
  // middle ware to parse url params 
  // from params check if file exists 
  // if exists return in response file
  // else call file creation
  // call generate and return the file from generate
  const data = cache.get("entries")
  console.log(data)
  if(!data){
    const fileDetail = await resizeImage();
    cache.set("entries", fileDetail)
    console.log("creating for the first time")
  }
  return res.json({ output: data });
});

export default applicationRouter;
