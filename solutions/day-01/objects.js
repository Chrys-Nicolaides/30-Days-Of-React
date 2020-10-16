// Objects Exercise - Level 1

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

// Objects Exercise - Level 2

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let maxSkills = Object.entries(users)
  .map((user) => ({
    name: user[0],
    skills: user[1].skills.length,
  }))
  .sort((a, b) => b.skills - a.skills)[0];

console.log(maxSkills);

let skillTester;

let mernDev = (arrayInput, nameInput) => {
  if (arrayInput.includes("MongoDB" && "Express" && "React" && "Node")) {
    return `${nameInput} is a MERN developer`;
  } else {
    return `${nameInput} is a NOT a MERN developer`;
  }
};

console.log(
  Object.entries(users).map((user) => ({
    name: user[0],
    mernDev: mernDev(user[1].skills, user[0]),
  }))
);
