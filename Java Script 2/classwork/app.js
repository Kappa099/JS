

// მონცემთა ტიპები     
// შემომტანი და გამტანი ფუნქციები
// ცვლადის დეკლარირება





////   ოპერტორები  (მატემატიკური ოპ : + - / *  %)

// '' ""  ``
// console.log(5*3)
// console.log('5'*'3')

// // NaN not a number
// console.log('five'*'3')


// console.log(5+3)
// console.log(Number('5'+ "3") )// + Number('3'))   //5+3
// console.log('5'+'3')

// console.log("hello"  +  " User")


// //NaN
// let userAge =Number(prompt("enter age"))

// console.log(userAge+1)

///////////   %  მოდულო - რიმაინდერი ნაშთი

//  console.log(5/2)   //  2 და ნაშთი 1

//  console.log(8%3)   //   ნაშთი 1

//  60

//  15
//  console.log(60%15)


//////////////////////// შედარების ოპერატორები    >  <  >=  <=
                                  //         ==   !=   არამკაცრი  ამოწმებს მარტო ვალიუებს და ტიპებს არ ამოწმებს
                                  //  ===    !==  მკაცრი შედარება
// let validAge = 18
// let userAge = 25
// console.log(userAge>=validAge)  // true

// let life = 3


// console.log(5<2)  // false

// console.log(life==0) // game over
// console.log(5!=6)

// console.log(5=='5')  // true
// console.log(5==='5')  // false

// console.log("5" != 5)  // true
// console.log("5" !== 5) // false



////////////////////      ლოგიკური ოპერატორები
                    //   && - და კავშირი  ||  ან კავშირი   !

// console.log(5>7 && 3>1)                    
// console.log(5>7 || 3>1)    

                            
// let validAge = 18
// let pansionAge = 65
// let userAge =Number(prompt("enter user age"))
// console.log(userAge>=validAge && userAge <=pansionAge)


// console.log(userAge<validAge || userAge >pansionAge)


// console.log(!(5>3))  // false



///////////  if else   -  პირობა / სთეითმენთი      // swich case

// let validAge = 18
// let pansionAge = 65
// let useArge = 15

// if(useArge>validAge){  // false
//     console.log("hi")
//     console.log("Wlcome")
// }
// else if(useArge>pansionAge){  // false
//     console.log("Welcome free")
// }
// else if(6>2){  // true
//     console.log("this is from else ifffff")
// }

// else if(6>1){  // true
//     console.log("this is from else ifffff")
// }
// else if(6>10){  // false
//     console.log("this is from else ifffff")
// }
// else {  ///  თუ არა და 
//   console.log("this is from else")
// }








/// იუზერს შემოაყვანინეთ ასაკი
//  შევამოწმოთ თუ 6 დან 18 მდეა დაუბეჭდეტ "უფასო"
// თუ 18 დან 60 მდეა მაშინ  დაუბეჭდეტ "მთლიანი ფასი"
// თუ 60 მეტია მაშინ დაუეჭდეთ "ნახევარი ფასი"
// გაითვალისწინეთ რომ იუზერმა შეიძლება შეცდომა დაუშვას  
// და თუ დაუშვა
// მაშინ კონსოლში დაუვეჭდეთ "არასწორი ინფუთი"



let userAge = Number(prompt("enter your age"))
let nationality = prompt("enter  GEO if  you are Georgian")
// // 6 ზე დაბალი -100
// // 0 დაბალი -50   "დსფდდგ"


    if(!isNaN(userAge)){
        if(userAge>=6 && userAge<18 ){
            if(nationality == "GEO"){
                console.log("უფასო")
            }
            else {
                if(nationality == "ARM"){
                    console.log("უფასო")
                }
                else {
                    console.log("ნახევარი ფასი")
                }
            }
        }
        else if(userAge>=18 && userAge<60){
            console.log("მთლიანი ფასი")
        }
        else if(userAge >= 60){
            console.log("ნახვარი ფასი")
        }
        else if(userAge >=0 && userAge<6){
            console.log("შეუსაბამო ასაკი")
        }
    }
    else {
        console.log("არასწორი ინფუთი")
    }
   

// console.log(Number('-100'))
// // NaN
// console.log(Number('-dsd'))
// console.log(isNaN("100"))   ///  false
// console.log(isNaN("sddsdsd"))   // true


// console.log(!isNaN(100))




