// DOM 
// // get - dertermine element want to edit
let containerElem = document.getElementById('js-container')

let h3_1 = document.querySelector(".js-title1")
let h3_2 = document.querySelector("#js-title2")
let h3_3 = document.getElementsByClassName("js-title3")[0]

//Updating - handle logic
let color = 'red';


//Updating- render
// -case-> lower camel case
// rare
h3_1.style.color = 'red';
h3_1.style.borderTop = '3px solid blue';

// Ocasionally
h3_1.classList.add("bg-gray")

h3_2.className = "bg-gray"

// // add a element
let pElem = document.createElement("p")
pElem.innerText = 'Description'

containerElem.appendChild(pElem)

setTimeout(() => {
    containerElem.removeChild(pElem)
    h3_1.classList.remove("bg-gray")
}, 2000);


// Event handler
let btnClick = document.querySelector(".js-btn-click")

btnClick.addEventListener("click", (userClick) => {
    alert('click')
})


// current time 
let clockElem = document.querySelector(".js-clock")
let timerElem = clockElem.querySelector(".js-clock-timer")

let timerInterval = setInterval(() => {
    timerElem.innerText = new Date().toLocaleTimeString()
}, 1000)

// // 10s stop the clock
// setTimeout(() => {
//     clearInterval(timerInterval)
// }, 10000)

// StopWatch
window.onload = function() {
    let minutes = 00;
    let seconds = 00;
    let tens = 0000;
    let appendMinutes = document.querySelector('.minutes')
    let appendTens = document.querySelector('.tens')
    let appendSeconds = document.querySelector('.seconds')
    let btnStart = document.querySelector('#js-btnStart')
    let btnPause = document.querySelector('#js-btnPause')
    let btnReset = document.querySelector('#js-btnReset')
    let int;
    btnStart.onclick = function() {
        clearInterval(int);
        int = setInterval(startTimer, 10);
    }
    btnPause.onclick = function() {
        clearInterval(int);
    }
    btnReset.onclick = function() {
        clearInterval(int);
        tens = '00';
        seconnds = '00';
        minutes = '00'
        appendSeconds.innerHTML = tens;
        appendTens.innerHTML = tens;
        appendMinutes = minutes;
    }

    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds < 9) {
            appendSeconds.innerHTML = '0' + seconds;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 59) {
            console.log('minutes')
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '0' + 0;
        }
    }
}

// Number
let myNumber = 7.3;
console.log(typeof(myNumber));
console.log('isInteger: ', Number.isInteger(myNumber))
console.log('isInteger: ', Number.isInteger(Number.parseInt(myNumber)))
console.log('Convert Number to String: ', myNumber + '');

// // Random
function getRandom(min, max) {
    return Math.floor((Math.random() * (max - min) + min));
}

console.log('Random: ', getRandom(5, 35))