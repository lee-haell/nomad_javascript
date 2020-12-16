const COORDS = "coords";

//좌표 저장하는 함수 (좌표오브젝트 인자)
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    //로컬스토리지에 좌표상수를 저장하고 좌표오브젝트를 스트링으로 변환

}

//좌표 요청하는 함수
function askForCoords(){
    navigator.geolocation.getCurrentPosition(successCoords, failCoords);
    //위치정보 읽는 코드, geolocation:object, getCurrentPostion:function
    //(좌표성공함수, 좌표실패함수) -> 콜백함수
}

//좌표 구하는 데 성공했을 때, 처리하는 함수 (position 인자)
function successCoords(position){
    const latitude = position.coords.latitude; //현재 위치의 위도 구하기
    const longitude = position.coords.longitude; //현재 위치의 경도 구하기
    const coordsObj = { //코드오브젝트
        latitude,
        longitude
    };
    saveCoords(coordsObj); //좌표저장함수 호출(좌표오브젝트를 포함한)
}

//좌표 구하는 데 실패했을 때, 처리하는 함수
function failCoords(){
    console.log("위치 정보를 읽을 수 없습니다.");
    //위치읽기 취소 누르면 위의 코드 출력
}

//좌표 호출하는 함수
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    //로컬스토리지에 저장된 좌표상수 할당
    if(loadedCoords === null){ //만약 해당값이 없다면
        askForCoords(); //좌표요청함수 호출
    } else { 
        //getWeather
    }
}

//함수 초기화
function init(){
    loadCoords(); //좌표호출함수 출력
}

init();