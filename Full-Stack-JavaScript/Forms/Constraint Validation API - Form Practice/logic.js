// Amal Kariyawasam, 2024
console.log("Script Loaded");

function checkCountry() {
  const selectCountry = document.querySelector("#countryName");
  selectCountry.addEventListener("input", (event) => {
    // console.log(countryCheck.value);
    if (selectCountry.validity.valid) {
      console.log(selectCountry.value);
      selectCountry.style.backgroundColor = "#40e716";

      return true;
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
  return true;
}

function emailAddressCheck() {
  const selectEmailAddress = document.querySelector("#emailAddress");
  selectEmailAddress.addEventListener("input", (event) => {
    console.log("Execute Email Address");
  });
  return true;
}

function passwordCheck() {
  const selectPasswordInitial = document.querySelector("#passwordInitial");
  const selectPasswordRepeat = document.querySelector("#passwordConfirmation");

  if (selectPasswordInitial.value === selectPasswordRepeat.value) {
    console.log("Passwords Match");
    return true;
  } else {
    console.log("Password Mismatch");
    return false;
  }
}

function submitForm() {
  const buttonSelect = document.querySelector("#submitButton");
  buttonSelect.addEventListener("click", () => {
    if (postCodeCheck() && emailAddressCheck() && passwordCheck()) {
      console.log("All inputs valid");
    }
    console.log("Submit Button Clicked");
  });
}

submitForm();
