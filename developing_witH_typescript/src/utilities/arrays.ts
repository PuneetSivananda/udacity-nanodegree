type StringArrOrNumberArr = (string | number)[];

// Concatenate two arrays

const concatArr = (
  arr1: StringArrOrNumberArr,
  arr2: StringArrOrNumberArr
): StringArrOrNumberArr => {
  return [...arr1, ...arr2];
};

// Add numbers in an array

const addArr = (arr: number[]): number => {
  let total: number = 0;
  arr.forEach((x) => {
    total += x;
  });
  return total;
};

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

// Remove the 3rd item from an array
const cut3 = (arr) => {
  arr.splice(2, 1);
  return arr;
};

export { concatArr, addArr, lgNum, cut3 };
