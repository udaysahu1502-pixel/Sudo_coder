const arr = [76, 50, 63, 80, 94, 72, 68, 74];

let largestNo = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(largestNo);
