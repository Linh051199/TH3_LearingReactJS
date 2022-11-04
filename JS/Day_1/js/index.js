console.log("Hello world");

let studentName = "Pham Van Linh";
let studentAge = 23;

console.log(studentName, typeof studentName);
console.log(studentAge, typeof studentAge);

// Boolean
let isMale = true;
if (isMale) {
    console.log('Con trai')
} else {
    console.log('La con gai')
}

//Object
let Student = {
    name: 'Pham Van Linh',
    mark: 10,
    gender: 'Nam',
}
console.log(Student)

//function
function print(params) {
    console.log('Hello')
}
print();

//Undefine (gồm 2 loại: chưa khai báo | chưa gán giá trị) 


//if- condition
let name = 'Linh';
let isRaining = true;
let haveCar = true;
if (isRaining && haveCar) {
    console.log('Linh di hoc')
} else {
    console.log('Linh nghi hoc')
}