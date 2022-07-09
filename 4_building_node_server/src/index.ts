import express from "express"
import logger from "./utilities/logger"
const app = express()
const port = 3000

app.use(logger)

app.get("/", (req, res)=>{
        console.log(
            "Called api"
        )
        res.send("Hello World")
    }
)


app.listen(port, ()=>{
    console.log(`Started server in Port: ${port}`)
})