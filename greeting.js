const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector("js-greeting");
    
const USER_LS = "currentUser", //저장될 이름
    SHOWING_CN = ".showing";

function paintGreeting(text){ //색칠될 텍스트
    form.classList.remove(SHOWING_CN); //텍스트 색칠되면 form 안 보이게
    greeting.classList.add(SHOWING_CN); //.showing을 h4에 추가
    greeting.innerText = `Hello ${text}`; //h4 안에 텍스트 추가
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    //로컬스토리지에 저장된 사용자의 이름을 상수로 할당
    if(currentUser === null){

    } else { //사용자가 있을 때
    paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();