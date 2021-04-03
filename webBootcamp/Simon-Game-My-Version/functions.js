'use strict'

const sqrPressed = ivent => {
    const color = btnColor(ivent.target);
    currentIteration++;
    playSound(color);
    animateSquare(color);
    if (level === 0) {
        gameOver();
    } else if (color !== sequence[currentIteration-1]) {
        gameOver()
    } else if (currentIteration === sequence.length) {
        setTimeout(nextLevel, 700);
    }

}


// Find square by color and animate it
const animateSquare = color => {
    const nameOfClass = '.' + color;
    $(nameOfClass).addClass('pressed');
    setTimeout(function () {
        $(nameOfClass).removeClass('pressed');
    }, 100)
}

const animateNextColor = color => {
    const nameOfClass = '.' + color;
    $(nameOfClass).addClass('next-level');
    setTimeout(function () {
        $(nameOfClass).removeClass('next-level');
    }, 300)
}

//Animate Body when game over
const animateBody = () => {
    $('body').addClass('wrong-body');
    setTimeout(function () {
        $('body').removeClass('wrong-body')
    }, 200);
}

//play sound
const playSound = nameOfsound => {
    const audio = new Audio(`sounds/${nameOfsound}.mp3`);
    audio.play();
}

//Find color of pressed Square
const btnColor = object => {
    switch (true) {
        case $(object).hasClass('green'):
            return 'green';
        case $(object).hasClass('red'):
            return 'red';
        case $(object).hasClass('yellow'):
            return 'yellow';
        case $(object).hasClass('blue'):
            return 'blue';
    }
}

//color generator
const generateColor = () => {
    const indexColor = Math.floor(Math.random() * 4);
    const colors = ['green', 'red', 'yellow', 'blue'];
    return colors[indexColor];
}

//action on kyepress on keyboard to start a game
const keyPressOnStart = ivent => {
    if (level === 0) {
        level++;
        writeToHeader('Level ' + level);
        sequence.push(generateColor());
        // set
        playSound(sequence[0]);
        animateNextColor(sequence[0]);
    }
}

const nextLevel = () => {
    level++;
    writeToHeader('Level ' + level);
    sequence.push(generateColor());
    currentIteration = 0;
    playSound(sequence[level - 1]);
    animateNextColor(sequence[level - 1]);
}

//text to header
const writeToHeader = text => $('h1').html(text);

//Game over
const gameOver = () => {
    playSound('wrong');
    animateBody();
    writeToHeader('Game Over, Press Any Key to Restart');
    sequence = [];
    level = 0;
    currentIteration = 0;
}