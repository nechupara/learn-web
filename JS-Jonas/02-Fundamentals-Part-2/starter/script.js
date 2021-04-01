'use strict';
// let friends = [0, 1, 2,3];
// friends[5] = 234
// console.log(friends[4]);

// const sergeObject = {
//     firstName: 'Serge',
//     lastName: 'Dudko',
//     45: '88',
// }

// // console.log(sergeObject['45']);
// const birthYear = 1992;
// const friends = ['Michael', 'Peter', 'Steven'];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear:1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;

//     },
    
//     getSummary: function(){
//         return `${this.firstName} is ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     },

//     calcTest: function() {
//         return 666;
//     },

//     test: function() {
//         return `${this.calcTest()}`;
//     },

//     // test1: this.calcTest()

// }

// // console.log(jonas.calcAge());
// // console.log(jonas.getSummary());
// console.log(jonas.calcTest());
// console.log(jonas.test());

console.log('======================================================================================')

const jonas = [
    'Johnas',
    'Schmedtman',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages =[];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);