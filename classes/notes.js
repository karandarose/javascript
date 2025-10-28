class Car {
  constructor(
    make = "Toyota",
    model = "4Runner",
    year = 2015,
    color = "Black"
  ) {
    (this.make = make),
      (this.model = model),
      (this.year = year),
      (this.color = color);
  }
}
const fourRunner = new Car();
console.log(fourRunner);
console.log(fourRunner.make);

const accord = new Car("Honda", "Accord", 1997, "Silver");
console.log(accord);
console.log(accord.make);

const newAccord = {
  make: "Honda",
  model: "Accord",
  year: 2020,
  color: "Blue",
};
console.log(newAccord);
console.log(newAccord.year);

