'use strict'
// alert('hiii')
let gameStatus = 0;
let level = 0;
let sequence = [];
let currentIteration = 0;
let functionInProcess = false;


$('body').on('keydown', keyPressOnStart);
$('.sqr-button').on('click', sqrPressed);
$('button').on('click', startButton);