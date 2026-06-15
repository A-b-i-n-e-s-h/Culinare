
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

    let exist = users.find(u =>{
        return (u.email == email );
    });

    if(exist){
         document.getElementById("msg").innerText = "Email already registered!";
        return;

    }
    let newUsers = {
        name: name,
        email: email,
        password : password,
        

    };
    console.log("new user created");
    users.push(newUsers);

    localStorage.setItem("users",JSON.stringify(users));
     document.getElementById("msg").innerText = `Registered Successfully ${name}!`;
    
    setTimeout(()=>{
        window.location.href="index.html";
    },3000);

});






