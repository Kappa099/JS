

let cont = document.querySelector(".cont")


fetch("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
.then(resp => resp.json())
.then(resp => randerCart(resp))




function  randerCart(arr){
   console.log(arr)
   arr.forEach(el => {
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
           <img src="${el.product.image}" class="card-img">
           <div class="card-product">
               <h3 class="card-title">${el.quantity}</h3>
                          <h3 class="card-title">${el.product.name}</h3>
               <h4 class="card-price">${el.price}$</h4>
           </div>`
     let edit = document.createElement("button")
     edit.innerText="Edit"
     edit.addEventListener("click", function(){
        console.log("call put method ")
     })
     card.appendChild(edit)


     let delet = document.createElement("button")
     delet.innerText="Delete"
     delet.addEventListener("click", function(){
        console.log("call delete method ")


        fetch(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${el.product.id}`, {
            method : "DELETE"
        })
        // .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            setTimeout(()=>{
                   window.location.reload()
            }, 500)
        })

     })

     card.appendChild(delet)
     card.appendChild(edit)

     cont.appendChild(card)


   });
}