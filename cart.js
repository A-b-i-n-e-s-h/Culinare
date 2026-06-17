let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {
        console.log(" cart button clicked ", e.target.dataset.id);
        const id = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === id);
        if (!product) return;
        showPopup(product.name, product.id);
        addToCart(product);
    }
});

function addToCart(product) {
    const exist = cart.find(item => item.id === product.id);
    if (exist) {
        showPopup(product.name, product.id);
    }
    else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
}

// function addToCart(product) {
//     const exist = cart.find(item => item.id === product.id);
//     if (exist) {
//         showPopup(product.name, product.id);
//     }
//     else {
//         item.quantity=1;
//         const id = parseInt(e.target.dataset.id);
//         console.log(`qty:1 is added ,${id}`);
//     }
//     saveCart();
// }



function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    renderCart();

}


function renderCart() {

    const container = document.querySelector(".cart-items");
    if (!container) return;

    if (cart.length === 0) {
        //let emptyCart = document.querySelector(".cart");
        container.innerHTML = "<p>Your cart is empty</p>";
        container.style.textAlign = "center";
        container.style.margin = "10px";
        container.style.color = "#586062";
        document.getElementById("place-order").innerText = "SHOP NOW";
       
   
        subtotal();
        total();
        return;
    }




    container.innerHTML = "";

    cart.forEach(item => {
        const div = document.createElement("div");
        //div.className = 'cart-items';
        div.classList.add("cart-item");
        div.innerHTML = `
    
            <div class="product-info">
                <img src="${item.img}">
                
            </div>
            <div class="product-cart-name">
                <span>${item.name}</span>
                <p class="cart-name-below">Qty:${item.quantity} Extra Spicy</p>
            </div>

            <div class="price">
                <span>$${item.price}</span>
            </div>

           <div  class="remove-btn" onclick="removeItem(${item.id})">
                 <button >&#10006;</button>
           </div>
           
     `;

        container.appendChild(div);
       
    });

    subtotal();
    total();

}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();

}

function subtotal() {
    let total = 0;
    cart.forEach(item => {
        total = total + (item.price * item.quantity);
    });
    let totalElement = document.getElementById("subtotal-price");
    totalElement.innerHTML = `$${total}`;
}

function total() {
    let total = 0;
      if (cart.length !== 0){
        total=4.50 + 5.82;
    }
  
    cart.forEach(item => {
        total = total + (item.price * item.quantity);
    });
    let totalElement = document.getElementById("total-price");
  
    totalElement.innerHTML = `$${total}`;
    saveCart();
}

function placeOrder() {
    alert("Your order has been placed 🥳 ");
    clearCart();

}














//quantity increase

function increase(id) {
    const item = cart.find(p => p.id === id);
    item.quantity++;
    saveCart();
    renderCart();
}

//quantity decrease
function decrease(id) {

    const item = cart.find(p => p.id === id);
    if (item.quantity > 1) {
        item.quantity--;
    }
    else {
        removeItem(id);
    }
    saveCart();
    renderCart();
}








function showPopup(productName, id) {
    const popup = document.createElement("div");
    popup.className = "popup-status";
    if (cart.find(p => p.id === id)) {
        popup.innerHTML = `${productName} already added`;
        console.log("already added");
    } else {
        popup.innerHTML = `${productName} added to Cart Successfully`;
        console.log("Added successfully");
    }
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 2000);

}


// function showPopup1() {
//     const popup = document.createElement("div");
//     popup.className = "popup-status";
//     popup.innerHTML = `Your Order has been placed! 🥳`;
//     setTimeout(() => {
//         popup.remove();
//     }, 2000);

// }


renderCart();
subtotal();
total();
