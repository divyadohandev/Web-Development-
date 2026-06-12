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