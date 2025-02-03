// js - o o p   --  ინკაფულაცია

//   გამომტანი ფუნქციები

// console.log(100)
// alert(100)
//  document.write(100)


//   შემტანი ფუნქციები

// prompt(100)   //  ტექსტი
//  confirm(100)   ///  true ან false



 //////////   ტექსტი რიცხვი

//  console.log(100+100)
//  console.log("100"+"100")
//  console.log("hello")
// //  console.log(hello) // error


// console.log("hello")
// console.log('hello')
// console.log(`hello`)  ///  დამატებითი პლიუსი აქვს 


// confirm("I will use your data")
// alert(`hello`)

/////////////   მონაცემთა ტიპები   data types
           //  number   100    10,5 
           //  string   ტექსტი "ფ" "ფდფგფჰ ფფდგ"
          //   boolean =   true / ჭეშმარიტია false / მცდარია
          //   null   -  სიცარიელე
          //   undefiend  - არ არის განსაზღვრული
          //   object -  მომავალში გავივლით



///////   ცვლადი  variable
         // ცვლადის ინიციალიზება, გამოცხადება, დეკლარირება

  //  ES6  

//   var x = 15
//     console.log(x)
//   var t123456 = "hi user"
//   var text1 = "ddsds"
//   var text2 = "hi"


// //   console.log(text1)
// //   console.log(x)
// document.write(x)


// var x = 20
// x = 30


// console.log(x)


      ////  var რომლის რედეკლარიირებაც შეიძლება და ვალიუს ცვლილებაც
      ////   let --  რედეკლარირება არ შეიძლება მაგრამ ვალიუს ცვლილება შეიძლება
      ////   const   კონსტანტა -  რომლიც არც რედეკლარიება შეიძლება და არც ვალიუს ცვლილება


//  const  y = 5
//  console.log(y)     

//  y=10  /// error
//  const y   // error


// const pi = 3.143
// const weekDayes = 7

/////////////////////////

//  let  z = 5
// console.log(z)
// document.write(z)
// z=15
// console.log(z)
// document.write(z)
// let z ///   error
//////////////////////// 



// let userName = prompt("Enter your age")
// document.write(userName)


// let isAlllowed 

// isAlllowed = confirm("agree if you need to be allowed")

// console.log(isAlllowed)

// console.log(confirm("agree if you need to be allowed"))


// let x
// console.log(x)



// let userName = null
// console.log(userName)
// userName = prompt()
// console.log(userName)



/// იუზერს შემოაყვანინეთ ასაკი
//  შევამოწმოთ თუ 6 დან 18 მდეა დაუბეჭდეტ "უფასო"
// თუ 18 დან 60 მდეა მაშინ  დაუბეჭდეტ "მთლიანი ფასი"
// თუ 60 მეტია მაშინ დაუეჭდეთ "ნახევარი ფასი"
// გაითვალისწინეთ რომ იუზერმა შეიძლება შეცდომა დაუშვას  
// და თუ დაუშვა
// მაშინ კონსოლში დაუვეჭდეთ "არასწორი ინფუთი"

let userAge = Number(prompt())

if (userAge > 6 && userAge < 18) {
      console.log("უფასო")
}
else if (userAge > 18 && userAge < 60){
      console.log("მთლიანი ფასი")
}
else if (userAge > 60){
      console.log("ნახევარი ფასი")
}
else {
      console.log("არასწორი ინფუთი")
}