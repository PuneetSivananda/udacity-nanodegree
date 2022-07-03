import { addArr, concatArr, cut3 } from  "./utilities"
const numbers = require('./utilities/numbers.js');
const strings = require('./utilities/strings.js');

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = addArr(numArr);
const mixArr = concatArr(numArr, wordArr);
const myNum = '15' % 2;

// results of function calls
console.log(cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply('5', 8));
console.log(arrays.lgNum(mixArr));
