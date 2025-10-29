// 1
const firstObject = {
  id: 1,
  name: "Ryan",
};
const secondObject = {
  address: "123 fake st",
  phone: "555-555-5555",
};
const mergeObject = Object.assign({}, firstObject, secondObject);
console.log(mergeObject);

// 2
function largestNum(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
largestNum(13, 12);

// 3
const sentence = "I am a sentence";
const words = sentence.split(" ");
console.log(words);
const capitalizeWords = words.map((word) => {
  console.log(word);
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});
console.log(capitalizeWords.join(" "));

// 4
const sentence = "Hi there";
const sentences = sentence.toLowerCase();
const words = sentences.replace(" ", "").split("").sort();
console.log(words.join(""));
