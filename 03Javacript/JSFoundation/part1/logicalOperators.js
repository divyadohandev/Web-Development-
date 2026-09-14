// && -> AND
// || -> OR
// ! -> NOT
// AND -> true if both sides are true
// OR -> true if at least one side is true
// NOT -> true if the value is false, false if the value is true

let a = 6;
let b = 5;

let cond1 = a < b; // false
let cond2 = a === b; // false

console.log(cond1 && cond2); // false
console.log(cond1 || cond2);

console.log(!(a < b)); // true