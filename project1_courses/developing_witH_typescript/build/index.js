"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = require("./utilities/arrays");
const numbers_1 = require("./utilities/numbers");
const string_1 = require("./utilities/string");
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = (0, arrays_1.addArr)(numArr);
const mixArr = (0, arrays_1.concatArr)(numArr, wordArr);
const myNum = parseInt('15') % 2;
// results of function calls
console.log((0, arrays_1.cut3)(mixArr));
console.log((0, numbers_1.sum)(arrSum, myNum));
console.log((0, string_1.capitalize)('the quick brown fox'));
console.log((0, numbers_1.multiply)(parseInt('5'), 8));
console.log((0, arrays_1.lgNum)(mixArr));
