//                                                           First way

// class Calculator {
//     plus(number1, number2) {
//         return number1 + number2;
//     }
//     minus(number1, number2) {
//         return number1 - number2;
//     }
//     multiply(number1, number2) {
//         return number1 * number2;
//     }
//     devide(number1, number2) {
//         return number1 / number2;
//     }
// }

// module.exports = Calculator;

//                                                              second way   better way

module.exports = class {
    plus(number1, number2) {
        return number1 + number2;
    }
    minus(number1, number2) {
        return number1 - number2;
    }
    multiply(number1, number2) {
        return number1 * number2;
    }
    devide(number1, number2) {
        return number1 / number2;
    }
};
