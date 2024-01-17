//it is a programming languge
//used to manipulate the DOM (Document Object Model)
//used to program input, output nd events on the dom

//intro to dom manipulation
let enterDetailText = document.getElementById("details_text").innerHTML;
console.log(enterDetailText);

//JS as a PL
//data types:
//string
let myName = "Tunji"
let anotherName = 'Tunji'

//number (integer), 
let nyNumber = 123

//boolean
let isTodaySunday = false
let hasLaptop = true

//array - collection of data [1, "sade", false]
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday"]
let governorsDetails = [
    {
        name: "Iroko",
        state: "Ondo",
        terms: 2
    },
    {
        name: "sanwo olu",
        state: "lagos",
        terms: 2
    }
]

//object
let tunjiTheTailor = {
    name: "Tunji",
    age: 27,
    favoriteFood: "Rice",
    hasKid: true,
    profession: "Tailoring",
    namesOfKids: ["Bayo", "Bola"]
};

//date
let todaysDate = new Date(2023, 11, 27)

//null
//undefined

//naming convention
//pascalCaseToday
//CamelCaseToday
//snake_case
//kebab-case

//operators
//arithmetic
// +, *, - , /,
//logical
//> < >= <= == !=
