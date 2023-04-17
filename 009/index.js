// In this part i want to learn import an export from modules in 3 ways ;)
// const calculator = require("./module-1");
// const calculator = require("./module-2");

// module.exports                                        Just get one value !!!

// const calc1 = new calculator();
// console.log(calc1.plus(10, 20));

// exports

// const plus = calculator.plus(1, 2);
// const minus = calculator.minus(1, 2);
// const multiply = calculator.multiply(1, 2);
// const devide = calculator.devide(1, 2);

// console.log(
//     `The plus is : ${plus}\nThe minus is : ${minus}\nThe multiply is : ${multiply}\nThe devide is : ${devide}\n`
// );

// caching                  That will be run code one time and then just import that has exported enytime

require("./module-3")();
require("./module-3")();
require("./module-3")();
require("./module-3")();
