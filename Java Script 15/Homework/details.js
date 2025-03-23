let main = document.querySelector('.main');
let price = document.querySelector('.price select'); 
let roomtype = document.querySelector('.roomtype');
let id = window.location.search.split("=")[1];
let allRooms = []; 
let filteredRooms = [];


fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
  .then(response => response.json())
  .then(hotel => renderHotelAndRooms(hotel));

function renderHotelAndRooms(hotel) {
    let allRooms = hotel.rooms; 
    let filteredRooms = hotel.rooms;

    main.innerHTML = `
        <div class="hotel-details">
            <img src="${hotel.featuredImage}" class="hotel-img" alt="${hotel.name}">
            <div class="hotel-info">
                <h2>${hotel.name}</h2>
                <p>${hotel.address}, ${hotel.city}</p>
            </div>
        </div>
        <h3>Available Rooms</h3>
        <div class="room-cards" id="room-cards-container">
        </div>
    `;

    renderRooms(filteredRooms);
}
function renderRooms(rooms) {
    let roomContainer = document.querySelector('#room-cards-container'); 
    roomContainer.innerHTML = ""; 

    if (rooms.length === 0) {
        roomContainer.innerHTML = "<p>No rooms available for the selected price range.</p>";
    } else {
        rooms.forEach(room => {
            roomContainer.innerHTML += `
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
    }
}

price.addEventListener('change', function() {
    let selectedPrice = price.value;

    if (selectedPrice === 'default') {
        fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
          .then(response => response.json())
          .then(hotel => renderRooms(hotel.rooms));
    } else {
        let priceRange = selectedPrice.split('-');
        let minPrice = Number(priceRange[0]); 
        let maxPrice = Number(priceRange[1]); 

        fetch('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                priceRange: {
                    min: minPrice,
                    max: maxPrice
                }
            }),
        })
        .then(response => response.json())
        .then(data => {
            let filteredRooms = data.filter(room => room.pricePerNight >= minPrice && room.pricePerNight <= maxPrice && room.hotelId == id);

            renderRooms(filteredRooms);  
        })
    }
});


price.dispatchEvent(new Event('change'));

let roomTypeSelect = document.querySelector('#room-type');

roomTypeSelect.addEventListener('change', function() {
    let selectedType = roomTypeSelect.value;

    let finalRooms = filteredRooms.filter(room => {
        if (selectedType === 'default-room') {
            return true;
        } else if (selectedType === 'single') {
            return room.name.toLowerCase().includes('basic');
        } else if (selectedType === 'double') {
            return room.name.toLowerCase().includes('premium');
        } else if (selectedType === 'family') {
            return room.name.toLowerCase().includes('deluxe');
        }
    });

    renderRooms(finalRooms);
});
