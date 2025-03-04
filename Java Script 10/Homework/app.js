
let car = [{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2019_BMW_X5_M50d_Automatic_3.0.jpg/640px-2019_BMW_X5_M50d_Automatic_3.0.jpg",
    title: "BMW X5",
    year: 2019,
    color: "blue",
    mileage: 100000,
    engine: 5.5,
    price: 30000,
    currency: "USD"
},
{
    image: "https://hips.hearstapps.com/hmg-prod/images/a218141-medium-1635867809.jpg?crop=0.777xw:0.655xh;0.115xw,0.209xh&resize=2048:*",
    title: "Audi A8",
    year: 2018,
    color: "black",
    mileage: 50000,
    engine: 3.5,
    price: 25000,
    currency: "USD"
},
{
    image: "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/11/2017-Mercedes-Benz-C300-coupe-110.jpg?crop=1.00xw:0.920xh;0,0.0452xh&resize=2048:*",
    title: "Mercedes C Class",
    year: 2017,
    color: "red",
    mileage: 150000,
    engine: 4.0,
    price: 40000,
    currency: "USD"
},
{   
    image: "https://i.gaw.to/content/photos/53/59/535927-honda-civic-2016-2021-quoi-savoir-avant-d-acheter.jpeg",
    title: "Honda Civic",
    year: 2016,
    color: "white",
    mileage: 120000,
    engine: 2.0,
    price: 20000,
    currency: "USD"
},
{
    image: "https://www.edmunds.com/assets/m/toyota/corolla/2014/oem/2014_toyota_corolla_sedan_l_fq_oem_1_815.jpg",
    title: "Toyota Corolla",
    year: 2015,
    color: "silver",
    mileage: 80000,
    engine: 3.0,
    price: 22000,
    currency: "USD"
},
{
    image: "https://www.motortrend.com/uploads/sites/5/2018/03/2018-Ford-Mustang-EcoBoost-front-three-quarter-in-motion-04.jpg",
    title: "Ford Mustang",
    year: 2014,
    color: "gray",
    mileage: 100000,
    engine: 3.8,
    price: 28000,
    currency: "USD"
}
]

let main = document.querySelector("main");
let sortDropdown = document.querySelector(".SortClass");
let inp = document.querySelector(".inp")

function render(arr) {
    main.innerHTML = ""; 
    for (let el of arr) {
        main.innerHTML += `
            <div class="card" style="width:500px;">
                <img src="${el.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${el.title}</h5>
                    <p class="card-text">${el.price + " " + el.currency}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;
    }
}

render(car);


sortDropdown.addEventListener("change", function () {
    let sortedCar;
    main.innerHTML = ""; 

    if (sortDropdown.value == "price-asc") {
        sortedCar = [...car].sort((a, b) => a.price - b.price);
    } else if (sortDropdown.value == "price-desc") {
        sortedCar = [...car].sort((a, b) => b.price - a.price);
    } else if (sortDropdown.value == "title-asc") {
        sortedCar = [...car].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortDropdown.value == "title-desc") {
        sortedCar = [...car].sort((a, b) => b.title.localeCompare(a.title));
    } else {
        sortedCar = [...car]; 
    }
    render(sortedCar);
});
inp.addEventListener("input", function(){
  console.log(inp.value)
  let filteredArr = car.filter(el => el.title.toLowerCase().includes(inp.value.toLowerCase()))
  render(filteredArr)
})
