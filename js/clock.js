const clock = document.querySelector("h2#clock");

//interval : 매번 일어나야 하는 무언가 예) 매2초
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const newTimes = new Date().toLocaleTimeString();

    clock.innerText = `${hours}:${minutes}:${seconds}
    ${newTimes}`;
}

//2초마다 실행하기 setInterval(함수명, 시간) 이용
//일정 시간 이후 단 한 번 실행하게하는 setTimeout()

//js 기능
//new Date()로 현재의 시간을 가져올 수 있다. 
getClock();
setInterval(getClock, 1000);