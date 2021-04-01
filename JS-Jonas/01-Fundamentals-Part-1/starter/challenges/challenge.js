/* const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heigtJhon = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJhon = 85;
// const heigtJhon = 1.76;

const BMI_Mark = massMark / heightMark ** 2;
const BMI_Jhon = massJhon / heigtJhon ** 2;

if (BMI_Mark > BMI_Jhon) {
    console.log(`Mark's BMI (${BMI_Mark}) is higher than John's (${BMI_Jhon})!`);
} else {
    console.log(`John's BMI (${BMI_Jhon}) is higher than Mark's (${BMI_Mark})!`)
} */

// ==========================================
// Coding Challenge #2


// ============================================
// Coding Challenge #3

// const dolphins1 = 96;
// const dolphins2 = 108;
// const dolphins3 = 89;
// const koalas1 = 88;
// const koalas2 = 91;
// const koalas3 = 110;

// Bonus 1
// const dolphins1 = 97;
// const dolphins2 = 112;
// const dolphins3 = 101;
// const koalas1 = 109;
// const koalas2 = 95;
// const koalas3 = 123;

// Bonus 2
// const dolphins1 = 97;
// const dolphins2 = 112;
// const dolphins3 = 101;
// const koalas1 = 109;
// const koalas2 = 95;
// const koalas3 = 106;

// const dolphinsAvg = (dolphins1 + dolphins2 + dolphins3)/3;
// const koalasAvg = (koalas1 + koalas2 + koalas3)/3;
//  console.log(`Dolphins average is ${dolphinsAvg}`);
//  console.log(`Koalas average is ${koalasAvg}`);

// if (dolphinsAvg > koalasAvg) {
//     console.log('Dolphins win!');
// } else if (dolphinsAvg === koalasAvg) {
//     console.log("There's a draw!");
// } else if (dolphinsAvg < koalasAvg) {
//     console.log('Koalas win!!!');
// }

// Bonus 1 =======
// if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//     console.log('Dolphins win!');
// } else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
//     console.log('Koalas win!!!');
// } else {
//     console.log("No one wins :(");
// }

// Bonus 2 =======
// if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//     console.log('Dolphins win!');
// } else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
//     console.log('Koalas win!!!');
// } else if (dolphinsAvg === koalasAvg && koalasAvg >= 100) {
//     console.log("There's a draw! 💘🎾🏁");
// } else {
//     console.log("No one wins :(");
// }


//==================================================================
// Coding Challenge #4

console.log('===========================================================================');
console.log('Coding Challenge #4');

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill*0.15: bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);