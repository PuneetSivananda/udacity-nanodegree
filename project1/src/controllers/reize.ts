import sharp from 'sharp';
import path from 'path';

const resizeImage = async () => {
  try {
    const srcPath = path.resolve('upload', 'fjord.jpg');
    const destPath = path.resolve('upload', 'fjord_processed.jpg');
    const resize = await sharp(srcPath).resize(200, 200).toFile(destPath);
    console.log(resize);
  } catch (e) {
    // if failed respond to the user with a description
    console.log(e);
  }
};

export default resizeImage;
