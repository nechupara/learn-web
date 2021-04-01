"use strict";

// {
//     const name1 = prompt('Enter first name:');
//     const name2 = prompt('Enter second name:');

//     const chance = Math.floor(Math.random()*100) +1;
//     alert(`Your chance is ${chance}%`);
//   }

// BMI Calculator ===================================================================
// function bmiCalculator(weight, height) {
//   const bmi = Math.round(weight / Math.pow(height, 2));
//   if (bmi < 18.5) {
//     return `Your BMI is ${bmi}, so you are underweight.`;
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     return `Your BMI is ${bmi}, so you have a normal weight.`;
//   } else if (bmi > 24.9) {
//     return `Your BMI is ${bmi}, so you are overweight.`;
//   }
// }
// console.log(bmiCalculator(83, 1.83));

// // Leap Year===========================================================
// function isLeap(year) {
//   // Leap year.
//   // Not leap year.
//   if (year % 4 === 0 && year % 400 === 0) {
//     return "Leap year.";
//   } else if (year % 4 === 0 && year % 100 === 0) {
//     return "Not leap year.";
//   } else if (year % 4 === 0) {
//     return "Leap year.";
//   } else {
//     return "Not leap year.";
//   }
// }

// console.log(isLeap(1989));

// Who is bying a lunch? ============================================
const arrFriends = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
  const index = Math.floor(Math.random() * names.length);
  return `${names[index]} is going to buy lunch today!`;
}

console.log(whosPaying(arrFriends));
