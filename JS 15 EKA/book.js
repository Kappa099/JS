

let chidleft = document.querySelector(".chidleft")
let roomarray = []

let roomId = new URLSearchParams(window.location.search).get("id")
console.log("Room ID:", roomId)

let roomPrice = 10



fetch(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${roomId}`)
  .then(resp => resp.json())
  .then(room => {
    renderproduct(room)
  })

  function renderproduct(room) {
    console.log(room)
    roomPrice = room.pricePerNight
    
    let carouselItemsHTML = ""
    room.images.forEach((image, index) => {
        carouselItemsHTML += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${image.source}" class="d-block w-100" alt="Room Image ${index + 1}">
            </div>`
    })

    chidleft.innerHTML = `
        <div id="carousel-room" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                ${carouselItemsHTML}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-room" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel-room" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`

        // childright.innerHTML = `
        // <h2>Reservation</h2>
        // <h3>${room.name}</h3>
        // <p>Price per night: ${room.pricePerNight} EUR</p>
        // <p>Maximum guests: ${room.maximumGuests}</p>
        // <p>${room.description}</p>`
}

// function renderReservation(room) {
//     childright.innerHTML = `
//         <div class="reservation-card" style="border: 1px solid #ddd; padding: 20px; border-radius: 10px; background:rgb(248, 248, 248); box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
//             <h3 style="text-align: center; margin-bottom: 15px;">Reservation</h3>
//             <p style="text-align: center; font-weight: bold;">
//                 ${room.name} <span style="color:rgb(0, 123, 255);"> € ${room.pricePerNight}</span> a night
//             </p>
            
//             <label>Check-in</label>
//             <input type="date" id="checkin" value="2025-03-20" class="form-control">
            
//             <label>Check-out</label>
//             <input type="date" id="checkout" value="2025-03-22" class="form-control">

//             <label>Customer Name</label>
//             <input type="text" id="customerName" class="form-control" placeholder="Enter your name">

//             <label>Customer Tel: Phone</label>
//             <input type="text" id="customerPhone" class="form-control" placeholder="Enter your phone number">

//             <p style="text-align: center; font-weight: bold; margin-top: 15px;">
//                 Total Price: <span id="totalPrice">€ ${room.pricePerNight * 2}</span>
//             </p>

//             <button class="btn btn-primary w-100" style="background: linear-gradient(to bottom,rgb(141, 215, 247), #57b0e3); border: none; padding: 10px; font-size: 16px; cursor: pointer;">
//                 BOOK NOW
//             </button>
//         </div>`

   
//     document.getElementById("checkin").addEventListener("change", updateTotalPrice)
//     document.getElementById("checkout").addEventListener("change", updateTotalPrice)
// }




// function updateTotalPrice() {
//     let checkinDate = new Date(document.getElementById("checkin").value)
//     let checkoutDate = new Date(document.getElementById("checkout").value)
//     let nights = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)

//     let pricePerNight = parseFloat(document.getElementById("totalPrice").textContent.replace("€ ", "")) || 0;
//     let totalPrice = nights > 0 ? nights * pricePerNight : pricePerNight

//     document.getElementById("totalPrice").innerHTML = `€ ${totalPrice}`
// }

// renderReservation(room)





/////////////////////////////  post



// {
//     "id": 0,
//     "roomID": 0,
//     "checkInDate": "2025-03-21T16:26:54.172Z",
//     "checkOutDate": "2025-03-21T16:26:54.172Z",
//     "totalPrice": 0,
//     "isConfirmed": true,
//     "customerName": "string",
//     "customerId": "string",
//     "customerPhone": "string"
//   }

// https://hotelbooking.stepprojects.ge/api/Booking



let form = document.querySelector(".reservation-card")



let inpChackin = document.querySelector(".inpChackin")
let inpChackOut = document.querySelector(".inpChackOut")
let inpName = document.querySelector(".inpName")
let inpPhone = document.querySelector(".inpPhone")





form.addEventListener("submit", function(e){
        e.preventDefault()
        let postObj = {
          roomID: Number(roomId),
          checkInDate : inpChackin.value,
          checkOutDate : inpChackOut.value,
          totalPrice : roomPrice,
          isConfirmed: true,
          customerName : inpName.value,
          customerId : "123", 
          customerPhone : inpPhone.value
        }
  fetch("https://hotelbooking.stepprojects.ge/api/Booking", {
    method : "POST",
    // headers : {
    //     "Content_Type" : "application/json"
    // },

    headers: {
        "Content-Type": "application/json"
    },
    body : JSON.stringify(postObj)

  })
//   .then(resp => resp.json())
  .then(resp => {
    console.log(resp)
    if(resp.status == 200){
        alert("Booked succsefull")
    }
    else{
        alert("Cound not Book")
    }
  })
  .catch(er => alert(er))
  

})




// let x = 10
// try{
//    console.log(x)
// }
// catch(err){
//   console.log(err)
// }



