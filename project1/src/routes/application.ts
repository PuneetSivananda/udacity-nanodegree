import path from 'path';
import { Router } from 'express';
import { existsSync } from "fs"
import { IRequestItem } from '../models';
import { resizeImage } from '../controllers';
import urlParser from '../utils/urlParser';
const applicationRouter = Router();

applicationRouter.get('/ping', (req, res) => {
  return res.json({ ping: 'pong' });
});


applicationRouter.get('/resize', urlParser, async (req, res) => {
  // middle ware to parse url params
  // from params check if file exists
  // if exists return in response file
  // else call file creation
  // call generate and return the file from generate

  // search in cache
  let requestObj: IRequestItem = {
    name: res.locals.file,
    width: res.locals.width,
    height: res.locals.height
  }
  // find file in path
  // exists send the file
  // does not exist generate and send file


  // handling a custom cache was expensive cause spaghetti code switching to reading from fs

  let filePath = path.resolve(`./upload/process/${requestObj.name}_${requestObj.width}_${requestObj.height}.jpg`)
  if (existsSync(filePath)){
    res.statusCode = 200
    return res.sendFile(filePath, {})
  }
  else{
    res.statusCode = 200
    const fileDetail = await resizeImage(res.locals.file, parseInt(res.locals.width), parseInt(res.locals.height))  
    return res.sendFile(`${fileDetail?.destPath}`);
  }

});

export default applicationRouter;
