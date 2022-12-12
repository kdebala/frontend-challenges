const submit = document.querySelector(".submit");
const guess = document.querySelector(".guessNumber");
const displayMessage1 = document.querySelector(".message1");
const displayMessage2 = document.querySelector(".message2");
const newGame = document.querySelector(".newGame");
let correctNumber;
const start = function () {
  correctNumber = Math.trunc(Math.random() * 100 + 1);
};
start();

let guessArray = [];

submit.addEventListener("click", function () {
  guessArray.push(guess.value);
  displayMessage2.textContent = `Your guesses:${guessArray}`;

  if (correctNumber == guess.value) {
    displayMessage1.textContent = "Correct number!";
  } else if (guess.value > correctNumber) {
    displayMessage1.textContent = "Too high!";
  } else if (guess.value < correctNumber) {
    displayMessage1.textContent = "Too low!";
  }
});

newGame.addEventListener("click", function () {
  guessArray = [];

  displayMessage1.textContent = "";
  displayMessage2.textContent = "";
  guess.value = "";
  start();
});
