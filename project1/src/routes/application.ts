import path from 'path';
import { Router } from 'express';
import { ICacheItem } from '../models';
import { resizeImage } from '../controllers';
import urlParser from '../utils/urlParser';
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

  let fileDetailsArray: ICacheItem[] = [];
  // const fileDetail = await resizeImage(res.locals.file, res.locals.width, res.locals.height);
  const cacheData = cache.get('entries');
  if (cacheData != undefined && cacheData.length >= 1) {
    // search in cache
    let requestObj = {
      name: res.locals.file,
      width: res.locals.width,
      height: res.locals.height
    };

    const cacheElement = cacheData.map((element: ICacheItem) => {
      let splitString = path.basename(element.destPath || '', '.jpg');
      let fileObj = { name: '', width: '', height: '' };
      fileObj.name = splitString.split('_')[0];
      fileObj.height = splitString.split('_')[2];
      fileObj.width = splitString.split('_')[1];
      if(JSON.stringify(fileObj) === JSON.stringify(requestObj)){
        return fileObj
      }
    });
    let respFilePath = path.resolve(`./upload/process/${cacheElement[0].name}_${cacheElement[0].width}_${cacheElement[0].height}.jpg`)
    return res.sendFile(respFilePath);
  }

  if (!cacheData) {
    const fileDetail = await resizeImage(
      res.locals.file,
      parseInt(res.locals.width),
      parseInt(res.locals.height)
    );
    const newFileDetails = [...fileDetailsArray, fileDetail];
    cache.set('entries', newFileDetails);
    console.info('firstTime');
    return res.sendFile(`${fileDetail?.destPath}`);
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
