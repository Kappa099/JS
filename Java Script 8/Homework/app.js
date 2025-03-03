// function mainFunc(num){
//     while (num > 0){
//         console.log(num)
//         num--
//     }
// }
// let number = 5
// mainFunc(number)

// function mainFunc(arr, num1, num2){
//     return arr.filter(el => (el>num1 && el<num2))
// }

// let array = [5,7,10,9,11,23,29,50,12]
// let number1 = 10
// let number2 = 50
// console.log(mainFunc(array, number1, number2))

// let arr = [2, 4, 6, 8, 10]
// arr.forEach(num =>{
//     console.log(Math.pow(num,2))
// })

// let arr = [2, 3, 4, 5, 6, 7, 8, 10];
// arr.forEach(num => {
//     num % 2 == 0 ? console.log(num) : null;
// });

// function mainFunc(arr){
//     arr.forEach(num => num * 3)
//     return arr;
// }   
// let array = [5, 6, 7, 8]
// console.log(mainFunc(array))
// let array = [5, 6, 7, 8, 11]
// // let result = array.every(num => num > 0);
// // console.log(result)
let array = [5, 6, 7, 8, 11]
let result = array.some(num => num %2 == 0) && array.every(num => num > 0)
console.log(result)