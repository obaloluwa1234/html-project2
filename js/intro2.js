// functions and conditional statements
const sum = sumTwoNumbers(1, 1)
if(sum){
    console.log(sum);
}

const myName = getFullName("Tunji", "Johnson", "Bolanle")
console.log(myName);

drinkAlcohol(34);

//check the equality of these numbers  11 and 17

let myFirstNumber = 11
let mySecondNumber = 17

console.log(myFirstNumber == mySecondNumber)

//string concatenation

let firstName = "Sade"
let surname = "Adeoba"

let fullName = firstName + " " + surname + " " + "is going" + " " + "home"
console.log(fullName);

//string interpolation

let interpolatedFullName = `this is the interpolated name: ${firstName} ${surname}`
console.log(interpolatedFullName);

//functions
function sumTwoNumbers(firstNumber, secondNumber) {
    if (firstNumber < 1 || secondNumber < 1) {
        alert("one or both of the numbers is less than 1")
        return;
    }
    let sum = firstNumber + secondNumber
    return sum
}

function doMultiplication(firstNumber, secondNumber){
    const result = firstNumber * secondNumber
    return result
}

function getFullName(firstName, secondName, middleName = "olumba") {
    const fullName = `${firstName} ${middleName} ${secondName}`
    return fullName;
}

const myFullName = function(firstname, lastname){
    return "this s my full name o " + firstname + " " + lastname
}

const myNameAgain = myFullName("Kola", "Adeonuga")
console.log(myNameAgain);

function drinkAlcohol(age) {
    if(age >= 18){
        console.log("yesssss i'm drinking");
    }
    else{
        console.log("no bro, you cannot drink, sorry");
    }
}

nameOfDays(2, "read my books")

//Mon, Tues, Wed, Thur, Fri, Sat, Sun
function nameOfDays(dayOfWeek, task) {
    const something = doSomething(task)
    switch (dayOfWeek) {
        case 1:
            console.log(`${something} because it is Monday`);
            break;
        case 2:
            console.log(`${something} because it is Tuesday`);
            break;
        case 3:
            console.log(`${something} because it is Wednesday`);
            break;
        case 4:
            console.log(`${something} because it is Thursday`);
            break;
        case 5:
            console.log(`${something} because it is Friday`);
            break;
        default:
            console.log(`${something} because it is Weekend`)
            break;
    }
    // if(dayOfWeek == 1){
    //     console.log("Monday");
    // }
    // else if(dayOfWeek == 2){
    //     console.log("Tuesday");
    // }
    // else if(dayOfWeek == 3){
    //     console.log("Wednesday");
    // }
    // else{
    //     console.log("it's weekend");
    // }
}

function doSomething(something) {
    return something
}
