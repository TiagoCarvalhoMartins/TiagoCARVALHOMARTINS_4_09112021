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
let firstNameValue ="";
let lastNameValue ="";
let emailValue ="";
//let cityEvent = document.getElementById("nom").value;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//recuperation data from the form and validation
firstName.addEventListener('change', function() {
  let fistNameValue = document.getElementById('first').value;
  if (firstNameValue.length < 2) {
    document.getElementById('firstName').setAttribute('data-error-visible', 'true');
  }
});

lastName.addEventListener('change', function() {
  let lastNameValue = document.getElementById('last').value;
  if (lastNameValue.length < 2) {
    document.getElementById('lastName').setAttribute('data-error-visible', 'true');
  }
});

email.addEventListener('change', function() {
  let emailValue = document.getElementById('email').value;
  function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailValue.value.match(validRegex)) {
      document.getElementById('eMail').setAttribute('data-error-visible', 'true');
  }
};

birthDate.addEventListener('change', function() {
  birthDate = birthDate.value
});

eventQuantity.addEventListener('change', function() {
  let eventQuantityValue = document.getElementById('quantity').value;
  if (eventQuantityValuee.length < 1) {
    document.getElementById('eventQuantity').setAttribute('data-error-visible', 'true');
  }
});

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
});