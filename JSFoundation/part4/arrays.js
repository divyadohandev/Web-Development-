let marks = [97, 87, 65, 56, 42];
marks[0] = 95;
console.log(marks);

// Looping over an array
// for loop
 /*  for (let i = 0; i < arr.length; i++) {
        Statement;
   } */

let games = ["circket", "badminton", "chess", "ludo"];

for (let i = 0; i < games.length; i++) {
    console.log(games[i]);
}

// for of loop

let cities = ["delhi", "pune", "mumbai", "palwal"];

for (let city of cities) {
    console.log(city.toUpperCase());
}

/* Question.1
  For a given array with marks of students -> [96, 87, 76, 65, 54]. Find average marks of the entire class.
*/

let marks = [96, 87, 76, 65, 54];

let sum = 0;

for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

/* Question.2
  For a given array with prices of 5 items -> [250, 200, 195, 180, 150]. All items have an offer of 10% OFF on them.
   Change the array to store the final price after applying offer. */

   let prices = [250, 200, 195, 180, 150];


   // Arryas method 
   //  1. Push() : add to end      2. Pop() : delete from end & return     3. toString() : convert array to string

   let fruits = ["mango", "litchi", "apple", "banana", "cherry"];
   fruits.push("guava", "berries");
   console.log(fruits);

   let teas = ["green tea", "lemon tea", "black tea"];
   let deletedItems = teas.pop("lemon tea");
   console.log(teas);

   let items = ["pen", "pencil", "book", "marker"];
   console.log(items.toString());

   let marvelHeroes = ["thor", "spiderman", "ironman"];    //concat(): join multiple arrays & return result
   let dcHeroes = ["batman", "superman"];

   let heroes = marvelHeroes.concat(dcHeroes);
   console.log(heroes);
   marvelHeroes.unshift("antman");     // unshift(): add to start
   console.log(marvelHeroes);

   dcHeroes.shift("batman");          // shift(): delete from start & return
   console.log(dcHeroes);

   // slice(): return a piece of the array    slice(startIdx, endIdx)

   let foodItems = ["burger", "pizza", "cake", "icecream"];
   console.log(foodItems);
   console.log(foodItems.slice(1,3));
   
   // splice(): change original array (add, remove, replace)      splice(startIdx, deleteCount, newEl1)

   let arr = [1, 2, 3, 4, 5, 6, 7];
   arr.splice(2, 2, 101, 102);
   console.log(arr);

   //ADD element
   arr.splice(2, 0, 101);
   console.log(arr);

   //Delete element
   arr.splice(3, 1);
   console.log(arr);

   //Replace element
   arr.splice(3, 1, 101);
   console.log(arr);

   // Practice Question
   /*  Create an array to store companies -> "Bloomberg", "Uber", "Microsoft", "Google", "Flipkart", "IBM"
        a. Remove the first company from the array
        b. Remove Uber & add Ola in its place
        c. Add Amazon at the end 
    */

        let companies = ["Bloomberg", "Uber", "Microsoft", "Google", "Flipkart", "IBM"];
        // a.
        companies.shift("Bloomberg");
        console.log(companies);
        // b. 
        companies.splice(1,1, "Ola");
        console.log(companies);
        //c.
        companies.push("Amazon");
        console.log(companies);






   




   

