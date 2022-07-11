
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
  let fileDetailsArray: any[] = []
  let fileName, width, height
  console.log(res.locals.file)
  console.log(res.locals.width)
  console.log(res.locals.height)
  const data = cache.get("entries")
  console.log(data)
  if(data == undefined){
    const fileDetail = await resizeImage(fileName, width, height);
    const newFileDetails = [...fileDetailsArray, fileDetail]
    cache.set("entries", newFileDetails)
    fileDetailsArray = newFileDetails
    return res.json({ output: fileDetail })
  }
  return res.json({ output: data });
});

export default applicationRouter;
