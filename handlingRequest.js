// Browser API/WEB API

// setTimeout()
// const greetUser = (username) => {
//   console.log(`Good Evening, ${username}`);
// };

// setTimeout(() => greetUser("Fad"), 0);
// console.log("After Greeting ");

// const f1 = () => console.log("f1");
// const f2 = () => console.log("f2");
// const main = () => {
//   console.log("Tech365");

//   setTimeout(f1, 0);

//   f2();
// };

// main();

// Promises

// const somePromise = new Promise((resolve, reject) => {
//   reject("I am a Rejected Promise");
// });

// somePromise
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// async function getPromiseValue () {

// }

// const getAsyncValue = async () => {
//   try {
//     const value = await somePromise;
//     console.log(value);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getAsyncValue();

// ----------------------------------------------
// ---------------------------------------------
// Making Fetch Request
const url = "https://jsonplaceholder.typicode.com/posts";

// This is a request through fetch
// Fetch helps us make request to an API
// iT returns a Promise
fetch(url)
  .then((res) =>
    res.json()
      .then((data) => console.log(data, "data"))
      .catch((e) => console.log(e))
  )
  .catch((error) => console.log(error, "error"));
