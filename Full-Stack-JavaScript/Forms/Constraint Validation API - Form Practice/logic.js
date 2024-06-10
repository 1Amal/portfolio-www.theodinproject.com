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
  const postCodeError = document.querySelector("#postCodes + span.status");
  const selectPostCode = document.querySelector("#postCodes");
  let isPostCodeValid = selectPostCode.validity.valid;

  selectPostCode.addEventListener("input", (event) => {
    isPostCodeValid = selectPostCode.validity.valid;

    if (isPostCodeValid) {
      selectPostCode.style.backgroundColor = "#aeffa0";
      postCodeError.innerText = "Post Code format Correct";
      isPostCodeValid = true;
    } else {
      selectPostCode.style.backgroundColor = "#ff76a4";
      postCodeError.innerText = "Post Code format Wrong";
      isPostCodeValid = false;
    }
  });
  return isPostCodeValid;
}

function emailAddressCheck() {
  const selectEmailAddress = document.querySelector("#emailAddress");
  let validEmailAddress = false;

  selectEmailAddress.addEventListener("input", (event) => {
    validEmailAddress.validity.valid;

    if (validEmailAddress) {
      console.log("Valid Email Address");
    } else {
      console.log("INVALID Email Address");
    }
  });
  return true;
}

function passwordCheck() {
  const selectPasswordInitial = document.querySelector("#passwordInitial");
  const selectPasswordRepeat = document.querySelector("#passwordConfirmation");

  if (selectPasswordInitial.value === selectPasswordRepeat.value) {
    console.log("Passwords Match");
    selectPasswordInitial.style.backgroundColor = "#aeffa0";
    selectPasswordRepeat.style.backgroundColor = "#aeffa0";
    return true;
  } else {
    console.log("Password Mismatch");
    selectPasswordInitial.style.backgroundColor = "#ff76a4";
    selectPasswordRepeat.style.backgroundColor = "#ff76a4";

    return false;
  }
}

function submitForm() {
  const buttonSelect = document.querySelector("#submitButton");
  buttonSelect.addEventListener("click", () => {
    if (postCodeCheck() && emailAddressCheck() && passwordCheck()) {
      console.log("All inputs valid");
    } else {
      console.log("All Input NOT Valid");
    }
  });
}

submitForm();
postCodeCheck();
