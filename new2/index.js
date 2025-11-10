let cont = document.querySelector(".cont")
let select = document.querySelector("#select")

let oldArr = []
let oldProduct = []

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(response => {
        oldArr = [...arr]
        oldProduct = [...arr]
        renderProduct(response)
})

function renderProduct(arr){
    cont.innerHTML = ""
    arr.forEach(product => {
        cont.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${product.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.category}</p>
            <p class="card-text">${product.price}</p>
            <p class="card-text">${product.rating.rate}</p>
            <a href="./details.html?id=${product.id}" class="btn btn-primary">See more</a>
          </div>

        </div>
        `
    });
}