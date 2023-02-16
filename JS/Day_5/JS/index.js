// creat a StopWatch by JS
let timerElem = document.querySelector(".js-timer-runner")
let btnStartStopElem = document.querySelector(".js-btn-start-stop")
let btnResetElem = document.querySelector(".js-btn-reset ")
let miliSeconds = 0;
let seconds = 0;
let minutes = 0;

let stopWacthInterval = 0;

btnStartStopElem.addEventListener("click", () => {
    if (stopWacthInterval == 0) {
        stopWacthInterval = setInterval(() => {
            miliSeconds += 1;
            if (miliSeconds > 99) {
                seconds += 1;
                miliSeconds = 0;
            }
            if (seconds > 59) {
                minutes += 1;
                seconds = 0;
            }

            updateTimer(minutes, seconds, miliSeconds);
        }, 10)
        btnStartStopElem.innerHTML = "Stop"
    } else {
        clearInterval(stopWacthInterval);
        stopWacthInterval = 0;
        btnStartStopElem.innerHTML = "Continue"

    }
})
btnResetElem.addEventListener("click", () => {
    clearInterval(stopWacthInterval);
    miliSeconds = 0;
    seconds = 0;
    minutes = 0;
    updateTimer(minutes, seconds, miliSeconds)
    btnStartStopElem.innerHTML = "Start"

})


function updateTimer(minutes, seconds, miliSeconds) {
    timerElem.innerText = minutes + ": " + seconds + ", " + miliSeconds;
}

// Print a random number from a to b

// function getRandom(min, max) {
//     console.log(Math.floor(Math.random() * (max - min) + min))
// }
// getRandom(1, 9)

// ------------------------------------------------------------------------------------------------
// Work with Array

// Declare: Cách khai báo
let fruits = ['Banana', 'Orange', 'Mango']

console.log(fruits.toString()) // convert array to string
console.log('First-fruit: ', fruits[0]) //Print first element in Array
console.log('Last-fruit: ', fruits[fruits.length - 1]) //Print last element in Array
console.log(Array.isArray(fruits)) //check is a Array

//Print all element in Array 
fruits.forEach((fruit, index) => {
    console.log(fruit, index)
})

// Stack: Ngăn xếp
let students = [];

let studentA = {
    name: "Linh",
    age: 19,
}
let studentB = {
    name: "Hung",
    age: 19,
}

students.push(studentA); //Push elem to Array
students.push(studentB); //Push elem to Array
//Push elem to Array
students.push({
    name: "Dung",
    age: 19,
})
console.log(students);
// pop a elem to Array
// let studentB = students.pop();
// console.log(studentB)

// console.log(students)

//queues
//shift
studentA = students.shift();
console.log(students)

//unshift: append at beginning
students.unshift(studentA);
console.log(students)

//splice-- handle with middle array 1:34:25