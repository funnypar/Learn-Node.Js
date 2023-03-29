// In this code i want to create a simple server on my computer

const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hi tehre ! You are hearing me from the serve :)");
});

server.listen("8000", "127.0.0.1", () => {
    console.log("The server is up !!!");
});
