const body = document.querySelector("body");

const IMG_NUMBER = 4; //이미지 개수

//이미지 경로 함수
function bgImg(imageNumber){
    const image = new Image(); //새로운 이미지 생성
    image.src = `images/${imageNumber + 1}.jpg`; //이미지 경로 = 이미지번호 +1
    image.classList.add("bgImage"); //html의 img에 .bgImage 추가
    body.appendChild(image);
}

//이미지 랜덤 출력 함수
function random(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    //이미지 개수만큼 숫자 랜덤으로 나옴
    return number; //숫자 리턴
}

//함수 초기화
function init(){
    const randomNumber = random(); //랜덤함수를 상수로
    bgImg(randomNumber); //랜덤함수를 갖는 이미지 경로 함수 출력
}

init();