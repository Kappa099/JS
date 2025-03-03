


// let arr= [10,60,30,20]


// // =>
// // arr.some
// // arr.every
// // arr.filter
// // arr.sort
// // arr.forEach


// console.log(arr.some(el => el>50))   // true
// console.log(arr.every(el => el>50))   // false
// console.log(arr.filter(el => el<30))   // [20,10]



// arr.forEach(el => console.log(el))

// for(let el of arr){
//   console.log(el)
// }



// let strArr = ["Hello world", "javascript", "Angular", "python"]


// console.log(strArr.filter(el => el.toLowerCase().includes("hel".toLowerCase())))  // ["Hello world"]



// function greeting(greet) {
//     return `${greet} User`
// }
// console.log(greeting("Hello"))
// document.write(greeting("Hi"))


// let greeting2 = x => `${x} User`

// greeting2("Hello")



// function print() {
//     //  let userName = "John"
//     return `hi  ${userName} hi `
// }

// let print2 = () => `hi`
// console.log(print2())

// console.log(print())

// let greet = print()  // "hi"


// document.write()

// DOM document object model

//5.	შექმენით ფუნქცია რომელსაც პარამეტრად გადაეცემა არაი 
// და დააბრუნებს არაის სადაც გვექნება პარამეტრად გადაცემული 
// არაის ყველა ელემენტი გამრავლებული 10

// function getArr(arr) {
//     let arrNew = []
//     for(let el of arr){
//         arrNew.push(el*10)
//     }

//     return arrNew
// }

// let arrNum = [5,7,3,6,1,4]

// console.log(getArr(arrNum))




// let arrNum = [5,7,3,6,1,4]

// function getArr2(arr) {
//     let arrNew = []
//     arr.forEach(el => {
//         arrNew.push(el*10)
//     });
//     return arrNew
// }
// console.log(getArr2(arrNum))


// function getArr2(arr) {
   
//     arr.forEach(el => {
//        console.log(el*10)
//     });

// }

// getArr2(arrNum)



// function getArr(arr) {
//      return arr.map(el => el*10)
// }

// console.log(getArr(arrNum))




// let print = (greet, userName) => greet


// let arrNum = [5,7,32,6,1000,4]
                                  
// console.log(arrNum.sort((el1, el2)=>el1-el2))  /// ზრდადობით asc
// console.log(arrNum.sort((el1, el2)=>el2-el1))  /// კლებადობით desc


// let userPass = prompt("enter password")
// // 97 122
// // console.log("a".charCodeAt())
// let countSmallLet= 0
// let countBigLet= 0
// let countNumbers = 0
// let countSymbols = 0

// for(let el of userPass){
//     if(el.charCodeAt() >=97 && el.charCodeAt() <= 122){
//         countSmallLet++
//     }
//     else if(el.charCodeAt() >=65 && el.charCodeAt() <= 90){
//         countBigLet++
//     }
//     else if(el.charCodeAt() >=48 && el.charCodeAt() <= 57){
//         countNumbers++
//     }
//     else if((el.charCodeAt() >=33 && el.charCodeAt() <= 47) 
//             || (el.charCodeAt() >=58 && el.charCodeAt() <= 64)){
//         countSymbols++
//     }
// }


// if(userPass.length >=8 && countSmallLet>=1 
//     && countBigLet >=1 && countNumbers >=1 
//     && countSymbols >=1){
//     alert("pass valid")
// }
// else {
//     alert("pass invalid")
// }




//65 122

// let randomNum = Math.round(Math.random()*57 +65)

// console.log(String.fromCharCode(randomNum)) // "B" "dfDgTd"




// function randomString(numOfSymbols) {
//     let strArr= []

// for(let i=0; i<numOfSymbols;i++){
//     let randomNum = Math.round(Math.random()*57 +65)
//     strArr.push(String.fromCharCode(randomNum))
// }

//  let randPass = strArr.join("")
//   return randPass

// }


// let User1Pass = randomString(10)
// console.log(User1Pass)



//////////////////////////////////    object

