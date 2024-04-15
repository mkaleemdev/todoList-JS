let input = document.querySelector("#input");
let addButton = document.querySelector("#addButton");
let todoItem = document.querySelector("#todoItem");
let todoNumber = document.querySelector("#todoNumber");
let hiddInput = document.querySelector("#hiddInput");
let editMessage = document.querySelector("#editMessage");

let data = [];

data = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

// bind data ==================
const bindData = () => {
  let todolist = "";

  data.forEach((item, index) => {
    todolist += `<li class="todoList_li">
                      <div><span class="pe-3">${index + 1}</span>${item}</div>
                      <div>
                          <button class="btn btn-secondary" onclick="editData(${index})"><i class="bi bi-pencil-square"></i></button>
                          <button class="btn btn-danger" onclick="delData(${index})"><i class="bi bi-trash3"></i></button>
                      </div>
                 </li>`;
    localStorage.setItem("todos", JSON.stringify(data));
  });
  todoNumber.innerHTML = data.length;

  todoItem.innerHTML = todolist;
};
bindData();

// add todo data =======
const addTodo = () => {
  if (hiddInput.value) {
    data[hiddInput.value] = input.value;
    hiddInput.value = "";
    addButton.innerHTML = "Add Todo";
    editMessage.innerHTML = "Todo update Successful *";

    setTimeout(function () {
      editMessage.style.display = "none";
    }, 2000);
    editMessage.style.display = "block";
  } else {
    if (input.value == "") {
      alert("Plese Enter Text");
    } else {
      data.push(input.value);
    }
  }

  input.value = "";
  bindData();
};

// delete todo data =========
const delData = (index) => {
  data.splice(index, 1);
  bindData();
};

// edit todo data ===========
const editData = (index) => {
  addButton.innerHTML = "Update";
  input.value = data[index];
  hiddInput.value = index;
};

// search functionaltiy =========
const searchFun = () => {
  let searchInput = document.getElementById("searchInput").value;
  searchInput = searchInput.toLowerCase();
  let todoList_li = document.getElementsByClassName("todoList_li");
  let searchRecord = document.querySelector("#searchRecord");

  for (i = 0; i < todoList_li.length; i++) {
    if (!todoList_li[i].innerHTML.toLowerCase().includes(searchInput)) {
      todoList_li[i].style.display = "none";
    } else {
      todoList_li[i].style.display = "flex";
    }
  }
};
