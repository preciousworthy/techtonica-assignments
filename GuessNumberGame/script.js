//Make a web page that generates a secret random number and the user can guess the number until they get it right. For each guess, the game should display whether the answer is higher, lower, or correct.

// Extensions:

// Track how many wrong guesses the user has made so far and display that count
// Track what numbers the user has already guessed and display those
// Let the user choose the range of the secret number

// i want to make a game called guess the secret number
// 1. we have to choose a random number let's say from 1 - 100
// 2. we let the player input their number and if the number is the secret number the page says "Congratulations, you've guessed the secret number"
// if the player's input is lower we say "The secret number is higher than this number"
// if the player's input is higher we say "The secret number is lower than this number"
// For fun we can 1. Keep track of how many wrong guesses the user has 2. Keep track of the numbers guessed and display them 3. Let the user choose the range of the secret number

//variable for the wrong guesses
const guesses = document.getElementById('guesses');

//variable of how we'll tell user if guess is too low or too high
const tooLowTooHigh = document.getElementById('lowOrHigh');

//variable for user's guess
const userGuess = document.getElementById('userGuess');
//console.log(Number(userGuess.value));

//variable for submit button (track how many times it was clicked)
const userSubmit = document.getElementById('userSubmit');

//last result variable
const lastResult = document.getElementById('lastResult')

//counter and reset button
let guessCount = 1;
let resetButton;

//variable for my Secret Number (picks a number at random ranging from 1 to 100)
let randomNumber = Math.floor(Math.random() * 100) + 1;

let lowOrHi = document.getElementById('lowOrHi')

// main function of the game to check whether the user input matches to the random number
function checkGuess() {
  let userNumber = Number(userGuess.value);

  //checks if there was a previous guess and adds the input into that <p></p>
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses:  ';
  }
  guesses.textContent += userNumber + ' ';

  // checks if user's input is higher or lower than random number adds message to 
  if (userNumber < randomNumber) {
    lowOrHi.textContet = 'Last guess was too low!';
    } else if (userNumber > randomNumber) {
    lowOrHi.textContent = 'Last guess was too high!';
    }

  if (userNumber === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.color = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.color = 'red';
  }

  guessCount++;
  userGuess.value = '';
  userGuess.focus();
}


userSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  userGuess.disabled = true;
  userSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.setAttribute("class", "button")
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = ' ';
  }

  resetButton.parentNode.removeChild(resetButton);

  userGuess.disabled = false;
  userSubmit.disabled = false;
  userGuess.value = '';
  userGuess.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

console.log(randomNumber);


