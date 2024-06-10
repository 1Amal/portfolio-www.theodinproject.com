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
  const postCodeError = document.querySelector("#postCodes + span.status");
  
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
  const emailAddressError=document.querySelector("#emailAddress + span.status");
  
  let validEmailAddress = selectEmailAddress.validity.valid;

  selectEmailAddress.addEventListener("input", (event) => {
    validEmailAddress=selectEmailAddress.validity.valid;

    if (validEmailAddress) {
      console.log("Valid Email Address");
      emailAddressError.innerText="Valid Email Address";
      validEmailAddress=true;
    } else {
      console.log("INVALID Email Address");
      emailAddressError.innerText="Invalid Email Address";
      validEmailAddress=false;
    }
  });
  return validEmailAddress;
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
