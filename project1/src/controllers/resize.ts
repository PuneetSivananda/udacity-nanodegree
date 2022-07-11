import sharp from 'sharp';
import path from 'path';
import { ICacheItem } from '../models';

const resizeImage = async (fileName: string, width: number, height: number) => {
  try {
    const srcPath = path.resolve('upload/img', `${fileName}.jpg`);
    const destPath = path.resolve(
      'upload/process',
      `${fileName}_${width}_${height}.jpg`
    );
    const resize = await sharp(srcPath).resize(width, height).toFile(destPath);
    const returnObj: ICacheItem = {};
    returnObj.destPath = destPath;
    returnObj.height = resize.height.toString();
    returnObj.width = resize.width.toString();
    return returnObj;
  } catch (e) {
    // if failed respond to the user with a description
    console.log(e);
  }
};

export default resizeImage;
