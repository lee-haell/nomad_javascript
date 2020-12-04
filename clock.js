const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date(); //해당 날짜 가져오기
    const hours = date.getHours(); //그 날짜의 시간 가져오기
    const minutes = date.getMinutes(); //그 날짜의 분 가져오기
    const seconds = date.getSeconds(); //그 날짜의 초 가져오기
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
    //h1의 텍스트를 해당 날짜의 시간:분:초로 바꾸기
    //한 자리 수인 초 앞에 0붙일 때. if문을 문자열로 표현. 초가 10보다 작으면?(true) 0 + ~초 실행, :(아니면) 원래의 초 리턴
}

function init(){ //함수 초기화
    getTime(); //위의 함수 실행
    setInterval(getTime, 1000); //setInterval함수:일정한 시간마다 함수 실행, getTime함수를 1초 간격으로 실행
}

init();