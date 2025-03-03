// // დავალება N1
// function greet(){
//     console.log("Hello JS")
// }

// დავალება N2
// function RandNum(){
//     let RandomNumber = Math.floor(Math.random()*100)
//     return RandomNumber
// }
// console.log(RandNum())

// // დავალება N3
// let UserName = prompt ("Enter your username")
// function greet(x){
//     document.write(`Hello ${x}`)
// }
// greet(UserName)

// დავალება N4
// function greet(){
//     alert("This Page will use your Data")
//     document.write("Welcome")
// }
// greet()

// დავალება N5
// function check(array, number=0){
//     for(let i=0; i<array.length; i++){
//         if(array[i]==number){
//             return true
//         }       
//     return false

//     }
// }
// let arr = [10, 20, 50, 15]
// let result = check(arr, 50)
// console.log(result)

// დავალება N6
// function checker(adress){
//     for (let i=0; i<adress.length; i++){
//         if(adress[i]==="@"){
//             return true
//         }
//     }
//     return false
// }
// let email = prompt("Enter your email")
// console.log(checker(email))

// function sum(a, b){
//     return a+b
// }
// let result = (sum(10,20))
// console.log(result)

// function array(sum){
//     let total = 0
//     for (let i=0; i<sum.length;i++){
//         total += sum[i]
//     }
//     return total
// }
// let arr = [5,10,5,10]
// result = array(arr)
// console.log(result)

// function checker(num){
//     if (num % 2 == 0){
//         return true
//     }

//     return false
// }
// console.log(checker(6))

// function filterEven(numbers){
//     let evens = []
//     for (let i = 0; i<numbers.length; i++){
//         if (numbers[i] % 2 === 0){
//             evens.push(numbers[i])
//         }
//     }
//     return evens
// }
// let arr = [2,3,4,5,6,7,8]
// result = filterEven(arr)
// console.log(result)

// function findNum(numbers) {
//     let largestArr = []; 
//     for (let el of numbers) {
//         for (let i = 0; i < numbers.length - 1; i++) {
//             if (numbers[i] > numbers[i + 1]) {
//                 let temp = numbers[i];
//                 numbers[i] = numbers[i + 1];
//                 numbers[i + 1] = temp;
//             }
//         }
//     }
//     largestArr.push(numbers[numbers.length - 1]);
//     return largestArr;
// }
// let findLargest = [2, 1, 4, 6, 3];
// let result = findNum(findLargest);
// console.log(result); 

// function findNum(numbers){
//     let smallestArr = []
//     for (let el of numbers){
//         for (let i=0; i<numbers.length-1;i++){
//             if (numbers[i]>numbers[i+1]){
//                 let temp = numbers[i]
//                 numbers[i] = numbers[i+1]
//                 numbers[i+1] = temp
//             }
//         }
//     }
//     smallestArr.push(numbers[0])
//     return smallestArr
// }
// console.log(findNum([2,1,4,6,3]))

// function stringFunc(strings) {
//     let longestStr = strings[0];
//     for (let el of strings) {
//         if (el.length > longestStr.length) {
//             longestStr = el;
//         }
//     }
//     return longestStr;
// }

// console.log(stringFunc(["Hello", "Helloo", "Hellooo", "Hell"]));