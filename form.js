function validateUsername(){
    let username = document.getElementById("username").value;
    let usernameError = document.getElementById("usernameError");

    if(username.trim() === ""){
        usernameError.innerHTML = "Username is required";
        return false;
    }
    usernameError.innerHTML = "";
    return true;
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");

    if(password.length === 0) {
        passwordError.innerHTML = "Password is required";
        return false;
    }
    if(password.length<6 || password.length > 10) {
        passwordError.innerHTML = "Password must be between 6 and 10 char";
        return false;
    
    }

    passwordError.innerHTML = "";
    return true;
}

function togglePassword(button) {
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.innerText = "Hide Password";
    } else {
        passwordInput.type = "password";
        button.innerText = "Show Password";
    }

}
function validateMobile() {
    let mobile = document.getElementById("mobile").value;
    let mobileError = document.getElementById("mobileError");

if (mobile.length === 0) {
    mobileError.innerHTML = "Mobile number is required";
    return false;
}
if (isNaN(mobile)) {
    mobileError.innerHTML = "Only digits are allowed";
    return false;
}
if(mobile.length !== 10) {
    mobileError.innerHTML = "Mobile number must be 10 digits";
    return false;
}
mobileError.innerHTML = "";
return true;
}

function validateEmail() {
    return true;
}

function validateEmail() {
    let email = document .getElementById("email").value;
    let emailError = document.getElementById("emailError");

    let emailPattern = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.trim() === "") {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Enter valid email ending wwith .com or .in";
        return false;
    }
    emailError.innerHTML = "";
    return true;
}
function validationQualification() {
    let qualification = document.getElementById("")
}