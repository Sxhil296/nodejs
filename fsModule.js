const fs = require("node:fs")

const fileContent = fs.readFileSync("./file.txt", "utf-8")

console.log(fileContent)

fs.readFile("./file.txt", "utf-8", (error, data) => {
    if(error) {
        console.log(error)
    } else {
        console.log(data)
    }
})