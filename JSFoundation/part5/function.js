/*
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"greenTea"`.
     Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
  console.log(test);
}
let teaOrder = makeTea("greenTea");
// console.log(teaOrder);

/*
2. Create a function named `orderTea` that take one parameter `teaType`. Inside the function create, 
     another function named `confirmOrder` that returns a message like `"Order confirmed for Chai"`.
      Call the `confirmOrder` from within `orderTea` and return the result.
*/

   function orderTea(teaType) {
     function confirmOrder() {
        return `Order confirmed for Chai`;
     }
        return confirmOrder();
   }

   let orderConfirmation = orderTea("chai");
   // console.log(orderConfirmation);

/*
3. wrire a arrow function named calculateTotal that takes two parameters: `price` and `quantity`. The function should return
     the total cost by multiplying the price and quantity. 
    Store the result in a variable named `totalCost`.
*/

  const calculateTotal = (price, quantity) => {
    return price * quantity;
  }
  let totalCost = calculateTotal(5, 3);
 // console.log(totalCost);

/*
4. Write a function named `processTeaOrder` that makes another function, `makeTea`, as a parameter and calls it with the 
    argument `"earl grey"`.
    Return the result of calling `makeTea`.
*/

 function makeTea(typeOfTea) {
    return `makeTea: $(typeOfTea)`;
 }

 function processTeaOrder(makeTea) {
    return makeTea("earl grey");
 }

 let teaOrderResult = processTeaOrder(makeTea);
  console.log(teaOrderResult);

/*
5. Write a function named `createTeaMaker` that returns another function. The returned function should take
     one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `TeaMaker` and call it with the argument `"green tea"`.
*/

function createTeaMaker() {
   return function(teatype) {
      return `Making ${teatype}`;
   };
}

let TeaMaker = createTeaMaker();
// console.log(TeaMaker("green tea"));