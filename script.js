function updateList() {
  const listInput = document.getElementById("to-do-input");
  const list = document.getElementById("todo-list");

  if (listInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  li = document.createElement("li");
  li.textContent = listInput.value;
  list.appendChild(li);
  buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons";
  list.appendChild(buttonsDiv);

  // Clear the input field
  listInput.value = "";

  editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit-btn";
  editButton.onclick = function () {
    editTask(li);
  };
  buttonsDiv.appendChild(editButton);
  deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.className = "delete-btn";
  deleteButton.onclick = function () {
    deleteTask(list);
  };
  buttonsDiv.appendChild(deleteButton);

  list.appendChild(buttonsDiv);
  list.appendChild(li);
}

function editTask(taskSpan) {
  newTask = prompt("Edit your task:", taskSpan.textContent);
  if (newTask !== null && newTask !== "") {
    taskSpan.textContent = newTask;
  }
}

function deleteTask(taskItem) {
  taskItem.remove();
}
