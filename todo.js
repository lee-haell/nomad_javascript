const toDoFrom = document.querySelector(".js-toDoFrom"),
    toDoInput = toDoFrom.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const SAVE_TODO = "toDo"; //저장될 투두리스트
let toDoArray = []; //투두리스트 작성시 배열에 추가
let idNumbers = 1; //li에 추가될 id 번호

function saveToDoList(){ //로컬스토리지에 저장하는 함수
    localStorage.setItem(SAVE_TODO, JSON.stringify(toDoArray));
} //JSON: JavaScript Object Notation(데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 string, 또는 object로 변환하는 것)

//html의 li(투두리스트)를 지우는 이벤트 함수
function deleteToDo(event){
    const btn = event.target; //클릭했을 때의 타겟인 버튼
    const li = btn.parentNode; //그 타겟버튼의 부모요소
    toDoList.removeChild(li); //ul의 자식요소인 li(선택된 타겟버튼의 부모)를 지운다.
    const cleanToDo = toDoArray.filter(function(toDo){ //지웠던 투두리스트가 새로고침해도 지워져 있도록. 투두배열에 필터적용, 함수호출
        return toDo.id !== parseInt(li.id); //배열의 id가 (숫자로 변환된)li의 id와 같지 않음을 반환
    }); //새로고침하면 id의 순서가 새로 재정비된다.
    toDoArray = cleanToDo; //cleanToDo가 새로운 배열이기 때문에 다시 할당
    saveToDoList(); //로컬스토리지에 저장
}

//투두리스트에 텍스트를 입력시 적용되는 함수
function writeTodo(text){
    const li = document.createElement("li"); //li를 새로 추가
    const deleteBtn = document.createElement("button"); //button을 새로 추가
    const span = document.createElement("span"); //span을 새로 추가
    const newId = idNumbers; //id번호를 새로운 id로
    idNumbers += 1; //id 번호 1씩 증가됨
    deleteBtn.innerText = " ❎ "; //버튼 안에 이모지 추가
    deleteBtn.addEventListener("click", deleteToDo); //x버튼을 클릭했을 때 다음 함수를 실행
    span.innerText = text; //span안에 투두리스트 내용
    li.appendChild(deleteBtn); //li의 마지막 자식으로 button 추가
    li.appendChild(span); //li의 마지막 자식으로 span 추가
    li.id = newId;
    toDoList.appendChild(li); //ul의 마지막 자식으로 li 추가
    const toDoObj = { //오브젝트 생성 
        text: text,
        id: newId
    };
    toDoArray.push(toDoObj); //toDoArray 배열에 생성된 오브젝트를 넣음
    saveToDoList(); //위에 id추가하는 오브젝트 push한 다음에 반드시 저장되는 함수 호출하기
}

//투두리스트 작성되는 이벤트 함수
function listOpen(event){
    event.preventDefault();
    const listValue = toDoInput.value; //input에 작성되는 값 할당
    writeTodo(listValue); //투두리스트 텍스트 입력 함수 출력(작성된 값으로)
    toDoInput.value = ""; //리스트 새로 작성할 때마다 리셋
}

//투두리스트 출력 함수
function submitToDo(){
    const toDoList = localStorage.getItem(SAVE_TODO); //로컬스토리지에 저장된 값 가져오기
    if(toDoList !== null){ //투두리스트에 저장된 값이 있으면
        const parsedToDo = JSON.parse(toDoList); //로컬스토리지에 저장된 값을 오브젝트로 변환
        parsedToDo.forEach(function(toDo){ //각 오브젝트에 writeToDo 함수 호출
            writeTodo(toDo.text);
        })
    }
}

//함수 초기화
function init(){
    submitToDo(); //투두리스트 출력되는 함수 출력
    toDoFrom.addEventListener("submit", listOpen); //투두리스트 form에 투두리스트 작성이벤트 발생
}

init();