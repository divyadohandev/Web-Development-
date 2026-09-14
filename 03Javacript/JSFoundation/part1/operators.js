// Arithmetic Operators  ( +, -, *, /, %, ** )  gives a number value


let a = 10;
let b = 5;

c = a + b;
d = a - b;
e = a * b;
f = a / b;

console.log("a + b =", a+b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

// Modulus Operator  ( % )  gives the remainder of a division operation

let x = 10;
let y = 3;

console.log("x % y =", x % y); 

// Exponentiation Operator  ( ** )  gives the result of raising a number to the power of another number

let base = 2;
let exponent = 3;

console.log("base ** exponent =", base ** exponent);

// Increment and Decrement Operators  ( ++, -- )  increases or decreases a number by 1

let num = 10;
num++;
console.log("num after increment:", num); 

num--;
console.log("num after decrement:", num);



// Assignment Operators  ( +=, -=, *=, /=, %= )  assigns a value to a variable and performs an operation on it

let value = 10;
value += 5;
console.log("value after += 5:", value);

value -= 3;
console.log("value after -= 3:", value);

value *= 2;
console.log("value after *= 2:", value);

value /= 4;
console.log("value after /= 4:", value);

value %= 2;
console.log("value after %= 2:", value);



// Comparison Operators  ( ==, !=, >, <, >=, <= )  gives a boolean value (true or false)

let num1 = 10;
let num2 = 20;
let num3 = 30;

 console.log(num1 == num2); // false   ( only check the value )
console.log(num1 != num3); //true
console.log(num1 > num2); // false
console.log(num1 < num3); // true 

let value1 = 10;
let value2 = "20";

console.log(value1 === value2); // false (strict equality)  (checks both value and type)

console.log(value1 !== value2); // true (strict inequality)  (checks both value and type)