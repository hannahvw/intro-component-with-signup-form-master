const trialBtn = document.querySelector("#trial-button");
const trialForm = document.querySelector("#trial-form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorMsg = document.querySelector(".error-msg");

function handleSubmit(event) {
  event.preventDefault();
  if (firstName.value === "") {
    lastName.style.marginTop = "35px";
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }

  if (lastName.value === "") {
    email.style.marginTop = "35px";
    errorMsg.style.display = "block";
  }

  // password.style.marginTop = "35px";
  // trialBtn.style.marginTop = "35px";
}

trialBtn.addEventListener("click", handleSubmit);
