import express from "express"
import logger from "./utilities/logger"
import routes from "./routes"
import studentRoutes from "./routes/api/students"
import teacherRoutes from "./routes/api/teachers"

const app = express()
const port = 3000

app.use("/api", routes)
app.use("/students", logger, studentRoutes)
app.use("/teachers", logger, teacherRoutes)


app.listen(port, ()=>{
    console.log(`Started server in Port: ${port}`)
})