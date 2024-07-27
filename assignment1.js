const a = 5;
const b = 6;
const c = 7;

let semiPerimiter = (a + b + c) / 2;
let areaOfTraingle = Math.sqrt(
  semiPerimiter *
    (semiPerimiter - a) *
    (semiPerimiter - b) *
    (semiPerimiter - c)
);
console.log(
  `The area of the triangle of side ${a}, ${b}, ${c} is ${areaOfTraingle}`
);

// No 2
let inputString = "Tech365";
let tempString = inputString.slice(-2);
const newString = tempString.concat(inputString[0]);
console.log(tempString);

// No 4
const normalString = "Good Morning Techies!";
const splitedArray = normalString.split(" ");
const reveredString = splitedArray.reverse().join(" ");
console.log(reveredString);

// no 5
const email = "john@example.com";
const splittedEmail = email.split("@");
console.log(splittedEmail[0]);

// no 6
const inputMinutes = 90;

const minutesInDay = 24 * 60;
const minutesInYear = minutesInDay * 365;

const numOfYears = Math.floor(inputMinutes / minutesInYear);
const remainingMinutes = inputMinutes % minutesInYear;
const numOfDays = Math.floor(remainingMinutes / minutesInDay);

console.log(
  `The minutes contains - ${numOfYears} Years and ${numOfDays} Days`
);
