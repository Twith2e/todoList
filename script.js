const listInput = document.getElementById("todoInput");
const editInput = document.getElementById("editInput");
const listOutput = document.getElementById("todo-list");
let globalIndex = "";
let taskDatabase = JSON.parse(localStorage.getItem("list")) || [];

taskDatabase.forEach((list, index) => {
  listOutput.innerHTML += `<li class='task'>${list}<div class="action-btn"><button onclick="editTask(${index})" class="edit-btn" value="">
  <span class="material-symbols-outlined" id="edit-icon">edit</span></button><button class="delete-btn" value="" onclick="deleteTask(${index})">
  <span class="material-symbols-outlined" id="delete-icon">delete</span></button></div></li>`;
});

function addList() {
  if (listInput.value) {
    taskDatabase.push(listInput.value);
    localStorage.setItem("list", JSON.stringify(taskDatabase));
    listOutput.innerHTML = "";
    taskDatabase.forEach((list, index) => {
      listOutput.innerHTML += `<li class="task">${list}<div class="action-btn"><button class="edit-btn" onclick="editTask(${index})" value="">
      <span class="material-symbols-outlined" id="edit-icon">edit</span></button><button class="delete-btn" value="" onclick="deleteTask(${index})">
      <span class="material-symbols-outlined" id="delete-icon">delete</span></button></div></li>`;
    });
  } else {
    alert("fill input");
  }
  listInput.value = "";
}

function editTask(index) {
  globalIndex = index;
  thisInput.style.display = "none";
  thisInput1.style.display = "flex";
  editInput.value = taskDatabase[index];
}

function editList() {
  taskDatabase.splice(globalIndex, 1, editInput.value);
  localStorage.setItem("list", JSON.stringify(taskDatabase));
  listOutput.innerHTML = "";
  taskDatabase.forEach((list, index) => {
    listOutput.innerHTML += `<li class="task">${list}<div class="action-btn"><button class="edit-btn" onclick="editTask(${index})" value="">
      <span class="material-symbols-outlined" id="edit-icon">edit</span></button><button class="delete-btn" value="" onclick="deleteTask(${index})">
      <span class="material-symbols-outlined" id="delete-icon">delete</span></button></div></li>`;
  });
  thisInput.style.display = "flex";
  thisInput1.style.display = "none";
}

function deleteTask(index) {
  taskDatabase.splice(index, 1);
  localStorage.setItem("list", JSON.stringify(taskDatabase));
  listOutput.innerHTML = "";
  taskDatabase.forEach((list, index) => {
    listOutput.innerHTML += `<li class="task">${list}<div class="action-btn"><button class="edit-btn" onclick="editTask(${index})" value="">
      <span class="material-symbols-outlined" id="edit-icon">edit</span></button><button class="delete-btn" value="" onclick="deleteTask(${index})">
      <span class="material-symbols-outlined" id="delete-icon">delete</span></button></div></li>`;
  });
}
