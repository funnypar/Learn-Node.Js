// First step : Just write a 001.js code in Asynchronous way !!!
// Second step : Write a callback hell :) and try to write file with asynchronous way !!!

const fs = require("fs");

fs.readFile("./readFile.txt", "utf-8", (err, data1) => {
    if (err) console.log(`Error ==> ${err}`);
    fs.readFile(`./${data1}`, "utf-8", (err, data2) => {
        if (err) console.log(`Error ==> ${err}`);
        fs.readFile("./secondfile", "utf-8", (err, data3) => {
            if (err) console.log(`Error ==> ${err}`);
            fs.writeFile(
                `./Final.txt`,
                `${data2}\n${data3}`,
                "utf-8",
                (err) => {
                    if (err) console.log(`Error ==> ${err}`);
                    console.log("New file has written ;) ");
                }
            );
        });
    });
});

console.log(`The file will be executed now !!!\n\n`);
