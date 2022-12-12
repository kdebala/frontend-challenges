const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
///////buttons
const moveAllLeft = document.querySelector(".move-all-left");
const moveLeft = document.querySelector(".move-left");
const moveRight = document.querySelector(".move-right");
const moveAllRight = document.querySelector(".move-all-right");
//////header
const addButton = document.querySelector(".add-btn");
const inputBox = document.querySelector(".input-box");

//initial values
let leftList = ["JavaScript", "Python", "C++", "CSS"];
let rightList = ["HTML", "Java", "SQL", "TypeScript"];

const createElement = function (item) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const text = document.createElement("p");
  checkbox.type = "checkbox";
  text.textContent = item;
  li.appendChild(checkbox);
  li.appendChild(text);
  return li;
};

leftList.forEach((item) => {
  leftSide.appendChild(createElement(item));
});

rightList.forEach((item) => {
  rightSide.appendChild(createElement(item));
});

moveRight.addEventListener("click", function () {
  const checked = leftSide.querySelectorAll("input:checked");
  checked.forEach((element) => {
    const liElement = element.parentElement;
    element.checked = false;
    rightSide.appendChild(liElement);
  });
});

moveLeft.addEventListener("click", function () {
  const checked = rightSide.querySelectorAll("input:checked");
  checked.forEach((element) => {
    const liElement = element.parentElement;
    element.checked = false;
    leftSide.appendChild(liElement);
  });
});

moveAllLeft.addEventListener("click", function () {
  rightSide.querySelectorAll("input").forEach((element) => {
    const liElement = element.parentElement;
    element.checked = false;
    leftSide.appendChild(liElement);
  });
});

moveAllRight.addEventListener("click", function () {
  leftSide.querySelectorAll("input").forEach((element) => {
    const liElement = element.parentElement;
    element.checked = false;
    rightSide.appendChild(liElement);
  });
});

/////////////////
addButton.addEventListener("click", function () {
  leftSide.appendChild(createElement(inputBox.value));
  inputBox.value = "";
});
