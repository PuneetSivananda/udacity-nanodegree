import express from "express"

const logger = (req: express.Request, res: express.Response, next: Function) =>{
    console.log(`${req.baseUrl} was visited`)
    console.log(`Method: ${req.method}, Query: ${req.query}`)
    next()
}

export default logger