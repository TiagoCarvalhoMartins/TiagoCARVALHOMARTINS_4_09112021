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
const successPg = document.querySelectorAll(".bground--success");
const closeSuccessBtn = document.querySelectorAll(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close form event
closeForm.forEach((cross) =>cross.addEventListener("click", closeFormular));

//close formular
function closeFormular() {
  modalbg.style.display = "none";
}

//submit form event
submitBtn.forEach((submit) =>submit.addEventListener("click", openSuccess));

//open success page
function openSuccess() {
  modalbg.style.display = "none";
  successPg.style.display = "block";
}

// close success event
closeSuccessBtn.forEach((close) =>close.addEventListener("click", closeSuccess));

//close success
function closeSuccess() {
  success.style.display = "none";
}