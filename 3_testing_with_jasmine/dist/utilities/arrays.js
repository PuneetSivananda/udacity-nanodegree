"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cut3 = exports.lgNum = exports.addArr = exports.concatArr = void 0;
// Concatenate two arrays
const concatArr = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
exports.concatArr = concatArr;
// Add numbers in an array
const addArr = (arr) => {
    let total = 0;
    arr.forEach((x) => {
        total += x;
    });
    return total;
};
exports.addArr = addArr;
// Find the largest number in an array
const lgNum = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};
exports.lgNum = lgNum;
// Remove the 3rd item from an array
const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr;
};
exports.cut3 = cut3;
