const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const todoContent = document.querySelector(".todo-content");

// functions
function addTodo(e) {
  e.preventDefault();
  if (todoInput.value === "") return;

  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-task");
  todoDiv.innerHTML = `
    <p>
      ${todoInput.value}
    </p>
    <div>
      <i class="fa-solid fa-trash-can"> </i>
      <i class="fa-solid fa-square-check"> </i>
    </div>
  `;
  todoContent.appendChild(todoDiv);

  setLocal(todoInput.value);

  todoInput.value = "";
}

function deleteCheckBtn(e) {
  const classList = [...e.target.classList];

  const todoDiv = e.target.parentElement.parentElement;
  console.log(todoDiv.querySelector("p").innerText);
  if (classList[1] === "fa-square-check") {
    todoDiv.classList.toggle("todo-task-checked");
  } else if (classList[1] === "fa-trash-can") {
    deleteLocal(todoDiv.querySelector("p").innerText);
    todoDiv.remove();
  }
}

function setLocal(value) {
  let localTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  localTodos.push(value);

  localStorage.setItem("todos", JSON.stringify(localTodos));
}

function getLocal() {
  let localTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  localTodos.forEach((todo) => {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-task");
    todoDiv.innerHTML = `
    <p>
      ${todo}
    </p>
    <div>
      <i class="fa-solid fa-trash-can"> </i>
      <i class="fa-solid fa-square-check"> </i>
    </div>
  `;
    todoContent.appendChild(todoDiv);
  });
}

function deleteLocal(todo) {
  let localTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const filteredTodos = localTodos.filter((item) => item !== todo);

  localStorage.setItem("todos", JSON.stringify(filteredTodos));
}

// event listners
addBtn.addEventListener("click", addTodo);
todoContent.addEventListener("click", deleteCheckBtn);
document.addEventListener("DOMContentLoaded", getLocal);
