// && -> AND
// || -> OR
// ! -> NOT
// AND -> true if both sides are true
// OR -> true if at least one side is true
// NOT -> true if the value is false, false if the value is true

let isLoggedin = true;
let isPaid = false;

console.log( isLoggedin && isPaid); // false because both sides are not true

console.log( isLoggedin || isPaid); // true because at least one side is true