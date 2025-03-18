
let mainCont = document.querySelector(".mainCont")
let cont = document.querySelector(".cont")
let point = document.querySelector(".point")
let pointAmount = 0
let dialog = document.querySelector(".dialog")
let closeBtn = document.querySelector(".close"); 
let textForDialog = document.querySelector(".textForDialog")
let timeout = document.querySelector(".timeout")
let textForTimeout = document.querySelector(".textForTimeout")
let closeTimeout = document.querySelector(".close-timeout"); 
let name = document.querySelector(".name");

closeBtn.addEventListener("click", function() {
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
       if(circle.style.backgroundColor == mainCont.style.backgroundColor ){
           pointAmount++
           point.innerHTML = `ქულა : ${pointAmount}`
            start() 
       }
       else {
           pointAmount--
          
            if(pointAmount <=0){
                dialog.style.display ="flex"
                textForDialog.innerHTML ="Game Over"

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

let playerName = localStorage.getItem("userName")
function getRandomColorFromArr(arr) {
    let randomIndex = Math.floor(Math.random()*arr.length)
    return arr[randomIndex]
}

mainCont.style.backgroundColor = getRandomColorFromArr(colorArr)

let str = document.querySelector(".str")
let inp = document.querySelector(".inp")

closeTimeout.addEventListener("click", function () {
    dialog.style.display = "none";
    timeout.style.display = "none"; 
    pointAmount = 0;
    point.innerHTML = `ქულა : ${pointAmount}`;
    start();
});

// str.addEventListener("click", function () {
//     localStorage.setItem("userName", inp.value);
//     let playerName = inp.value;
//     inp.value = "";
    

//     setTimeout(() => {
//         timeout.style.display = "flex";
//         textForTimeout.innerHTML = `${playerName} Your Score is ${pointAmount}`;
//     }, 5000);
// });


//  CHATGPT damexmara TIMER ON SCREEN Displayshi
let timerElement = document.querySelector(".timer"); 
let timer;  
let timerSeconds = 0;  


function startTimer() {
    timer = setInterval(() => {
        timerSeconds++;  
        updateTimerDisplay(timerSeconds); 
    }, 1000);
}


function updateTimerDisplay(seconds) {
    let minutes = Math.floor(seconds / 60);
    let displaySeconds = seconds % 60;
    if (displaySeconds < 10) {
        displaySeconds = "0" + displaySeconds; 
    }
    timerElement.textContent = `${minutes}:${displaySeconds}`;
}


function stopTimer() {
    clearInterval(timer); 
}


str.addEventListener("click", function () {
    localStorage.setItem("userName", inp.value);
    let playerName = inp.value;
    inp.value = "";

    startTimer();

    setTimeout(() => {
        timeout.style.display = "flex";
        textForTimeout.innerHTML = `${playerName} Your Score is ${pointAmount}`;
        stopTimer();  
    }, 10000);  
});

