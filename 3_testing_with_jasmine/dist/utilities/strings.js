"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowerCase = exports.upperCase = exports.capitalize = exports.concat = void 0;
const concat = (str1, str2) => {
    return str1 + str2;
};
exports.concat = concat;
const capitalize = (str) => {
    const newStr = str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
    return newStr;
};
exports.capitalize = capitalize;
const upperCase = (str) => {
    return str.toUpperCase();
};
exports.upperCase = upperCase;
const lowerCase = (str) => {
    return str.toLowerCase();
};
exports.lowerCase = lowerCase;
