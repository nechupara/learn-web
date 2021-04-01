"use strict";

function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  let result = [];
  if (n < 3) {
    for (let i = 0; i < n; i++) {
      result.push(i);
    }
  } else {
    result = [0, 1];
    for (let i = 0; i < n - 2; i++) {
      result.push(result[i] + result[i + 1]);
    }
  }

  return result;
  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}
console.log(fibonacciGenerator(80));
