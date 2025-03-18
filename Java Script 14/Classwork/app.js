
// promise
// .then
// .catch


// GET მოტანა

// API METHODS
// C -creare R - read U - update D - delete
// POST      GET      PUT        DELETE
// ჩაწერა     მოტანა   შეცვლა     წაშლა

// JSON   -   javascript Objetc Notation - ჯავასკრიპტის ობიექტის გამოსახვა


let main = document.querySelector(".main")
let sortAsc = document.querySelector(".sortAsc")
let sel = document.querySelector(".sel")
let categSel = document.querySelector(".categSel")

let oldArr = []
let productArr = []


// let arr1 = [20,30,60]

// let arr2 =[...arr1]    // [20,30,60]
// arr1[0]=100


sortAsc.addEventListener("click", function() {
 let sortedArr = productArr.sort((a,b)=> a.price-b.price)
 randerProduct(sortedArr)
})


sel.addEventListener("change", function() {
    if(sel.value == 1){
      let sortedArr = productArr.sort((a,b)=> a.price-b.price)
      randerProduct(sortedArr)
    }
    else if(sel.value == 2){
      let sortedArr = productArr.sort((a,b)=> b.price-a.price)
      randerProduct(sortedArr)
    }   
    else if(sel.value==3){
      let sortedArr = productArr.sort((a,b)=> a.rating.rate-b.rating.rate)
      randerProduct(sortedArr)
    }
    else if(sel.value==4){
      let sortedArr = productArr.sort((a,b)=> b.rating.rate-a.rating.rate)
      randerProduct(sortedArr)
    }
    else if(sel.value==-1){
      randerProduct(oldArr)
    }
})


function randerProduct(arr) {
   main.innerHTML=""
    arr.forEach(product => {
      // oldArr.push(product)
      main.innerHTML+= `
        <div class="card" style="width: 18rem;">
          <img src="${product.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.category}</p>
            <p class="card-text">${product.price}</p>
            <p class="card-text">${product.rating.rate}</p>
            <a href="./details.html?id=${product.id}" class="btn btn-primary">See more</a>
          </div>

        </div>
        `
    });
}


fetch("https://fakestoreapi.com/products")
.then(resp => resp.json())
.then(resp => {
  oldArr= [...resp]
  productArr=[...resp]
  randerProduct(oldArr)
  fillSelect(oldArr)
})   /// [20 csali product]



function fillSelect(arr) {
  arr.forEach(el => {
    categSel.innerHTML+= `
       <option value="${el.category}">${el.category}</option>
    `
  } )
}

categSel.addEventListener("change", function() {
     if(categSel.value == -1){
      randerProduct(oldArr)
     }
     else {
      let filterArr= productArr.filter(el=> el.category == categSel.value)
      randerProduct(filterArr)
     }
})




fetch("https://restaurant.stepprojects.ge/api/Products/GetAll")
.then(resp => resp.json())
.then(resp=>console.log(resp))

function randerPruduct(arr) {
  
}

// `https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=${}&pageSize=10`


// fetch("https://restaurant.stepprojects.ge/api/Categories/GetAll")
// .then(resp => resp.json())
// .then(resp=>console.log(resp))

// function randerBtns() {
//     // btnCont.innerHTML += `<button>${}</button>`
//     //  for(){
//     //   let btn = document.createElement("button")
//     //   btn.addEventListener()
  
//     //   btnCont.apendChild(btn)
//     //  }
// }

// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"