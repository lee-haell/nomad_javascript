const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");
    
const USER_LS = "currentUser", //저장될 이름
    SHOWING_CN = "showing";

//사용자의 이름을 저장하는 함수(새로고침해도 이름이 저장되어 있음)
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

//사용자 이름을 입력하는 이벤트 발생 함수
function handleSubmit(event){ 
    event.preventDefault(); //기본 클릭 처리 차단
    const currentValue = input.value; //input창의 값을 상수currentValue에 할당
    paintGreeting(currentValue); //텍스트 색칠하는 함수 출력(현재값)
    saveName(currentValue); //저장될 사용자 이름 함수 출력(현재값)
}

//사용자 이름 묻기 함수
function askForName(){ 
    form.classList.add(SHOWING_CN); //폼이 나타남
    form.addEventListener("submit", handleSubmit); //폼에 사용자 이름 출력하는 이벤트 발생
}

//색칠될 텍스트 함수, (텍스트)를 인자로 갖음
function paintGreeting(text){ 
    form.classList.remove(SHOWING_CN); //텍스트 색칠되면 form 안 보이게
    greeting.classList.add(SHOWING_CN); //h4 보이게
    greeting.innerText = `Hello ${text}`; //h4 안에 텍스트 추가
}

//사용자 이름 출력
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    //로컬스토리지에 저장된 사용자의 이름을 상수로 할당
    if(currentUser === null){
        askForName(); //이름묻기 함수 출력
    } else { //사용자가 있을 때
        paintGreeting(currentUser); //색칠된 텍스트(사용자이름)출력
    }
}

function init(){
    loadName();
}

init();