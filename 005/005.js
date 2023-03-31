// Create simple API and send JSON data to browser !!!
// Doing that in better way !!! (Don't read file each time )

const http = require("http");
const url = require("url");
const fs = require("fs");

const datas = fs.readFileSync(`${__dirname}/datas.json`, "utf-8");

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === "/" || pathName === "/api") {
        // fs.readFile(`${__dirname}/datas.json`, "utf-8", (err, datas) => {
        //     if (err) console.log(`Error !!!  ==>  ${err}`);
        // const bookDatas = JSON.parse(datas);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(datas);
        // });
    } else {
        res.writeHead(404, {
            "content-type": "text/html",
        });
        res.end("<h1>Chera nemiri ba dostat bashiiii </h1>");
    }
});

server.listen("8000", "127.0.0.1", () => {
    console.log("Run");
});
