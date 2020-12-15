const COORDS = "coords";

//좌표 저장하는 함수
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//좌표 구하는 함수
function askForCoords(){
    navigator.geolocation.getCurrentPosition(successCoords, failCoords);
}

//좌표 구하는 데 성공했을 때, 처리하는 함수
function successCoords(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

//좌표 구하는 데 실패했을 때, 처리하는 함수
function failCoords(){
    console.log("위치 정보를 읽을 수 없습니다.");
}

//좌표 호출하는 함수
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();