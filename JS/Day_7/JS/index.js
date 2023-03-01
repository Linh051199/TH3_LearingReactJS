// Exercise
//ex15:
// let studentName = prompt('Enter your name here!', '      PHam       VaN     LINh');
// studentName = studentName.trim()

// // repalce all two continutes space
// studentName = studentName.replace(/\s+/g, ' ')
// studentName = studentName.toLowerCase().split(' ').map(partName => partName ? partName[0].toUpperCase() + partName.slice(1) : partName).join(' ')
// console.log(studentName);

//ex16:
// let url = 'https://www.facebook.com/phamvanlinh?asdas';
// let id = url.slice(url.lastIndexOf('https://www.facebook.com/') + 'https://www.facebook.com/'.length, url.indexOf('?'))
// console.log(id)

//ex19:
// function sumOf(n) {
//     if (n == 1) return 1
//     return sumOf(n - 1) + n
// }
// console.log(sumOf(9) )

//ex23: Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// output: 3;
// let maxFeg = 0;
// let value
// for (let i = 0; i < a.length; i++) {
//     let count = 1;
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[i] === a[j]) {
//             count++;
//         }
//     }
//     if (count > maxFeg) {
//         maxFeg = count;
//         value = a[i];
//     }

// }
// console.log(maxFeg, value)

//upgrade
// let startTime = new Date().getTime()
// let freqs = {};
// a.forEach(n => {
//     // if (freqs[n]) {
//     //     freqs[n]++
//     // } else {
//     //     freqs[n] = 1
//     // }
//     freqs[n] = freqs[n] ? freqs[n] + 1 : 1;
// })
// let maxFeg2 = 0,
//     value2 = 0;
// Object.keys(freqs).forEach(k => {
//     let v = freqs[k]
//     if (maxFeg2 < v) {
//         maxFeg2 = freqs[k];
//         value2 = k;
//     }
// })
// let endTime = new Date().getTime()
// console.log(maxFeg2, value2, 'Time running: ', endTime - startTime)
// -------------------------------------------------------------------------------------------------------------------------------------------------
// Show less- more
// function limit(value, limit) {
//     return value ? value.slice(0, limit) + '.....' : ''
// }

// let isShowingMore = false;

// let description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aut nam sapiente dicta totam quis maiores, officia similique sequi ipsum ut! Dolorum saepe hic reiciendis totam quo possimus, ullam obcaecati.'
// let desElem = document.querySelector('.js-description')
// let buttonElem = document.querySelector('.js-showMore')


// function render(isShowingMore) {
//     if (isShowingMore) {
//         buttonElem.innerHTML = 'Show less'
//         desElem.innerHTML = description
//     } else {
//         desElem.innerHTML = limit(description, 50)
//         buttonElem.innerHTML = 'Show more'
//     }

// }

// render(false)
// buttonElem.addEventListener('click', () => {
//     isShowingMore = !isShowingMore
//     render(isShowingMore)
// })