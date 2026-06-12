// check if num1 is less than num2

let num1 = 5;
let num2 = 10;

// Challenge 1: Check if num1 is less than num2

console.log("I am upper code");

if (num1 < num2) {
    console.log("num1 is less than num2");
} else {
    console.log("nope");
}

if (num1 > num2) {
    console.log("num1 is greater than num2");
} else {
    console.log("Nope, num1 is not greater");
}

console.log("I am regular bottom code");

// Checking if a string is eual to another string

let userName = "Divya";
let anotherName = "divya";

if (userName === anotherName) {
    console.log("The names are the same");
} else {
    console.log("The names are different");
}

// Checking if a variable is a number or not

let score = 50;

if (typeof score === "number") {
    console.log("Yep, This is a Number");
} else {
    console.log("No, This is not a Number");
}

// Checking if a Boolean value is true or false 

let isTeaReady = false;

if (isTeaReady) {
    console.log("Tea is Ready")
} else {
    console.log("No, Tea is not Ready")
}

// Checking if an Array is empty or not

let items = [];

console.log(items.length);

if (items.length === 0) {
    console.log("Array is empty")
} else {
    console.log("Array is not empty")
}