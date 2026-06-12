// Number

let balance = 120;

console.log(typeof balance);

let anotherBalance = new Number(120);
console.log(anotherBalance.valueOf());

console.log(typeof anotherBalance);

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

console.log(typeof isActive);
console.log(typeof isReallyActive);

// null and undefined

let firstName;
console.log(firstName);  // undefined

let lastName = null;
console.log(lastName);  // null

// String

let myString = "Hello";
let myStringOne = "Hey";
let userName = "Divya"

let oldGreet= myString + " " + userName;
console.log(oldGreet);

let greetMessage = `Hello ${userName}!`;
console.log(greetMessage);

let demoOne = `value is ${3/4}`;
console.log(demoOne);

// Symbol

let sm1 = Symbol("id");
let sm2 = Symbol("id");

console.log(sm1 == sm2);
console.log(sm1);