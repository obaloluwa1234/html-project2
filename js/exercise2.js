function areaOfTriangle(base, height) {
    if (base > 0 && height > 0) {
        if (height > base) {
            const area = 0.5 * base * height
            const result = `${area} meter squared`
            return result
        }
    }
}
const result = areaOfTriangle(7, 12)
if (result) {
    console.log(result);
}

/*function subtractNumber(firstNumber, secondNumber) {
    if (firstNumber > 0 && secondNumber > 0) {
        if (firstNumber > secondNumber) {
            const difference = firstNumber - secondNumber
            return difference
            
        }
        
    }
    
}
const minus = subtractNumber (80, 20)
if (minus) {
    console.log(minus);
    
} */

/* const animals = ["cat", "dog", "goat", "gorilla", "sheep", "monkey", "chicken"]
console.log(animals);
console.log(animals.splice(3, 1))
console.log(animals.push("bear", "puma", "jaguar")); */

// function listOfNumbers(start, end) {
//     while (start <= end) {
//         console.log(start);
//         start++
//     }
// }
// listOfNumbers (3, 2)

