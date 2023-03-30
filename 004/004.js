// In this code i want to learn routing and play with that :)

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === "/" || pathName === "/mopano") {
        res.end("Welcome Mopano ;) ");
    } else if (pathName === "/parsam") {
        res.end("Hi Parsam :)");
    } else {
        res.writeHead(404, {
            content_type: "text/html",
        });
        res.end("<h1> Page Not Found !!! </h1>");
    }
});

server.listen("8000", "127.0.0.1", () => {
    console.log("Run");
});
