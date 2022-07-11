import path from "path"
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

  let fileDetailsArray: ICacheItem[] = []
  // const fileDetail = await resizeImage(res.locals.file, res.locals.width, res.locals.height);
  const cacheData = cache.get("entries")
  if(cacheData != undefined && cacheData.length >=1){
    // search in cache
    console.log(res.locals.file, res.locals.width, res.locals.height)
    let requestObj = { name: res.locals.file, width: res.locals.width, height: res.locals.height}
    
    cacheData.forEach((element: ICacheItem)=> {
      let splitString = path.basename(element.destPath || "", ".jpg")
      let fileObj = {name:"", width:"", height:""}
      fileObj.name = splitString.split("_")[0]
      fileObj.width = splitString.split("_")[1]
      fileObj.height = splitString.split("_")[2]
      console.log(fileObj)
      console.log(requestObj)
    });
    return res.sendFile(`${cacheData[0]?.destPath}`)
  }
  
  if(!cacheData){
    const fileDetail = await resizeImage(res.locals.file, res.locals.width, res.locals.height);
    const newFileDetails = [...fileDetailsArray, fileDetail]
    cache.set("entries", newFileDetails)
    console.info("firstTime")
    return res.sendFile(`${fileDetail?.destPath}`)
  }
  

  // add to cache details 
  // let cacheDetail: ICacheItem = { width:0, height:0, destPath:"" }
  // cacheDetail["width"] = fileDetail?.resize.width
  // cacheDetail["height"] = fileDetail?.resize.height
  // cacheDetail["destPath"] = fileDetail?.destPath
  // console.log(cacheDetail)

  return res.sendFile(cacheData[0].destPath);
});

export default applicationRouter;
