'use strict'
const buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$('.btn').click(function () {
    const userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

$('body').keydown(function () {
    if (!started) {
        $('#level-title').text('Level 0');
        nextSequence();
        started = true;
    }
})


function nextSequence () {
    userClickedPattern = [];
    level++;
    $('#level-title').html(`Level ${level}`);
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

function playSound (name) {
    const audio = new Audio(`sounds/${name}.mp3`)
    audio.play();
}

function animatePress (currentColour) {
    $(`#${currentColour}`).addClass('pressed');
    setTimeout(function() {$(`#${currentColour}`).removeClass('pressed')}, 100);
}


function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log('success');
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        playSound('wrong'); 
        $('body').addClass('game-over');
        setTimeout(function() {$('body').removeClass('game-over');}, 200)

        $('#level-title').text('Game Over, Press Any Key to Restart'); 
        console.log('wrong');
        startOver();
    }
}

function startOver( ) {
    level = 0; 
    gamePattern = []; 
    started = false; 
}