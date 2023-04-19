// In this part i want to learn promises !!! but first i must know what the callback hell is.
// In first step i have to handel callbak hell with then and catch methods
// Now i want to solve this problem(callback hell) with promises

const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
const superagent = require("superagent");

// Without create a seprate promise

// superagent
//     .get("https://api.chucknorris.io/jokes/random")
//     .then((result) => {
//         fs.writeFile("./jokeCategories.txt", result.body.value, (err) => {
//             if (err) console.log(`Error  -->  ${err}`);
//         });
//     })
//     .catch((err) => {
//         console.log(`Error -- > ${err.massage}`);
//     });

writeFilePromise = (file, data) => {
    return new Promise((resolve, rejects) => {
        fs.writeFile(file, data, (err) => {
            if (err) rejects(`Error --> ${err.massage}`);
            resolve("Ok");
        });
    });
};

// With promise and then method

// superagent
//     .get("https://api.chucknorris.io/jokes/random")
//     .then((result) => {
//         writeFilePromise("./jokeCategories.txt", result.body.value);
//     })
//     .then(() => {
//         console.log("alles ist ordnung ;) ");
//     })
//     .catch((err) => {
//         console.log(`Error -- > ${err.massage}`);
//     });

// With async and await

const getJoke = async () => {
    try {
        const data = await superagent.get(
            "https://api.chucknorris.io/jokes/random"
        );

        await writeFilePromise("./jokeCategories.txt", data.body.value);
    } catch (err) {
        console.log(`Error -- > ${err.massage}`);
    }
};
getJoke();
