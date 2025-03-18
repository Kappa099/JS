let id = window.location.search.split("=")[1];

fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
  .then(rooms => rooms.json())
  .then(hotel => renderRooms(hotel)); 

let main = document.querySelector('.main');

function renderRooms(hotel) {
    main.innerHTML = `
        <div class="hotel-details">
            <img src="${hotel.featuredImage}" class="hotel-img" alt="${hotel.name}">
            <div class="hotel-info">
                <h2>${hotel.name}</h2>
                <p>${hotel.address}, ${hotel.city}</p>
            </div>
        </div>
        <h3>Available Rooms</h3>
        <div class="room-cards">
    `;

    hotel.rooms.forEach(room => {
        main.innerHTML += `
            <div class="card">
                <img src="${room.images[0]?.source}" alt="${room.name}">
                <div class="card-body">
                    <h5 class="card-title">${room.name}</h5>
                    <p class="card-text">Price: $${room.pricePerNight} per night</p>
                    <p class="card-text">Max Guests: ${room.maximumGuests}</p>
                    <a href="#" class="btn btn-primary">Book Now</a>
                </div>
            </div>
        `;
    });

    main.innerHTML += "</div>";
}
