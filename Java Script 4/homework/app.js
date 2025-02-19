// // დავალება N1
// let firstNum = (Math.round(Math.random()*100)+100)
// let secondNum = (Math.round(Math.random()*100)+300)
// if (firstNum %2 !==0){
//     firstNum++
//     for (let i=firstNum; i<secondNum; i+=2){
//         console.log([i]) // [] >> მიმანიშნებს რომ ეს კონდიცია შესრულდა 
//         }
// }
// else {
//     for (let i=firstNum; i<secondNum; i+=2){
//         console.log(i)
//     }
// }

// დავალება N2
// let randNum = (Math.round(Math.random()*100)+100)
// let userNum = Number(prompt("Hello, Please enter a number from 300 to 400:"))
// if (!isNaN(userNum) && userNum >= 300 && userNum <=400){
//     if (randNum %3 == 0){
//         for (let i = randNum; i<userNum; i+=3){
//             console.log(i)
//         }
//     }
//     else if (randNum %3 == 1){
//         for (let i = randNum +2; i<userNum; i+=3){
//             console.log(i)
//         }
//     }
//     else if (randNum %3 == 2){
//         for (let i = randNum +1; i<userNum; i+=3){
//             console.log(i)
//         }
//     }

// }
// else {
//     console.log("Wrong Input")
// }

// დავალება N3
// let randNum = (Math.round(Math.random()*11)+10)
// let userNum = Number(prompt("Hello, Please enter a number from 10 to 20:"))
// let find = false
// if (!isNaN(userNum) && userNum >= 10 && userNum <=20){
//     if (randNum === userNum) {
//         find = true;
//         console.log(`Your numbers match! You guessed: ${userNum}, Random number was: ${randNum}.`);
//     }
//     else {
//     console.log(`Your numbers do not match. You guessed: ${userNum}, Random number was: ${randNum}.`)}
//     }
// else {
//     console.log("Invalid input, please enter a number between 10 and 20.");
// }

// დავალება N4
// let randNum = (Math.floor(Math.random()*201)+100)
// if (randNum %2 ==0){
//     console.log(`Random Number is Even ${randNum}`)
// }
// else {
//     console.log(`Random Number is Odd ${randNum}`)
// }

// დავალება N5
// let FirstArr = [25, 10, 35, 82, 13];
// let SecondArr = [25, 10, 35, 82, 13];
// let randomIndex = Math.floor(Math.random() * 5);
// let randomIndex2 = Math.floor(Math.random() * 5);

// let RandFirst = FirstArr[randomIndex];
// let RandSecond = SecondArr[randomIndex2];

// if (RandFirst === RandSecond) {
//     console.log(`True, both random numbers match: ${RandFirst} and ${RandSecond}`);
// } else {
//     console.log(`False, random numbers did not match: ${RandFirst} and ${RandSecond}`);
// }