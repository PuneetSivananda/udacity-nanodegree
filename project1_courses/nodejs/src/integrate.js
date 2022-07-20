const largest = require('./utilities/largest.js');
const { cut3 } = require('./utilities/cut');
const { concat } = require('./utilities/concatenate');
const { sum } = require('./utilities/sum');
const listArray = [2, 3, 5, 6, 11];

console.log(largest.lgNum(listArray));
console.log(cut3(listArray));
console.log(concat(listArray, [13, 15]));
console.log(sum(listArray));
