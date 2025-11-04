let mainCont = document.querySelector("#game-container");
let guessColor = document.createElement("div");
mainCont.appendChild(guessColor);
guessColor.className = "guess";
let message = document.querySelector("#message");
reset = document.querySelector("#new-game");
message.textContent = "Guess the color!";


let buttons = []; 
for (let i = 0; i < 4; i++) {
    let button = document.createElement("button");
    button.classList.add("cycle");
    mainCont.appendChild(button);

    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let randomColor = `rgb(${r},${g},${b})`;
    button.style.backgroundColor = randomColor;
    buttons.push(button);
}

let randomIndex = Math.floor(Math.random() * buttons.length);
guessColor.style.backgroundColor = buttons[randomIndex].style.backgroundColor;

buttons.forEach(button => {
    button.addEventListener('click',function(){
        if (guessColor.style.backgroundColor === button.style.backgroundColor){
            message.textContent = "Your answer is Correct";
        }
        else{
            message.textContent = "Your answer is Wrong!";
        }
    })
})
reset.addEventListener('click',function(){
    location.reload();
})