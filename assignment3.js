// Assignment 3

// No 1
const products = [
  { name: "apple", quantity: 2, price: 3 },
  { name: "banana", quantity: 1, price: 1 },
  { name: "orange", quantity: 3, price: 2 },
];

const sum = products.reduce((acc, curr) => {
  acc += curr.price;
  return acc;
}, 0);

console.log(`The Sum total of the item price is: ${sum}`);

// No 2

const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "Richard", age: 18 },
];
const findFirstUserOf18 = (usersList) => {
  const userFound = usersList.find((user) => user.age >= 18);
  return userFound
    ? `${userFound.name} is ${userFound.age}`
    : "No User Greater than or equal to 18 years";
};

console.log(findFirstUserOf18(people));

// No 3
const books = [
  { title: "Book A", author: "Author 1" },
  { title: "Book B", author: "Author 2" },
  { title: "Book C", author: "Author 1" },
];

const findAuthorByBookname = (searchArray, searchKey) => {
  const foundBook = searchArray.find(
    (book) => book.title.toLowerCase() === searchKey.toLowerCase()
  );

  return foundBook
    ? `${foundBook.title} By ${foundBook.author}`
    : "No Book Found";
};

console.log(findAuthorByBookname(books, "BOOK"));

// No 4
const names = ["Bob", "Tayo", "Counsel", "Andrew", "Winifred"];

const getSortedNamesLength = (array) => {
  //   array.sort();

  const namesLength = array.map((item) => item.length).sort((a, b) => b - a);

  return namesLength;
};

console.log(getSortedNamesLength(names));

// No 5
const numbers = [3, 7, 1, 100, 10, 4];

const processNumbers = (numberArr) => {
  let greaterThan50 = false;
  let allEven = false;
  if (numberArr.some((item) => item > 50)) {
    greaterThan50 = true;
  }
  if (numberArr.every((item) => item % 2 === 0)) {
    allEven = true;
  }
  const greater10 = numberArr.filter((item) => item >= 10);

  return {
    allEven,
    greaterThan50,
    greater10,
  };
};

const { allEven, greater10, greaterThan50 } = processNumbers(numbers);

if (allEven) {
  console.log("All Numbers are Even");
}
if (greaterThan50) {
  console.log("There Exis at lest one number greater than 50");
}

console.log("The numbers above 10 are: ", greater10);

// No 6
const fillterStringWithA = (array) => {
  return array
    .map((item) => item.toUpperCase())
    .filter((item) => !item.includes("A"))
    .join("=====");
};

console.log(fillterStringWithA(["Apples", "Tech365", "From", "Java"]));
