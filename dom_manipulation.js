const body = document.body;

const par = document.createElement("p");
// par.innerText = "Good Afternoon"
// par.textContent = "Good Day"
let greetings = "Good Day";

let bold = document.createElement("b");
bold.innerText = greetings;
par.append(bold);

body.append(par);

// Selecting DOM Elements
let parentDiv = document.getElementById("parentId");
let childDivs = document.getElementsByClassName("child");
let selected = document.querySelector(".child");
let groupSelect = document.querySelectorAll(".child");
let allDivs = document.getElementsByName("div");
// console.log(groupSelect, "groupSelect");
// console.log(allDivs, "allDivs");

// Array.from(childDivs).forEach((item, index) => {
//   item.style.height = "20px";
//   item.style.backgroundColor = `#00f${index + 5}00`;
// });

// groupSelect.forEach((item, index) => {
//   item.style.height = "50px";
//   item.style.backgroundColor = `#00f${index + 5}00`;
// });

// let newDiv = document.createElement("div");
// newDiv.className = "child";
// newDiv.setAttribute("name", "div");
// body.append(newDiv);

// console.log(groupSelect, "groupSelect");
// console.log(childDivs, "childDivs");
// console.log(allDivs, "allDivs");

// Setting Attributes
// parentDiv.style.height = "100px";
// parentDiv.style.backgroundColor = "red";

// console.log(parentDiv.innerText);
// console.log(parentDiv.textContent);\

const paragrapghs = parentDiv.getElementsByTagName("p");
const firstPTag = paragrapghs[0];
// firstPTag.style.backgroundColor = "blue";
const firstChildDiv = parentDiv.children[0];

// firstChildDiv.removeChild(firstPTag)

// const divParent = parentDiv.querySelector(".child")
// firstPTag.remove()

const secondPTag = firstPTag.nextElementSibling;

changeColor(secondPTag.closest("#parentId"))

// secondPTag.classList.add("hide")
secondPTag.classList.toggle("hide")
secondPTag.classList.toggle("hide")

// secondPTag.className = "hide"


function changeColor(element) {
  element.style.backgroundColor = "white";
}

