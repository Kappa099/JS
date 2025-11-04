
import { car } from "./data.js";

let cont = document.querySelector(".cont")
let sort = document.querySelector(".SortClass")
let inp = document.querySelector(".inp")
let select = document.querySelector("#sel")
let oldarr = [...car]

function render(array){
    for (let el of array){
        cont.innerHTML += 
        `<div class="card" style="width: 18rem;">
        <img src="${el.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${el.title}</h5>
            <p class="card-text">${el.price + " " + el.currency}</p>
            <a href="details.html?id=${el.id}" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
         `
    }
}

render(car)

sort.addEventListener("click", function(){
    let sortedCar
    cont.innerHTML = ""
    if (sort.value == "price-asc"){
        sortedCar = [...car].sort((el1, el2) => el1.price - el2.price)
    }
    else if (sort.value == "price-desc"){
        sortedCar = [...car].sort((el1, el2) => el2.price - el1.price)
    }
     else if (sort.value == "title-asc") {
        sortedCar = [...car].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort.value == "title-desc") {
        sortedCar = [...car].sort((a, b) => b.title.localeCompare(a.title));
    } else {
        sortedCar = [...car]; 
    }
    
    render(sortedCar)
})
inp.addEventListener("input", function () {
    cont.innerHTML = ""
    let filteredArr = [...car].filter(el => el.title.toLowerCase().includes(inp.value.toLowerCase()))
    render(filteredArr)
})

oldarr.forEach(el => {
    select.innerHTML += `<option value="${el.brand}">${el.brand}</option>`
})


select.addEventListener("change", function(){
    cont.innerHTML = ""
    if (select.value == "-1"){
        render(oldarr)
    }
    let filteredSelect = car.filter(el => el.brand == select.value)
    render(filteredSelect)
})