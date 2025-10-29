


// 1.	შექმენით ფუნქცია რომელიც კონსოლში დაბეჭდავს „Hello JS”.
// 2.	შექმენით ფუნქცია რომელიც დააბრუნებს (return) რენდომულ რიცხვს 0 დან 100 მდე

// 3.	შექმენით ფუნქცია რომელიც html დოკუმენტში დაბეჭდავს “გამარჯობას“ და  
// იუზერის მიერ შემოყვანილ სახსლს.

// 4.	შექმენით ფუნქცია რომელიც ალერთში გამოტანს გაფრთხილებას 
// „web page will save your data“ და ალერთის გათიშვის შემდეგ html დოკუმენტში დაბეჭდავს “welcome”

// 5.	შექმენით ფუნქცია რომელიც პარამეტრად მიიღებს არაის და 
// რიცხვს და დააბრუენებს true -ს იმ შემთხვევაში თუ ეს პარამეტრად გადაცემული 
// რიცხვი არის ამ პარამეტრად გადაცემულ არაიში და false -ს თუ არ არის.


// function findArr(arr, numb) {
//     for(let el of arr){
//         if(el == numb){
//             return true
//         }
//     }
//     return false
// }


// let arrr= [10,20,30,60]
// console.log(findArr(arrr,100))

// 6.	შექმენით ფუნქცია რომელიც პარამეტრად მიიღებს სტრინგს (იმეილს) 
// და შეამოწმებს თუ არის ამ იმეილში @ ნიშანი და დააბრუნებს true ან false



//  function findInstring(email) {
//     let count = 0
//     for(let el of email){
//         // console.log(el)
//         if(el == "@"){
//             count++
//         }
//     }
//     if(count>0){
//       return true
//     }
//     else {
//         return false
//     }
//  }

// console.log( findInstring("gdsddd@dfg"))



// function findSymbol(text) {
//     return text.includes("@")
// }
// console.log(findSymbol("dddsdgfgg"))
/////////////////////////////////   


// let email = "gdsdd@ddfg"
// console.log(email.includes("@"))

// let splitedText = email.split("")
// console.log(splitedText)


//////////////////    regular fnction ჩვეულებრივი ფუნქცია

// function sum(x,y) {
//     console.log(x+y)
// }
// sum(5,3)

////////////////////////////  errow function  =>   ES 6

// let sum1 = (x,y) =>  console.log(x+y)
  
// //  let sum1 = (x,y) => console.log(x+y)


// sum1(2,4)




// function print(x) {
//     x= "fdfdfdf"
//     return `Hello ${x}`
// }
// console.log(print("User"))



// let print2 = (x) => `Hello ${x}`

// console.log(print2("User2"))




// function greeting(age) {
//     if(age > 18){
//         return "Wlcome"
//     }
//     else {
//         return "Denied"
//     }
// }

// // ? :

// let greet = (age) => age>18? "Wlcome": "Denied"

// console.log(greet(17))


////////////////////  call back როცა ფუნქციას სჭირდებაჩადგმული ფუნქცია


// let arr = [20,60,30,20,15]

//arr.every(z => z>30 )    // true false  //ყველა ელემენტს ამოწმებს მითითებული პირობით


// console.log(arr.every(el => el >20))
///true

//console.log(arr.some(el => el>50 ))    // ture false        //  ამოწმებს ზოგიერთი მაინც თუ აკმაყოფილებს მითითებულ პირობას


// let arr = [20,60,30,20,15]

// arr.forEach(el => console.log(el+10));

// for(let el of arr){

//    console.log(el)
// }

// sort  filter

// let arr = [20,100,60,30,20,15]


// console.log(arr.sort((a, b) => a-b))   //// აღმავალი  ზრდადობით
// console.log(arr.sort((a, b) => b-a))   /// დაღმავალი  კლებადობით

// console.log(arr.sort((el1, el2)=> el1-el2))
// console.log(arr.sort((el1, el2)=> el2-el1))

// console.log(arr.sort((a, b)=> b-a))
// console.log(arr.sort((a, b)=> a-b))



// let arr = [20,100,60,30,20,15]


// console.log(arr.filter(el => el >20 ))  // []
// console.log(arr.filter(el => el ==30 ))

// let names = ["James dsdf", "James Smith", "Emma Stones"]

// console.log(names.filter(el => el == "James Smith"))

// // let userInp = prompt()

// let userInp = document.querySelector("input[name='search']")
// userInp.addEventListener("input", function(){
//     console
//     .log(names
//         .filter(el => el.toUpperCase()
//         .includes(userInp.value.toUpperCase())
//     ))
// })




// console.log("TEXT".toLowerCase())

// console.log("dsdsd".toUpperCase())

// function printHello() {
//     console.log("hello")
// }





// let arr = [20,100,60,30,20,15,500,300,150,800]

// let filteredArr = arr.filter(el => el > 100)

