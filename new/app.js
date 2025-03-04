let box = document.querySelector('.box')
let changeColor = document.querySelector('#change-color')
let text = document.querySelector('.text')
let toggleBox = document.querySelector('#toggle-box')
let increaseSize = document.querySelector('#increase-size')
let decreaseSize = document.querySelector('#decrease-size')

changeColor.addEventListener('click', function (){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    let color = `rgb(${r},${g},${b})`

    box.style.backgroundColor = color
    text.textContent = `this is your new color: ${color}  `
})

toggleBox.addEventListener(`click`, function(){

    if (box.style.display === 'none'){
        box.style.display = 'block'
        toggleBox.textContent = 'Hide Box'
    }
    else {
        box.style.display = 'none'
        toggleBox.textContent = 'Show Box'
    }
})
let boxSize = 200;

increaseSize.addEventListener('click', function () {
    if (boxSize < 400) {  
        boxSize += 20;  
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
    }
});

decreaseSize.addEventListener('click', function () {
    if (boxSize > 120) {  
        boxSize -= 20; 
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
    }
});