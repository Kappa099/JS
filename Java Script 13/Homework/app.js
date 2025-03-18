let products = []; 
let cont = document.querySelector(".cont");
let sortDropdown = document.querySelector("#sort");
let searchInput = document.querySelector("#inp");


fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        products = data; 
        renderProduct(products);
    });

// Render function
function renderProduct(arr) {
    cont.innerHTML = "";
    arr.forEach(el => {
        cont.innerHTML += `
            <div class="card">
                <img src="${el.image}" alt="Product Image">
                <h2>${el.title}</h2>
                <p><strong>Category:</strong> ${el.category}</p>
                <p><strong>Description:</strong> ${el.description}</p>
                <p><strong>Price:</strong> $${el.price}</p>
                <p><strong>Rating:</strong> ${el.rating.rate} ⭐ (${el.rating.count} reviews)</p>
            </div>
        `;
    });
}

sortDropdown.addEventListener("change", function () {
    let sortedProducts = [...products]; 

    if (sortDropdown.value === "price-asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortDropdown.value === "price-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortDropdown.value === "title-asc") {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortDropdown.value === "title-desc") {
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortDropdown.value === "rating-asc") {
        sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
    } else if (sortDropdown.value === "rating-desc") {
        sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    renderProduct(sortedProducts);
});


searchInput.addEventListener("input", function () {
    let filteredProducts = products.filter(el =>
        el.title.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    renderProduct(filteredProducts);
});
