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
let birthDateValue ="";
let cityEvent = "";
let firstNameValidate = false;
let lastNameValidate = false;
let eMailValidate = false;
let birthDateValidate = false;
let eventQuantityValidate = false;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//recuperation data from the form and validation
firstName.addEventListener('change', function() {
  let firstNameValue = document.getElementById('first').value;

  if (firstNameValue.length < 2) {
    document.getElementsByClassName('firstName')[0].setAttribute('data-error-visible', 'true');
    firstNameValidate = false;
  } else {
    document.getElementsByClassName('firstName')[0].setAttribute('data-error-visible', 'false');
    firstNameValidate = true;
  }
});

lastName.addEventListener('change', function() {
  let lastNameValue = document.getElementById('last').value;

  if (lastNameValue.length < 2) {
    document.getElementsByClassName('lastName')[0].setAttribute('data-error-visible', 'true');
    lastNameValidate = false;
  } else {
    document.getElementsByClassName('lastName')[0].setAttribute('data-error-visible', 'false');
    lastNameValidate = true;
  }
});

email.addEventListener('change', function() {
  let emailValue = document.getElementById('email').value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
  if (!emailValue.match(validRegex)) {
      document.getElementsByClassName('eMail')[0].setAttribute('data-error-visible', 'true');
      eMailValidate = false;
    } else {
      document.getElementsByClassName('eMail')[0].setAttribute('data-error-visible', 'false');
      eMailValidate = true;
    }
});

birthDate.addEventListener('change', function() {
  let birthDateValue = document.getElementById('birthdate').value;
  var dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    
  if (!birthDateValue.match(dateRegex)) {
      document.getElementsByClassName('birthDate')[0].setAttribute('data-error-visible', 'true');
      birthDateValidate = false;
    } else {
      document.getElementsByClassName('birthDate')[0].setAttribute('data-error-visible', 'false');
      birthDateValidate = true;
    }
});

eventQuantity.addEventListener('change', function() {
  let cityEvent = document.getElementById("quantity").value;

  if (cityEvent !== null && cityEvent === "") {
    document.getElementsByClassName('eventQuantity')[0].setAttribute('data-error-visible', 'true');
    eventQuantityValidate = false;
  } else {
    document.getElementsByClassName('eventQuantity')[0].setAttribute('data-error-visible', 'false');
    eventQuantityValidate = true;
  }
});

function checked() {
  if (document.getElementsByClassName('userCondition').checked) {
    document.getElementsByClassName('userCondition')[0].setAttribute('data-error-visible', 'false');
  } else {
    document.getElementsByClassName('userCondition')[0].setAttribute('data-error-visible', 'true');
  }
}

// close form event
closeForm.forEach((cross) =>cross.addEventListener("click", closeFormular));


//close formular
function closeFormular() {
  modalbg.style.display = "none";
  successPg.style.display = "none"
}

//submit form event if valide
submitBtn.forEach((submit)=>submit.addEventListener("click", function(event) {
  if (firstNameValidate === true && lastNameValidate === true && eMailValidate === true && birthDateValidate === true && eventQuantityValidate === true) {
    event.preventDefault();
    modalbg.style.display = "none";
    successPg.style.display = "block";
  };
//open success page
//function openSuccess(event) {
 // event.preventDefault();
 // modalbg.style.display = "none";
 // successPg.style.display = "block";
//}

// close success event
closeSuccessBtn.forEach((close) =>close.addEventListener("click", closeSuccess));

//close success
function closeSuccess() {
  successPg.style.display = "none";
}}))