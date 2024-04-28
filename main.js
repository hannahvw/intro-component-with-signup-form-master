const trialBtn = document.querySelector("#trial-button");
const trialForm = document.querySelector("#trial-form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorMsgFirstName = document.querySelector(".error-msg-fname");
const errorMsgLastName = document.querySelector(".error-msg-lname");
const errorMsgEmail = document.querySelector(".error-msg-email");
const errorMsgPassword = document.querySelector(".error-msg-password");

function handleSubmit(event) {
  event.preventDefault();
  if (firstName.value === "") {
    lastName.style.marginTop = "35px";
    errorMsgFirstName.style.display = "block";
  } else {
    errorMsgFirstName.style.display = "none";
    lastName.style.marginTop = "10px";
  }

  if (lastName.value === "") {
    email.style.marginTop = "35px";
    errorMsgLastName.style.display = "block";
  } else {
    errorMsgLastName.style.display = "none";
    email.style.marginTop = "10px";
  }

  if (email.value === "" || !email.value.includes("@")) {
    password.style.marginTop = "35px";
    errorMsgEmail.style.display = "block";
  } else {
    errorMsgEmail.style.display = "none";
    password.style.marginTop = "10px";
  }

  if (password.value === "") {
    trialBtn.style.marginTop = "35px";
    errorMsgPassword.style.display = "block";
  } else {
    errorMsgPassword.style.display = "none";
    trialBtn.style.marginTop = "10px";
  }

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
}

trialBtn.addEventListener("click", handleSubmit);
