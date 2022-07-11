
import { Router } from 'express';
import {ICacheItem} from "../models"
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

  // let fileDetailsArray: any[] = []
  const fileDetail = await resizeImage(res.locals.file, res.locals.width, res.locals.height);
  // const data = cache.get("entries")
  // console.log(data)
  // if(data == undefined){
  //   const fileDetail = await resizeImage(fileName, width, height);
  //   const newFileDetails = [...fileDetailsArray, fileDetail]
  //   cache.set("entries", newFileDetails)
  //   fileDetailsArray = newFileDetails
  //   return res.json({ output: fileDetail })
  // }
  // add to cache details 
  let cacheDetail: ICacheItem = { width:0, height:0, destPath:"" }
  cacheDetail["width"] = fileDetail?.resize.width
  cacheDetail["height"] = fileDetail?.resize.height
  cacheDetail["destPath"] = fileDetail?.destPath
  console.log(cacheDetail)

  return res.json({ output: fileDetail });
});

export default applicationRouter;
