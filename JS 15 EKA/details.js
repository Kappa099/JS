let maindetail = document.querySelector(".maindetail")
let btnAll = document.querySelector(".btnAll")
let btnSingle = document.querySelector(".btnSingle")
let btnDouble = document.querySelector(".btnDouble")
let btnDeluxe = document.querySelector(".btnDeluxe")
let rooms = document.querySelector(".rooms")
let priceRange = document.querySelector("#priceRange")
let priceValue = document.querySelector("#priceValue")
let roomarray = [] 

let id = window.location.search.split("=")[1]
console.log(id)
fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
.then(resp => resp.json())
.then(resp => renderproduct(resp))


function renderproduct(obj) {
   console.log(obj)
   roomarray=[...obj.rooms]
   maindetail.innerHTML=
        `<div class="card" style="width: 23rem; height: 25re">
         <h5 class="card-title">${obj.name}</h5>
         <img src="${obj.featuredImage}" class="card-img-top" alt="...">
         <div class="card-body" style=" display: flex;
         flex-direction: column;
        justify-content: space-between">
        </div>
      </div>
      </div>`
      renderroom (roomarray)
    }
    function renderroom(arr) {
      rooms.innerHTML = ""
      for (let el of arr) {
      rooms.innerHTML += `
      <div class="card" style="width: 23rem; height: 25rem">
      <img src="${el.images[0].source}" class="card-img-top" alt="...">
      <div class="card-body" style=" display: flex;
      flex-direction: column;
      justify-content: space-between">
      <h5 class="card-title">${el.name}</h5>
          <p class="card-text">${el.pricePerNight} EUR a night</p>
          <a href="./bookaroom.html?id=${el.id}" class="btn btn-primary" style="
          display: flex;
          justify-content: center;">Book Now</a>
        </div>
      </div>
      </div>
      `
      }
    }

    btnAll.addEventListener("click", function(){
      renderroom(roomarray)
    })

    btnSingle.addEventListener("click", function(){
        let filteredArr = roomarray.filter(el => el.maximumGuests <= 2)
        renderroom(filteredArr)
    })
    btnDouble.addEventListener("click", function () {
      let filteredArr = roomarray.filter(el => el.maximumGuests > 2 && el.maximumGuests <=4)
      renderroom(filteredArr)
    })
    btnDeluxe.addEventListener("click", function () {
      let filteredArr = roomarray.filter(el => el.maximumGuests >4)
      renderroom(filteredArr)
    })


    priceRange.addEventListener("input", function () {
      priceValue.textContent = this.value
      filterByPrice(this.value)
    })

    function filterByPrice(maxPrice) {
      let filteredArr = roomarray.filter(el => el.pricePerNight <= maxPrice)
      renderroom(filteredArr)
    }