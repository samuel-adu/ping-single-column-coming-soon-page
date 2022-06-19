const form = document.getElementById("form");
const emailEl = document.getElementById("email");

let email = "";

function isEmpty(value) {
  if (value === "") {
    return true;
  } else {
    return false;
  }
}

function isEmailValid(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  const erorr = formControl.querySelector("small");
  erorr.textContent = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
  const erorr = formControl.querySelector("small");
  erorr.textContent = "";
}

function checkEmail() {
  let valid = false;
  const email = emailEl.value.trim();
  if (isEmpty(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Please provide a valid email address.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
}

form.addEventListener("input", function (event) {
  const { value, name } = event.target;

  if (name === "email") {
    email = value;
    checkEmail(value);
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // validate forms
  let isEmailValid = checkEmail(email);

  let isFormValid = isEmailValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    // document.querySelector(".container").innerHTML =
    //   "<p>Your form submitted successfully.</p>";
    console.log(email);
  }
});
