

// let arr = [10,20, 150,30,80,100]
//     //      0  1  2    3  4  5 

// for(let el of arr){
//     for(let i = 0; i < arr.length-1; i++){
//         console.log(150, 30)
//          if(arr[4]> arr[5]){
//             let x = arr[i] //150
//             arr[i] = arr[i+1]  // 10
//             arr[i+1] = x  // 20
//          }
//     }
    
// }


// console.log(arr)





// let arr = ["dsds","fddf","dfdfdf","tdttsrdr"]

// for(let el of arr){
//     console.log(el)
// }


// for(let index in arr){  //  ყველა ინდექსსი არაიდან  0 1 2 3
//   console.log(index)
//   console.log( arr[index])
// }






//  let arr = [10,20, 150,30,80,100]

//  let sum=0
// let smallerPart =[]
// let biggerPart=[]
//  for(let el of arr){
//     sum+=el
//  }
// //  console.log(sum/arr.length)


//  for(let el of arr){
//    if(el< sum/arr.length){
//     smallerPart.push(el)
//    }
//    else {
//     biggerPart.push(el)
//    }
//  }




// for(let el of smallerPart){
//     for(let i = 0; i < smallerPart.length-1; i++){
//          if(smallerPart[i]> smallerPart[i+1]){
//             let x = smallerPart[i] 
//             smallerPart[i] = smallerPart[i+1]  
//             smallerPart[i+1] = x  
//          }
//     }
    
// }

// for(let el of biggerPart){
//     for(let i = 0; i < biggerPart.length-1; i++){
//          if(biggerPart[i]> biggerPart[i+1]){
//             let x = biggerPart[i] 
//             biggerPart[i] = biggerPart[i+1]  
//             biggerPart[i+1] = x  
//          }
//     }
// }

// console.log(smallerPart)
// console.log(biggerPart)
// console.log(smallerPart.concat(biggerPart))

// let sortedArr = smallerPart.join(biggerPart)

// console.log(sortedArr)





///////////////////////////////////////////    functions


function print(userName) {
    return ` ${userName}`
}




// let greetingEng ="hi"
// let greetingGeo ="გამარჯობა"

// // print("hi");
// // print("გამარჯობა");

// print(greetingEng)
// print(greetingGeo)

// print("123")
// print(15)





//////////////////   function with 2 params

function sumNumber(num1=0, num2=0) {
    document.write(`${num1} + ${num2} = ${num1+num2}`)
}

// sumNumber(40,10)



//////////////////// func with many parameters

function multiply(x=1,y=1,g=1,b=1) {
     document.write(x*y*g*b)
}


// multiply(1,5,2)


// სპრედ ოერატორი spread operator  ES 6 

// function sum(...x) {
//     // console.log(x)
//     let sum =0
//     for(let el of x){
//             sum+=el
//     }
//     document.write(sum)
// }

// sum(20,50,30,80,10,30,70,80,90)







///ვალიუ ტიპები
// let x = 5
// let y = x

// x=10
// y=7

// რეფერენს ტიპი   object

// let arr1 = [10,60,50,30]
// let arr2 = arr1  // c/sdsd/fddf/vcvvd    [10,60,50,30]


// arr2[0] = 500

// console.log(arr1)
// console.log(arr2)


//  let arr1 = [10,60,50,30]

//  let arr2= [...arr1]


// arr2[0] = 500

// console.log(arr1)
// console.log(arr2)


// void რომელიც არაფერს არ აბრუნებს

//////////////////////////////////////  function wiith value return

// return


// function sum(num1,num2) {
//     return `${num1} + ${num2} = ${num1+num2}`
// }

// // let sumForNummber = sum(5,30)
// // console.log(sumForNummber)

// console.log(sum(50,30))
// document.write(sum(50,30))

// alert(sum(50,30))


///////////////  single respon

// function getRandomColor() {
//     let r = Math.round(Math.random()*255)
//     let g = Math.round(Math.random()*255)
//     let b =Math.round(Math.random()*255)
//     let randomColor = `rgb(${r},${g},${b})`
//     return randomColor
// }

// function makeArr(x) {
//     let arr = []
//   for(let i=0; i<x; i++){
//     arr.push(getRandomColor())
//   }
//   return arr
// }



// console.log(makeArr(10))



// console.log(getRandomColor())




// function greet(){
//   console.log("Hello JS")
// }

// greet()

// function rand(){
//   let num = Math.round(Math.random()*100)
//   return num
// }

// console.log(rand())

// function greet(name){
//   console.log(`Hello ${name}`)
// }

// greet(prompt())

// function warning(){
//     console.log("Welcome")
// }

// warning(alert("This website will use your data"))

// 5.	შექმენით ფუნქცია რომელიც პარამეტრად მიიღებს არაის და რიცხვს და დააბრუენებს true -ს
//  იმ შემთხვევაში თუ ეს პარამეტრად გადაცემული რიცხვი არის ამ პარამეტრად გადაცემულ არაიში და false -ს თუ არ არის.

// function func(array, num) {
//   for (let el of array) {
//     if (num === el) {
//       return true;  
//     }
//   }
//   return false;     
// }

// let funct = func([10, 20, 30, 40, 50], 60);
// console.log(funct);

// 6.	შექმენით ფუნქცია რომელიც პარამეტრად მიიღებს სტრინგს (იმეილს) და შეამოწმებს თუ არის ამ იმეილში @ ნიშანი და დააბრუნებს true ან false

function validator(email){

  for (let i = 0; i< email.length ; i++){
    if (email[i] == "@"){
      return true
    }
  }
  return false
}
console.log(validator("vako.kapa@gmail.com"))