let qty = JSON.parse(localStorage.getItem("quantity")) || [];
let productQty = {};
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("plus")) {
        console.log("plus is clicked ", e.target.dataset.id);
        const id = parseInt(e.target.dataset.id);
        console.log(id);
        // const  product = cart.find(p => p.id===id);
        // console.log(product);
        // increase(product.id);
        // saveCart();


        if (!productQty[id]) {
            productQty[id] = 1;
        } else {
            productQty[id]++;
        }
        updateQtyUI(id);


    }
});


document.addEventListener("click", function (e) {
    if (e.target.classList.contains("minus")) {
        console.log("minus is clicked ", e.target.dataset.id);
        const id = parseInt(e.target.dataset.id);
        console.log(id);
        // const product = cart.find(p => p.id === id);
        // console.log(product);
        // decrease(product.id);
        // saveCart();

        if (productQty[id] > 1) {
            productQty[id]--;
        } else {
            productQty[id] = 1;
        }
        updateQtyUI(id);

    }
});



function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


function updateQtyUI(id){
    let counter = document.getElementById(`qty-${id}`);
    counter.innerText=productQty[id] || 1;
}


function switchToHome(){
    setTimeout(()=>{
        window.location.href='home.html';
    },1000);
}






// //  remove the item
// function removeItem(id) {
//     cart = cart.filter(item => item.id !== id);

//     saveCart();
//     renderCart();
// }

// quantity increase

// function increase(id) {
//     const item = cart.find(p => p.id === id);
//     item.quantity++;
//     document.getElementById("qty-count").innerHTML = `${item.quantity}`
//     saveCart();
//     renderCart();
// }

//backup increase
// function increase(){
//      const exist = cart.find(item => item.id === product.id);
//     if (exist) {
//         item.quantity++;
//         document.getElementById("qty-count").innerHTML=`${item.quantity}`;
//     }
//     else {
//         cart.push({ ...product, quantity: 1 });
//         document.getElementById("qty-count").innerHTML=`${item.quantity}`;
//     }
//     saveCart();
// }



// //quantity decrease
// function decrease(id) {

//     const item = cart.find(p => p.id === id);
//     if (item.quantity > 1) {
//         item.quantity--;
//     }
//     else {
//         removeItem(id);
//     }
//     document.getElementById("qty-count").innerHTML = `${item.quantity}`
//     saveCart();
//     saveCart();
//     renderCart();
// }





function toggleNav() {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("active");
}


function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

document.addEventListener("click", function (e) {
    const nav = document.getElementById("nav-menu");
    const hamburger = document.querySelector(".hamburger");

    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove("active");
    }
});

document.addEventListener("click", function (e) {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".sidebar-toggle");

    if (!hamburger.contains(e.target) && !sidebar.contains(e.target)) {
        sidebar.classList.remove("active");
    }
});