// 1.
// const isString = 123;
// if (isString === "abc") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// 2
// const isBlankString = "as ";
// if (isBlankString === "") {
//   console.log(true);
// } else if (isBlankString === " ") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// 3.
// const word = "abcdef";

// const firstLetter = word.charAt(0);

// const firstLetterCap = firstLetter.toUpperCase();

// const remainingLetters = word.slice(1);

// const capitalizedWord = firstLetterCap + remainingLetters;
// console.log(capitalizedWord);
// 4.
// const abbr = "Ryan Curtis";
// abbrName = abbr.slice(0, 6);
// console.log(abbrName + ".");
// 5
// const truncate = "I am a long sentence";
// abbrTruncate = truncate.slice(0, 7);
// console.log(abbrTruncate + "...");
// 6
const str = "The practitioners grappled on the road side!";
let indexG = str.indexOf("g");
console.log(str.slice(indexG));
