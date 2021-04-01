'use strict'
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
document.querySelector(".img1").setAttribute('src', `images/dice${randomNumber1}.png`);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
document.querySelector(".img2").setAttribute('src', `images/dice${randomNumber2}.png`);

const checkWinner = function (num1, num2) {
   if (num1 === num2) {
      document.querySelector('h1').innerText = 'Draw!';
   } else if (num1 > num2) {
      document.querySelector('h1').innerText = '🚩 Player1 wins!';
   } else {
      document.querySelector('h1').innerText = 'Player2 wins! 🚩';
   }
}
checkWinner(randomNumber1, randomNumber2);
