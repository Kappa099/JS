
let mainCont = document.querySelector(".mainCont")
let cont = document.querySelector(".cont")
let point = document.querySelector(".point")
let pointAmount = 0

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
           point.innerHTML = `ქულა : ${pointAmount}`
           start() 
           if(pointAmount == 5){
            Swal.fire({
                title: "You Win 🎉🎉🎉",
                icon: "success",
                draggable: true
              });
        }
       }
       else {
           console.log(false)
           pointAmount--
          
            if(pointAmount <=0){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Game Over!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
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
