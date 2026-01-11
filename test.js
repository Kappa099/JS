
// function Greeting(name){
//     return `Hello ${name}`
// }
// const user = prompt("What is your name")
// document.write(Greeting(user))


// function Warning(){
//     return alert("This website will use your data")
// }

// Warning()
// document.write("Welcome")

// function Func(arr, num){
//     let resp = false
//     if (arr.includes(num)){
//         resp = true
//     }
//     return resp
// }
// const arr = [1,2,3,4,5,6,7]
// const num = 3
// console.log(Func(arr, num))

// const a = 10
// const b = 15
// let result = (a > b) ? ("A") : ("B")
// console.log(result)

// function OddEvenCounter(arr){
//     let evenCount = 0
//     let oddCount = 0
//     for (let el of arr){
//         if (arr[el] % 2 == 0){
//             evenCount ++
//         }
//         else {
//             oddCount ++
//         }
//     }
//     return `Even number amount: ${evenCount}. Odd Number amount: ${oddCount}`
// }
// let arr = [1,2,3,4,5,6,7]

// console.log(OddEvenCounter(arr))

let arr = [1,2,3,4,5,6,7]
let doubled = arr.map(el => el*2)
console.log(doubled)
// console.log(arr.filter(el => el % 2 == 0))
// console.log(arr.sort((a , b)=>a - b))

// Defining a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Vako", 25);
person1.greet(); 

