// if-else, switch-case, 



// if-else
//EX1:How to know month of a year
// let month = 11;
//if-else
// if (month >= 1 && month <= 3) {
//     console.log('Spring!')
// } else if (month >= 4 && month <= 6) {
//     console.log('Summer!')
// } else if (month >= 7 && month <= 9) {
//     console.log('Autumn!')
// } else if (month >= 10 && month <= 12) {
//     console.log('Winter!')
// } else {
//     console.log('Month is wrong!')
// }
// ---------------------------------------------------------------------------
// Switch-case
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log('Spring');
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log('Summer');
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log('Autumn');
//         break;
//     case 10:
//     case 11:
//     case 12:
//         console.log('Winter');
//         break;
//     default:
//         console.log('Month is wrong')
//         break;
// }



// ---------------------------------------------------------------------------------------------------------------------------------------
// Loops: for, while, do while, break
// EX2: push-up 5 times
// ---------------------------------------------------------------------------
// for
//let n = 5;
// for (let i = 0; i < n; i++) {
//     console.log('Push-up:', i)
//     for (let j = 0; j < n; j++) {
//         console.log('   Run around:', j)
//     }
// }
// ---------------------------------------------------------------------------
// Break in for
// let numbers = [1, 2, 3, 4, 5]
// let x = 3;
// for (let i = 0; i < numbers.length; i++) {
//     if ([i] == x) {
//         console.log('Số 3 có tồn tại trong mảng');
//         break;
//     }
//     console.log(i)
// }
// ---------------------------------------------------------------------------
// while (Find X in a Array )
// let numbers = [1, 2, 3, 4, 5];
// let x = 5;
// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i] == x) {
//         console.log('Found X in Array')
//         break;
//     }
//     i++;
// }

// EX: 
// let inputNumberStr = window.prompt('Enter a number herre!');
// console.log('InputNumberStr: ', inputNumberStr);
// let inputNumber = Number(inputNumberStr);
// while (Number.isNaN(inputNumber)) {
//     let inputNumberStr = window.prompt('Enter a number herre!');
//     inputNumber = Number(inputNumberStr)
// }
// console.log('inputNumber:', inputNumber)
// ---------------------------------------------------------------------------
//Do while
// let inputNumber;
// do {
//     let inputNumberStr = window.prompt('Enter a number herre!')
//     inputNumber = Number(inputNumberStr)
// } while (Number.isNaN(inputNumber));
// console.log('inputNumber:', inputNumber)



//EX check number is a Prime
// let inputNumberStr = window.prompt('Enter a number herre!')
// let inputNumber = Number(inputNumberStr)
// if (Number.isNaN(inputNumber)) {
//     inputNumber = window.prompt('not a number, try again!')
// }
// if (inputNumber < 2) {
//     console.log(inputNumber, 'is not a Prime')
// } else {
//     let check = false;
//     for (let i = 2; i < Math.sqrt(inputNumber); i++) {
//         if (inputNumber % i === 0) {
//             check = true;
//             break;
//         }
//     }
//     if (check) {
//         console.log(inputNumber, 'is not a Prime')
//     } else {
//         console.log(inputNumber, 'is a Prime')

//     }
// }
// ---------------------------------------------------------------------------------------------------------------------------------------
// Function()
// Regular Function
// function studentMark1() {

// }
// Expression Function
// let studentMark2= function(student){

// }
// Arrow function
// let studentMark3 = (student)=> {}    


// function enterNumber(min, max) {
//     let inputNumberStr = window.prompt('Enter a number herre!');
//     let inputNumber = Number(inputNumberStr);
//     while (Number.isNaN(inputNumber) || inputNumber < min || inputNumber > max) {
//         let inputNumberStr = window.prompt('Not a number, try again!');
//         inputNumber = Number(inputNumberStr)
//     }
//     console.log('inputNumber:', inputNumber)
//     return inputNumber;
// }
// let number = enterNumber(5, 10);
// console.log('number; ', number)
// ---------------------------------------------------------------------------
// Rest operator

let total = (...Rest) => {
    let result = 0;
    let k = 0;
    for (let i = 0; i < Rest.length; i++) {
        if (Rest[i] > k) {
            // debugger
            result += Rest[i]
        }
    }
    return result;
}

console.log('Total :', total(1, 2, 3, 4, 5, 'b', 6, 7, 8, 9, 10))