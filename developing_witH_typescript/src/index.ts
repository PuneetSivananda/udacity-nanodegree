import {
  addArr,
  concatArr,
  cut3,
  lgNum,
  StringArrOrNumberArr
} from './utilities/arrays';
import { sum, multiply } from './utilities/numbers';
import { capitalize } from './utilities/string';

const numArr: number[] = [3, 4, 5, 6];
const wordArr: string[] = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum: number = addArr(numArr);
const mixArr: StringArrOrNumberArr = concatArr(numArr, wordArr);
const myNum: number = parseInt('15') % 2;

// results of function calls
console.log(cut3(mixArr));
console.log(sum(arrSum, myNum));
console.log(capitalize('the quick brown fox'));
console.log(multiply(parseInt('5') as number, 8));
console.log(lgNum(mixArr));
