import { addArr, concatArr, cut3, lgNum } from './utilities/arrays';
import { sum, multiply } from './utilities/numbers';
import { capitalize } from './utilities/strings';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = addArr(numArr);
const mixArr = concatArr(numArr, wordArr);
const myNum: number = parseInt('15') % 2;

// results of function calls
console.log(cut3(mixArr));
console.log(sum(arrSum, myNum));
console.log(capitalize('the quick brown fox'));
console.log(multiply('5', 8));
console.log(lgNum(mixArr));
