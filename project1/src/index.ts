import express from "express"

const cache = {}

const app = express()

app.listen(process.env.PORT || 3000, () => {
    console.log(`Started on port 3000`);
});