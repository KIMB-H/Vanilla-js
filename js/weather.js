const API_KEY = "274987ab5fcd0fde8c8dfd905b75875f";

//user 위치 알려주기
function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //fetch()로 url 접근, javascript가 url에 접근
    //fetch는 promise라서 바로 발생하지 않고 시간이 걸린 후에 일어난다. //서버의 응답을 기다리는 then
    fetch(url).then(response => response.json()) //json으로 내용 추출
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
//``로 묶고 ${}에 변수를 작성하면 `` 속 글자가 모두 string이 된다. 
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);