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
