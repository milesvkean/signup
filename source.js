// Event listner for name. 

firstNameInput = document.querySelector("#first_name");
firstNameInput.focus();

const inputBoxes = document.querySelectorAll('input');

let isInputFocused = false;
inputBoxes.forEach((inputBox) => {
    inputBox.addEventListener('focus', () => {

    });
});

//check that the pasword fields match in real time 
let firstPassword = '';
let secondPassword = '';

const password = document.querySelector("#password");
const passwordConfirm = document.querySelector('#confirm_password');

password.addEventListener('input', () => {
    firstPassword = password.value;
});

passwordConfirm.addEventListener('input', () => {
    secondPassword = passwordConfirm.value;

    if (firstPassword != secondPassword) {
        document.querySelector(".error_message").textContent = "* The passwords do not match";
    }
    else document.querySelector(".error_message").textContent = "";
});
