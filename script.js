const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
// const deleteBtn = document.querySelector(".fa-solid .fa-trash-can");
// const doneBtn = document.querySelector(".fa-solid .fa-square-check");
const todoContent = document.querySelector(".todo-content");
// const todoTask = document.querySelector(".todo-task");

function addTodo() {
  let todo = document.createElement("div");
  if (todoInput.value === "") return;
  todo.innerHTML = `
  <div class="todo-task">
    <p>
      ${todoInput.value}
    </p>
    <div>
      <i class="fa-solid fa-trash-can"> </i>
      <i class="fa-solid fa-square-check"> </i>
    </div>
  </div>
  `;
  todoContent.appendChild(todo);

  todo.addEventListener("click", (b) => {
    // console.log(b.target.classList.contains("fa-trash-can"));
    if (b.target.classList.contains("fa-trash-can")) {
      todo.remove();
    } else if (b.target.classList.contains("fa-square-check")) {
      todo.classList.toggle("todo-task-checked");
    }
  });
}

addBtn.addEventListener("click", addTodo);
