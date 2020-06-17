let loginForm = document.querySelector(".login__form");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let errorContainer = document.querySelector(".errorContainer");

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    PasswordValidation();
    ValidateEmail(emailInput);
})

function PasswordValidation() {
    errorContainer.innerHTML = "";

     if (passwordInput.value === "" || passwordInput.value == null) 
    {
        errorContainer.innerHTML = "<p>Please enter a password</p>"
    }

}

function ValidateEmail(inputText) {
    errorContainer.innerHTML = "";

    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (inputText.value === "" || inputText.value == null)
    {
        errorContainer.innerHTML = "<p>Please enter an email address</p>"
    }   

    else if (inputText.value.match(mailFormat)) 
    {
        document.form1.text1.focus();
        return true;
    }
    
    else 
    {
        errorContainer.innerHTML = "<p>You have entered an invalid email address</p>"
        document.form1.text1.focus();
        return false;
    }


}

// DON'T DELETE!
// function ValidatePassword(inputText) {
//     var passwordFormat = /^[A-Za-z]\w{8,20}$/;

//     if (inputText.value.match(passwordFormat)) {
//         alert('Correct, try another...')
//         return true;
//     }
//     else {
//         alert('Wrong...!')
//         return false;
//     }
// }

