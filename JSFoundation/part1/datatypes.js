// Datatypes in JavaScript: Number, String, Boolean, Object, Null, Undefined, Symbol

// Number: Represents numeric values, both integers and floating-point numbers.
let integerNum = 42;
let floatNum = 3.14;

console.log(typeof integerNum);
console.log(typeof floatNum);

// String: Represents sequences of characters, enclosed in single or double quotes.
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "JavaScript is fun!";

console.log(typeof singleQuoteString);
console.log(typeof doubleQuoteString);

// Boolean: Represents a logical entity that can have two values: true or false.
let isJavaScriptFun = true;
let isJavaScriptHard = false;

console.log(typeof isJavaScriptFun);
console.log(typeof isJavaScriptHard);

// Object: Represents a collection of key-value pairs, where keys are strings and values can be any data type.
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log(typeof person);
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);

// Null: Represents the intentional absence of any object value. It is a primitive value that represents "no value" or "empty".
let emptyValue = null;
console.log(typeof emptyValue); // Note: typeof null returns "object" due to a historical bug in JavaScript

// Undefined: Represents a variable that has been declared but has not yet been assigned a value.
let uninitializedVariable;
console.log(typeof uninitializedVariable); // undefined

// Symbol: Represents a unique and immutable primitive value that can be used as an identifier for object properties.
let uniqueId1 = Symbol("id");
let uniqueId2 = Symbol("id");

console.log(uniqueId1 === uniqueId2); // false, each Symbol is unique
