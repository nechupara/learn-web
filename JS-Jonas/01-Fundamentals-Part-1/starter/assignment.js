// Variables
const country = 'Ukraine';
const continent = 'Eurasia';
let population = 13;

console.log(country);
console.log(continent);
console.log(population);

// Data types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'Ukrainian';

// basic operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1); 

// LECTURE: Strings and Template Literals
const description2 = `${country} is in ${continent} and its ${population} million people speak ${language}`
console.log(description1);

// LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

// =======================================================
// LECTURE: Type Conversion and Coercion
/* console.log('LECTURE: Type Conversion and Coercion');
console.log('9'-'5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9  - 4 - 2); //1143 */

// ===============================================
// LECTURE: Equality Operators: == vs. ===
/* console.log('LECTURE: Equality Operators: == vs. ===');
const numNeighbours = Number(
    prompt('How many neighbour countries does your country have?')
); 
console.log(numNeighbours);
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
} */

// =======================================================
// LECTURE: Logical Operators

if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}

// ============================================================
// LECTURE: The switch Statement
// console.log('=====================================');
// console.log('LECTURE: The switch Statement');
// // language = 'hindi';
// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

//===================================================
// LECTURE: The Conditional (Ternary) Operator
console.log('=====================================');
console.log('LECTURE: The Conditional (Ternary) Operator');

// population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);