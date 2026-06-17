

let user = JSON.parse(localStorage.getItem("loggedUser"));

if (user) {
    document.getElementById("login-transform").innerHTML = `${user.name}`;
} else {
        window.location.href = "home.html";
}
