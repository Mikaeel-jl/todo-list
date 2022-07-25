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

  todoInput.value = "";
}

function deleteCheckBtn(e) {
  const classList = [...e.target.classList];

  if (classList[1] === "fa-square-check") {
    e.target.parentElement.parentElement.classList.toggle("todo-task-checked");
  } else if (classList[1] === "fa-trash-can") {
    confirm("do you want to delete the task ?") &&
      e.target.parentElement.parentElement.remove();
  }
}


// event listners
addBtn.addEventListener("click", addTodo);
todoContent.addEventListener("click", deleteCheckBtn);
