const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let todos = []; //DB

const TODOS_KEY = "todos";

function deleteToDo(event) {
    const li = event.target.parentElement;
    todos = todos.filter((toDo) => { return toDo.id !== parseInt(li.id) });
    li.remove();

    saveToDos();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "X";

    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newToDoObj = {
        text: toDoInput.value,
        id: Date.now()
    }
    toDoInput.value = "";
    todos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    todos.forEach(paintToDo);
}
