let color = document.querySelector('.color')
let options = document.querySelector('.options')
let message = document.querySelector("#message");
message.textContent = "Guess the color!";

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


function rounds() {
    let buttonCount = 4;
    if (round >= 15) {
    buttonCount = 10;
    } else if (round >= 10) {
    buttonCount = 8;
    } else if (round >= 5) {
    buttonCount = 6;
    }
}
function setButtons(target, count) {
    options.innerHTML = '';
    for (let i = 0; i < 4; i++){
    let button = document.createElement("button");
    button.classList.add("btn");
    options.appendChild(button);

    let index = Math.floor(Math.random()* options.children.length)
        btn.addEventListener('click', function (){
            if (btn.style.backgroundColor == target){
            message.textContent = "Your answer is Correct";
            }
            else {
            message.textContent = "Your answer is Wrong!";
            }
            let newTarget = setTargetColor()
            setButtons(newTarget)
        })
    }
}

// btn.addEventListener('click', function () {
//                 buttons.forEach(b => {
//                 b.style.backgroundColor = getRandomRGB();
//                 });
//             });