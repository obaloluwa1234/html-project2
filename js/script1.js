// function whoIsPaying(names) {
//     const numberOfPeople = names.length;
//     const randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
//     const randomPerson = names[randomPersonPosition];

//     return randomPerson + " is going to buy lunch today! "
    
// }
// console.log(whoIsPaying(["ola", "oni", "ben", "kay", "okon", "dupe"]));
// console.log(whoIsPaying(["Ayo", "Tunde", "Tunji", "Lade", "Bayo", "Mama"]));
// console.log(whoIsPaying(["Tobi", "Toni", "Teni", "Tola", "Tiwi", "Tupe"]));
// console.log(whoIsPaying(["Bola", "Goni", "Yen", "Day", "Tokon", "Fupe"]));

function fibonacciGenerator(n) {
    
let output = [];
if (n === 1) {
    output = [0]
    
}
else if (n === 2) {
    output = [0, 1]
}
else {
    output = [0, 1] 
    for (let i = 2; i < n; i++) {
         output.push(output[output.length - 2] + output[output.length - 1])
        
    }
     }
return output
    
}
    output = fibonacciGenerator(7)
    console.log(output);





