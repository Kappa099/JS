import { car } from "./data.js";
let id = window.location.search.split("=")[1]
let veh = car.filter(el => el.id == id)

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

render(veh)