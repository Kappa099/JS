
let mainCont = document.querySelector(".mainCont")
let cont = document.querySelector(".cont")
let point = document.querySelector(".point")
let pointAmount = 0
let dialog = document.querySelector(".dialog")
let close = document.querySelector(".close")
let textForDialog = document.querySelector(".textForDialog")

close.addEventListener("click", function() {
    dialog.style.display="none"
    start() 
     pointAmount=0
     point.innerHTML = `ქულა : ${pointAmount}`
})

function getRandomColor() {
    let r  = Math.round(Math.random()*255)
    let g  = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    return `rgb(${r}, ${g}, ${b})`
}


console.log(getRandomColor())
let colorArr =[]
start() 


function start() {
   
    cont.innerHTML =""
    colorArr=[]
for(let i =0;i<4;i++){
    let randomColor = getRandomColor()
    colorArr.push(randomColor)
    let circle = document.createElement("div")
    circle.className = "circle"
    circle.style.backgroundColor = randomColor
   circle.addEventListener("click", function() {
       console.log(circle.style.backgroundColor)
       if(circle.style.backgroundColor == mainCont.style.backgroundColor ){
           console.log(true)
           pointAmount++
           if(pointAmount >=3){
            dialog.style.display ="flex"
            let playerName = localStorage.getItem("userName")
            textForDialog.innerHTML =`${playerName} You Won`
            // Swal.fire({
            //     icon: "error",
            //     title: "Oops...",
            //     text: "Game Over!",
            //     footer: '<a href="#">Why do I have this issue?</a>'
            //   });
        }
        else {
            point.innerHTML = `ქულა : ${pointAmount}`
            start() 
        }
       }
       else {
           console.log(false)
           pointAmount--
          
            if(pointAmount <=0){
                dialog.style.display ="flex"
                textForDialog.innerHTML ="Game Over"
                // Swal.fire({
                //     icon: "error",
                //     title: "Oops...",
                //     text: "Game Over!",
                //     footer: '<a href="#">Why do I have this issue?</a>'
                //   });
            }
            else {
                point.innerHTML = `ქულა : ${pointAmount}`
                start() 
            }
     
       }
   }) 
    cont.appendChild(circle)
 }

   mainCont.style.backgroundColor = getRandomColorFromArr(colorArr)
}


console.log(colorArr)


function getRandomColorFromArr(arr) {
    let randomIndex = Math.floor(Math.random()*arr.length)
    return arr[randomIndex]
}


mainCont.style.backgroundColor = getRandomColorFromArr(colorArr)



document.addEventListener("scroll", function () {
    document.body.style.backgroundColor = "red"
})



////////////////////////  times


// let btn = document.querySelector(".btn")
// btn.addEventListener("click", function() {
//     clearInterval(inter) 
//     clearTimeout(timeout)
// })
// let timeout = setTimeout(() => {
//   console.log("hi")
// }, 5000);


// clearTimeout(timeout)



// let num =10
// let inter =setInterval(() => {
//     num--
//     console.log(num)
//     // if(num==0){
//     //     clearInterval(inter)
//     // }
// }, 1000);  /// მილიწამებში ითვლის 




////////////   ასინქრონულები



// function one() {
//     console.log("one")
// }


// function two() {
//     console.log("two")
// }

// function two2() {
//     console.log("two2")
// }


// two()

// setTimeout(() => {
//     console.log("timeout")
// }, 0);


// one()

// two2()


//    KEY VALUE


let str = document.querySelector(".str")
let inp = document.querySelector(".inp")

str.addEventListener("click", function() {
    localStorage.setItem("userName",inp.value )
    inp.value =""
})

