var startButton = document.querySelector('#start');
var timeDisplay = document.querySelector('#timeDisplay');
var tenths = 0;
var seconds = 0;
var minutes = 0;

makeStartButtonClickable();

function makeStartButtonClickable() {
    startButton.addEventListener('click', startWatch);
}

function startWatch() {
    if (startButton.innerHTML.trim() === 'Start') {
        // startCountingUpEveryTenth();
        setInterval(updateTimer, 1000);

        updateTimerDisplay();

        changeColorOfTimerEachSecond();
    
    }
}

function startCountingUpEveryTenth() {
    tenths++;

    if (tenths === 9) {
        seconds ++;
        tenths = 0;
    }

    if (seconds === 59) {
        minutes++;
        seconds = 0;
    }
}

function updateTimerDisplay() {
    var timeDisplay = document.querySelector('#timeDisplay');
    timeDisplay.innerHTML = '${minutes}:${seconds}:${tenths}';
}

function changeColorOfTimerEachSecond () {
    var red = _randomNumber(255);
    var green = _randomNumber(255);
    var blue = _randomNumber(255);


    timeDisplay.style.color = `rgb(${red}, ${green}, ${blue})`;
}


function changeButtonToSayPause() {
    startButton.innerHTML = 'Pause';
}

// Helpers???
function _randomNumber(max) {
    return Math.round(Math.random() * max);
}