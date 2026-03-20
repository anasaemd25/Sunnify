const BACKEND_ROOT_URL = "http://127.0.0.1:3001";

const usernameField = document.getElementById("reg-username");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("reg-password");
const passwordCheckField = document.getElementById("confirm-password");
const registerButton = document.querySelector(".auth-form_submit");

registerButton.addEventListener("click", (event) => {
    event.preventDefault();

    const username = usernameField.value.trim();
    const email = emailField.value.trim();
    const password = passwordField.value.trim();
    const passwordCheck = passwordCheckField.value.trim();

    /*
        Username validation: 
            3-30 characters long
            Has to start with letter
            Allowed alphanumeric characters and special characters ".-_"
            No multiple special characters in a row
    */
    let usernameValidationRegex = /^(?=.{3,30}$)(?![0-9._-])([a-zA-Z]+(?:[._-]?[a-zA-Z0-9]+)*)$/;
    let usernameIsValid = usernameValidationRegex.test(username);
    if (!usernameIsValid) {
        usernameField.style.border = "2px solid red";
        usernameField.style.backgroundColor = "#ffcccc";

        const usernameErrorSpan = document.getElementById("username-span");
        usernameErrorSpan.style.border = "2px solid red";
        usernameErrorSpan.style.backgroundColor = "#ffcccc";
        usernameErrorSpan.textContent =
            `Username is invalid! Please make sure it matches the rules below:
            \t- 3-30 characters long
            \t- Starts with a letter
            \t- Uses only alphanumeric characters and allowed special characters \"._-\"
            \t- Max. 1 special character in a row`;


    }
})