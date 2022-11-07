// Object
// let Boss = {
//     name: 'LinhPham',
//     age: 23,
//     add: 'TB',
//     eat: function() {
//         console.log(Boss.name, 'Eating')
//     }
// }
// console.log(Boss.name) //Print a property(ex1)
// console.log(Boss['name']) //Print a property(ex2)
// Boss.gender = 'Male'; // Add a property
// Boss.eat();
// Boss.sleep = function() { // Add a method 
//     console.log('Sleeping')
// }
// Boss.sleep();

// for (let prop in Boss) { //Print all prop and method
//     if (typeof(Boss[prop]) != 'function') {
//         console.log('prop: ', prop, Boss[prop])
//     } else {
//         console.log('method: ', prop)
//     }
// }

// -------------------------------------------------------------------------------------------------------------------------------------------
// This
// let Boss1 = {
//     name: 'LinhPham',
//     age: 23,
//     add: 'TB',
//     eat: function() {
//         console.log(this.name, 'Eating')
//     }
// }
// let Boss2 = {
//     name: 'HungPham',
//     age: 23,
//     add: 'TB',
// }

// Boss1.eat();
// Boss2.eat = Boss1.eat.bind(Boss1);
// Boss2.eat();
// -------------------------------------------------------------------------------------------------------------------------------------------
// Handle with data string object

let student = {
    name: "LinhPham",
    age: 20,
}

console.log(student, typeof(student))
let dataStudentStr = JSON.stringify(student) //Chuyển object sang dạng String
console.log(dataStudentStr)
let studentCopy = JSON.parse(dataStudentStr) // Chuyển string sang object
console.log(studentCopy)

let student2 = student;
student2.name = "HungPham"
console.log(student2)
console.log(student)