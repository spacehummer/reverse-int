module.exports = function reverse (n) {
  const digitsArr = n.toString(10).split('').reverse();
  return digitsArr[digitsArr.length - 1] === '-' ?Number(digitsArr.join('').slice(0, -1)) : Number(digitsArr.join(''));
}
