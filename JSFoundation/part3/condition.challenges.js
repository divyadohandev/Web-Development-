// 1. if else statement

 age = 25;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

// questions on if else statement
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


// 2. else if statement

 let grade = "B";

if (grade === "A") {
    console.log("Excellent");
} else if(grade === "B") {
    console.log("Good");
} else {
    console.log("Needs Improvement"); 
}

// ternary operator

let age = 26;

age >= 18 ? "adult" : "not an adult";
// if we want to print the result we can do this
console.log(age >= 18 ? "adult" : "not an adult"); 

// question 1. Get user to input a number using Prompt ("Enter a number:"). Check if the number is multiple of 5 or not.

 let num = prompt("Enter a number:");

if (num % 5 === 0) {
    console.log("The number is a multiple of 5");
} else {
    console.log("The number is not a multiple of 5");
} 

/*  question 2. Write a code which can give grades to students according to their marks. (A => 90-100, B => 80-89, 
            C => 70-79,  D => 60-69, F => <60) */

let score = 92;

if (score >= 90 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
    console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: C");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}