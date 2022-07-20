import express from "express"
import logger from "./utilities/logger"
import routes from "./routes"
import studentRoutes from "./routes/api/students"
import teacherRoutes from "./routes/api/teachers"
import csv from "csvtojson"
import { promises as fs } from "fs"

const app = express()
const port = 3000

app.get("/convert", async (req, res)=>{
    let returnJson: any[] = []
    await csv()
    .fromFile("users.csv")
    .then((jsonObj)=>{
        // console.log(jsonObj);
        jsonObj.forEach(obj=>{
            if(obj.phone===""){
                obj.phone = "missing data"
            }
            returnJson.push(obj)
        }) 
    }).then(()=>{
        fs.writeFile("users.json", JSON.stringify(returnJson))
    }) 
    return res.sendStatus(200)
})

app.use("/api", routes)
app.use("/students", logger, studentRoutes)
app.use("/teachers", logger, teacherRoutes)


app.listen(port, ()=>{
    console.log(`Started server in Port: ${port}`)
})