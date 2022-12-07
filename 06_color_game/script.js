///starting conditions

const container = document.querySelector(".container");
const game = document.querySelector(".game");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");

const startGridSize = 3;
let gridSize = startGridSize;
let rdbox;
let score = 0;
let highscore = 0;
makeGrid(gridSize);

////////// FUNCTIONS //////////
function createEl(className) {
  const divEl = document.createElement("div");
  divEl.className = className;
  return divEl;
}

function randomBox() {
  return Math.floor(Math.random() * (gridSize * gridSize)) + 1;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  const randomCol = `rgb(${r}, ${g}, ${b})`;
  r += 10;
  g += 10;
  b += 10;
  r > 255 ? (r = 255) : r;
  g > 255 ? (g = 255) : r;
  b > 255 ? (b = 255) : r;

  const randomColLighter = `rgb(${r}, ${g}, ${b})`;
  return { randomCol, randomColLighter };
}

function makeGrid(gridSize) {
  for (i = 0; i < gridSize * gridSize; i++) {
    game.appendChild(createEl(`box box-${i}`));
  }
  game.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
  game.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
  newColors();
}

function newColors() {
  const color = randomColor();
  rdbox = randomBox();
  for (i = 0; i < gridSize * gridSize; i++) {
    let element = document.querySelector(`.box-${i}`);
    if (element.className === `box box-${rdbox}`) {
      element.style.backgroundColor = color.randomColLighter;
    } else {
      element.style.backgroundColor = color.randomCol;
    }
  }
}

function removeGrid() {
  while (game.firstChild) {
    game.removeChild(game.firstChild);
  }
}

///////////////////// adding event listener

game.addEventListener("click", function (e) {
  container.appendChild(createEl("comment"));

  if (e.target.className === `box box-${rdbox}`) {
    gridSize++;
    removeGrid();
    makeGrid(gridSize);
    document.querySelector(".comment").textContent =
      "Correct! Let's carry on:)";
    document.querySelector(".comment").style.color = "green";
    score++;
    scoreEl.textContent = `SCORE: ${score}`;
  } else {
    gridSize = startGridSize;
    removeGrid();
    makeGrid(gridSize);
    document.querySelector(".comment").textContent =
      "Wrong! Let's start again.";
    document.querySelector(".comment").style.color = "red";
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = `HIGHSCORE: ${highscore}`;
    }
    score = 0;
    scoreEl.textContent = `SCORE: ${score}`;
  }
});
