//DOM manipulation is basically playing around with the dom object i.e. elements

//window > document > other elements

//console.log("url", document.URL)

// //three or more ways to access doc elemts
// //- by tagname
// const divElements = document.getElementsByTagName("main")
// //- by class
// const formInputGroup = document.getElementsByClassName("form-input-group")
// //- by id
// const headerText = document.getElementById("header-text")

//add a text to the welcome text
const welcomeTextElement = document.querySelector("#header-text > span")

const existingText = welcomeTextElement.textContent

welcomeTextElement.textContent = existingText + " " + "Isaac"
welcomeTextElement.style.color = "red"
welcomeTextElement.style.fontSize = "50px"


function appendElement(element) {
    const p = document.createElement("p")
    p.innerHTML = "heyyy we appended this"
    p.className = "my-p-tag anither-class-here"
    p.id = "mypId"
    if(p.hasAttribute("class"))
    {
        alert("it has it")
    }
    // if(p.classList.contains("my-p-tag")){
    //     alert("heyyyyy")
    // }
    element.append(p)
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "royalBlue"    
}
function changeColor(color) {
    //welcomeTextElement.style.color = color
    changeElementColor(welcomeTextElement, color)
}

function changeElementColor(element, color) {
    element.style.color = color
}

//function isEvenOrOdd(number) {
  //  return number % 2 === 0 ? "Even" : "Odd" ;
//}
//console.log(isEvenOrOdd(7));
//console.log(isEvenOrOdd(108));


//function addFruitList() {
    //const fruits = ["apple", "mango", "orange", "pear", "tangerine"]
   // const uTag = document.querySelector("#my-list");

    //for (let i = 0; i < fruits.length; i++) {
        // const li = document.createElement("li")
        // li.innerText = `this is a ${fruits[i]}`
        // uTag.append(li)
      //  uTag.innerHTML += `<li class="my-list">this is a ${fruits[i]}</li>`
   // }
//}

//next: validation

function Login() {
    const email = document.querySelector("#email")
    if (!email.value) {
        const emptyEmailSpan = document.querySelector("#empty-email")
        emptyEmailSpan.removeAttribute("hidden")
    }
    else{
        window.location.href = "./page.html"
    }
}
//parse
//routing

//assignent
//complete email bvalidation
    //email must have @ char
    //it must be more more than 8 chars long
    //it must not have a space
//- validate passwaord
    //it must have a letter, an upper case and a numerical value
    //it must be more than 7 chars

   /* const message = "Hello"
    const myName = "Bukky"
    alert (message + " " + "there" + " " + myName ) */

   /* let name = "obaloluwa"
   console.log(name.length); */

    // let tweet = prompt("compose your tweet")
    // alert(tweet.slice(0,140))


// let yourName = "Obasetemi"
// console.log(yourName.slice(0,3));


// const myName = prompt("What is your name?");
// let firstChar = myName[0];
// console.log(firstChar);
// let upperCaseChar = firstChar.toUpperCase();
// console.log(upperCaseChar);
// let restOfName = myName.slice(1, myName.length);
// console.log(restOfName);
// restOfName = restOfName.toLowerCase();
// console.log(restOfName);
// let capitalisedName = upperCaseChar + restOfName;
// console.log(capitalisedName);
// alert("hello," + " " + capitalisedName); 

// const dogAge = prompt('how old is your dog (in years)?');

// if(!dogAge){
//     alert("please enter age")
// }
// const dogAgeToNumber = Number.parseInt(dogAge)
// if(!dogAgeToNumber){
//     alert("enter valid age")
// }
// if(dogAgeToNumber >= 15)
// {
//     alert(`your dog cannot live up to ${dogAgeToNumber} years!`)
// }
// else{
//     let humanAge = ((dogAge - 2 )* 4) + 21;
//     console.log(humanAge);
//     alert("your dog is" + " " + humanAge + " " + "years old in human years"); 
// }



/*function lifeInWeeks(age) {
    let yearsLimit = 90

    if (age <= 0 || age > yearsLimit) {
        alert("enter valid age")
    } else {
        let remainingYears = yearsLimit - age
        let days = remainingYears * 365
        let weeks = remainingYears * 52
        let months = remainingYears * 12
        console.log("You have" + " " + " " + days +" " + 
        "days," + " " + weeks + " " + "weeks," + " " + 
        "and" + " " + months + " " + "months left.");
    }
   
} 

lifeInWeeks(120) */

/*function bmiCalculator(weight, height) {
    
    let bmi = weight / Math.pow(height, 2)
    return Math.round(bmi)
}
console.log("my bmi result", bmiCalculator(110, 7.5)); */

/*function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "leap year"
            } else {
                return "Not leap year"
            }
        } else {
          return "leap year"  
        }
        
    } else {
        return "Not leap year"
    }
    
}

console.log(isLeapYear(1992)); */

/*const myGuestList = ["Obaloluwa", "Obasetemi", "Akinwumi", "Bukola", "Bolanle", "Armstrong"]
const guestName = prompt("what is your name?")
if (!guestName) {
    alert("Enter a valid name")
}
if (myGuestList.includes(guestName)) {
   alert("Welcome") 
} else {
    alert("Sorry, maybe next time") 
} */  

const myNumbers = [];

function fizzBuzz() {
    
    for (let count = 1; count < 101; count++) {
        
        if (count % 3 == 0 && count % 5 == 0 ) {
        myNumbers.push("fizzbuzz");
    }
        else if (count % 3 == 0) {
            myNumbers.push("fizz");
        }
        else if (count % 5 == 0) {
            myNumbers.push("buzz");
        } else {
            myNumbers.push(count)
        }


    }
    return myNumbers

}
console.log(fizzBuzz());






   
