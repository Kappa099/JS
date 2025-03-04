import { cars } from "./data.js";
// console.log(window.location.search)
let id = window.location.search.split("=")[1]

// console.log(cars.filter(el => el.id == id)[0])
let car = cars.filter(el => el.id == id)[0]
let main = document.querySelector("#mn")

function randerCars(obj) {
    main.innerHTML = ""

        main.innerHTML = 
        `<div class="card" style="width: 18rem;">
          <img src="${obj.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${obj.brand} ${obj.model}</h5>
            <p class="card-text">${obj.year} year</p>
             <p class="card-text">${obj.adress} year</p>
             <p class="card-text">${obj.description} year</p>
              <p class="card-text">${obj.owner} year</p>
            <p class="card-text">${obj.price.amount} ${obj.price.currency}</p>
            <a href="index.html" class="btn btn-primary">Go back</a>
          </div>
        </div>`
 
}
randerCars(car)


//////////////////////////    

let cont = document.querySelector(".cont")
    let btn1 = document.createElement("button")
    btn1.innerText = "Click"
    btn1.style.backgroundColor = "red"
    btn1.className = "btn btn-dabger"
    btn1.addEventListener("click", function(){
        // console.log(i)
        // btn1.classList.add("green")
        // btn1.classList.remove("btn-dabger")
        btn1.classList.toggle("green")

    })
    
    cont.appendChild(btn1)
    


