// დავალება N1
// let arr = [15, 20, 50, 30, 75, 100]
// arr.push(125)
// arr.unshift(10)
// console.log(arr)

// დავალება N2
// let randColor = [];

// for (let i = 0; i < 10; i++) {
//     let r = Math.round(Math.random() * 255);
//     let g = Math.round(Math.random() * 255);
//     let b = Math.round(Math.random() * 255);
//     randColor.push(`rgb(${r},${g},${b})`);
// }

// for (let el of randColor) {
//     console.log(el);
// }
// console.log(randColor)

// დავალება N3
// let arr = [15, 20, 50, 30, 75, 100, 10, 35]
// for (let i=0; i<arr.length; i++){
//     for (let j=i+1; j<arr.length; j++){
//         if (arr[i] > arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr.slice(5,8))

// დავალება N4
// let names = ["John", "Jane", "Mike", "Sarah", "David", "Emily", "Michael", "Emma", "Sophia", "Andrew"]
// let team1 = console.log(`First Team`, names.slice(0,2))
// let team2 = console.log(`Second Team`,names.slice(2,4))
// let team3 = console.log(`Third Team`,names.slice(4,6))
// let team4 = console.log(`Forth Team`,names.slice(6,8))
// let team5 = console.log(`Fifth Team`,names.slice(8,10))

// let names = ["John", "Mary", "Sarah", "Taylor", "Olivia", "Tom", "lalal", "kuha"]
 
// for(let i=0; i<names.length; i+=2){
//     console.log(names.slice(i, i+2))
// }
 
 
 
 
 
// ///// Eka's version
// let names = ["John", "Mary", "Sarah", "Taylor", "Olivia", "Tom", "lalal", "kuha"]
 
// // for(let i=0; i<names.length; i+=2){
// //     let array = []
 
// //     array.push(names[i])
// //     array.push(names[i+1])
// //     console.log(array)
// // }

// while(names.length != 0){
//     let randomIndex1 = Math.floor(Math.random() * names.length)  
//     let randomIndex2 = Math.floor(Math.random() * names.length)
//     if(randomIndex1 != randomIndex2){
 
//         console.log(names.splice(randomIndex1,1), names.splice(randomIndex2,1))
 
//     }
// }
