let itemResults = document.getElementById("ItemResults");
const saveBtn = document.getElementById("save");
const deleteBtn = document.getElementById("deleteBtn");

let allItems = [];

class Item {
  constructor(name) {
    this.name = name;
    this.id = Date.now();
  }
}

const handleDisplayItems = () => {
  itemResults.innerHTML = "";
  allItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("py-3", "px-2", "w-full", "bg-gray-100");
    li.onclick = () => handleDeleteItem(item.id);
    let listItem = `
       <div class="flex justify-between items-center">
          <span>${item.name}</span>
          <button id="deleteBtn" onclick="" data-id="${item.id}" class="bg-rose-100 text-rose-600 p-2">Delete</button>
        </div>
    `;

    li.innerHTML = listItem;
    itemResults.append(li);
  });
};

const handleAddNewItem = () => {
  const itemInput = document.getElementById("itemInput");
  if (itemInput.value.length > 0) {
    const newItemObj = new Item(itemInput.value);
    allItems.push(newItemObj);

    handleDisplayItems(newItemObj);
    itemInput.value = "";
  } else {
    alert("Please Enter a Valid Item");
  }
};

const handleDeleteItem = (id) => {
  allItems = allItems.filter((item) => item.id != id);
  handleDisplayItems();
};

saveBtn.addEventListener("click", handleAddNewItem);
// deleteBtn.addEventListener("click", handleDeleteItem);

// Problem 3
const registerForm = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function validateName(name) {
  const nameRegex = /^[a-zA-Z\s]{2,}$/;
  return nameRegex.test(name);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateName(nameInput.value)) {
    console.log("Name is Valid");
  }
  if (validateEmail(emailInput.value)) {
    console.log("Email is Valid");
  }
  if (validatePassword(passwordInput.value)) {
    console.log("Password is Valid");
  } else {
    console.log("Password is NotValid");
  }
});

// Problem  4

const carouselList = [
  "https://plus.unsplash.com/premium_photo-1693221705305-6eff5fa8e483?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1721778775422-8cf9894040a9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const carouselWrapper = document.getElementById("carousel");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let imageList = "";
let currentCarousel = 0;

const displayImages = () => {
  carouselList.forEach((image, index) => {
    imageList += `
              <img src="${image}" class="w-full absolute top-0 bottom-0 right-0 left-0 object-cover ${
      currentCarousel === index ? " block" : "hidden"
    }" />
          `;
  });
  carouselWrapper.innerHTML = imageList;
};

displayImages();
function goNext() {
  if (currentCarousel === carouselList.length) {
    currentCarousel = 0;
  } else {
    currentCarousel++;
  }
  displayImages();
}
function goPrev() {
  if (currentCarousel === 0) {
    currentCarousel = carouselList.length;
  } else {
    currentCarousel--;
  }
  displayImages();
}

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

setInterval(goNext, 2000);
