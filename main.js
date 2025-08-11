// TODO username validate
// no longer than 20 characters, done in HTML
// alphabetic, numeric, some symbols {_, -}

// TODO password validate
// 8~20 characters, done in HTML
// alphabetic, numeric, some symbols {_, -, #, $, %, &, @, ^, `, ~, <, >, *, +, !, ?, =}

let form = document.getElementById("signUpForm");

form.addEventListener("submit", (e) => {
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
