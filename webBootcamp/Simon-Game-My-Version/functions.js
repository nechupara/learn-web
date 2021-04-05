'use strict'

// const sqrPressed = ivent => {
//     if (functionInProcess) {
//         console.log('ouch!!');
//     } else {
//         console.log(functionInProcess);
//         functionInProcess = true;
//         console.log(functionInProcess);
//         currentIteration++;
//         const color = btnColor(ivent.target);
//         playSound(color);
//         animateSquare(color);
//         if (currentIteration > sequence.length) {
//             gameOver();
//             functionInProcess = false;
//             console.log('currentIteration > sequence.length')
//         } else if (level === 0) {
//             gameOver();
//             functionInProcess = false;
//             console.log('level === 0');
//         } else if (color !== sequence[currentIteration - 1]) {
//             gameOver();
//             functionInProcess = false;
//             console.log('color !== sequence[currentIteration - 1]');
//         } else if (currentIteration === sequence.length && color === sequence[currentIteration - 1]) {
//             nextLevel();
//             functionInProcess = false;
//             console.log('currentIteration === sequence.length && color === sequence[currentIteration - 1]');
//         } else if (color === sequence[currentIteration - 1]) {
//             playSound(color);
//             animateSquare(color);
//             functionInProcess = false;
//             console.log('color === sequence[currentIteration - 1]');
//         }
//     }
// }


const sqrPressed = ivent => {
    $('.sqr-button').off('click');
    currentIteration++;
    const color = btnColor(ivent.target);
    playSound(color);
    animateSquare(color);
    if (currentIteration > sequence.length) {
        gameOver();
        console.log('currentIteration > sequence.length');
    } else if (level === 0) {
        gameOver();
        console.log('level === 0');

    } else if (color !== sequence[currentIteration - 1]) {
        gameOver();
        console.log('color !== sequence[currentIteration - 1]');
    } else if (currentIteration === sequence.length && color === sequence[currentIteration - 1]) {
        nextLevel();
        console.log('currentIteration === sequence.length && color === sequence[currentIteration - 1]');
    } else if (color === sequence[currentIteration - 1]) {
        playSound(color);
        animateSquare(color);

        setTimeout(function () {$('.sqr-button').on('click', sqrPressed);}, 200); //////
        console.log('color === sequence[currentIteration - 1]');
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

// Next level
const nextLevel = () => {
    setTimeout(function () {
        level++;
        writeToHeader('Level ' + level);
        sequence.push(generateColor());
        currentIteration = 0;
        playSound(sequence[level - 1]);
        animateNextColor(sequence[level - 1]);
        $('.sqr-button').on('click', sqrPressed); //////////////
    }, 700); // was 700
    //functionInProcess = false;


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
    //functionInProcess = false;
    $('.sqr-button').on('click', sqrPressed); //////////////////////
}

const startButton = () => keyPressOnStart();