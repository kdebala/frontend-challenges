const game = document.querySelector(".game");

const btn = document.createElement("button");
btn.className = "button";
btn.textContent = "Start new game";
game.appendChild(btn);
btn.style.visibility = "hidden";

let arr = ["X", "O"];
let activePlayer = 1;

game.appendChild(createDiv("grid"));
const grid = document.querySelector(".grid");

game.appendChild(createDiv("info"));
document.querySelector(".info").textContent = "";

////////////////MAKING A GRID /////////

for (i = 0; i < 3; i++) {
  for (s = 0; s < 3; s++) {
    const cellEl = createDiv("cell");
    cellEl.dataset.x = s;
    cellEl.dataset.y = i;
    grid.appendChild(cellEl);
  }
}

grid.style.gridTemplateColumns = "repeat(3, 1fr)";
grid.style.gridTemplateRows = "repeat(3, 1fr)";

////////////////// FUNCTIONS //////////////////

function createDiv(className) {
  const divEl = document.createElement("div");
  divEl.className = className;
  return divEl;
}

function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  return activePlayer;
}

function theEnd() {
  grid.removeEventListener("click", playGame);
  document.querySelector(
    ".info"
  ).textContent = `Game over! Player ${arr[activePlayer]} is winner!`;
  btn.style.visibility = "visible";
}

const checkPlayer = (e) => (e.target.textContent = arr[`${activePlayer}`]);
switchPlayer();

function checkWinner() {
  checkX(0);
  checkX(1);
  checkX(2);
  checkY(0);
  checkY(1);
  checkY(2);
  checkCross1();
  checkCross2();
  console.log("test123");
}

function playGame(e) {
  if (e.target.textContent === "") {
    e.target.textContent = arr[`${activePlayer}`];
    checkWinner();
    checkRemis();
    switchPlayer();
  }
}

function checkRemis() {
  const cells = document.querySelectorAll(".cell");
  let count = 0;
  cells.forEach((cell) => {
    if (cell.textContent !== "") {
      count++;
    }
    if (count === 9) {
      checkWinner();
      btn.style.visibility = "visible";
      if (document.querySelector(".info").textContent === "") {
        document.querySelector(".info").textContent = "REMIS! Game over.";
      }
    }
  });
}

function checkX(e) {
  if (
    document.querySelector(`[data-x="0"][data-y="${e}"]`).textContent ===
      document.querySelector(`[data-x="1"][data-y="${e}"]`).textContent &&
    document.querySelector(`[data-x="1"][data-y="${e}"]`).textContent ===
      document.querySelector(`[data-x="2"][data-y="${e}"]`).textContent
  ) {
    if (
      document.querySelector(`[data-x="0"][data-y="${e}"]`).textContent !==
        "" &&
      document.querySelector(`[data-x="1"][data-y="${e}"]`).textContent !==
        "" &&
      document.querySelector(`[data-x="2"][data-y="${e}"]`).textContent !== ""
    ) {
      console.log("checkX");
      theEnd();
    }
  }
}

function checkY(e) {
  if (
    document.querySelector(`[data-x="${e}"][data-y="0"]`).textContent ===
      document.querySelector(`[data-x="${e}"][data-y="1"]`).textContent &&
    document.querySelector(`[data-x="${e}"][data-y="1"]`).textContent ===
      document.querySelector(`[data-x="${e}"][data-y="2"]`).textContent
  ) {
    if (
      document.querySelector(`[data-x="${e}"][data-y="0"]`).textContent !==
        "" &&
      document.querySelector(`[data-x="${e}"][data-y="1"]`).textContent !==
        "" &&
      document.querySelector(`[data-x="${e}"][data-y="2"]`).textContent !== ""
    ) {
      console.log(`checkY", ${e}`);
      theEnd();
    }
  }
}

function checkCross1() {
  if (
    document.querySelector(`[data-x="0"][data-y="0"]`).textContent ===
      document.querySelector(`[data-x="1"][data-y="1"]`).textContent &&
    document.querySelector(`[data-x="1"][data-y="1"]`).textContent ===
      document.querySelector(`[data-x="2"][data-y="2"]`).textContent
  ) {
    if (
      document.querySelector(`[data-x="0"][data-y="0"]`).textContent !== "" &&
      document.querySelector(`[data-x="1"][data-y="1"]`).textContent !== "" &&
      document.querySelector(`[data-x="2"][data-y="2"]`).textContent !== ""
    ) {
      console.log("Cross1");
      theEnd();
    }
  }
}

function checkCross2() {
  if (
    document.querySelector(`[data-x="0"][data-y="2"]`).textContent ===
      document.querySelector(`[data-x="1"][data-y="1"]`).textContent &&
    document.querySelector(`[data-x="1"][data-y="1"]`).textContent ===
      document.querySelector(`[data-x="2"][data-y="0"]`).textContent
  ) {
    if (
      document.querySelector(`[data-x="0"][data-y="2"]`).textContent !== "" &&
      document.querySelector(`[data-x="1"][data-y="1"]`).textContent !== "" &&
      document.querySelector(`[data-x="2"][data-y="0"]`).textContent !== ""
    ) {
      console.log("Cross2");
      theEnd();
    }
  }
}

/////////////////////////////////////

grid.addEventListener("click", playGame);
btn.addEventListener("click", function () {
  btn.style.visibility = "hidden";
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  document.querySelector(".info").textContent = "";
  grid.addEventListener("click", playGame);
});
