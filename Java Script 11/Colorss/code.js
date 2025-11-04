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
let points = 0
function setButtons(target, count) {
  options.innerHTML = '';
  let correctIndex = Math.floor(Math.random() * count);

  for (let i = 0; i < count; i++) {
    let button = document.createElement("button");
    button.classList.add("btn");
    options.appendChild(button);

    if (i === correctIndex) {
      button.style.backgroundColor = target;
    } else {
      button.style.backgroundColor = getRandomRGB();
    }
    button.addEventListener('click', function () {
      clearInterval(timer); 

      if (button.style.backgroundColor === target) {
        message.textContent = "Your answer is Correct";
        message.style.backgroundColor = "green";
        points += 1;
        score.textContent = `SCORE ${points}`;
      } else {
        message.textContent = "Your answer is Wrong!";
        message.style.backgroundColor = "red";
      }

      round = round + 1;
      calculateRound();

      if (round >= 21) {
        document.getElementById("final-score").textContent = points;
        document.getElementById("popup").classList.remove("hidden");
        return;
      }

      let newTarget = setTargetColor();
      let newCount = getButtonCount(round);
      setButtons(newTarget, newCount);
      startRoundTimer();
    });
  }
}
let timer = null;
function startRoundTimer() {
  if (timer) clearInterval(timer);

  let duration = 5000;
  let interval = 10;
  let remaining = duration;

  timer = setInterval(() => {
    remaining -= interval;
    let seconds = (remaining / 1000).toFixed(2);
    time.textContent = `TIME ${seconds}`;

    if (remaining <= 0) {
      clearInterval(timer);
      options.innerHTML = '';

      round++;
      score.textContent = `SCORE ${round - 1}`;

      if (round >= 21) {
        message.textContent = "🎉 Game Over!";
        message.style.backgroundColor = "rgb(94, 179, 9)";
        return;
      }

      let newTarget = setTargetColor();
      let newCount = getButtonCount(round);
      setButtons(newTarget, newCount);
      startRoundTimer();
    }
  }, interval);
}

function calculateRound(){
  rounds.textContent = `ROUND ${round}/20`;
}
let target = setTargetColor();
let count = getButtonCount(round);
setButtons(target, count);
startRoundTimer();
calculateRound();

document.getElementById("play-again").addEventListener("click", function () {
  round = 1;
  points = 0;
  calculateRound();
  score.textContent = "SCORE 0";
  message.textContent = "Guess the color!";
  message.style.backgroundColor = "transparent";
  document.getElementById("popup").classList.add("hidden");

  let target = setTargetColor();
  let count = getButtonCount(round);
  setButtons(target, count);
  startRoundTimer();
});