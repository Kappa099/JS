let color = document.querySelector('.color')
let options = document.querySelector('.options')
let message = document.querySelector("#message");
message.textContent = "Guess the color!";
let stats = document.querySelector(".stats")
let time = document.querySelector(".time")
let rounds = document.querySelector(".round")
let score = document.querySelector(".score")

function getRandomRGB() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}  

function setTargetColor() {
    let target =  getRandomRGB()
    color.style.backgroundColor = target
    return target
}
let round = 1
function getButtonCount(round) {
  let buttonCount = 4;
  if (round >= 15) {
    buttonCount = 10;
  } else if (round >= 10) {
    buttonCount = 8;
  } else if (round >= 5) {
    buttonCount = 6;
  }
  return buttonCount;
}

function setButtons(target, count) {
    options.innerHTML = '';
    let correctIndex = Math.floor(Math.random() * count);
    for (let i = 0; i < count; i++){
        let button = document.createElement("button");
        button.classList.add("btn");
        options.appendChild(button);

        if (i === correctIndex) {
        button.style.backgroundColor = target;
        } else {
        button.style.backgroundColor = getRandomRGB();
        }

        button.addEventListener('click', function (){
            if (button.style.backgroundColor == target){
            message.textContent = "Your answer is Correct";
            message.style.backgroundColor = "green"

            }
            else {
            message.textContent = "Your answer is Wrong!";
            message.style.backgroundColor = "red"
            }
            round++;
            let newTarget = setTargetColor()
            let newCount = getButtonCount(round)
            setButtons(newTarget, newCount)
            if (round >= 21) {
            message.textContent = "🎉 Game Over!";
            message.style.backgroundColor = "rgb(94, 179, 9)";
            options.innerHTML = ''; 
            return;
            }

        })
    }
}
function statistic(){

}

let target = setTargetColor();
let count = getButtonCount(round);
setButtons(target, count);