// 1
// for (let i = 0; i < 21; i += 2) {
//   console.log(i);
// }

// 2
// const array = ["a", "b", "c", "d", "f", "f", "e", "f"];
// function removeByIndex(num1, num2) {
//   return [array[num1], array[num2]];
// }
// console.log(removeByIndex(1, 5));

// 3 numbers to string then map to turn back into int
// const numbers = 12345;
// console.log(String(numbers));
// const string = String(numbers);
// console.log(string.split("").map(Number));
// console.log(string.split("").map((string) => Number(string)));

// 4
arrayOne = [1, 2, 3];
arrayTwo = ["a", "b", "c", "d"];
const matrix = [];
// for (let one of arrayOne) {
//   console.log(one);
//   for (let two of arrayTwo) {
//     console.log(two);
//     matrix.push([one, two]);
//     matrix.push([two, one]);
//   }
// }
// console.log(matrix);
arrayOne.forEach((num) => {
  arrayTwo.forEach((str) => {
    matrix.push([num, str], [str, num]);
  });
});
console.log(matrix);
