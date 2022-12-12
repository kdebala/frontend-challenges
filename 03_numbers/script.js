"use strict";

const number = document.querySelector(".current--number");
const btnPlus = document.querySelector(".btn--plus");
const btnMinus = document.querySelector(".btn--minus");
const btnReset = document.querySelector(".btn--reset");

const changeByValue = document.getElementById("changeBy");

btnPlus.addEventListener("click", function () {
  number.textContent =
    parseInt(number.textContent) + parseInt(changeByValue.value);
});
btnMinus.addEventListener("click", function () {
  number.textContent =
    parseInt(number.textContent) - parseInt(changeByValue.value);
});

btnReset.addEventListener("click", function () {
  number.textContent = 0;
});
