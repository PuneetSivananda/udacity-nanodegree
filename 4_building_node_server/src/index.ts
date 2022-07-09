import express from "express"
import logger from "./utilities/logger"
import routes from "./routes"
import studentRoutes from "./routes/api/students"
import teacherRoutes from "./routes/api/teachers"

const app = express()
const port = 3000

app.use(logger)
app.use("/api", routes)
app.use("/students", studentRoutes)
app.use("/teachers", teacherRoutes)


app.listen(port, ()=>{
    console.log(`Started server in Port: ${port}`)
})