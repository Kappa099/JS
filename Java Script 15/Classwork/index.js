let products_container = document.querySelector(".products_container")
let categories_container = document.querySelector(".categories_container")
let filter = document.querySelector(".filter")
let veg = document.querySelector(".veg")
let nuts = document.querySelector(".nuts")
let spa = document.querySelector(".spa")
let reset = document.querySelector(".reset")

let products = []


fetch("https://restaurant.stepprojects.ge/api/Products/GetAll")
.then(resp => resp.json())
.then(resp => {
    products = resp
    render(products)
})

function render(arr) {
    products_container.innerHTML = ""

    arr.forEach(el => {
        let card = document.createElement('div')
        card.innerHTML = `            <img src="${el.image}" class="card-img">
            <div class="card-product">
                <h3 class="card-title">${el.name}</h3>
                <h4 class="card-price">${el.price}$</h4>
            </div>`
        let input = document.createElement('input')
        input.className = 'cardInp'
        input.setAttribute('type', 'number')
        let button = document.createElement('button')
        button.className = 'card-button'
        button.innerText = 'Buy now'
        button.addEventListener('click',function(){
            // console.log(input.value)
            // console.log(el.id)
            // console.log(el.price*input.value)

            fetch("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify( {
                        quantity: input.value,
                        price: el.price*input.value,
                        productId: el.id
                    })
            })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                input.value = ""
            })




        })
        
        card.className = 'custom-card'
        card.appendChild(input)
        card.appendChild(button)
        products_container.appendChild(card)
        // products_container.innerHTML += `
        // <div class="custom-card">
        //     <img src="${el.image}" class="card-img">
        //     <div class="card-product">
        //         <h3 class="card-title">${el.name}</h3>
        //         <h4 class="card-price">${el.price}$</h4>
        //         <button class="card-button">Buy now</button>
        //     </div>
        // </div>`
    });
}

fetch("https://restaurant.stepprojects.ge/api/Categories/GetAll")
.then(resp => resp.json())
.then(resp => {
    renderAll(resp)
});

function renderAll(arr) {
    categories_container.innerHTML = ""
    let allButton = document.createElement('button')
    allButton.classList.add("category-button")
    allButton.innerText = 'All'
    allButton.addEventListener('click', function(){
        render(products)
    })
    categories_container.appendChild(allButton)
    arr.forEach(category => {
        let btn = document.createElement('button')
        btn.innerHTML = category.name
        btn.classList.add("category-button")
        categories_container.appendChild(btn)
    
        btn.addEventListener('click', function () {
            let filteredArr = products.filter(el => el.categoryId === category.id)
            render(filteredArr)
        })
    })
}



filter.addEventListener("click", function(){
   if(veg.value!="-1" && nuts.value!="-1" && spa.value!="-1"){
       fetch(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${veg.value}&nuts=${nuts.value}&spiciness=${spa.value}`)
       .then(resp => resp.json())
       .then(resp => render(resp))
   }
   else{
    alert("select something")
   }

})

reset.addEventListener("click", function(){
    fetch(`https://restaurant.stepprojects.ge/api/Products/GetAll`)
    .then(resp => resp.json())
    .then(resp => {
        render(resp)
        veg.value = "-1"
          nuts.value = "-1"
            spa.value = "-1"
    })
})


