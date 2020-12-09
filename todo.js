const toDoFrom = document.querySelector(".js-toDoFrom"),
    toDoInput = toDoFrom.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const SAVE_TODO = "toDo";


function listOpen(event){
    event.preventDefault();
    const listValue = toDoInput.value;
    writeTodo(listValue);
    toDoInput.value = ""; //리스트 새로 작성할 때마다 리셋
}

function submitToDo(){
    const toDoList = localStorage.getItem(SAVE_TODO);
    if(toDoList !== null){
    
    }
}

function init(){
    submitToDo();
    toDoFrom.addEventListener("submit", listOpen);
}

init();