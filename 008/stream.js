// Mopano want to learn Streams ;)

const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
    // solution 1                             Simple without any stream

    // fs.readFile(`${__dirname}/text.txt`, (err, data) => {
    //     if (err) console.log(`Error!!! ==> ${err}`);
    //     res.end(data);
    // });

    // solution 2                            With stream but that has some problems yet :
    // Our readble stream that we used for read the files is very faster than actually sending the results that we resonsed to writeble streams over thatn network and response stream can not handle all data (Back presure)

    // const readble = fs.createReadStream(`${__dirname}/text.txt`);
    // readble.on("data", (part) => {
    //     res.write(part);
    // });
    // readble.on("end", () => {
    //     res.end();
    // });
    // readble.on("error", (err) => {
    //     console.log(`Error!!! ==> ${err}`);
    //     res.statusCode = 500;
    //     res.end("Not Found !!!");
    // });

    // solution 3

    const readble = fs.createReadStream(`${__dirname}/text.txt`);
    readble.pipe(res);
});

server.listen(8080, "127.0.0.1", () => {
    console.log("Wating for listen ...");
});
