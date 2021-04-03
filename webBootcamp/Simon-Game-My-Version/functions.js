const sqrPressed = ivent => {
    $(ivent.target).addClass('pressed');
    const color = btnColor(ivent.target);
    playSound(color);
    setTimeout(function () {$(ivent.target).removeClass('pressed');}, 100)

}

const playSound = nameOfsound => {
    const audio = new Audio(`sounds/${nameOfsound}.mp3`);
    audio.play();
}

const btnColor = object => {
    switch (true) {
        case $(object).hasClass('green'):
            return 'green';
            break;
        case $(object).hasClass('red'):
            return 'red';
            break;
        case $(object).hasClass('yellow'):
            return 'yellow';
            break;
        case $(object).hasClass('blue'):
            return 'blue';
            break;
    }
}