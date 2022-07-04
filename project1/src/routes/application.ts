import {Router } from "express"
export const applicationRouter = Router()

applicationRouter.get("/ping", (req, res)=>{
    return res.json({"ping":"pong"})
})