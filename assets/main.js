let input = document.querySelector("#input");
let addButton = document.querySelector("#addButton");
let todoItem = document.querySelector("#todoItem");

let data = [];


// add todo data =======
const  addTodo = () => {
  // console.log("As");
  data.push(input.value);

  let todolist = "";

  data.forEach((item, index) => {
    todolist += `<li>
                      <div><span class="pe-3">${index+1}</span>${item}</div>
                      <div>
                          <button class="btn btn-secondary" ><i class="bi bi-pencil-square"></i></button>
                          <button class="btn btn-danger" onclick="delData(${index})"><i class="bi bi-trash3"></i></button>
                      </div>
                 </li>`;
  });

  todoItem.innerHTML = todolist;
  input.value = "";
}

// delete todo data =======
const delData = (index) =>{
    data.splice(index, 1)
    addTodo()
    
}