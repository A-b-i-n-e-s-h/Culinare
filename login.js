// login form validation

let emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

function validateEmail() {
    let email = document.getElementById("input-email");
    if (email.value.length == 0) {
        emailError.innerHTML = 'Email is required';
        emailError.style.color = "#ff0303";
        email.style.border = "2px solid #ff0303 ";
        return false;
    }
    if (!email.value.match(/^[a-zA-Z0-9]+[@][a-zA-Z]+[\.][a-zA-Z]{3}$/)) {
        emailError.innerHTML = "Enter valid Email "
        emailError.style.color = "#ff0303";
        email.style.border = "2px solid #ff0303";
        return false;
    }
    emailError.innerHTML = "";
    email.style.border = "2px solid green";
    return true;

}


function validatePassword() {
    let password = document.getElementById("input-password");
    let length = password.value.length;
    if (length == 0) {
        passwordError.innerHTML = 'password is required';
        passwordError.style.color = "#ff0303"
        password.style.border = "2px solid #ff0303"
        return false;
    }
    // if (!password.value.match(/^[0-9]+$/)) {
    //    passwordError.innerHTML = "password number should contain only numbers"
    //    passwordError.style.color = "#ff0303";
    //    password.style.border = "2px solid #ff0303";
    //     return false;
    // }

    // if (length < 8) {
    //    passwordError.innerHTML = 'password should be atleat 8 digits';
    //    passwordError.style.color = "#ff0303";
    //    password.style.border = "2px solid #ff0303";
    //     return false;

    // }

    passwordError.innerHTML = "";
    password.style.border = "2px solid green";
    return true;
}



// user authuenticaton

document.getElementById("loginForm").addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.getElementById("input-email").value;
    let password = document.getElementById("input-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => {
        return (u.email === email && u.password == password);
    })

    if (user) {
        localStorage.setItem("loggedUser", JSON.stringify(user));
        document.getElementById("msg").innerHTML = `Logged in ${user.name}`;
        document.getElementById("msg").style.color = "green";
        document.getElementById("msg").style.marginTop = "10px";
        setTimeout(() => {
            window.location.href = "home.html";
        }, 3000);


    }
    else {
        document.getElementById("msg").innerHTML = `Invalid Credentials`;
        document.getElementById("msg").style.color = "#ff0303";
        document.getElementById("msg").style.marginTop = "10px";
        return;

    }

});



