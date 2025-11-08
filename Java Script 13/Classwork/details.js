
let id = window.location.search.split("=")[1]
let cont = document.querySelector(".cont")

function renderUser(el){
   cont.innerHTML +=
    `<div class="card" style="width: 18rem;">
      <img src="${el.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${el.title}</h5>
        <p class="card-text"> ${el.rating.rate}.</p>
        <p class="card-text"> ${el.description}.</p>
        <a href="./index.html" class="btn btn-primary">Go Back</a>
      </div>
    </div>`
}

fetch(`https://fakestoreapi.com/products/${id}`)
.then(products => products.json())
.then(products => renderUser(products))