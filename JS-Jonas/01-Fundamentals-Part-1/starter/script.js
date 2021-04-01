/* let javascriptIsFun = true;


console.log(typeof(true));
console.log(typeof(javascriptIsFun));
console.log(typeof(undefined)); */

// const now = 2037;
// const ageSerge = now - 1980;
// const ageFather = now - 1947;
// console.log(ageSerge, ageFather);

// console.log(ageSerge * 2, ageSerge / 10, 2**3);

// const firstName = 'Serge';
// const lastName = 'Dudko';
// console.log(firstName + ' ' + lastName);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

const age = 14;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}



const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const favorite = prompt('asdfasd');