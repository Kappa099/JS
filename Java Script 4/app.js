

//დავაალება 1
//მომხმარებელს შემოაყვანინეთ რიცხსვი 50 დან 100 მდე და დაბეჭდეთ ყველა
//მესამე რიცხვი მომხმარებელის მიერ შემოყვანილ რიცხვამდე.

// let userNum =Number(prompt("enter number - from 50 - 100"))

// if(!isNaN(userNum)){
//     if(userNum>=50 && userNum<=100){
//         for(let i=0; i<=userNum; i+=3){
//             console.log(i)
//         }
//     }
//     else {
//         console.log("enter number - from 50 - 100")
//     }
// }
// else {
//     console.log("you did not enter numbers")
// }



    // if(isNaN(userNum)){
    //     console.log("you did not enter numbers")
    // }
    // else if(userNum>=50 && userNum<=100){
    //     for(let i=0; i<=userNum; i+=3){
    //         console.log(i)
    //     }
    // }
    // else {
    //     console.log("enter number - from 50 - 100")
    // }



// console.log(typeof userNum)


//დვალება 2
// შექმენით რიცხვების არაი და იპოვეთ 
// ამ არაიში არის თუ არა რიცხვი 10 და 
// თუ არის კონსოლში დაბეჭდეთ true თუ არა და 
// false.
//  iterator

//  let arr = [20,30,60,20, 10]
//       //     0  1  2  3   4
//  for(let i=0; i<arr.length; i++){
//       console.log(arr[i])
//     if(arr[i]==10){
//         console.log(true)
//     }
//     else {
//         console.log(false)
//     }
//     console.log(arr[i]==10)
//  }



// let arr = [20,30,60,10,20,60]
// let count = 0
// //     0  1  2  3   4

// for(let i=0; i<arr.length; i++){
//     if(arr[i]==10){
//         count++
//     }
// }

// console.log(count>0)


/////// vako version
// let arr = [20,30,60,20,60]
// let find = false
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==10){
//         find = true
//     }
// }
// console.log(find)


//დავალება 3
// შექმენით სტრინგების მასივი , და კონსოლში 
// დაბეჭდეთ ყველა ელემენტის პირველი ასო 

// let text = "text"
//          // 0123
// console.log(text[0])  // t

// let strArr = ["Text", "Hello", "World"]
// for(let i=0; i<strArr.length; i++){
      
//       let textElement = strArr[i]
//       console.log(textElement[0])
// }


//დავალება 4
//შექმენით რიცხვების არაი და კონსოლში დაბეჭდეთ 
// ამ არაიდან ყველა ის წევრი რომელიც 
// //მეტია 10 -ზე და ნაკლებია 100-ზე.

// let arr = [10,15,20,30, 200]
// for(let i = 0; i <arr.length; i++){
    
//     if(arr[i]>10 && arr[i]<100){
//         console.log(arr[i])
//     }
// }



// console.log()
// document.write()
// alert()
// prompt()
// confirm()


// isNaN()
// Number()

// Math.round() // მათემატიკური დამრგვალება

// 0 1 2 3 4  მრგვალდება ქვემოთ
// 5 6 7 8 9  მრგვალდება ზემოთ
// console.log(Math.round(0.6)) //1
// console.log(Math.round(0.3))  // 0
// console.log(Math.round(1.8))  // 2
// console.log(Math.round(3.1))  // 3

//Math.floor()  ///  მრგავლდება ყოვეთვის ქვემოთ
// console.log(Math.floor(3.9))   // 3

// Math.ceil() ///  მრგავლდება ყოვეთვის ზემოთ
// console.log(Math.ceil(3.2)) // 4


//Math.random() //  აბრუნებს რენდომულ - შემთხვევით რიცხვს 0 დან 1 მდე
// console.log(Math.round(Math.random()*100+50)) // 50 dan 150 mde
// console.log(Math.round(Math.random()*100)+50)

// console.log(Math.round(Math.random()*200+100))
// 1000  dan 1500 mde
// console.log(Math.round(Math.random()*500+1000))

// let min = 5
// let max = 300

// console.log(Math.round(Math.random()*(max-min)+min))



/////////////  დააგენერირეთ რენდომული რიცხვი 300 დან 400 (350)
//  მდე და დაბეჭდეთ 
// ყველა რიცხვი ამ რენდომულ რიცხვამდე
// console.log(Math.round(Math.random()*100+300))

// let randomNum = Math.round(Math.random()*100+300)
// console.log(randomNum)

// for(let i=0; i<randomNum; i+=5){
//    console.log(i)
// }


/////////   პასკოდი 4 ნიშნა
// 1000 10000
// console.log(Math.floor(Math.random()*9000+1000))


/// randomi არაიდან
// let arr = [1020,3020,3050,6214,5555]

// let randInd = Math.floor(Math.random()*arr.length)

// console.log(arr[randInd])


//////////////////  rgb(20,60,30)
// let min = 0
// let max = 255

// let r = Math.round(Math.random()*(max-min)+min)
// let g = Math.round(Math.random()*(max-min)+min)
// let b = Math.round(Math.random()*(max-min)+min)
// let randColor = `rgb(${r},${g},${b})`


// let r = Math.round(Math.random()*255)
// let g = Math.round(Math.random()*255)
// let b = Math.round(Math.random()*255)
// let randColor = `rgb(${r},${g},${b})`


// // document.body.style.backgroundColor = randColor
// console.log(randColor)



let arr = [10,20]
arr.push(15)
arr.unshift(5)