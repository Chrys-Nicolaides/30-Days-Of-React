const dog = {
  name: "Bear",
  legs: 4,
  color: "white",
  age: 2,
  bark: "woof woof",
  getBark: function () {
    return `${this.bark}`;
  },
  getDogInfo: function () {
    return `${this.breed}`;
  },
};

dog.breed = "Samoyed";
console.log(dog.getBark());
console.log(dog.getDogInfo());
console.log(dog);