// number string boolean null undefined   //  value types
// let num = 10



// let arr = [20,30,90,30]
//        //  0   1

// // object   /// reference type  მისამართი    ///   key value pairs
// //   მახასიათებელი property
// // ,

// // o o p     ---  ინკაფსულაცია  

// // J S O N   სინტაქსი  
// // `
// // {
// //     "userName": "John",
// //     "age" : 50,
// //     "paswword" : "sdfdhj",
// //     "address" : "dfg",
// //     "email" : "fgfg",
// //     "immage" : "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
// // }
// // `




// let objUser = {
//     userName: "John",
//     age : 16,
//     paswword : {
//         passValueCurent : "dsdfg",
//         lastUpdate : "12,02,2025",
//         passValueOld : "dsfghj"
//     },
//     email : "fgfg",
//     immage : "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
//     isActive : true,
//     followers : ["James", "Emma"],
//     address : {
//         city : "Tbilisi",
//         street : "Rustaveli",
//         country : "Georgia",
//         house : {
//             number : 12,
//             floor : 4
//         }
//     },
//     friends : [
//         {
//             name : "dfg",
//             lastName : "dsffg",
//             age : 30,
//             frendInCommon : "dfgsdf"
//         },
//         {
//             name : "dfghg",
//             lastName : "dsffg",
//             age : 60,
//             frendInCommon : ""
//         },
//         {
//             name : "dfghg",
//             lastName : "dsffg",
//             age : 60,
//             frendInCommon : ""
//         }
//     ]

// }







// for(let el of objUser.followers){
//     console.log(el)

// }


// console.log(objUser.address.house.floor)

// console.log(objUser.age)

// console.log(objUser.userName)


// for(let el of objUser.friends){
//     console.log(el.name, el.age)
// }



// function getObj(obj) {
//     let firendsArr = []
//     for(let el of obj.friends){
//         firendsArr.push(`${el.name} ${el.lastName} `)
//     }
//     return firendsArr
// }


// console.log(getObj(objUser))



// function isAdult(obj) {
//     //  if(obj.age >=18){
//     //     return true
//     //  }
//     //  else {
//     //         return false
//     //  }

//     return obj.age >=18
// }


// console.log(isAdult(objUser))





let userArr = [
    {
        userName: "John",
        age : 16,
        paswword : {
            passValueCurent : "dsdfg",
            lastUpdate : "12,02,2025",
            passValueOld : ""
        },
        email : "fgfg",
        immage : "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        isActive : true,
        followers : ["James", "Emma"],
        address : {
            city : "Tbilisi",
            street : "Rustaveli",
            country : "Georgia",
            house : {
                number : 12,
                floor : 4
            }
        },
        friends : [
            {
                name : "dfg",
                lastName : "dsffg",
                age : 30,
                frendInCommon : "dfgsdf"
            },
            {
                name : "dfghg",
                lastName : "dsffg",
                age : 60,
                frendInCommon : ""
            },
            {
                name : "dfghg",
                lastName : "dsffg",
                age : 60,
                frendInCommon : ""
            }
        ]
    
    },
    {
        userName: "Emma",
        age : 20,
        paswword : {
            passValueCurent : "dsdfg",
            lastUpdate : "12,01,2025",
            passValueOld : ""
        },
        email : "fgfg",
        immage : "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        isActive : true,
        followers : ["James", "Emma"],
        address : {
            city : "Tbilisi",
            street : "",
            country : "Georgia",
            house : {
                number : 12,
                floor : 4
            }
        },
        friends : [
            {
                name : "dfg",
                lastName : "dsffg",
                age : 30,
                frendInCommon : "dfgsdf"
            },
            {
                name : "dfghg",
                lastName : "dsffg",
                age : 60,
                frendInCommon : ""
            },
            {
                name : "dfghg",
                lastName : "dsffg",
                age : 60,
                frendInCommon : ""
            }
        ]
    

    },
    {

    }
]





let car = {
    model : "BMW",
    brand : "X5",
    year : 2019
}
console.log(car)

car.engine = 5.5



console.log(car)
