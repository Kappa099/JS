
// {
//     "page": 1,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
// }

// XML


// JSON - javascript object notation  ჯავასკრიპტის ობიექტის გამოსახვა
// {
//     page : 1,
//     per_page: 6,
//     total: 12,
//     total_pages: 2,
// }




// https://reqres.in/api/users



let cont = document.querySelector(".cont")

       
// fetch("https://reqres.in/api/users")   
// .then(x => x.json())
// .then(x => randerUser(x.data))



// function randerUser(arr) {
//     for(let obj of arr){
//       console.log(obj)
//       cont.innerHTML +=  `<div class="card" style="width: 18rem;">
//           <img src="${obj.avatar}" class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">${obj.first_name} ${obj.last_name}</h5>
//             <p class="card-text">${obj.email}</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>`
//     }
// }



function renderUser(arr){
  for (let el of arr){
   cont.innerHTML +=
    `<div class="card" style="width: 18rem;">
      <img src="${el.imageUrl1}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${el.model} - ${el.brand}</h5>
        <p class="card-text">ტრანსმისია - ${el.transmission}.</p>
        <a href="./details.html?id=${el.id}" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
  }
}


fetch("https://rentcar.stepprojects.ge/api/Car/filter?capacity=4&pageIndex=1&pageSize=10")
.then(x => x.json())
.then(x => renderUser(x.data))

console.log(window.location.search)