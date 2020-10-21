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
