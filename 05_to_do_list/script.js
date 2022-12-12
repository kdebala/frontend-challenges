const writeATask = document.querySelector(".myInput");
const myList = document.querySelector(".myList");
//const list = document.querySelectorAll(".listEl");
//const close = document.querySelectorAll(".close");
const todo = document.querySelector(".toDo");

console.log(document);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const todoEl = todo.content.cloneNode(true);
    todoEl.querySelector(".text").textContent = writeATask.value;
    myList.appendChild(todoEl);
    writeATask.value = "";
  }
});

myList.addEventListener("click", function (e) {
  if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
  }
});
