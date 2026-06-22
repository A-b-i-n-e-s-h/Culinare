
const form = document.getElementById("registerForm");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email.match(/^[a-zA-Z0-9]+[@][a-zA-Z]+[\.][a-zA-Z]{3}$/)) {
        document.getElementById("msg").innerText = "Enter valid Email ";
        return false;
    }


    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exist = users.find(u => {
        return (u.email == email);
    });

    if (exist) {
        document.getElementById("msg").style.color = "red";
        document.getElementById("msg").innerText = "Email already registered!";
        return;

    }
    let newUser = {
        name: name,
        email: email,
        password: password,


    };
    console.log("new user created");
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("msg").style.color = "green";
    const trimmedName = (newUser.name).length > 18 ? (newUser.name).slice(0, 15) + '...' : (newUser.name);

    document.getElementById("msg").innerText = `Registered Successfully ${trimmedName}!`;

    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);

});






