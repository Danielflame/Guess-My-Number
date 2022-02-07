'use strict';

alert("View in Desktop Mode");

//Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

//Functions
//Display Message
const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

// Check Inputed Number
const checkNumber = function () {
    //console.log(document.querySelector('.guess').value);
    const guess = Number (document.querySelector('.guess').value);
    // console.log(guess);
    
    if (!guess){
        document.querySelector('.message').textContent = 'Input a Number ❌';
    }else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number';
        displayMessage('Correct Number');
        document.querySelector('body').style.backgroundColor = 'blue';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too Low';
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.message').textContent = 'You Lose';
            displayMessage('You Lose');
            document.querySelector('.score').textContent = 0;
        }
    }
}

//Start Afresh
const playAgain = function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    score = 20;
    document.querySelector('.guess').value = '';
    // document.querySelector('.message').textContent = 'Start Guessing...';
    displayMessage('Start Guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
}

//Event Listners
document.querySelector('.again').addEventListener('click', playAgain);
document.querySelector('.check').addEventListener('click', checkNumber);
document.addEventListener('keydown' , function (e) {
    if (e.key === 'Enter') {
        checkNumber();
    }
});
