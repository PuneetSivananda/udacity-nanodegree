const path = require("path")

console.log("Hello World")
console.log(__filename.split("\\").splice(3).join("/"))
console.log(process.argv)

console.log(path.resolve("index.js"))