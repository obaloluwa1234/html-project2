//data type members/properties
const person = {
    name: "sade",
    age: 21,
    function(){
        console.log("hey i can walk!");
    }
}

//all data types inherit from Object. This is more pronounced in OOP languages.
const myName = "Tunji Johnson"
const myAge = 21.9090
const hasKid = true
const fruits = ["mango", "apple", "banana"]

const myNameToUpper =  myName.toUpperCase();
console.log(myNameToUpper);

console.log("lenght of string", myName.length);
const padded = myName.padEnd(23, "O");
console.log(padded);
console.log(myName.includes("J"));
console.log(myName.replace("Tun", "Boj"));

console.log(typeof myAge.toString());
console.log(myAge.toFixed(2));

console.log(fruits.reverse())

//assignment 1 - find maximum number in this array
//assignment 2 - convert all the strings in this array to uppercase
const names = ["tunji", "kunle", "max", "adeola", "BENson", "fadeyi"]
//assignment x -  find the sum of the elemtns in the arr
const numbers = [2, 6, 9, 0, 7, 1, 7, 8]
//find smallest number ever
//loop over array
//check if each element is bigger than smallest number
//if it is, replace smallest number by element
//if not, do ntohing
//end
//console.log(Number.MIN_SAFE_INTEGER);

let result = 0;
for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
    //result = result + numbers[i];
}
console.log(result);
