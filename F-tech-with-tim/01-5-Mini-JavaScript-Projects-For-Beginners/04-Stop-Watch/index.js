let secondsElapsed = 0; //initial value
let interval = null; //initial value
const time = document.getElementById("time") //time value

function padStart(value) {//set leding zeros with 0s
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60) //init value
    const seconds = secondsElapsed;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`; 
}

function timer() {
    secondsElapsed++; 
    setTime();
}

function startClock() {
    if (interval) stopClock
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}
