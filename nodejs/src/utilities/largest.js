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

module.exports = {
    lgNum
}