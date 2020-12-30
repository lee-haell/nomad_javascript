const nameForm = document.querySelector(".js-nameForm"),
    nameInput = nameForm.querySelector("input"),
    sayHello = document.querySelector(".js-sayHello");


const SAVE_NAME = "userName", //저장될 이름
    SHOWING_CLASS = "showing"; //클래스 showing


//아직 사용자 이름을 모르지만 이렇게 할 것이다~

//사용자의 이름을 저장하는 함수 (새로고침해도 이름이 저장되어 있음)
function saveName(text){ //text를 인자로 갖음
    localStorage.setItem(SAVE_NAME, text); //입력한 텍스트를 저장
}

//사용자 이름 묻기 함수
function askForName(){ 
    nameForm.classList.add(SHOWING_CLASS); //폼이 나타남
    nameForm.addEventListener("submit", writeSubmit); //폼에 사용자 이름 출력하는 이벤트 발생
}

//사용자가 이름을 입력하면 나오는 인사말 함수, (텍스트)를 인자로 갖음
function helloUser(text){ 
    nameForm.classList.remove(SHOWING_CLASS); //텍스트 색칠되면 form 안 보이게
    sayHello.classList.add(SHOWING_CLASS); //h4 보이게
    sayHello.innerText = `${text}'s List ✨`; //h4 안에 텍스트 추가
}


//이제 사용자가 이름을 입력하면! 이렇게 될 것이다~

//사용자 이름을 입력해서 발생하는 이벤트 함수
function writeSubmit(event){ 
    event.preventDefault(); //기본 클릭 처리 차단
    const userValue = nameInput.value; //input창의 값을 상수 userValue에 할당
    helloUser(userValue); //인사말 함수 출력(현재값)
    saveName(userValue); //저장될 사용자 이름 함수 출력(현재값)
}

//사용자 이름 출력되는 함수
function submitName(){
    const nowUser = localStorage.getItem(SAVE_NAME);
    //로컬스토리지에 저장된 사용자의 이름을 상수로 할당
    if(nowUser === null){ //입력된 이름이 없을 때
        askForName(); //이름묻기 함수 출력
    } else { //사용자가 있을 때
        helloUser(nowUser); //인사말(로컬스토리지에 저장된 사용자 이름)출력
    }
}

//함수 초기화
function init(){
    submitName();
}

init();