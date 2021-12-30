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
let userCondition = document.getElementById("checkbox1");
let firstNameValue ="";
let lastNameValue ="";
let emailValue ="";
let birthDateValue ="";
let cityEvent = "";
let firstNameValidate = false;
let lastNameValidate = false;
let eMailValidate = false;
let birthDateValidate = false;
let eventQuantityValidate = true;
let userConditionChecked = false;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//recuperation data from the form and validation
firstName.addEventListener('change', function() {
  let firstNameValue = this.value;

  if (firstNameValue.length < 2) {
    this.parentNode.setAttribute('data-error-visible', 'true');
    firstNameValidate = false;
  } else {
    this.parentNode.setAttribute('data-error-visible', 'false');
    firstNameValidate = true;
  }
});

lastName.addEventListener('change', function() {
  let lastNameValue = this.value;

  if (lastNameValue.length < 2) {
    this.parentNode.setAttribute('data-error-visible', 'true');
    lastNameValidate = false;
  } else {
    this.parentNode.setAttribute('data-error-visible', 'false');
    lastNameValidate = true;
  }
});

email.addEventListener('change', function() {
  let emailValue = this.value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
  if (!emailValue.match(validRegex)) {
      this.parentNode.setAttribute('data-error-visible', 'true');
      eMailValidate = false;
    } else {
      this.parentNode.setAttribute('data-error-visible', 'false');
      eMailValidate = true;
    }
});

birthDate.addEventListener('change', function() {
  let birthDateValue = this.value;
  var dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    
  if (!birthDateValue.match(dateRegex)) {
      this.parentNode.setAttribute('data-error-visible', 'true');
      birthDateValidate = false;
    } else {
      this.parentNode.setAttribute('data-error-visible', 'false');
      birthDateValidate = true;
    }
});

eventQuantity.addEventListener('change', function() {
  let cityEvent = this.value;

  if (cityEvent !== null && cityEvent === "") {
    this.parentNode.setAttribute('data-error-visible', 'true');
    eventQuantityValidate = false;
  } else {
    this.parentNode.setAttribute('data-error-visible', 'false');
    eventQuantityValidate = true;
  }
});

userCondition.addEventListener('change', function() {
  if (this.checked) {
    document.getElementsByClassName('userCondition')[0].setAttribute('data-error-visible', 'false');
    userConditionChecked = true;
  } else {
    document.getElementsByClassName('userCondition')[0].setAttribute('data-error-visible', 'true');
    userConditionChecked = false;
  }
})

// close form event
closeForm.forEach((cross) =>cross.addEventListener("click", closeFormular));


//close formular
function closeFormular() {
  modalbg.style.display = "none";
  successPg.style.display = "none"
}

//submit form event if valide
submitBtn.forEach((submit)=>submit.addEventListener("click", function(event) {
  event.preventDefault();
  if (firstNameValidate === true && lastNameValidate === true && eMailValidate === true && birthDateValidate === true && eventQuantityValidate === true && userConditionChecked === true) {
    modalbg.style.display = "none";
    successPg.style.display = "block";
  };

// close success event
closeSuccessBtn.forEach((close) =>close.addEventListener("click", closeSuccess));

//close success
function closeSuccess() {
  successPg.style.display = "none";
}}))