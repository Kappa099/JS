let main = document.querySelector('.main');
let priceSlider = document.querySelector('.price input[type="range"]'); 
let priceValueDisplay = document.querySelector('.price #price-value');
let roomtype = document.querySelector('.roomtype');
let guestRangeSelect = document.querySelector('#guest-range');
let id = window.location.search.split("=")[1];
let allRooms = [];

fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
  .then(response => response.json())
  .then(hotel => renderHotelAndRooms(hotel));

function renderHotelAndRooms(hotel) {
    allRooms = hotel.rooms;

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

    renderRooms(allRooms); // Show all rooms initially
}

function renderRooms(rooms) {
    let roomContainer = document.querySelector('#room-cards-container');
    roomContainer.innerHTML = "";

    if (rooms.length === 0) {
        roomContainer.innerHTML = "<p>No rooms available for the selected filters.</p>";
    } else {
        rooms.forEach(room => {
            roomContainer.innerHTML += `
                <div class="card">
                    <img src="${room.images[0]?.source}" alt="${room.name}">
                    <div class="card-body">
                        <h5 class="card-title">${room.name}</h5>
                        <p class="card-text">Price: $${room.pricePerNight} per night</p>
                        <p class="card-text">Max Guests: ${room.maximumGuests}</p>
                        <a href="./rooms.html?id=${room.id}" class="btn btn-primary">Book Now</a>
                    </div>
                </div>
            `;
        });
    }
}

priceSlider.addEventListener('input', applyFilters); 
roomtype.addEventListener('change', applyFilters);
guestRangeSelect.addEventListener('change', applyFilters);

function applyFilters() {
    let selectedType = roomtype.value;
    let selectedPrice = priceSlider.value;  
    let selectedGuestRange = guestRangeSelect.value;

    let roomTypeId = 0;
    if (selectedType === 'single') roomTypeId = 1;
    if (selectedType === 'double') roomTypeId = 2;
    if (selectedType === 'family') roomTypeId = 3;

    let priceFrom = selectedPrice;  
    let priceTo = selectedPrice;

    let maximumGuests = selectedGuestRange !== 'default-guest' ? Number(selectedGuestRange) : 0;

    priceValueDisplay.textContent = `$${selectedPrice}`;

    let requestBody = {
        roomTypeId: roomTypeId,
        priceFrom: priceFrom,
        priceTo: priceTo,
        maximumGuests: maximumGuests,
    };

    fetch('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => {
        renderRooms(data); 
    })
    .catch(error => console.error('Error fetching filtered rooms:', error));
}
