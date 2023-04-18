// In this part i want to learn promises !!! but first i must know what the callback hell is.
// In first step i have to handel callbak hell with then and catch methods

const fs = require("fs");
const superagent = require("superagent");

superagent
    .get("https://api.chucknorris.io/jokes/random")
    .then((result) => {
        fs.writeFile("./jokeCategories.txt", result.body.value, (err) => {
            if (err) console.log(`Error  -->  ${err}`);
        });
    })
    .catch((err) => {
        console.log(`Error -- > ${err.massage}`);
    });
