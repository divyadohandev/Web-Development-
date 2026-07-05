/*
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the 
        loop when it finds `"chai"`.
    store all teas before `"chai"` in a new array named `selectedTeas` 
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if(teas[i] == "chai") {
        break;
    }
    selectedTeas.push(teas[i]);
}
//console.log(selectedTeas);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.
    And stores the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] == "Paris") {
        continue;
    }
    visitedCities.push(cities[i]);
}
//console.log(visitedCities);

/*
3. use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found.
  stores the numbers before `4` in an array named `smallNumbers`.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
    if (num == 4) {
        break;
    }
    smallNumbers.push(num);
}
//console.log(smallNumbers);

/*
4. use a `for-of` loop to iterate through the array `["green tea", "black tea", "herbal tea", "oolong tea"]` and skip `"herbal tea"`.
     store the other teas in an array named `prefferedTeas`.
*/

let teaTypes = ["green tea", "black tea", "herbal tea", "oolong tea"];
let prefferedTeas = [];

for (const tea of teaTypes) {
    if (tea == "herbal tea") {
        continue;
    }
    prefferedTeas.push(tea);
}
//console.log(prefferedTeas);




