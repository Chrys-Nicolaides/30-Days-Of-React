// Functions Exercises: Level 1

// 1.

const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log("Chrys", "Nicolaides");
console.log("Mike", "Murray");

// 2.

const addNumbers = (numOne, numTwo) => {
  let sum = numOne + numTwo;
  return sum;
};

console.log(addNumbers(1, 3));
console.log(addNumbers(5, 6));

// 3.

const circleRadius = (radius) => {
  let π = 3.14;
  let areaOfCircle = π * radius * radius;
  return areaOfCircle;
};

console.log(circleRadius(4));

// 4.

const convertCelciusToFahrenheit = (celsius) => {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};

console.log(`${convertCelciusToFahrenheit(25)} °F`);
console.log(`${convertCelciusToFahrenheit(44)} °F`);

// 5.

const bmi = (weightInKg, heightInM) => {
  let calculateBmi = Math.floor(weightInKg / (heightInM * heightInM));

  if (calculateBmi < 18.5) {
    return `${calculateBmi}, Underweight`;
  } else if (calculateBmi < 24.9) {
    return `${calculateBmi}, Normal Weight`;
  } else if (calculateBmi < 29.9) {
    return `${calculateBmi}, Overweight`;
  } else {
    return `${calculateBmi}, Obese`;
  }
};

console.log(bmi(58, 1.63));
console.log(bmi(67, 1.63));
console.log(bmi(45, 1.65));
console.log(bmi(135, 1.77));

// 6.

const checkSeason = (month) => {
  if (month === "December" || "January" || "February") {
    return `${month} is in Winter`;
  } else if (month === "March" || "April" || "May") {
    return `${month} is in Spring`;
  } else if (month === "June" || "July" || "August") {
    return `${month} is in Summer`;
  } else {
    return `${month} is in Autumn`;
  }
};

console.log(checkSeason("June"));
console.log(checkSeason("October"));

// Functions Exercise - Level 2

// 1.

const solveQuadEquation = (a, b, c, x) => {
  let solve1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  let solve2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  return solve1 + ", " + solve2;
};

console.log(solveQuadEquation());
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, -1, -2));
console.log(solveQuadEquation(1, 7, 12));
console.log(solveQuadEquation(1, 0, -4));
console.log(solveQuadEquation(1, -1, 0));

// 2.

const printArray = (arr) => {
  arr.forEach((x) => {
    console.log(x);
  });
};

printArray(["lemons", "carrots", "pineapples"]);
printArray(["red", "blue", "yellow"]);
printArray([2, 4, 6, 8]);

// 3.

const showDateTime = () => {
  let todaysDate = new Date();
  let day = todaysDate.getDate();
  let month = todaysDate.getMonth() + 1;
  let year = todaysDate.getFullYear();
  let hours = todaysDate.getHours();
  let minutes = todaysDate.getMinutes();
  return day + "/" + month + "/" + year + " " + hours + ":" + minutes;
};

console.log(showDateTime());

// 4.

const swapValues = (x, y) => {
  return [y, x];
};

console.log(swapValues(1, 2));
console.log(swapValues("a", "b"));

// 5.

const reverseArray = (myArray) => {
  let newArray = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    newArray.push(myArray[i]);
  }
  return newArray;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));

// 6.

const capitalizeArray = (capArray) => {
  let newCapArray = [];
  for (let x of capArray) {
    newCapArray.push(x.toUpperCase());
  }
  return newCapArray;
};

console.log(capitalizeArray(["a", "b", "c"]));
console.log(capitalizeArray(["chrys", "nicolaides"]));

// 7.

const addItem = (item) => {
  let newItemArray = ["butter", "flour", "yeast"];
  for (let x of item) {
    newItemArray.push(x);
  }
  return newItemArray;
};

console.log(addItem(["milk"]));
console.log(addItem(["eggs"]));

// 8.

const removeItem = (item) => {
  let newItemArray = ["butter", "flour", "yeast", "milk", "eggs"];
  if (item > -1) {
    newItemArray.splice(item, 1);
  }
  return newItemArray;
};

console.log(removeItem([1]));
console.log(removeItem([3]));
console.log(removeItem([4]));

// 9.

