const myFunc = (num:number)=> num*5

import { lgNum, cut3, addArr, concatArr } from './utilities/arrays';
import { sum, multiply } from './utilities/numbers';
import {capitalize} from './utilities/strings';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = addArr(numArr);
const mixArr = concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;
const five = parseInt('5');


console.log(cut3(mixArr));
console.log(sum(arrSum, myNum));
console.log(capitalize('the quick brown fox'));
console.log(multiply(five, 8));
console.log(lgNum(mixArr));

export default myFunc