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
    email: "brook@brook.com",
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

// 1. Person with most skills

let maxSkills = Object.entries(users)
  .map((user) => ({
    name: user[0],
    skills: user[1].skills.length,
  }))
  .sort((a, b) => b.skills - a.skills)[0];

console.log(maxSkills);

// 2. Users logged in

let usersLoggedIn = (arrayInput, nameInput) => {
  if (arrayInput.valueOf(true)) {
    return `${nameInput} is logged in`;
  } else {
    return `${nameInput} is offline`;
  }
};

const userCounter = Object.values(users).reduce(
  (total, currentValue) => total + currentValue.isLoggedIn,
  0
);
console.log(userCounter);

let maxPoints = Object.entries(users)
  .map((user) => ({
    name: user[0],
    points: user[1].points,
  }))
  .filter((a) => a.points >= 50);

console.log(maxPoints);

console.log(
  Object.entries(users).map((user) => ({
    name: user[0],
    usersLoggedIn: usersLoggedIn(user[1].isLoggedIn, user[0]),
  }))
);

// 3. Search for  MERN developers

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

console.log(typeof users);

// 4. Add name to object without modifying it

const copyUsers = Object.assign({}, users);
copyUsers.Chrys = {
  email: "chrys@chrys.com",
  skills: ["HTML", "CSS", "Javascript", "React"],
  age: 30,
  isLoggedIn: false,
  points: 100,
};
console.log(copyUsers);

// 5. All keys

const keys = Object.keys(users);
console.log(keys);

// 6. All values

const values = Object.values(users);
console.log(values);

// Objects Exercise - Level 3

const mongoUsers = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

//

let signUp = (username) => {
  if (mongoUsers.some((x) => x.username === username)) {
    return "You already have an account";
  } else {
    return "Sign Up to create an acount";
  }
};

console.log(signUp("Alex"));
console.log(signUp("Chrys"));

//

let signIn = (username) => {
  if (mongoUsers.some((x) => x.username === username)) {
    return `Welcome back ${username}!`;
  } else {
    return `No username exists. Create an account today and join the family!)`;
  }
};

console.log(signIn("Alex"));
console.log(signIn("Chrys"));

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

//

let rateProducts = Object.values(products).map((product) => ({
  name: product.name,
  ratings: product.ratings.map((rating) => rating.rate),
}));

console.log(rateProducts[0].name, rateProducts[0].ratings);
console.log(rateProducts[2].name, rateProducts[2].ratings);

let average = (array) => {
  if (array.length) {
    return array.reduce((a, b) => a + b) / array.length;
  } else {
    return "No Rating";
  }
};

let averageRating = Object.values(products).map((product) => ({
  ratings: product.ratings.map((rating) => rating.rate),
  name: product.name,
}));

console.log(
  averageRating.map(
    (listOfRatings) =>
      `${listOfRatings.name}: ${average(listOfRatings.ratings)}`
  )
);

// Check product likes

let likedProduct = (likes) => {
  products.some((x) =>
    console.log(
      x.likes.length ? `${x.name} has likes!` : `${x.name} has no likes`
    )
  );
};

likedProduct();

// Like a product

let likeAProduct = (likes, userId) => {
  if (
    products.find((product) => product.name == likes).likes.includes(userId)
  ) {
    return `${userId} has already liked this product`;
  } else products.find((product) => product.name == likes).likes.push(userId);
  return `${userId} has liked the ${likes}!`;
};

console.log(likeAProduct("Laptop", "C123M"));
console.log(likeAProduct("Laptop", "fg12cy"));
