function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelectorAll(".close");
const submitBtn = document.querySelectorAll (".btn-submit");
const successPg = document.querySelector(".bground--success");
const closeSuccessBtn = document.querySelectorAll(".btn-close");
//Form Data
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let birthDate = document.getElementById("birthdate");
let eventQuantity = document.getElementById("quantity");
//let cityEvent = document.getElementById("nom").value;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//recuperation data from the form
firstName.addEventListener('change', function() {
  firstName = firstName.value
});
lastName.addEventListener('change', function() {
  lastName = lastName.value
});
email.addEventListener('change', function() {
  email = email.value
});
birthDate.addEventListener('change', function() {
  birthDate = birthDate.value
});
eventQuantity.addEventListener('change', function() {
  eventQuantity = eventQuantity.value
});
console.log(firstName)
console.log(lastName)
console.log(email)
console.log(birthDate)
console.log(eventQuantity)

// close form event
closeForm.forEach((cross) =>cross.addEventListener("click", closeFormular));

//close formular
function closeFormular() {
  modalbg.style.display = "none";
  successPg.style.display = "none"
}

//submit form event
submitBtn.forEach((submit) =>submit.addEventListener("click", openSuccess));

//open success page
function openSuccess(event) {
  event.preventDefault();
  modalbg.style.display = "none";
  successPg.style.display = "block";
}

// close success event
closeSuccessBtn.forEach((close) =>close.addEventListener("click", closeSuccess));

//close success
function closeSuccess() {
  successPg.style.display = "none";
}