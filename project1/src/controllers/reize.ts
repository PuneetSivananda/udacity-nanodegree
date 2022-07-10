import sharp from "sharp"
import path from "path"

const resizeImage = async ()=>{
    const srcPath = path.resolve("upload", "fjord.jpg")
    const destPath = path.resolve("upload", "fjord_processed.jpg")
    const resize = await sharp(srcPath)
    .resize(200, 200)
    .toFile(destPath)
    console.log(resize)    
}

export default resizeImage


