// const fruitsArray = ["apples", "banana", "orange", "grape", "kiwi"];
// fruitsArray.forEach(function (char, idx) {
//   console.log(idx, char);
// });

// const originalNumbers = [3, 8, 12, 5, 7];
// console.log(originalNumbers);
// let doubledNumbers = originalNumbers.map((num, idx) => {
//   return (originalNumbers[idx] = num * 2);
// });
// console.log(doubledNumbers);

const mixedData = [
  42,
  "hello",
  ["world", 2023],
  () => "function",
  true,
  null,
  { key: "value" },
];

let arrays = [];
let strings = [];
let functions = [];
let numbers = [];

mixedData.forEach((item) => {
  if (Array.isArray(item)) arrays.push(item);
  if (typeof item === "string") strings.push(item);
  if (typeof item === "function") functions.push(item);
  if (typeof item === "number") numbers.push(item);
});

console.log({
  arrays,
  strings,
  numbers,
  functions,
});

// const wordsArray = ["apple", "banana", "grape"];
// console.log(wordsArray);
// newArray = wordsArray.map((array) => {
//   return array.toUpperCase();
// });
// console.log(newArray);

// const matrix = [
//   [2, 4, 6],
//   [1, 3, 5],
//   [8, 10, 12]
// ];
// matrix.forEach(function(num, idx))
