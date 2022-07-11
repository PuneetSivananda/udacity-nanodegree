import sharp from 'sharp';
import path from 'path';

const resizeImage = async (fileName:any, width:any, height:any) => {
  try {
    const srcPath = path.resolve('upload/img', 'fjord.jpg');
    const destPath = path.resolve('upload/process', 'fjord_processed.jpg');
    const resize = await sharp(srcPath).resize(200, 200).toFile(destPath);
    return resize;
  } catch (e) {
    // if failed respond to the user with a description
    console.log(e);
  }
};

export default resizeImage;
