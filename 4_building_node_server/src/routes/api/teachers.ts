import express from "express"

const teacherRoutes = express.Router()

teacherRoutes.get("/", (req, res)=>{
    res.send("main Teacher route")
})


export default teacherRoutes