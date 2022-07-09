const logger = (req:any, res:any, next:any) =>{
    console.log(`Method: ${req.method}, Query: ${req.query}`)
    next()
}

export default logger