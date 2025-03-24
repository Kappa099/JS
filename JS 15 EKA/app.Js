let main = document.querySelector(".main")


fetch("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll").then(resp => resp.json())
.then(resp=>renderproduct(resp))


function renderproduct(arr) {
    main.innerHTML=""
    arr.forEach(product => {
        main.innerHTML+=
        `<div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
         data-aos-duration="2000">
         <div class="card" style="width: 18rem; height: 23rem">
        <img src="${product.featuredImage}" class="card-img-top" alt="...">
        <div class="card-body" style=" display: flex;
        flex-direction: column;
          justify-content: space-between">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.city}</p>
          <a href="./details.html?id=${product.id}" class="btn btn-primary" style="
          display: flex;
          justify-content: center;">View Rooms</a>
        </div>
      </div>
      </div>`
    });
}


// address: "29 Rustaveli Ave, Tbilisi, Tbilisi, 0108"
// city: "Tbilisi"
// featuredImage: "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/41cbdcb1.jpg?impolicy=resizecrop&rw=1200&ra=fit"
// id: 1
// name: "The Biltmore Hotel Tbilisi"
//rooms: array (0)
// length: 0
//[[Prototype]]: array (0)
// [[Prototype]]: Object