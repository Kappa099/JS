let productCatalog = [{
    name: "Apples",
    price: "$1.50",
    stock: 100,
},
{
    name: "Oranges",
    price: "$2.00",
    stock: 80,
},
{
    name: "Bananas",
    price: "$1.00",
    stock: 50,
}
]
let productList = document.querySelector('#product-list');
let increaseProduct = document.querySelector('#increase-btn');
let decreaseProduct = document.querySelector('#decrease-btn');
let checkAvailable = document.querySelector('#check-availability-btn');
let divList = document.querySelector('#product-list ul');
let addProduct = document.querySelector('#add-product-btn');


function renderProduct() {
    divList.innerHTML = ''; 
    for (let i = 0; i < productCatalog.length; i++) {
        let product = productCatalog[i];
        
        let productItem = document.createElement('li');
        productItem.textContent = `${product.name} - ${product.price} - ${product.stock}`;
        
        let increaseBtn = document.createElement('button');
        increaseBtn.textContent = "Increase Stock";
        increaseBtn.addEventListener('click', function() {
            productCatalog[i].stock++; 
            renderProduct(); 
        });
        
        let decreaseBtn = document.createElement('button');
        decreaseBtn.textContent = "Decrease Stock";
        decreaseBtn.addEventListener('click', function() {
            if (productCatalog[i].stock > 0) {
                productCatalog[i].stock--; 
            }
            renderProduct(); 
        });

        productItem.appendChild(increaseBtn);
        productItem.appendChild(decreaseBtn);

        divList.appendChild(productItem);
    }
}

renderProduct(productCatalog)

addProduct.addEventListener('click', function() {

    let name = document.querySelector('#product-name').value;
    let price = document.querySelector('#product-price').value;
    let stock = document.querySelector('#product-stock').value;


    let newProduct = {
        name: name,
        price: `$${price}`,
        stock: parseInt(stock)
    };

    productCatalog.push(newProduct);

    renderProduct();
});

fetch("https://reqres.in/api/users"
)

