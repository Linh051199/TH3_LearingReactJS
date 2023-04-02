// JS-Advacne:
// var || let || const
// Arguments
// Closure 
// Module 
// Generator functions
// yield


// ----------------------------------------------------------------------------------------------
// var || let || const
//Scope, Hoistring, Assignment

// ----------------------------------------------------------------------------------------------
// Arguments
// function sum() {
//     let pram = Array.from(arguments)
//     return pram.reduce((sum, next) => sum + next)
// }
// console.log("🚀 ~ sum:", sum(1, 2, 3, 4, 5, 6, 7, 8, 9))

// ----------------------------------------------------------------------------------------------
// Bind || Call || Apply
// let Person1 = {
//     name: "Linh"
// }
// let Person2 = {
//     name: "Dung"
// }
// let Person3 = {
//     name: "Miu"
// }

// function say(saySomethings, run) {
//     console.log(this.name + saySomethings);
//     console.log(this.name + run)
// }

// say.bind(Person1)(' say hello', ' running')
// say.call(Person2, ' say hello', ' running');
// say.apply(Person3, [' say hello', ' running'])

// ----------------------------------------------------------------------------------------------
// Closure 

// function generatedID() {
//     let ID = 0
//     return function() {
//         return ID++
//     }
// }
// let genID = generatedID()
// console.log("🚀 ~ genID:", typeof genID)
// console.log(genID(), genID())

// console.log(genID(), genID())

// ----------------------------------------------------------------------------------------------
// Import || Export
// import { great } from "./function.js";
// import byeClass, { great as greatFnc } from "./function.js";

// greatFnc()
// byeClass()

// ----------------------------------------------------------------------------------------------
// Generator functions
// const numbers = [1, 2, 3, 5, 6, 4, 7]

// function makeIterator(array) {
//     let nextIndex = 0;
//     return {
//         next: function() {
//             return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true }
//         }
//     }
// }

// const iterator = makeIterator(numbers)


// while (true) {
//     let next = iterator.next();
//     if (next.done) break;
//     console.log(next.value)
// }

// const myArray = {
//     // list: [1, 2, 3, 4],
//     // [Symbol.iterator]: function() {
//     //     let nextIndex = 0;
//     //     return {
//     //         next: () => {
//     //             return nextIndex < this.list.length ? { value: this.list[nextIndex++], done: false } : { done: true }
//     //         }
//     //     }
//     // }

//     '0': 1,
//     '1': 2,
//     '2': 3,
//     '3': 4,
//     [Symbol.iterator]: function() {
//         let nextIndex = 0;
//         let list = Object.keys(this)
//         return {
//             next: () => {
//                 return nextIndex < list.length ? { value: this[nextIndex++], done: false } : { done: true };
//             }
//         }
//     }
// }

// for (let value of myArray) {
//     console.log("🚀 ~ value:", value)
// }

// for (let index in myArray) {
//     console.log("🚀 ~ index:", index)
// }

// ----------------------------------------------------------------------------------------------
// yield

// function* idMarker() {
//     let index = 0;
//     yield index++;
//     yield index++;
//     yield index++;
// }
// let genID = idMarker();
// while (true) {
//     let next = genID.next();
//     if (next.done) break;
//     console.log(next.value)
// }