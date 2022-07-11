import {Request, Response} from "express"

const urlParser = (req:Request, res:Response, next:any)=>{
    console.log(req.query)
    next()
}

export default urlParser