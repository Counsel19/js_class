function changeColor(element) {
  element.style.backgroundColor = "white";
}
// Selecting DOM Elements

const firstPTag = document.getElementById("parentId").children[0].children[0];
const secondPTag = document.getElementById("parentId").children[0].children[1];

// const [button1, button2] = document.getElementsByTagName("button");

// button1.addEventListener("click", () => {
//   firstPTag.classList.toggle("change__toWhite");
// });
// button1.addEventListener("click", () => {
//   window.alert("Button one Clicked");
// });

// button2.addEventListener("click", () => {
//   secondPTag.classList.toggle("change__toWhite");
// });

// const greet = () => {
//   window.alert("Good morming");
// };

const input = document.getElementById("userInfo").children[0];

function handleOnChange(event) {
  const output = input.nextElementSibling.children[0];
  const value = event.target.value;
  output.innerText = value;
}

input.addEventListener("input", handleOnChange);
