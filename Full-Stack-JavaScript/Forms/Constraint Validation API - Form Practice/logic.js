// Amal Kariyawasam, 2024
console.log("Script Loaded");

function checkCountry() {
  const selectCountry = document.querySelector("#countryName");
  selectCountry.addEventListener("input", (event) => {
    // console.log(countryCheck.value);
    if (selectCountry.validity.valid) {
      console.log(selectCountry.value);
      selectCountry.style.backgroundColor = "#40e716";
    } else if (selectCountry.value === "selectCountry") {
      console.log("Country value invalid");
    }
  });
}

function postCodeCheck() {
  const selectPostCode = document.querySelector("#postCodes");
  selectPostCode.addEventListener("input", (event) => {
    console.log("Execute postcode");
  });
}

function emailAddressCheck() {
  const selectEmailAddress = document.querySelector("#emailAddress");
  selectEmailAddress.addEventListener("input", (event) => {
    console.log("Execute Email Address");
  });
}

function passwordCheck() {
  const selectPasswordInitial = document.querySelector("#passwordInitial");
  const selectPasswordRepeat = document.querySelector("#passwordConfirmation");

  if (selectPasswordInitial.value === selectPasswordRepeat.value) {
    console.log("Passwords Match");
  } else {
    console.log("Password Mismatch");
  }
}

function submitForm() {
  const buttonSelect = document.querySelector("#submitButton");
  buttonSelect.addEventListener("click", () => {
    checkCountry();
    postCodeCheck();
    emailAddressCheck();
    passwordCheck();

    console.log("Country value invalid");
  });
}

submitForm();
