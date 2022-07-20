// Add numbers in an array

const sum = (arr) => {
  let total = 0;
  arr.forEach((x) => {
    total += x;
  });
  return total;
};

module.exports = {
  sum
};
