const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const dataLength = parseInt(validationInput.getAttribute("data-length"), 10);
  const inputValue = validationInput.value.trim();

  if (inputValue.length === dataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
