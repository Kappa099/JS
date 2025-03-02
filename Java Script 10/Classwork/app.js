


// console.log()
// document.write()


// let user = {
//     userName : "sdsf",
//     password : "dsdf1234fdf",
//     fisrtName : "John",
//     lastName : "Doe",
//     image : "dsdssd",
//     fun : function(){
//         return `${this.fisrtName} ${this.lastName}`
//     }
// }

// user.age = 50   /// დამატება

// delete user.image  //// წაშლა


// console.log(user.fun())



let products = [
    {
        image : 'https://thumbs.dreamstime.com/z/red-apple-28018787.jpg?ct=jpeg',
        titel : "Apple",
        price : {
            amount : 10,
            currency : "USD"
        },
        convert : function(rate){
            return `${Math.round(this.price.amount * rate)} GEL`
        }
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1020px-Banana-Single.jpg?20150318233437",
        titel : "Banana",
        price : {
            amount : 5,
            currency : "USD"
        },
        convert : function(rate){
            return `${Math.round(this.price.amount * rate)} GEL`
        }
    },
    {
        image : "https://media.istockphoto.com/id/1125584344/photo/watermelon-slice-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?s=1024x1024&w=is&k=20&c=iHbo-1gi4fWaVGYdxfYW5UQJbyuKWsdJ7UXtjT1bWbg=",
        titel : "Watermelon",
        price : {
            amount : 7,
            currency : "USD"
        },
        convert : function(rate){
            return `${Math.round(this.price.amount * rate)} GEL`
        }
    },
    {
        image : 'https://thumbs.dreamstime.com/z/red-apple-28018787.jpg?ct=jpeg',
        titel : "ad",
        price : {
            amount : 10,
            currency : "USD"
        },
        convert : function(rate){
            return `${Math.round(this.price.amount * rate)} GEL`
        }
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1020px-Banana-Single.jpg?20150318233437",
        titel : "fdfg",
        price : {
            amount : 5,
            currency : "USD"
        },
        convert : function(rate){
            return `${Math.round(this.price.amount * rate)} GEL`
        }
    },
    {
        image : "https://media.istockphoto.com/id/1125584344/photo/watermelon-slice-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?s=1024x1024&w=is&k=20&c=iHbo-1gi4fWaVGYdxfYW5UQJbyuKWsdJ7UXtjT1bWbg=",
        titel : "jhj",
        price : {
            amount : 7,
            currency : "USD"
        },
        convert : function(rate){
            return `${Math.round(this.price.amount * rate)} GEL`
        }
    }


]



// for(let el of products){
//    console.log(el.titel, el.convert(2.86))
// }

// let userInput = prompt("enter search")

// let sortedArr = products.sort((a,b) =>  b.price.amount - a.price.amount )
// let filterArr = products.filter(el => el.titel.toLowerCase().includes(userInput.toLowerCase()))
// console.log(filterArr)

// ["unshift", 20,60,30,"push"]

// products.unshift({
//     titel : "Pear",
//     price : {
//         amount : 4,
//         currency : "USD"
//     },
//     convert : function(rate){
//         return `${Math.round(this.price.amount * rate)} GEL`
//     }
// })


// console.log(products)



// D O M 

// let randomColor = "rgb(162,265,875)"

// document.body.style.backgroundColor = randomColor
// document.body.style.fontSize = "30px"
// background-color:






// let main = document.querySelector("main")
// main.style.backgroundColor = "red"



// let mn = document.querySelector(`.mn`)
// mn.style.backgroundColor = "yellow"

// let r  = Math.round(Math.random()*255)
// let g  = Math.round(Math.random()*255)
// let b  = Math.round(Math.random()*255)
// let randomColor = `rgb(${r},${g},${b})`

let mnId = document.querySelector("#mnId")
let sortBtn =  document.querySelector(".sortBtn")
let sortBtn2 =  document.querySelector(".sortBtn2")
let inp = document.querySelector(".inp")
// let firstP = document.querySelector(".firstP")



// mnId.style.backgroundColor = randomColor

// let useName = prompt("enter your name")

// // mnId.innerHTML =  `<h1>Hello ${useName}</h1>`

// mnId.innerText = "Hello User"
// firstP.innerText = "Helllo"


// mnId.innerHTML =
// `
// <div class="card" style="width: 18rem;">
//   <img src="${products[0].image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${products[0].titel}</h5>
//     <p class="card-text">${products[0].convert(2.85)}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// `

function rander(arr) {
    mnId.innerHTML =""
    for(let el of arr){
        mnId.innerHTML +=
    `
    <div class="card" style="width: 18rem;">
      <img src="${el.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${el.titel}</h5>
        <p class="card-text">${el.convert(2.85)}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `
    }
}

rander(products)


sortBtn.addEventListener("click", function(){
    let sortedArr = products.sort((a,b)=> a.price.amount - b.price.amount)
    rander(sortedArr)
})


sortBtn2.addEventListener("click", function(){
    let sortedArr = products.sort((a,b)=>  b.price.amount - a.price.amount )
    rander(sortedArr)
})


// live search

inp.addEventListener("input", function(){
    console.log(inp.value)
    let filteredArr = products.filter(el => el.titel.toLowerCase().includes(inp.value.toLowerCase()))
    rander(filteredArr)
})



// ეროუ ფანქშენი გამოიყენება
///  ერთხაზიანი უფნქცია 
//// ქოლბექი => როდესაც ფუნქციას პარამეტრად გადაეცემა ფუნქცია


let print  = x => x+10




print()
