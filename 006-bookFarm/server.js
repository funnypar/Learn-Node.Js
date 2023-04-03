// Requires
const http = require("http");
const url = require("url");
const fs = require("fs");
// HTML pages
const tempOverview = fs.readFileSync(
    `${__dirname}/html/overview.html`,
    "utf-8"
);
const tempProduct = fs.readFileSync(`${__dirname}/html/product.html`, "utf-8");
const tempCard = fs.readFileSync(
    `${__dirname}/html/template-card.html`,
    "utf-8"
);
// Datas
const datas = fs.readFileSync(`${__dirname}/datas/datas.json`, "utf-8");
const data = JSON.parse(datas);

// Server
const server = http.createServer((req, res) => {
    const pathName = req.url;

    //Overview page
    if (pathName === "/" || pathName === "/overview") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(tempOverview);
    }
    // Product page
    else if (pathName === "/product") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(tempProduct);
    }
    //Not Found page
    else {
        res.writeHead(404, {
            "content-type": "text/html",
        });
        res.end("<h1>Not Found !!!</h1>");
    }
});

server.listen("8080", "127.0.0.1", () => {
    console.log("Run");
});
