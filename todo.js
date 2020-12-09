const toDoFrom = document.querySelector(".js-toDoFrom"),
    toDoInput = toDoFrom.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const SAVE_TODO = "toDo";




function init(){
    submitToDo();
    toDoFrom.addEventListener("submit", listOpen);
}

init();