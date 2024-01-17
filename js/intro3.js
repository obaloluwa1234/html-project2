//arrays and iterations (loops) O(n) Big O notation

//types of collection
//array - accepts duplicate data. Finding items is O(1)
//set - it does not accept duplicate data
//queue - first in first out FIFO
//stack -last in first out -LIFO
//list - accepts duplicate too

//for - index based
//for each - value based
//while
//do (while)
//for in - used for objects
//for of -used for objects adnd arrays

const numbers = [1, 2, 3]
const fruits = ["🍊", "🍍", "🍌", "🍐", "🍎"]
// console.log(`i love ${fruits[1]}`);
// console.log(`i love ${fruits[2]}`);
// console.log(`i love ${fruits[0]}`);
//console.log([1, 2, 3, 4, 5][2]);

//ARRAY FUNCTIONS
//fruits.push("🐱")
//fruits.splice(2, 1) //- remove element from a particular position
//remove an item at a particular index
// const indexOfItem = fruits.indexOf("🍌")
// if(indexOfItem > -1)
//     fruits.splice(indexOfItem, 1)
//fruits.shift() - removes the first elemtn from an array in the order FIFO
//fruits.pop() //- removes the last elemtn from an array
// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     console.log(`i love ${fruit}`);
// }


// fruits.forEach(fruit => {
//     console.log(`i love ${fruit} soo much`);
// });

//const result = 10 % 6 //modulo means what is the remainder if the first number is divided by the second
// let i = 0
// while (i <= 10) {
//     if(i % 2 > 0){
//         console.log(i)
//     }
//     i++
// }

let i = 0
do {
    console.log(i * 2)
    i++
} while (i <= 10);