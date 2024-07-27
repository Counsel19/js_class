// Arrays

let sampleArray = [1, 2, 3, 4, 6, 7];
// HOC: Higher Order Funtions

// Pop
// const removedItem = sampleArray.pop();
// console.log(removedItem, "removed item");
// console.log(sampleArray, "sample array");

// push
// sampleArray.push(12);
// sampleArray.push(15);
// console.log(sampleArray);

// Map
// let sum = 0;
// const newArray = sampleArray.map(function (item, index) {
//   return item > 3 ? item : undefined;
// });
// console.log(newArray);
// => Multiply Every item by 2
// const mutiplied = sampleArray.map((item) => item *= 2)
// console.log(mutiplied, "mutiplied")

// Filter
// const filteredElements = sampleArray.filter((item, index) => item > 3);

// console.log(filteredElements, "filteredElements");

// Reduce
// let total = sampleArray.reduce((accumulatedValue, currentValue) => {
//   accumulatedValue += currentValue;
//   return accumulatedValue;
// }, 0);
// console.log(total, "total");

// const firstItem  = sampleArray.shift()
// console.log(firstItem, "firstItem")
// console.log(sampleArray, "sampleArray")
// const newLength = sampleArray.unshift(1)
// console.log(sampleArray, "sampleArray")
// console.log(newLength, "newLength")

// ForEach
// Multiply each item in the array by 2
// let multiples = []
// sampleArray.forEach((item) => multiples.push(item * 2))
// console.log(multiples, "multiples")

// Every
// const result = sampleArray.every((value) => value >= 1)
const result = sampleArray.some((value) => value > 1);
console.log(result, "result");

// Nested Arrays
const nestedArray = [
  "milk",
  "butter",
  ["soap", "tissue", "toothpaste,", ["random"]],
];

console.log(nestedArray, "nestedArray");
// console.log(nestedArray[2][2], "item");
console.log(nestedArray[2][3][0])
console.log(nestedArray.flat().flat())

// FUNCTION DECLERATION
function addTwoNumbers({ number1, number2 }) {
  return number1 + number2;
}

// console.log(
//   addTwoNumbers({
//     number1: 3,
//     number2: 4,
//   })
// );

// FUNCTION EXPRESSION
let greetings = function (name) {
  console.log(`Good evening ${name}`);
};

// greetings("John");

// ARROW FUNCTIONS
const getSquared = (number) => {
  return number ** 2;
};

// console.log(getSquared(3));
