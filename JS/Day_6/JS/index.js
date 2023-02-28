// Sort in  Array
// let numbers = [1, 3, 5, 2, 4, 6]

// console.log('Origin Array: ', numbers)
// numbers.sort((n1, n2) => {
//     return n1 - n2
// })
// console.log('Array >: ', numbers)
// numbers.sort((n1, n2) => {
//     return n2 - n1
// })
// console.log('Array <: ', numbers)

// ----------------------------------------------------------------------------------------------------------------------
// String
// let name1 = 'Linh love Dung'
// let name2 = "\"Hung\""
// console.log(name1, name2)

// let description = 'go swimming'

// console.log('Template String: ', `${name1} ${description}`)

// // toUpperCase() || toLowerCase() || charAt(pos) || indexOf(sub, pos) || lastIndexOf(sub, pos)
// // slice(start, [end]) || substring(start, [end]) || substr(start, [length]) || repalce() || concat() || include() || Split()

// console.log('toUpperCase: ', name1.toUpperCase());
// console.log('toLowerCase: ', name1.toLowerCase());
// console.log('CharAt: ', name1.charAt(1, ));
// console.log('indexOf: ', name1.indexOf('i', 0))

// console.log('Slice: ', name1.slice(0, 9))
// console.log('Substring: ', name1.substring(0, 9))
// console.log('Substr: ', name1.substr(0, 9))
// console.log('Replace: ', name1.replace('love', 'hate'))
// console.log('Includes: ', name1.includes('love'))
// console.log('Split: ', name1.split(' ').map((word) => word === 'Dung' ? 'Miu' : word).join(' '))

// Nomalize userName
// ----------------------------------------------------------------------------------------------------------------------
// try...catch
// ----------------------------------------------------------------------------------------------------------------------
// OOP- Object Oriented Programming
// 4 thuộc tính: KẾ THỪA || ĐA HÌNH || TRỪU TƯỢNG || ĐÓNG GÓI
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    go = () => {
        console.log(this.name + ' is going')
    }
}
class Student extends Person {

    study = () => {
            console.log(this.name + ' is studying')
        }
        // Tính đa hình
    go = () => {
        console.log(this.name + ' do not go')
    }
}
class Teacher extends Person {
    teach = () => {
        console.log(this.name + ' is teaching')
    }
}


let student1 = new Student('Linh', 24)
student1.study();
student1.go();

let teacher1 = new Teacher('Dung', 24)
teacher1.teach();
teacher1.go();