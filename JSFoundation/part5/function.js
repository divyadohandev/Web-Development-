// Function defination                       function call :
/* function functionName() {                  functionName();
  do some work
} */

function myFunction(msg) {
    // parameter -> input
    console.log(msg);
}
myFunction("Hello, I'm Divya");   // argument

// function -> 2 numbers, sum

function sum(x, y) {
    console.log(x + y);
}
sum(1, 2);

// function return a value

function sum(a, b) {
    s = a + b;
    console.log(a);
    return s;
}
let value = sum(4, 5);
console.log(value);

// Arrow Functions -> compact way of writing a function
/* const functionName=(param1, param2) => {
     do some work
} */

// normal function
function valSum(c, d) {
    return c + d;
}
let it = valSum(3, 1);
console.log(it);

// An Arrow function
const arrowSum = (d, y) => {
    console.log(d + y);
}
arrowSum(5, 6);

const arrowMul = (e, f) => {
    console.log(e * f);
    return e * f;
}
arrowMul(2, 2);

const printHello = () => {
    console.log("hello");
}
console.log(printHello());

// Practice Question
/* Create a function using the "function" keyword that takes a string as an argument & returns the
      number of vowels in the string. */

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
         count++;
        }
    }
    console.log(count);
    return count;
}
    countVowels("Divya Dohan");

// create Arrow Function to perform the above question

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
         count++;
        }
    }
    console.log(count);
    return count;
}
countVow("Hello World");


// forEach Loop in Arrays
/*
arr.forEach( callBackFunction )

CallbackFunction : Here, it is a function to execute for each element in the array

*A callback is a function passed as an argument to another function.


arr.forEach( ( val ) => {
console.log(val);
} )   
*/

let arr = ["Pune", "Delhi", "Mumbai"];

arr.forEach( (val) => {
    console.log(val);
    console.log(val.toUpperCase());
});

// Higher Order Function (HOF) are functions that either take another function as a parameter inside them or they
//  return another function as their output.   forEach is HOF.

// Practice Question
// For a given array of numbers, print the square of each value using the forEach loop.

let num = [2, 3, 4, 5, 6, 7,];

num.forEach( (num) => {
    console.log(num * num);
});



/* Some More Array Methods
1. map

Creates a new array with the results of some operation. The value its callback returns are
used to form new array

arr.map( callbackFnx( value, index, array ) )

let newArr = arr.map( ( val ) => {
return val * 2;
});
*/

let val = [24, 42, 48];

let newArr = val.map( (value) => {
    return value * 2;
});
console.log(newArr);

/*  
2. filter

Creates a new array of elements that give true for a condition/filter.
Eg: all even elements

let newArr = arr.filter( ( val ) => {
return val % 2 === 0;
} )
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArr = arr.filter( (val) => {
    return val % 2 === 0;
});
console.log(evenArr);

/*
3. reduce

Performs some operations & reduces the array to a single value. It returns
that single value.
*/

let array = [2, 3, 4, 5];
const output = array.reduce( (prev, curr) => {
    //return prev + curr;    // previous + current
});
console.log(output);

// to find out the largest number
let array = [2, 3, 4, 5];
const output = array.reduce( (prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);

// Practice Question
// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.





/* Use the reduce method to calculate product of all numbers in the array.
Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
*/





