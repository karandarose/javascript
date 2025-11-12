// 1
// const wordArray = ["a", "b", "cc"];
// let longest = "";
// wordArray.forEach((str) => {
//   if (str.length > longest.length) {
//     longest = str;
//   }
//   return longest;
// });
// console.log(longest);

// 2
// function swapLetters(name) {
//   const firstChar = name[0];
//   const lastChar = name[name.length - 1];
//   const middlePart = name.substring(1, name.length - 1);
//   return lastChar + middlePart + firstChar;
// }
// console.log(swapLetters("nyar"));

// 3
// const numbers = [1, 2, 3];
// let sum = 0;
// let totalSum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   totalSum += numbers[i];
// }
// console.log(totalSum);

// 4
// arrayOne = [1, 2, 3];
// arrayTwo = [4, 5, 6];
// const matrix = [];
// const maxLength = Math.max(arrayOne.length, arrayTwo.length);

// for (let i = 0; i < maxLength; i++) {
//   if (arrayOne[i] !== undefined) {
//     matrix.push(arrayOne[i]);
//   }
//   if (arrayTwo[i] !== undefined) {
//     matrix.push(arrayTwo[i]);
//   }
// }

// console.log(matrix);

// 5
// const sentence = "I am a sentence";
// const words = sentence.split(" ");
// console.log(words);
// const capitalizeWords = words.map((word) => {
//   console.log(word);
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// });
// console.log(capitalizeWords.join(" "));

// 6
// function longest(str) {
//   str = str.match(/[a-zA-Z0-9]+/gi);
//   let largest = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].length > largest.length) {
//       largest = str[i];
//     }
//   }
//   return largest;
// }
// console.log(longest("This string has several different values"));

// 7
// const sentence = "Hi there";
// const sentences = sentence.toLowerCase();
// const words = sentences.replace(" ", "").split("").sort();
// console.log(words.join(""));

// 8
// function arrayIndexes(arr, indices) {
//   let result = [];
//   for (let i = 0; i < indices.length; i++) {
//     result.push(arr[indices[i]]);
//   }
//   return result;
// }
// const originalArray = ["a", "b", "c", "d"];
// const indices = [1, 3];
// const indexes = arrayIndexes(originalArray, indices);
// console.log(indexes);

// 9
// user = {
//   userName: "Ryan",
//   activeStatus: "away",
// };
// const functUser = () => {
//   user.activeStatus = "active";
// };
// functUser(user.activeStatus, "active");
// console.log(`${user.userName} is ${user.activeStatus}`);

// 10
function exponent(num) {
  return Math.pow(num, 2);
}
console.log(exponent(4));
