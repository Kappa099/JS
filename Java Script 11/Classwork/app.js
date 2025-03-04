import { cars, number } from "./data.js";


console.log(cars)
let oldArr = [...cars]

let main = document.querySelector("#mn")
let inpSearch = document.querySelector("#inpSearch")
let sortAsc = document.querySelector(".sortAsc")
let sortDesc = document.querySelector(".sortDesc")
let ref = document.querySelector("#ref")
let sel = document.querySelector("#sel")


function randerCars(arr) {
    main.innerHTML = ""
    arr.forEach(el => {
        main.innerHTML += 
        `<div class="card" style="width: 18rem;">
          <img src="${el.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${el.brand} ${el.model}</h5>
            <p class="card-text">${el.year} year</p>
            <p class="card-text">${el.price.amount} ${el.price.currency}</p>
            <a href="details.html?id=${el.id}" class="btn btn-primary">See Details</a>
          </div>
        </div>`
     })
}
randerCars(cars)

inpSearch.addEventListener("input", function(){
    let filteredArr = cars.filter(el=> el.brand.toLowerCase().includes(inpSearch.value.toLowerCase()))
    // console.log(filteredArr)
    randerCars(filteredArr)
})

sortAsc.addEventListener("click", function(){
   if(!inpSearch.value){
    let sortedArr = cars.sort((a,b)=>  a.price.amount -b.price.amount)
    randerCars(sortedArr)
   }
   else {
    let filteredArr = cars.filter(el=> el.brand.toLowerCase().includes(inpSearch.value.toLowerCase()))
    let sortedArr = filteredArr.sort((a,b)=>  a.price.amount -b.price.amount)
    randerCars(sortedArr)
    }

})

sortDesc.addEventListener("click", function(){
    if(!inpSearch.value){
        let sortedArr = cars.sort((a,b)=> b.price.amount - a.price.amount)
        randerCars(sortedArr)
    }
    else {
        let filteredArr = cars.filter(el=> el.brand.toLowerCase().includes(inpSearch.value.toLowerCase()))
        let sortedArr = filteredArr.sort((a,b)=> b.price.amount - a.price.amount)
        randerCars(sortedArr)
    }

})

ref.addEventListener("click", function(){
    sel.value = "-1"
    if(!inpSearch.value){
        randerCars(oldArr)
    }
    else {
        let filteredArr = oldArr.filter(el=> el.brand.toLowerCase().includes(inpSearch.value.toLowerCase()))
        randerCars(filteredArr)
    }
})



oldArr.forEach(el => {
    sel.innerHTML += ` <option value="${el.brand}">${el.brand}</option>`
})


sel.addEventListener("change", function (){
   if(sel.value=="-1"){
    randerCars(oldArr)
   }
   else {
    let filteredArr = cars.filter(el=> el.brand == sel.value)
    randerCars(filteredArr)
   }
})