// let sortedArrAsc = filteredArr.sort((a,b)=> a-b)
// let sortedArrDesc = filteredArr.sort((a,b)=> b-a)

// console.log(sortedArrAsc)



// let arr = [20,100,60,30,20,15,500,300,150,800]


// console.log(Math.min(...arr))
// console.log(Math.max(...arr))

// console.log(Math.max(10,50))

// console.log(Math.pow(10,2))  //  ხარისხად აყვანა
// console.log(Math.sqrt(9)) // კვადრატული ფესვი
// console.log(Math.cbrt(8)) // კუბური ფესვი




////////////////////////////////////////////////   

// function creditscore() {
//     return Math.floor(Math.random() * 101);
// }
 
// function sayhi() {
//     const userName = prompt("გთხოვთ შეიყვანოთ სახელი და გვარი:");
//     if (userName) {
//         const score = creditscore();
//         const color = score > 50 ? 'green' : 'red';
//         const message = score > 50 ? 'გილოცავთ თქვენ ბრძანდებით კარგი მოქალაქე.' : 'თქვენი წუთები დათვლილია';
//         document.body.innerHTML += `<p>მოგესალმებით, ${userName}, ${message}, Social Credit: <span style="color:${color}">${score}</span></p>`;
//     }
// }
 
// function showAlertAndGreetUser() {
//     alert("თქვენს პირად მონაცემებს აგროვებს ჩინეთის მთავრობა");
//     const userName = prompt("გთხოვთ შეიყვანოთ სახელი და გვარი:");
//     if (userName && /^[^\d]+$/.test(userName)) {
//         const score = creditscore();
//         const color = score > 50 ? 'green' : 'red';
//         const message = score > 50 ? 'გილოცავთ თქვენ ბრძანდებით კარგი მოქალაქე.' : 'თქვენი წუთები დათვლილია';
//         const additionalMessage = score > 50 ? '' : ' ჩინეთის მთავრობის მიერ';
//         document.body.innerHTML += `<p>გამარჯობა, ${userName}, ${message}${additionalMessage} <br> სოციალური კრედიტი: <span style="color:${color}; font-weight: bold; font-size: 2em;">${score}</span></p>`;
//     }
// }


// showAlertAndGreetUser()

// arr = [20,40,50,100,95,201]

// console.log(arr.sort((el1, el2) => el1 - el2))

// 1.	შექმენით ფუნქცია რომელსაც პარამეტრებად გადაეცემა სტრინგების არაი და სტრინგი. დააბრუნებს ამ არაიდან დაფილტრულ ელემენტებს რომლებიც შეიცავს ამ სტრინგს.

// let arr = ["John", "James", "Dan", "Robby", "Bobby", "Sonny"]
// function filt(arr, str){
//     let filtered = arr.filter(arr => arr.toLowerCase().includes(str.toLowerCase()))
//     return filtered
// }
// console.log(filt(arr,"James"))

// 2.	შექმენით ფუნქცია რომელსაც პარამეტრად გადაეცემა რიცხვების არაი და ორი რიცხვი, დააბრუნებს ისეთი რიცხვების არაის რომლებიც პარამეტრად გადაცემული 
// არაიში არსებობენ და თავსდებიან პარამეტრად გადაცემულ ორ რიცხვს შორის ინტერვალში.

// function func(arr, num1, num2){
//     let min = Math.min(num1, num2)
//     let max = Math.max(num1, num2)
//     let filtered = arr.filter(el => el>min && el<max)
//     return filtered

// }
// arr = [5,10,30,15,25,13]
// console.log(func(arr,11,32))

// 3.	შექმენით ფუნქცია რომელსაც პარამეტრად გადაეცემა სიტყვა და წინადადებების არაი. 
// დააბრუნებს true -ს თუ ყველა წინადადება შეიცავს ამ სიტყვას.

// let func = (word, sentence) => sentence.every(el => el.includes(word))
// let word = "dog"
// let sentences = [
//   "I have a dog in my house.",
//   "The neighbor’s dog is very friendly.",
//   "Every child loves a dog story."
// ];
// console.log(func(word,sentences))

// 4.	შექმენით ფუნქცია რომელსაც პარამეტრად გადაეცემა რიცხვი და რიცხვების არაი. დააბრუნებს true -ს 
// თუ ზოგიერთი რიცხვი მაინც მეტია ამ არაიში პარამეტრად გადაცემულ რიცხვზე.

// let func = (arr, num) => arr.some(el => el>num)
// let array = [10,20,30,40]
// let num = 39
// console.log(func(array,num))

// 1.	შექმენით ფუნქცია რომელსაც პარამეტრად გადაეცემა არაი და დააბრუნებს არაის 
// სადაც გვექნება პარამეტრად გადაცემული არაის ყველა ელემენტი გამრავლებული 10

// let func = (arr) => arr.map(el => el*10)
// console.log(func([1,2,5,10]))

// let arr = [1,2,5,10]
// let vv = []
// arr.forEach(el => vv.push(el*10))
// console.log(vv)