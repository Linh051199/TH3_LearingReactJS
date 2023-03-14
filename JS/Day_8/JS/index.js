// Callback
// Promise
// async/ await

// Promise

// let successByIphone = true;
// let successFindLove = true;

// let byIphonePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (successByIphone) {
//             resolve({ Success: true })
//         } else {
//             reject({ Success: false })
//         }
//     }, 1000)
// })

// function findLoveCB(resolve, reject) {
//     setTimeout(() => {
//         if (successFindLove) {
//             resolve({ Success: true })
//         } else {
//             reject({ Success: false })
//         }
//     }, 1000)
// }

// let haveBabyCB = (resolve) => {
//     setTimeout(() => {
//         resolve({ Success: true })

//     }, 1000);
// };

// byIphonePromise
//     .then((data) => {
//         console.log('Buying')
//         return new Promise(findLoveCB)
//     })
//     .then((data) => {
//         console.log('Find Lover')
//         return new Promise(haveBabyCB)
//     })
//     .then((data) => {
//         console.log('Have baby')
//     })
//     .catch((err) => {
//         console.log('That is all')
//     })
//     .finally((a) => {
//         console.log('END GAME')
//     })
// ------------------------------------------------------------------------------------------------
// async/ await
// let successByIphone = true;
// let successFindLove = true;

// let byIphonePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (successByIphone) {
//             resolve({ Success: true })
//         } else {
//             reject({ Success: false })
//         }
//     }, 1000)
// })

// function findLoveCB(resolve, reject) {
//     setTimeout(() => {
//         if (successFindLove) {
//             resolve({ Success: true })
//         } else {
//             reject({ Success: false })
//         }
//     }, 1000)
// }

// let haveBabyCB = (resolve) => {
//     setTimeout(() => {
//         resolve({ Success: true })

//     }, 1000);
// };

// async function life() {
//     try {
//         let graduation = await byIphonePromise
//         console.log("🚀 ~ file: index.js:57 ~ life ~ graduation:", graduation)

//         let findWife = await new Promise(findLoveCB)
//         console.log("🚀 ~ file: index.js:60 ~ life ~ findWife:", findWife)

//         let findChild = await new Promise(haveBabyCB)
//         console.log("🚀 ~ file: index.js:63 ~ life ~ findChild:", findChild)

//     } catch (error) {
//         console.log("not graduation")
//     }
// }
// life()

// ------------------------------------------------------------------------------------------------
// async/ await in loop
// let successGraduation = true;
// let successFindLove = true;

// function graduationCB(resolve, reject) {
//     setTimeout(() => {
//         if (successGraduation) {
//             resolve({ Success: true })
//         } else {
//             reject({ Success: false })
//         }
//     }, 1000)
// }

// function findLoveCB(resolve, reject) {
//     setTimeout(() => {
//         if (successFindLove) {
//             resolve({ Success: true })
//         } else {
//             reject({ Success: false })
//         }
//     }, 1000)
// }

// let haveBabyCB = (resolve) => {
//     setTimeout(() => {
//         resolve({ Success: true })

//     }, 1000);
// };

// let promisesFunc = [graduationCB, findLoveCB, haveBabyCB]

// async function doAllJob() {
//     for (const cb of promisesFunc) {
//         const result = await new Promise(cb)
//         console.log("🚀 ~ result:", result)

//     }
// }
// doAllJob() 

// ------------------------------------------------------------------------------------------------
// recursive
// let promisesFunc = [graduationCB, findLoveCB, haveBabyCB]

// function doAllJob(fn) {
//     if (!fn || fn.length === 0) return
//     new Promise(fn[0]).then(data => {
//         console.log("🚀 ~ data:", data)
//         doAllJob(fn.slice(1))
//     })

// }

// doAllJob(promisesFunc)
// ------------------------------------------------------------------------------------------------