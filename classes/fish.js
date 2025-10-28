class Fish {
  constructor(
    firstName,
    lastName = "fish",
    skeleton = "bone",
    eyelides = false
  ) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.skeleton = skeleton),
      (this.eyelides = eyelides);
  }
  swim() {
    return `${this.firstName || "fish"} swim forwards`;
  }
  swimBackwards() {
    return `${this.firstName || "Fish"} swim backwards`;
  }
}
// inheritance || subclass
class Trout extends Fish {} //Trout inherits everything from Fish

const bob = new Trout("bob", "fishers");
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.swim());
console.log(bob.swimBackwards());

class ClownFish extends Fish {
  funnyClownFish() {
    return "The clown fish is funny";
  }
}

const nemo = new ClownFish("nemo");

console.log(nemo.lastName);
console.log(nemo.funnyClownFish());
console.log(nemo.swim());

class Shark extends Fish {
  constructor(
    firstName,
    lastName = "shark",
    skeleton = "cartilage",
    eyelides = true
  ) {
    super(); // calls the parent {Fish} constructor, though we override properties below

    // redefining properties to match Shark defaults

    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.skeleton = skeleton),
      (this.eyelides = eyelides);
  }
  //Polymorphism: changing how swimbackwards works for sharks (overriding the parent method)
  swimBackwards() {
    return `${this.firstName} cannot swim backwards, but can sink backwards`;
  }
}

const sammy = new Shark("sammy");
console.log(sammy.firstName);
console.log(sammy.lastName);
console.log(sammy.skeleton);
console.log(sammy.eyelides);
console.log(sammy.swim());
console.log(sammy.swimBackwards());
