import express from "express"

const cache = {}
const app = express()


app.listen({host:"localhost", port:3000}, () => {
    console.log(`Started on port 3000`);
});