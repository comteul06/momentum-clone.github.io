//#region HTML elements

const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

//#endregion

//#region Constants

const TODOARR_KEY = "todoarr";

//#endregion

//#region Variables

let toDoArr = [];

//#endregion

//#region EventHandlers

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDoArr = toDoArr.filter((todo) => todo.id != parseInt(li.id));
    saveToDoArr();
    li.remove();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    
    const inputValue = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = { text: inputValue, id: Date.now(), };

    paintToDo(newToDoObj);

    toDoArr.push(newToDoObj);
    saveToDoArr();
}

//#endregion

//#region Functions

function paintToDo(toDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = toDoObj.id;
    span.innerText = toDoObj.text;

    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.innerText += " ";
    li.appendChild(button);

    toDoList.appendChild(li);
}

function saveToDoArr() {
    localStorage.setItem(TODOARR_KEY, JSON.stringify(toDoArr));
}

//#endregion

const savedToDoArr = localStorage.getItem(TODOARR_KEY);

const parsedToDoArr = savedToDoArr == null ? [] : JSON.parse(savedToDoArr);
parsedToDoArr.forEach(paintToDo);

toDoForm.addEventListener("submit", handleToDoSubmit);
