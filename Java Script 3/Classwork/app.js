



///ავაწყოთ კალკულატორი if/else /else if-ის დახმარებით.
// მომხმარებელს შემოვაყვანინოთ რიცხვი,შემდეგ არითმეტიკული ოპერატორი,
// შემდეგ ისევ რიცხვი და დავბეჭდოთ მიღებული შედეგი კონსოლში.
// მაგალითად მომხმარებელმა შემოიყვანა 
//10,შემდეგ “+”,შემდეგ 20,კონსოლში უნდა დაიბეჭდოს 30 




// let num1 = Number(prompt("enter first numebr"))

// let opp = prompt("enter opperation")

// let num2 = Number(prompt("enter second numebr"))


// console.log(num1 + " " + opp + " " + num2)
// console.log(`${num1} + ${num2} = ${num1+num2} `)

// სტრინგის ინტერპოალცია = სტრინგის გმოსახვა


// if(!isNaN(num1) && !isNaN(num2)){
//     if(opp == `+`){
//         // document.write(`${opp}`)
//         // document.write(num1 + opp + num2 + "=" + num1+num2 )
//         document.write(`${num1} + ${num2} = ${num1+num2} `)
    
//     }
//     else if(opp == '-'){
//         document.write(`${num1} - ${num2} = ${num1-num2} `)
//     }
//     else if(opp == '*'){
//         document.write(`${num1} * ${num2} = ${num1*num2} `)
//     }
//     else if(opp == '/'){
//         if(num2 == 0){
//             document.write("devide by zero is not suported")
//         }
//         else {
//             document.write(`${num1} / ${num2} = ${num1/num2} `)
//         }
//     }
//     else {
//         document.write("wrong opperation")
//     }   
// }
// else {
//     document.write("we need numberd")
// }




// if(isNaN(num1)){
//    document.write("enter num1 coreect numebr")
// }
// else if(isNaN(num2)){
//     document.write("enter num2 coreect numebr")
// }
// else {
//     if(opp == `+`){
//         // document.write(`${opp}`)
//         // document.write(num1 + opp + num2 + "=" + num1+num2 )
//         document.write(`${num1} + ${num2} = ${num1+num2} `)
    
//     }
//     else if(opp == '-'){
//         document.write(`${num1} - ${num2} = ${num1-num2} `)
//     }
//     else if(opp == '*'){
//         document.write(`${num1} * ${num2} = ${num1*num2} `)
//     }
//     else if(opp == '/'){
//         if(num2 == 0){
//             document.write("devide by zero is not suported")
//         }
//         else {
//             document.write(`${num1} / ${num2} = ${num1/num2} `)
//         }
//     }
//     else {
//         document.write("wrong opperation")
//     }   
// }




//მომხმარებელს შემოაყვანინეთ 3 რიცხვი და 
// დაადგინეთ ამ რიცხვების სიგრძის გვერდებით შეიძლება 
// თუ არა შეიქმნას სამკუთხედი (სამკუთხედის თეორემა 
// - სამკუთხედის ნებმისმიერი ერთი გვერდის იგრძე 
// ნაკლები 
 //უნდა იყოს სხვა ორი გევრდის სიგრძის ჯამზე)


//  let num1 = Number(prompt("enter 1 numebr"))
//  let num2 =Number(prompt("enter 2 numebr"))
//  let num3 =Number(prompt("enter 3 numebr"))
 

//   if(num1 + num2 > num3 && num2+num3 > num1 && num3+num1 > num2){
//        console.log("thrianglee is valid ")
//   }
//   else {
//     console.log("thrianglee is not valid ")
//   }
 
// 5+=2  
// 5+=2 
// 5+=1
// 5++
/////////////////////   loop  ციკლი 

//  I C U
// iterator  iteration

// for(let i = 10; i>=0; i--){
//   console.log(i)
// }



for(let i = 1; i<100; i+=2){
    console.log(i)
  }