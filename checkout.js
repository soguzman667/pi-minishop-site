// Récupérer le panier depuis sessionStorage
const checkoutProducts = document.getElementById("checkout-products");
const checkoutTotal = document.getElementById("checkout-total");
const checkoutForm = document.getElementById("checkout-form");

// Récupération du panier
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function renderCheckout() {
  if(cart.length === 0) {
    checkoutProducts.value = "Aucun produit";
    checkoutTotal.value = "0 Pi";
  } else {
    let productsText = "";
    let total = 0;
    cart.forEach(item => {
      productsText += `${item.name} - ${item.price} Pi\n`;
      total += item.price;
    });
    checkoutProducts.value = productsText;
    checkoutTotal.value = `${total} Pi`;
  }
}

renderCheckout();

// Envoyer la commande
checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`Merci ${checkoutForm.name.value} !\nVotre commande de ${checkoutTotal.value} a été envoyée.`);
  sessionStorage.removeItem("cart");
  checkoutProducts.value = "";
  checkoutTotal.value = "0 Pi";
});
