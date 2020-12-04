/* 이벤트 */
const title = document.getElementById('title');
//변수 title. document에서 아이디 title 가져오기
function harryClick(){
    title.style.color = 'blue';
}
//함수 harryClick 생성. 상수 title의 텍스트 색을 blue로 변경하기
title.addEventListener('click', harryClick);
//상수 title이 이벤트를 할 준비가 됐다. 클릭했을 때, 함수 harryClick 실행


/* if, else 조건문
const age = prompt('혹시 나이가..?');
//prompt는 더이상 잘 안 쓰는 오래된 코드
if(age > 18 && age <= 25){
    console.log("한창 술을 마실 때네요~");
}else if(age > 25){
    console.log("이젠 술을 즐겨도 과음은 조심!");
}else{
    console.log("아직 절대 술을 마시면 안돼요!!");
}
*/


/* DOM, if-else, function 연습 : 클릭 이벤트, class를 이용한 글자 색 바꾸기 */
const subTitle = document.getElementById("subTitle");

const CLICKED_CLASS = "clicked";

function handleClick(){ //함수 handleClick
    subTitle.classList.toggle(CLICKED_CLASS);
}// *classList: 엘리먼트의 클래스속성에 접근 / *add, remove method(메소드)를 쓸 수도 있지만, 더 간단하게 toggle메소드 이용

function init(){ //함수 초기화
    subTitle.addEventListener("click", handleClick); //서브타이틀 클릭했을 때, 함수 handleClick 실행
}

init();