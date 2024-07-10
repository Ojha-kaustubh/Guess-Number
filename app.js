
document.addEventListener('DOMContentLoaded', function() {
let input = document.getElementById('input');


let button = document.getElementById('btn');

let wrong = document.getElementById('wrong');

let guessNumber = document.getElementById('guessNumber');

let answer = Math.floor(Math.random() * 100) + 1;

console.log(answer);

let num = 0;

button.addEventListener('click', () => {
    wrongGuessNumber();
});

function wrongGuessNumber() {
   

    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {

        wrong.innerHTML = 'Select a number between 1 and 100.';

    } else {
        num++;
        guessNumber.innerHTML = `No. of Guesses: ${num}`;

    if(input.value < answer) {
        wrong.textContent = 'Your Guess Value is too low';
        input.value = " ";
    }
    else if(input.value > answer) {
        wrong.textContent = 'Your Guess Value is too high';
        input.value = ""
    }
    else {
        wrong.textContent =  `Congratulations! You guessed the correct number in ${num} guesses.`;
    }
 }
 input.value =" "
}

});