 // For Loop
  /*  for (initialization; condition; increment/decrement) {
    code block to be executed
    } */


// Print 1 to 5

 for (let i = 1; i <= 5; i++) {
    console.log("Hello");
}

// calculate the sum of numbers from 1 to 10

let sum = 0;
for (let i = 1; i <=10; i++) {
    sum += i;
}
console.log(sum);


// While Loop

/* while (condition) {
    code block to be executed
} */

let i = 1;
while (i <= 6) {
    console.log("Hello");
    i++;
} 

// do-while loop

/* do {
    code block to be executed
} while (condition); */

let j = 1;
do {
    console.log("Hello");
    j++;
} while (j <= 6);


// for of loop

/* for (variable of iterable) {
    code block to be executed
} */

 let str = "JavaScript";
let size = 0;

for (let i of str) {
    console.log("i=", i);
    size++;
}
console.log("size of string is", size); 


// for in loop

/* for (variable in object) {
    code block to be executed
} */

 let student = {
    name: "Divya",
    age: 25,
    cgpa: 9.5,
}; 
for (let key in student) {
    console.log("Key:", key, "Value:", student[key]);
} 


// Question practice
/* 1. Print all the even numbers from 1 to 100. */

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i, "is even");
    }
}

/* 2. Create a game where you start with any random game number. Ask the user to keep guessing the game
      number until the user enters the correct value. */

let gameNumber = 25;

let userName = prompt("Guess the game number:");

while (userName != gameNumber) {
    userName = prompt("You entered the wrong number. Guess again:");
}
console.log("You guessed the correct number!");









