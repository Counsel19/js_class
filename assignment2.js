// 1
const oddEvenNumber = 6;

if (oddEvenNumber % 2 === 0) {
  console.log(`${oddEvenNumber} is Even`);
} else {
  console.log(`${oddEvenNumber} is Odd`);
}

// 2
let numberArray = [1, 2, 3, 5, 5];
// 1. Crete a sum variable nd initialized to 0
// 2. loop throug the array
// 3. Add each items to current sum

let sum = 0;
for (let i = 0; i <= numberArray.length - 1; i++) {
  sum = sum + numberArray[i];
}
console.log(`The sum of the array is ${sum}`);

// 3
// for (let i = 1; i <= 100; i++) {
//   i % 3 === 0 && i % 5 != 0
//     ? console.log("Fizz")
//     : i % 5 === 0 && i % 3 != 0
//     ? console.log("Buzz")
//     : i % 5 === 0 && i % 3 === 0
//     ? console.log("FizzBuzz")
//     : console.log(i);
// }

// 4
const findGreatestArray = [2, 5, 0, 23, 4, 10, 6];
// 1. Assume first element is greatest
// 2. Loop through all elements in the array
// 3. Check if current element is is greatan than the assumed greatest
// 4. if greater then reassign greatest to the current element

let greatestNumber = findGreatestArray[0];
for (let i = 1; i < findGreatestArray.length; i++) {
  if (findGreatestArray[i] > greatestNumber) {
    greatestNumber = findGreatestArray[i];
  }
}

console.log(`The Greatest Number is ${greatestNumber}`);

// 7
// 0. initializate couter as 0
// 1. LIst all the vowels in a an array
// 2. Iterate through the given string to check if  the vowels in the array are present in the string
// 3 Icrement counte if vowels exist

let counter = 0;

const allVowels = ["a", "e", "i", "o", "u"];
let givenString = "Hello";
for (let i = 0; i < givenString.length; i++) {
  if (allVowels.includes(givenString[i].toLowerCase())) {
    counter++;
  }
}

console.log(`There are ${counter} vowels in the given string`);
