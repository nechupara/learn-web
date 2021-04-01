'use strict'

// ==================================================================================
// Coding Challenge #1
console.log('=======================================================================');
console.log('Coding Challenge #1')

// Data 1:
// const dolfinsScore1 = 44;
// const dolfinsScore2 = 23;
// const dolfinsScore3 = 71;
// const koalasScore1 = 65;
// const koalasScore2 = 54;
// const koalasScore3 = 49;

// Data 2:
// const dolfinsScore1 = 85;
// const dolfinsScore2 = 54;
// const dolfinsScore3 = 41;
// const koalasScore1 = 23;
// const koalasScore2 = 34;
// const koalasScore3 = 27;

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolfinsAvg = calcAverage(dolfinsScore1, dolfinsScore2, dolfinsScore3);
// const koalasAvg = calcAverage(koalasScore1, koalasScore2, koalasScore3);

// checkWinner(dolfinsAvg, koalasAvg);

// function checkWinner (avgDolhins, avgKoalas) {
//     if (avgDolhins >= (avgKoalas*2)) {
//         console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`)
//     } else if (avgKoalas > avgDolhins && avgKoalas >= avgDolhins*2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
//     } else {
//         console.log(`No one wins. Dolphins have ${avgDolhins}, Koalas have ${avgKoalas}`);
//     }
// }

// ==================================================================================
// Coding Challenge #2
console.log('=======================================================================');
console.log('Coding Challenge #2')

// function calcTip (bill) {
//         return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
// }

// console.log(calcTip(1000));

// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [
//     calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[2])
// ];
// console.log(tips)

// const total = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]
// ]
// console.log(total);

// ==================================================================================
// Coding Challenge #3
console.log('=======================================================================');
console.log('Coding Challenge #3')
// const BMI_Mark = massMark / heightMark ** 2;
// const BMI_Jhon = massJhon / heigtJhon ** 2;

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
// } else {
//     console.log(`BMIs are equal.`);
// }


// ==================================================================================
// Coding Challenge #4
console.log('=======================================================================');
console.log('Coding Challenge #4')

function calcTip (bill) {
        return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i=0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);
// console.log(bills);
// console.log(tips);
// console.log(totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));