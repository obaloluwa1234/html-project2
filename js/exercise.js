function getFullName(firstName, lastName) {
    if(firstName == "" || lastName == ""){
        alert("heyyy put your name")
    }
    else{
        const fullName = `${firstName} ${lastName}`
        //console.log(fullName);
        return fullName
    }
}

const myFullName = getFullName("Aduga", "John")
if(myFullName){
    console.log("my full name is:", myFullName);
}


function sumNumbers(fisrtNumber, secondNumber) {
    if (fisrtNumber > 0 && secondNumber > 0) {
        if(fisrtNumber > secondNumber){
            const result= fisrtNumber + secondNumber
            return result 
        }
    }
}

//first number must be greater than second
const sum = sumNumbers(1, 67);
if (sum ) {
    console.log(sum);    
}


//1. create function that gets the area of a triangle
    // the area must be in 'metre squared' e.g. 24 meter squared
    // the base or height of a triangle cannot be 0 or negative number
    // the height must be bigger than the base

//2. create a function that subtracts a number from another. The result must not be a negative number

//3. create an array of animals with length 7
    //increase the length of the array
    //remove the animal in the third index

//4. create a function that lists numbers from a start point to an end point