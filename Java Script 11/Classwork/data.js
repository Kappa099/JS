export {cars, number}


let number = 1000



 
let cars = [
    {  
        id : 1,
        image: "./images/photo-1438761681033-6461ffad8d80.jpg",
        brand: "Toyota",
        model: "Camry",
        year: 2020,
        adress : "Tbilis",
        description : "dsfdfg",
        owner : "trtrt",
        price: {
            amount: 24000,
            currency: "USD"
        },
        convert: function(rate) {
            return `${Math.round(this.price.amount * rate)} GEL`;
        }
    },
    {  
        id : 2,
        image: "https://www.topgear.com/sites/default/files/images/cars-road-test/2020/09/fb96baaf2acc8929744af2d1a9d7b7e8/308638_2020_civic_type_r_limited_edition.jpg",
        brand: "Honda",
        model: "Civic",
        year: 2019,
        adress : "Tbilis",
        description : "dsfdfg",
        owner : "trtrt",
        price: {
            amount: 22000,
            currency: "USD"
        },
        convert: function(rate) {
            return `${Math.round(this.price.amount * rate)} GEL`;
        }
    },
    {  
        id : 3,
        image: "https://static0.topspeedimages.com/wordpress/wp-content/uploads/jpg/201911/1969-ford-mustang-mach.jpg",
        brand: "Ford",
        model: "Mustang",
        year: 1969,
        adress : "Tbilis",
        description : "dsfdfg",
        owner : "trtrt",
        price: {
            amount: 35000,
            currency: "USD"
        },
        convert: function(rate) {
            return `${Math.round(this.price.amount * rate)} GEL`;
        }
    },
    {  
        id : 4,
        image: "https://cdn.dealeraccelerate.com/ag/1/13460/1338129/790x1024/1970-chevrolet-malibu",
        brand: "Chevrolet",
        model: "Malibu",
        year: 1970,
        adress : "Tbilis",
        description : "dsfdfg",
        owner : "trtrt",
        price: {
            amount: 20000,
            currency: "USD"
        },
        convert: function(rate) {
            return `${Math.round(this.price.amount * rate)} GEL`;
        }
    },
    {  
        id : 5,
        image: "https://static01.nyt.com/images/2009/07/12/automobiles/650-jaguarxj6.jpg?quality=75&auto=webp&disable=upscale",
        brand: "Jaguar",
        model: "Xj",
        year: 1971,
        adress : "Tbilis",
        description : "dsfdfg",
        owner : "trtrt",
        price: {
            amount: 60000,
            currency: "USD"
        },
        convert: function(rate) {
            return `${Math.round(this.price.amount * rate)} GEL`;
        }
    },
    {  
        id : 6,
        image: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/11/8-Via-Classic-Car-Journal-Cropped.jpg",
        brand: "Mercedes-Benz",
        model: "Sl",
        year: 1974,
        adress : "Tbilis",
        description : "dsfdfg",
        owner : "trtrt",
        price: {
            amount: 45000,
            currency: "USD"
        },
        convert: function(rate) {
            return `${Math.round(this.price.amount * rate)} GEL`;
        }
    },
    {  
        id : 6,
        image: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/11/8-Via-Classic-Car-Journal-Cropped.jpg",
        brand: "Tesla",
        model: "Sl",
        year: 1974,
        adress : "Tbilis",
        description : "dsfdfg",
        owner : "trtrt",
        price: {
            amount: 45000,
            currency: "USD"
        },
        convert: function(rate) {
            return `${Math.round(this.price.amount * rate)} GEL`;
        }
    }
];
 

 
 


 
 
 