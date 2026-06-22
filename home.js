

let user = JSON.parse(localStorage.getItem("loggedUser"));
let btn = document.getElementById("log-btn");

if (user) {
    document.getElementById("login-transform").innerHTML = `${user.name}`;


    // document.getElementById("login-transform").addEventListener("mouseover", () => {
    //     document.getElementById("login-transform").innerText = "Logout";
    // });


    document.getElementById("login-transform").addEventListener("click", () => {
        console.log("logout");
        localStorage.removeItem("loggedUser");
        showLogout();
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    });


} else {
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}

function showLogout() {
    const popup = document.createElement("div");
    popup.className = "popup-status";
    popup.innerHTML = ` ${user.name} Logged Out`;
    console.log("log out");
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 2000);

}