const evensAndOdds = (int) => {
  let odd = 0;
  let even = 0;

  for (let i = 0; i <= int; i++) {
    let num = i % 2;

    if (num === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  return { odds: odd, evens: even };
};

console.log(evensAndOdds(100));

// 10.

const sumOfValues = (input) => {
  if (input.length) {
    return input.reduce((x, y) => x + y);
  }
};

console.log(sumOfValues([2, 3]));
console.log(sumOfValues([2, 2, 2]));
console.log(sumOfValues([5, 10, 15, 20]));

// 11.

const userIdGenerator = () => {
  let id = Math.random().toString(36).substr(6);
  return id;
};

console.log(userIdGenerator());
console.log(userIdGenerator());
console.log(userIdGenerator());

// Upper & lowercase characters for user ID

const randomIdGenerator = () => {
  let id = "";
  let randomCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 7; i++)
    id += randomCharacters.charAt(Math.random() * randomCharacters.length);
  return id;
};

console.log(randomIdGenerator());
console.log(randomIdGenerator());
console.log(randomIdGenerator());
console.log(randomIdGenerator());

// Functions Exercise - Level 3

// 1.

let userIdGeneratedByUser = prompt("Enter number of characters");
let numberOfUserIds = prompt("Enter number of ID's needed");
console.log(userIdGeneratedByUser);
console.log(numberOfUserIds);

let generator = (input, num) => {
  let sanitisedInput = parseInt(input);
  let userIds = [];
  let numOfIds = Number(num);
  let characters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let j = 0; j < numOfIds; j++) {
    let userId = "";

    for (let i = 0; i < sanitisedInput; i++) {
      userId += characters.charAt(Math.random() * characters.length);
    }
    userIds.push(userId);
  }
  return userIds.join(" ");
};

console.log(`UserID: ${generator(userIdGeneratedByUser, numberOfUserIds)}`);

// 2.

const generateColors = (input, num) => {
  let randomColors = [];
  let numOfColors = Number(num);
  let hexaColor = "";
  let rgbColor = "";

  let r = 0;
  let g = 0;
  let b = 0;

  if (input.includes("hexa")) {
    for (let j = 0; j < numOfColors; j++) {
      hexaColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      randomColors.push(hexaColor);
    }
  } else if (input.includes("rgb")) {
    for (let i = 0; i < numOfColors; i++) r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    rgbColor = "rgb(" + r + ", " + g + ", " + b + ")";
    randomColors.push(rgbColor);
  }
  return randomColors.join(" ");
};

console.log(generateColors("hexa", 3));
console.log(generateColors("hexa", 1));
console.log(generateColors("rgb", 3));
console.log(generateColors("rgb", 1));

// 3. Option 1 (Microsoft shuffle)

const shuffleArray = (array) => {
  if (array.length) {
    return array.sort(() => Math.random() - 0.5);
  }
};

console.log(shuffleArray([2, 4, 6, 8]));
console.log(shuffleArray(["a", "b", "c", "d"]));
console.log(shuffleArray(["a", "b", "c", "d"]));

// 3. Option 2 (Fisher-Yates Algorithm, more efficient)

const arrayShuffler = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

console.log(arrayShuffler([2, 4, 6, 8]));
console.log(arrayShuffler(["a", "b", "c", "d"]));
console.log(arrayShuffler(["a", "b", "c", "d"]));

// 4.

const factorial = (n) => {
  let num = 1;
  for (let i = 2; i <= n; i++) num = num * i;
  return num;
};

console.log(factorial(5));

// 5.

const isEmpty = (input) => {
  if (Array.isArray(input)) {
    if (input.length < 1) {
      return "Empty Array";
    } else {
      return "Array";
    }
  } else if (typeof input === "number") {
    return "Number";
  } else if (typeof input === "object") {
    if (Object.entries(input).length === 0) {
      return "Empty Object";
    } else {
      return "Object";
    }
  } else if (typeof input === "boolean") {
    return "Boolean";
  } else if (typeof input === "string") {
    if (input === "") {
      return "Empty String";
    } else {
      return "String";
    }
  }
};

console.log(isEmpty([]));
console.log(isEmpty([1, 2, 3]));
console.log(isEmpty("Hello"));
console.log(isEmpty(""));
console.log(isEmpty(5));
console.log(isEmpty(true));
console.log(isEmpty(false));
console.log(isEmpty({ odds: 2, evens: 1 }));
console.log(isEmpty({}));
console.log(isEmpty("Greetings"));
console.log(isEmpty(100));

// 6.

let average = (array) => {
  if (array.length) {
    return Math.floor(array.reduce((a, b) => a + b) / array.length);
  }
};

console.log(average([2, 2, 2]));
console.log(average([10, 5, 2]));
