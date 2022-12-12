const container = document.querySelector(".container");

let guess1 = randomColor();
let guess2 = randomColor();
let guess3 = randomColor();

let array = [guess1, guess2, guess3];

let score = 0;
let highscore = 0;

/////creating new elements
container.appendChild(createDiv("scores"));
const scores = document.querySelector(".scores");

scores.appendChild(createDiv("score"));
const scoreDiv = document.querySelector(".score");
scoreDiv.textContent = `SCORE: ${score}`;

scores.appendChild(createDiv("highscore"));
const highscoreDiv = document.querySelector(".highscore");
highscoreDiv.textContent = `HIGHSCORE: ${highscore}`;

scores.appendChild(createButton("Start again", "newGame"));
const newGameBtn = document.querySelector(".newGame");
newGameBtn.style.visibility = "hidden";

container.appendChild(createDiv("color"));
container.appendChild(createDiv("buttons"));
container.appendChild(createDiv("info"));

const buttons = document.querySelector(".buttons");
buttons.appendChild(createButton(guess1, "guess1"));
buttons.appendChild(createButton(guess2, "guess2"));
buttons.appendChild(createButton(guess3, "guess3"));

///

const color = document.querySelector(".color");
let bg = backgroundColor();
color.style.backgroundColor = bg;

// functions:

function backgroundColor() {
  const backgroundColor = array[Math.trunc(Math.random() * array.length)];
  return backgroundColor;
}

function randomColor() {
  //prettier-ignore
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}

function createDiv(classN) {
  const divElement = document.createElement("div");
  divElement.className = classN;
  return divElement;
}
function createButton(item, classN) {
  const butElement = document.createElement("button");
  butElement.textContent = item;
  butElement.className = classN;
  return butElement;
}


function checkGuesses(pressedButton) {
  if (bg === pressedButton.textContent) {
    init();
    document.querySelector(".info").textContent =
      "That's right! Let's play again!";
    score += 1;
    scoreDiv.textContent = `SCORE: ${score}`;
  } else {
    document.querySelector(".info").textContent =
      "No, it's not that color. Game over!";
    newGameBtn.style.visibility = "visible";
    rmListeners();
    if (score > highscore) {
      highscore = score;
      highscoreDiv.textContent = `HIGHSCORE: ${highscore}`;
    }
  }
}
function checkYourGuess1() {
  checkGuesses(button1);
}
function checkYourGuess2() {
  checkGuesses(button2);
}
function checkYourGuess3() {
  checkGuesses(button3);
}

newGameBtn.addEventListener("click", function () {
  init();
  addListeners();
  score = 0;
  scoreDiv.textContent = `SCORE: ${score}`;
});

function init() {
  guess1 = randomColor();
  guess2 = randomColor();
  guess3 = randomColor();
  array = [guess1, guess2, guess3];
  bg = backgroundColor();
  button1.textContent = guess1;
  button2.textContent = guess2;
  button3.textContent = guess3;
  color.style.backgroundColor = bg;
  newGameBtn.style.visibility = "hidden";
  document.querySelector(".info").textContent = "";
}


function addListeners() {
  button1.addEventListener("click", checkYourGuess1);
  button2.addEventListener("click", checkYourGuess2);
  button3.addEventListener("click", checkYourGuess3);
}
function rmListeners() {
  button1.removeEventListener("click", checkYourGuess1);
  button2.removeEventListener("click", checkYourGuess2);
  button3.removeEventListener("click", checkYourGuess3);
}

///////////////////////////////////////

const button1 = document.querySelector(".guess1");
const button2 = document.querySelector(".guess2");
const button3 = document.querySelector(".guess3");
addListeners();