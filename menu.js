let qty = JSON.parse(localStorage.getItem("quantity")) || [];

document.addEventListener("click", function(e){
    if(e.target.classList.contains("plus")){
        console.log("plus is clicked " , e.target.dataset.id);
        const id = parseInt(e.target.dataset.id);
        console.log(id);
        const  product = cart.find(p => p.id===id);
        console.log(product);
        increase(product.id);
        saveCart();
        
    }
});


document.addEventListener("click", function(e){
    if(e.target.classList.contains("minus")){
        console.log("minus is clicked " , e.target.dataset.id);
        const id = parseInt(e.target.dataset.id);
        console.log(id);
        const  product = cart.find(p => p.id===id);
        console.log(product);
        decrease(product.id);
        saveCart();
        
    }
});





function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}





//  remove the item
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    
    saveCart();
    renderCart();
}

// quantity increase

function increase(id) {
    const item = cart.find(p => p.id === id);
    item.quantity++;
    document.getElementById("qty-count").innerHTML=`${item.quantity}`
    saveCart();
    renderCart();
}

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



//quantity decrease
function decrease(id) {

    const item = cart.find(p => p.id === id);
    if (item.quantity > 1) {
        item.quantity--;
    }
    else {
        removeItem(id);
    }
     document.getElementById("qty-count").innerHTML=`${item.quantity}`
    saveCart();
    saveCart();
    renderCart();
}