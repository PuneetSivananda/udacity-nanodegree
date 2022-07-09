import express from "express"

const app = express()

app.get("/", (req, res)=>{
        console.log(
            "Called api"
        )
        res.send("hello world")
    }
)
app.listen(3000, "localhost", ()=>{
    console.log("Started server in Port: 3000")
})