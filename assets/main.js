let input = document.querySelector("#input");
let addButton = document.querySelector("#addButton");
let todoItem = document.querySelector("#todoItem");
let todoNumber = document.querySelector("#todoNumber");
let hiddInput = document.querySelector("#hiddInput")

const data = []



// bind data ==================
const bindData = () => {
    let todolist = "";

    data.forEach((item, index) => {
        todolist += `<li>
                      <div><span class="pe-3">${index + 1}</span>${item}</div>
                      <div>
                          <button class="btn btn-secondary" onclick="editData(${index})"><i class="bi bi-pencil-square"></i></button>
                          <button class="btn btn-danger" onclick="delData(${index})"><i class="bi bi-trash3"></i></button>
                      </div>
                 </li>`;
        todoNumber.innerHTML = index + 1
    });

    todoItem.innerHTML = todolist;
}


// add todo data =======
const addTodo = () => {
    if (input.value == "") {
        alert("Plese Enter Text");
    } else {
        data.push(input.value);
    }


    input.value = "";
    bindData()
}


// delete todo data =======
const delData = (index) => {
    data.splice(index, 1)
    bindData()
}


// edit todo data ============
const editData = (index) => {
    input.value = data[index];
}


// localStorage.setItem("firstname", "Smith");
