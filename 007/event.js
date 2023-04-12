// In the first step i want to learn and practice with Events !!!

const EventEmitter = require("events");

myEmitter = new EventEmitter();

myEmitter.on("halloMopano", (number) => {
    console.log(`Hallo Mopanoooooo . I am ${number}`);
});

myEmitter.on("halloMopano", () => {
    console.log("Fesgheliiiii");
});

myEmitter.emit("halloMopano", 12);
