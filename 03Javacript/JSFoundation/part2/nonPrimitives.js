// Non-Primitives -> Non-Primitives are more complex data structures. They are mutable (the value itself can be changed). 
// They are also called reference types because they are accessed by reference rather than by value.

const userName = {
   firstName: "Divya",
   isLoggedIn: true,
};

userName.firstName = "MR. H";
userName.lastName = "john";


console.log(userName.firstName);
console.log(typeof userName);
console.log(userName.lastName);
console.log(userName);

let today = new Date();
console.log(today.getDate());

// Arrays 

let anotherUser = ["Divya", "MR. H", "john"];

console.log(anotherUser[0]);
console.log(anotherUser[2]);

console.log("1" + 1);

let isValue = true;
console.log(isValue + 1);

let isValue1 = "2abc";
console.log(typeof Number(isValue1));
console.log(Number(null));


// Stack and Heap -> Stack is used for static memory allocation and Heap is used for dynamic memory allocation.
// stack -> for primitive data types, heap -> for non-primitive data types.

let user = {
   firstName: "Divya",
   isLoggedIn: true,
};

let anotherUser1 = user; // both user and anotherUser1 point to the same object in memory (heap)

anotherUser1.firstName = "MR. H"; // changing the value of firstName in anotherUser1 also changes it in user
console.log(user.firstName); // Output: "MR. H"

let user2 = {
   firstName: "Divya",
   isLoggedIn: true,
};

let anotherUser2 = { ...user2 }; // creating a new object with the same properties as user2

anotherUser2.firstName = "MR. H";
console.log(user2.firstName); // Output: "Divya"
console.log(anotherUser2.firstName); // Output: "MR. H"