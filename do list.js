
let mytasks = [];

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

function myRender() {
  taskList.innerHTML = "";

  for (let i = 0; i < mytasks.length; i++) {
    let taskText = mytasks[i];

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function () {
      if (checkbox.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    };

    let myspan = document.createElement("span");
    myspan.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      mytasks.splice(i, 1);
      myRender();
    };

  li.appendChild(checkbox);
    li.appendChild(myspan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
}

addBtn.onclick = function () {
  let text = taskInput.value.trim();
  if (text !== "") {
    mytasks.push(text); 
    taskInput.value = "";
    myRender();
  }
};

