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
// let array = [5, 6, 7, 8, 11]
// let result = array.some(num => num %2 == 0) && array.every(num => num > 0)
// console.log(result)
// // დავალება N1
// function strArr(arr, str){
//     let filtered = arr.filter(el => el.includes(str))
//     return filtered
// }
// let array = ["James Brown", "John Dean", "Jonathan Smith", "James White"]
// let string = "James"
// result = strArr(array,string)
// console.log(result)

// დავალება N2
// function mainFunc(numArr, num1, num2) {
//     let filtered = [];
    
//     for (let i = 0; i < numArr.length; i++) {
//         if (numArr[i] >= num1 && numArr[i] <= num2) {
//             filtered.push(numArr[i]);
//         }
//     }

//     return filtered;
// }

// let arr = [20, 15, 35, 50, 1, 3, 5, 10, 20, 37];
// let firstNum = 10;
// let secondNum = 35;
// let result = mainFunc(arr, firstNum, secondNum);
// console.log(result);

// დავალება N3
// function mainFunc(str,arr){
//     return arr.every(el => el.includes(str))
// }
// let array = ["Bruh", "Bruh", "Bruh"]
// let string = "Bruh"
// result = mainFunc(string,array)
// console.log(result)

// // დავალება N4
// function mainFunc(num,arr){
//     return arr.some(el => el>num)
// }
// let number = 20
// let array = [10,15,21,13,12]
// console.log(mainFunc(number,array))

// // დავალება N5
// function mainFunc(arr){
//     let multiplied = []
//     for (let el of arr){
//         multiplied.push(el*10)
//     }
//     return multiplied
    
// }
// let array = [2,5,10]
// console.log(mainFunc(array))
