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

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// Work with Array

// Declare: Cách khai báo
let fruits = ['Banana', 'Orange', 'Mango', 'Cherry']

console.log('Convert Array: ', fruits.toString()) // convert array to string

console.log('First-fruit: ', fruits[0]) //Print first element in Array

console.log('Last-fruit: ', fruits[fruits.length - 1]) //Print last element in Array

console.log('Check is a Array: ', Array.isArray(fruits)) //check is a Array

console.log('Join: ', fruits.join(' - ')) //join

// //Print all element in Array 
// fruits.forEach((fruit, index) => {
//     console.log(fruit, index)
// })

// // Stack: Ngăn xếp
let students = [];

let studentA = {
    name: "1",
    age: 19,
}
let studentB = {
    name: "2",
    age: 20,
}
console.log('Origin', students)
students.push(studentA); //Push elem to Array
students.push(studentB); //Push elem to Array
//Push elem to Array
students.push({
    name: "3",
    age: 21,
})
console.log('Push', students);

// pop a elem to Array
// let studentB = students.pop();
// console.log(studentB)

// console.log(students)

//queues
//shift
studentA = students.shift();
console.log('shift', students)

//unshift: append at beginning
students.unshift(studentA);
console.log('unshift', students)

// splice-- handle with middle array
students.push({
    name: '5',
    age: 22
})
students.push({
    name: '6',
    age: 23
})
students.splice(2, 1, {
    name: '4',
    age: 24
})

//reverse
console.log('reverse: ', students.reverse())

//copy, get a range from array
let students2 = students.slice(2, 5)
students2[0].name = 'Linh'
console.log('slice: ', students2)

//indexOf
let mango = fruits.indexOf('Mango', 2)
console.log('indexOF: ', mango)


// -----------------------------------------------------------------------------------------------------------------------------------------------------
//find, filter, map, reduce, sort
console.log('ListStudents:', students)

// --------------------------------------------------------------------
//find
let findStudent = students.find((student, index, array) => {
    return student.name === 'Linh'
})
console.log('Find methods: ', findStudent)

// creat myFind methods
Array.prototype.myFind = function(cb) {
    let output = [];
    for (let data in this) {
        if (this.hasOwnProperty(data)) {
            if (cb(this[data], data, this)) {
                output = this[data], data, this;
                break;
            }
        }
    }
    return output;
}

let findStudent2 = students.myFind((student, index, array) => {
    return student.name === 'Linh'
})
console.log('MyFind methods: ', findStudent2)

// --------------------------------------------------------------------
//Filter methods
let filterStudentAgeGreaterThan20 = students.filter((student) => {
    return student.age > 20
})

console.log('Filter methods: ', filterStudentAgeGreaterThan20)

//creat my filter methods
Array.prototype.myFilter = function(cb) {
    let output = []
    for (let data in this) {
        if (this.hasOwnProperty(data)) {
            if (cb(this[data], data, this)) {
                output.push(this[data])

            }
        }
    }
    return output;
}
let filterStudentAgeGreaterThan202 = students.myFilter((student) => {
    return student.age > 20
})

console.log('MyFilter methods: ', filterStudentAgeGreaterThan202)

// --------------------------------------------------------------------
// Map methods
let persons = [];
persons.push({
    firstName: 'Pham',
    lastName: 'Linh'
})
persons.push({
    firstName: 'Pham',
    lastName: 'Hung'
})
let personFullName = persons.map((person) => {
    return {
        fullName: person.firstName + ' ' + person.lastName
    }
});

console.log('List Persons: ', persons)
console.log('Map methods: ', personFullName)

// myMap methods
Array.prototype.myMap = function(cb) {
    let output = []
    for (let data in this) {
        if (this.hasOwnProperty(data)) {
            let result = cb(this[data], data, this)
            output.push(result)
        }
    }
    return output;
}
let personFullName2 = persons.myMap((person) => {
    return {
        fullName: person.firstName + ' ' + person.lastName
    }
});

console.log('MyMap methods: ', personFullName2)

// --------------------------------------------------------------------
// reduce
let numbers = [1, 2, 3, 4, 5]
let total = numbers.reduce((previous, next) => {
    console.log(previous, next);
    return next + previous;
})
console.log('reduce total: ', total)

// --------------------------------------------------------------------
//sort
console.log(students.sort((stu1, stu2) => {
    return stu1.age - stu2.age
}))