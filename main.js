let form = document.getElementById("signUpForm");

form.addEventListener("submit", (e) => {
  // add interacted class to all form elements
  Array.from(form.elements).forEach((i) => {
    i.classList.add("interacted");
  });

  if (form.checkValidity()) {
    // form is valid - make further checks
  } else {
    // form is invalid - cancel submit
    e.preventDefault();
    // apply invalid class
    Array.from(form.elements).forEach((i) => {
      if (i.checkValidity()) {
        // field is valid - remove class
        i.parentElement.classList.remove("invalid");
      } else {
        // field is invalid - add class
        i.parentElement.classList.add("invalid");
      }
    });
  }
});

// add interacted class on focusout
Array.from(form.elements).forEach((i) => {
  i.addEventListener("focusout", () => {
    i.classList.add("interacted");
  });
});