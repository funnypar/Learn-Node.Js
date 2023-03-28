// First step : Just write a 001.js code in Asynchronous way !!!

const fs = require("fs");

fs.readFile("./myfile", "utf-8" , (err, data) => {
    console.log(data);
});

console.log(`The file will be executed now !!!\n\n`);
