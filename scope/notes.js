// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }

// let globalNum = 10;

// function incrementGlobal() {
//   globalNum++;
// }

// console.log(globalNum);
// incrementGlobal();
// console.log(globalNum);

// const item1 = {
//   price: 5.99,
//   quantity: 2,
// };

// const item2 = {
//   price: 3.49,
//   quantity: 4,
// };

// function calculateTotal(item) {
//   return item.price * item.quantity;
// }

// const totalTransaction = calculateTotal(item1) + calculateTotal(item2);
// console.log(totalTransaction);

// Example 1
const addFunc = function (numOne) {
  return function (numTwo) {
    return numOne + numTwo;
  };
};

const myVar = addFunc(5)(10);
console.log(myVar);

// Example 2
const arrowAdd = (numOne) => (numTwo) => numOne + numTwo;

const myArrowVar = arrowAdd(5)(10);
console.log(myArrowVar);
