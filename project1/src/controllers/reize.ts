import sharp from 'sharp';
import path from 'path';
import {ICacheItem} from "../models"

const resizeImage = async (fileName:any, width:any, height:any) => {
  try {
    const srcPath = path.resolve('upload/img', `${fileName}.jpg`);
    const destPath = path.resolve('upload/process', `${fileName}_w${width}_h${height}.jpg`);
    const resize = await sharp(srcPath).resize(200, 200).toFile(destPath);
    const returnObj: ICacheItem = {}
    returnObj.destPath = destPath
    returnObj.height = resize.height
    returnObj.width = resize.width
    return returnObj;
  } catch (e) {
    // if failed respond to the user with a description
    console.log(e);
  }
};

export default resizeImage;
