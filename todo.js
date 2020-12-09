const toDoFrom = document.querySelector(".js-toDoFrom"),
    toDoInput = toDoFrom.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const SAVE_TODO = "toDo";


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