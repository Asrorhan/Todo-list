const inputText = document.getElementById("addText");
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");

// Handle Add Task
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = inputText.value.trim();

  if (text === "") return;

  createTodoItem(text);
  inputText.value = "";
});

// Create Todo Item
function createTodoItem(taskText) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  // Complete Button
  const completeBtn = document.createElement("button");
  completeBtn.className = "complete";
  completeBtn.innerHTML = `<span class="material-symbols-outlined">check</span>`;
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>`;
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  actionsDiv.appendChild(completeBtn);
  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actionsDiv);
  todoList.appendChild(li);
}
