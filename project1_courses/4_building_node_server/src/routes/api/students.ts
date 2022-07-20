import express from "express"

const studentRoutes = express.Router()

studentRoutes.get("/", (req, res)=>{
    res.send("main Student route")
})


export default studentRoutes