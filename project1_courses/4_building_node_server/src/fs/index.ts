import {promises as fs} from 'fs'

const writeData = async ()=>{
    try {
        const fileToRead = await fs.open('writeFile.txt', 'a+')
        await fileToRead.write("\nadd to file")    
    } catch (error) {
        console.log(error)
    }
}

const writeDataFromFile = async ()=>{
// always overwrite the contents of the file
    try {
        let newFile = await fs.writeFile("writeFile.txt", "content to write to the file")        
    } catch (error) {
        console.log(error)
    }
}

const readData = async () =>{
    try {
        const readFile = await fs.readFile(
            'writeFile.txt', 'utf-8'
        )
        console.log(readFile)
    } catch (err) {
        console.log(err)
    }
}

const moveData = async ()=>{
    try {
        await fs.mkdir('test')        
        const moveFile = await fs.rename("test.txt", "test/test.txt")
    } catch (err) {
        
    }
}

writeData()
writeDataFromFile()
readData()
moveData()

export default {
    writeData,
    writeDataFromFile,
    readData,
    moveData
}

