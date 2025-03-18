


let id = window.location.search.split("=")[1] 

fetch(`https://fakestoreapi.com/products/${id}`)
.then(resp => resp.json())
.then(resp => randerProduct(resp))


let main = document.querySelector(".main")
let goBack = document.querySelector(".goBack") 

goBack.addEventListener("click", function() {
    window.location.href = "./index.html"
})


function randerProduct(obj) {
      main.innerHTML+= `
        <div class="card" style="width: 18rem;">
          <img src="${obj.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${obj.title}</h5>
            <p class="card-text">${obj.category}</p>
            <p class="card-text">${obj.description}</p>
            <p class="card-text">${obj.rating.rate} * ${obj.rating.count} vote</p>
          </div>

        </div>
        `

    
}













// let text = "dsdds, dsdsds,dsds, dssdsd"
// console.log(text.split(","))


// CSV    

// window.location.href=""
 
// ?id=3   ["?id", "3"]   [1]