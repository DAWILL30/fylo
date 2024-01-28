const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

linkForm.addEventListener("submit", formSubmit);

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Validate Email
function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errMsg.innerHTML = "Please enter something";
    input.classList.add("border-red-500");
  } else if (!validateEmail(input.value)) {
    errMsg.innerHTML = "Please check your email";
    input.classList.add("border-red-500");
  } else {
    errMsg.innerHTML = "";
    input.classList.remove("border-red-500");
    alert("Success ✔");
  }
}
