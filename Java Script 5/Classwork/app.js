// დავალება 1
// დააგენერირეთ რენდომული რიცხვი  100 დან 200 მდე 
// ასევე  დააგენერირეთ რენდომული რიცხვი 300 დან 400 მდე და 
// ამ მიღებულ რიცხვებს შორის ინტერვალში დაბეჭდეთ კონსოლში 
// ყველა ლუწი რიცხვი

// დავალება 2
// დააგენერირეთ რენდომული რიცხვი 100 დან 200 მდე
// მომხმარებელს შემოაყვანინეთ რიცხვი 300 დან 400 მდე და 
// კონსოლში დაბეჭდეთ ყველა 3-ის ჯერადი რიცხვი რენდომულ რიცხვსა
// და მომხმარებლის რიცხვის შორის

//  let min = 100
//  let max = 200

//  let random = Math.round(Math.random()*(max-min)+min)
//  let userNam =Number(prompt("enter number from 300 to 400"))
//   /// 152       350  === 200 / 70
//  if(!isNaN(userNam) && userNam > 300 && userNam <400){
//     if(random%3==0){
//         for(let i=random; i<userNam; i+=3){
//             console.log(i)
//         }
//     }
//     else if(random%3==1){
//         for(let i=random+2; i<userNam; i+=3){
//             console.log(i)
//         }
//     }
//     else if(random%3==2){
//         for(let i=random+1; i<userNam; i+=3){
//             console.log(i)
//         }
//     }
   
//  }
//  else {
//      console.log("you did not write correct number")
//  }

// --------------------------  version 2

// if(!isNaN(userNam) && userNam > 300 && userNam <400){
//         for(let i=random+3-(random%3); i<userNam; i+=3){
//             console.log(i)
//         }
//  }
//  else {
//      console.log("you did not write correct number")
//  }





//დავალება 3
//დააგენერირეთ რენდომული რიცხვი 10 დან 20 მდე. 
//მომხმაერბელს შემოაყვანინეთ რიცხვი 
//10 დან 20 მდე თუ ეს რიცხვები ერთმანეთს დაემთხვა მაშინ დაწერეთ true თუ არა და false.


 //დავალება 4
// პროგრმამ შექმნას რენდომული რიცხვი 100 დან 300 მდეე და 
//შეამოწმეთ ეს რიცხვი კენტია თუ ლუწია 
//და პასუხი დაბეჭდეთ კონსოლში.


//დავალება 5
//შექმენით ერთი და იგივე რიცხვებისგან შედგენილი ორი არაი. 
//ორივე არაიდან ამოიღრეთ რენდომული ელემენტი 
//და თუ ეს ელემენტები ერთმანეთ დაემთხვევა დაბეჭდეთ კონსოლში 
//true თუ არა და false


// -------------------------------  array metod
        /// push - არაის ბოლოში ამატებს ელემენტს
        // pop - არაის ბოლო ელემეტს წაშლის
       //  unshift - არაის წინ ამატებს ელემენტს
        // shift - არაის წინიდან წაშლის ელემენტს

// let arr = [80,60,30]
//     //      0   1  2

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.push(700)
// arr.push(900)
// arr.push(5)
// console.log(arr)

// arr.pop()
// console.log(arr)


// arr.unshift(500)
// console.log(arr)


// arr.shift()
// console.log(arr)


//  let arr = []
//  let min = 10
//  let max = 100

//  for(let i=0;i<10;i++){
//     let random = Math.round(Math.random()*(max-min)+min)
//     arr.push(random)
//  }

//  console.log(arr)


//////////////////   slice   //  დანაწევრება
                        // ორი პარამეტრი სჭირდება ორვი არის ინდექსები საიდან სადამდე ამოიღოს ნაჭერი
//                   splice  //  ამოჭრა
                    // ორი პარამეტრიდან პირველი არის ინდექსი და მეორე რაოდენობა



// let arr = [50,60,30,60,90,40,10,20,30]

// console.log(arr.slice(0,3))
// console.log(arr.slice(3,6))
// console.log(arr.slice(6,9))

// console.log(arr)



// console.log(arr.splice(3,2)) 
// console.log(arr)


// console.log(arr.splice(length-1,1)) 
// console.log(arr)


//////////////////////////////  for of   for in   // მხოლოდ არაისთვის  ES 6 

// let arr = [20,30,60]
// for(let i = 0; i<100; i++){
//     console.log(i)
// }

// for(let i = 0; i<arr.length; i++){
//    console.log(arr[i])
// }


// for(let el of arr){
//   console.log(el)
// }

// for(let ind in arr){
//     console.log(arr[ind])
// }
  



let arr = [100, 80, 20,30,60]

for(let el of arr){
    for(let i=0; i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
          let temp = arr[i]
          arr[i] = arr[i+1]
          arr[i+1] = temp
        }
      }
}
console.log(arr)





///////////////////////////  while   do while

// for(let i = 0; i<5; i++){
//     console.log(i)
// }




// let x = 0
// while(x<5){
//     console.log(x)
//     x++ 
 
// }
// console.log(x)




// let pass = 123
// let userPass = prompt("enter your password")

// while(pass!=userPass){
//     userPass = prompt("enter your password")
// }

// document.write("Wlcome")





///  do while

// let pass = 123
// let userPass = prompt("enter your password")
// do{
//     userPass = prompt("enter your password")
// }
// while(pass!=userPass)




//////////////////////  break ლუპის გაჩერება
//      continue - გამოტოვება

let x = 0
while(x<5){
    x++ 
    if(x==3){
        continue
    }
    console.log(x)
}

