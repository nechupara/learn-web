'use strict'
// LECTURE: Functions

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const descr1 = describeCountry('Ukraine', 38, 'Kyiv');
// const descr2 = describeCountry('USA', 200, 'Washington');
// const descr3 = describeCountry('Germany', 40, 'Berlin');

// console.log(descr1);
// console.log(descr2);
// console.log(descr3);

//=================================================
// LECTURE: Function Declarations vs. Expressions
// console.log('=============================================');
// console.log('LECTURE: Function Declarations vs. Expressions');

// function percentageOfWorld1(population) {
//     return population/7900*100;
// }

// const percentage1 = percentageOfWorld1(38);
// const percentage2 = percentageOfWorld1(200);
// const percentage3 = percentageOfWorld1(5);

// console.log(percentage1, percentage2, percentage3);

// const percentageOfWorld2 = function(population) {
//     return population/7900*100;
// }

// const percentage4 = percentageOfWorld2(38);
// const percentage5 = percentageOfWorld2(200);
// const percentage6 = percentageOfWorld2(5);

// console.log(percentage4, percentage5, percentage6);

//=================================================
// LECTURE: Arrow Functions
// console.log('=============================================');
// console.log('LECTURE: Arrow Functions');

// const percentageOfWorld3 = population => population/7900*100;

// const percentage7 = percentageOfWorld2(38);
// const percentage8 = percentageOfWorld2(200);
// const percentage9 = percentageOfWorld2(5);

// console.log(percentage7, percentage8, percentage9);

//=================================================
// LECTURE: Functions Calling Other Functions
// console.log('=============================================');
// console.log('LECTURE: Functions Calling Other Functions');

// const describePopulation = (country, population) => {
//     return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`
// }

// const descrPopul1 = describePopulation('Ukraine', 38);
// const descrPopul2 = describePopulation('USA', 200);
// const descrPopul3 = describePopulation('Germany', 5);

// console.log(descrPopul1, descrPopul2, descrPopul3);

//=================================================
// LECTURE: Introduction to Arrays
console.log('=============================================');
console.log('LECTURE: Introduction to Arrays');
// function percentageOfWorld1(population) {
//     return population/7900*100;
// }
// const population = [38, 30, 200, 1500];
// if (population.length === 4) {
//     console.log('population has 4 elements');
// } else {
//     console.log('population has different amounts of values than 4');
// }

// const percentages = [
//     percentageOfWorld1(population[0]),
//     percentageOfWorld1(population[1]),
//     percentageOfWorld1(population[2]),
//     percentageOfWorld1(population[3])
// ];

// console.log(percentages);

//=================================================
// LECTURE: Basic Array Operations (Methods)
console.log('=============================================');
console.log('LECTURE: Basic Array Operations (Methods)');

// const neighbours = ['Moldova', 'Romania', 'Hungary', 'Slovakia', 'Poland', 'Belarus', 'Russia'];

// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) console.log('Probably not a central European country :D');

// neighbours[neighbours.indexOf('Poland')] = 'Rzecz Pospolita';
// console.log(neighbours);

//=================================================
// LECTURE: Introduction to Objects
console.log('=============================================');
console.log('LECTURE: Introduction to Objects');

// const myCountry = {
//     country: 'Ukraine',
//     capital: 'Kyiv',
//     language: 'Ukrainian',
//     population: 38,
//     neighbours: ['Moldova', 'Romania', 'Hungary', 'Slovakia', 'Poland', 'Belarus', 'pidorussia'], //['Moldova', 'Romania', 'Hungary', 'Slovakia', 'Poland', 'Belarus', 'pidorussia']
//     describe: function() {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neghbouring countries and a capital called ${this.capital}`);
//     },
//     checkIsland: function() {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//         return this.isIsland;
//     }
// };

//=================================================
// LECTURE: Dot vs. Bracket Notation
console.log('=============================================');
console.log('LECTURE: Dot vs. Bracket Notation');

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neghbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);

//=================================================
// LECTURE: Object Methods
console.log('=============================================');
console.log('LECTURE: Object Methods');

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());
// console.log(myCountry.isIsland);

//=================================================
// LECTURE: Iteration: The for Loop
console.log('=============================================');
console.log('LECTURE: Iteration: The for Loop');

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

//=================================================
// LECTURE: Looping Arrays, Breaking and Continuing
console.log('=============================================');
console.log('LECTURE: Looping Arrays, Breaking and Continuing');

// function percentageOfWorld1(population) {
//     return population/7900*100;
// }

// const population = [38, 30, 200, 1500];
// const percentages2 =[];

// for (let i=0; i < population.length; i++) {
//     percentages2[i] = percentageOfWorld1(population[i]);
// }
// console.log(percentages2);

//=================================================
// LECTURE: Looping Backwards and Loops in Loops
console.log('=============================================');
console.log('LECTURE: Looping Backwards and Loops in Loops');

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }

// }


// LECTURE: The while Loop
console.log('=============================================');
console.log('LECTURE: The while Loop');

function percentageOfWorld1(population) {
    return population/7900*100;
}

const population = [38, 30, 200, 1500];
const percentages3 = [];
let i = 0;
while (i < population.length) {
    percentages3[i] = percentageOfWorld1(population[i]);
    i++;
}
console.log(percentages3);