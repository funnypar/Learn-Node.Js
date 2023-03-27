const fs = require("fs");

const outText = `Hi there !\nYou hear me from the Js and i try to create a file in my system ${Date.now()}`;
const file = fs.readFileSync("./myfile", "utf-8");
const outFile = fs.writeFileSync(
    "/tmp/newJs.txt",
    outText
);

console.log("Done !!!");
