let str1 = "Hello World!";
let str2 = 'JavaScript is awesome.';

 console.log(length(str1));
console.log(str1[6]);

let obj = {
    item: "pen",
    price: 20,
}

console.log("the cost of", obj.item, "is", obj.price);
 
let output = `the cost of ${obj.item} is ${obj.price}`;   // This is the method of Template Literals
console.log(output);

// Template Literals
let specialString = `Ths is a Template Literals`;
console.log(typeof specialString);

console.log("Divya \n Dohan") // for next line 
console.log("Divya \t Dohan") // for tab gap

let str_1 = "Apna\tCollege";
console.log(str_1.length);

// string method -> these are built-in functions to manipulate a string
// str.toUpperCase() , str.toLowerCase() , str.trim() (remove whitespaces) 

let str3 = "ApnaCollege";
let newStr = str.toUpperCase();
console.log(str3);
console.log(newStr);

str3 = str.toLowerCase();
console.log(str3)

let string = "      Apna College    JS      ";     // str.trim (remove space from front and behind)
console.log(string.trim());

let str = "01234567";               // str.slice(start, end)
console.log(str.slice(1, 6));

let str8 = "Divya";
let str9 = "Dohan";

let res = str8.concat(str9);       // str.concat (join str1 + str2)
let res1 = str9.concat(str8);
console.log(res);
console.log(res1);
console.log("I am" + str8 + str9);

let str = "hello";              // str.replace(searchVal, newVal)

console.log(str.replace("h", "y"));

let str = "I'm Divya"           // str.charAT(idx)
console.log(str.charAt(4));






