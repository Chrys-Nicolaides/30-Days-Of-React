// Conditionals Exercise - Level 1

let legalAge = prompt("Enter age");
switch (true) {
  case legalAge >= 18:
    console.log("You are old enough to drive");
    break;
  case legalAge < 18:
    console.log(`Wait ${18 - legalAge} more years to drive`);
    break;
  default:
    console.log("Entered value was not a number");
}

let yourAge = 25;
let myAge = prompt("Enter your age");
if (myAge > yourAge) {
  console.log(`You are ${myAge - yourAge} years older than me`);
} else if (myAge < yourAge) {
  console.log(`You are ${yourAge - myAge} years younger than me`);
} else {
  console.log("Entered value was not a number");
}

let a = 4;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

let anyNumber = prompt("Enter any number");
if (anyNumber % 2 === 0) {
  console.log(`${anyNumber} is an even number`);
} else {
  console.log(`${anyNumber} is an odd number`);
}

// Conditionals Exercise - Level 2

let myGrade = prompt("Enter your score");

let grader = (input) => {
  if (input > 100) {
    return "Wow over 100%, something is fishy";
  } else if (input >= 80) {
    return "A";
  } else if (input >= 70) {
    return "B";
  } else if (input >= 60) {
    return "C";
  } else if (input >= 50) {
    return "D";
  } else {
    return "F";
  }
};

console.log(grader(myGrade));

let seasonChecker = prompt("Enter the month of the year").toLowerCase();
switch (seasonChecker) {
  case "january":
  case "february":
  case "december":
    console.log("Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;
  case "september":
  case "october":
  case "november":
    console.log("Autumn");
    break;
  default:
    console.log("That is not a valid month");
    break;
}

console.log(seasonChecker);

let dayChecker = prompt("Enter day");
let checker = (day) => {
  if (day == "Saturday" || day == "Sunday") {
    return "It's weekend!";
  } else {
    return "It's just another week day :(";
  }
};

console.log(checker(dayChecker));

// Conditionals Exercise - Level 3

let capitalise = (input) => {
  let firstLetter = input.charAt(0);
  let word = input.substr(1);
  return firstLetter.toUpperCase() + word.toLowerCase();
};

let monthChecker = prompt("Enter a month").toLowerCase();
switch (monthChecker) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${capitalise(monthChecker)} has 31 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${capitalise(monthChecker)} has 30 days`);
    break;
  case "february":
    console.log(`${capitalise(monthChecker)} has 29 days`);
    break;
  default:
    console.log("That is not a valid month");
    break;
}
