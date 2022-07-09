import {promises as fs} from 'fs'

const writeData = async ()=>{
    try {
        const fileToRead = await fs.open('writeFile.txt', 'a+')
        await fileToRead.write("\nadd to file")    
    } catch (error) {
        console.log(error)
    }
}

export default {
    writeData
}