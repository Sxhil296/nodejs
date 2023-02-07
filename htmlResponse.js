const http = require("node:http")
const fs = require("node:fs")


const server = http.createServer((req, res) => {

    const superHero = {
        firstName: "Bruce",
        lastName: "Wayne"
    }

    res.writeHead(200, {"Content-Type": "text/html"})
    fs.createReadStream(__dirname + "/index.html").pipe(res)
    // const html = fs.readFileSync("./index.html", "utf-8")
    // res.end(html)
})

server.listen(3000, () =>{
    console.log("Server running on port 3000")
})