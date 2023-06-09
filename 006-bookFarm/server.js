// core Requires
const http = require("http");
const url = require("url");
const fs = require("fs");
// modules Requires
const templateReplace = require("./modules/templateReplace");

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
const dataObj = JSON.parse(datas);

// Server
const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    //Overview page
    if (pathname === "/" || pathname === "/overview") {
        res.writeHead(200, { "content-type": "text/html" });

        const cardHtml = dataObj
            .map((el) => templateReplace(tempCard, el))
            .join("");
        const output = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardHtml);

        res.end(output);
    }
    // Product page
    else if (pathname === "/product") {
        res.writeHead(200, { "content-type": "text/html" });

        const product = dataObj[query.id];
        const productPage = templateReplace(tempProduct, product);
        res.end(productPage);
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
