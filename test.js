
// function Greeting(name){
//     return `Hello ${name}`
// }
// const user = prompt("What is your name")
// document.write(Greeting(user))


// function Warning(){
//     return alert("This website will use your data")
// }

// Warning()
// document.write("Welcome")

function Func(arr, num){
    let resp = false
    if (arr.includes(num)){
        resp = true
    }
    return resp
}
const arr = [1,2,3,4,5,6,7]
const num = 3
console.log(Func(arr, num))