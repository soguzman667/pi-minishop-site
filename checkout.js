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
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");
const checkoutForm = document.getElementById("checkout-form");

let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function displayCheckout() {
  checkoutItems.innerHTML = "";
  if(cart.length === 0){
    checkoutItems.innerHTML = "<p>Votre panier est vide</p>";
    checkoutTotal.innerHTML = "<strong>Total : 0 Pi</strong>";
    return;
  }

  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const div = document.createElement("div");
    div.classList.add("checkout-item");
    div.innerText = `${item.name} - ${item.price} Pi`;
    checkoutItems.appendChild(div);
  });

  checkoutTotal.innerHTML = `<strong>Total : ${total} Pi</strong>`;
}

displayCheckout();

// Formulaire : affichage confirmation
checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Merci pour votre commande ! Vous recevrez un email de confirmation.");
  sessionStorage.removeItem("cart"); // vider le panier
  window.location.href = "index.html";
});
function animateTotal(finalTotal) {
  let current = 0;
  const duration = 500; // durée en ms
  const stepTime = 20;
  const increment = finalTotal / (duration / stepTime);

  const interval = setInterval(() => {
    current += increment;
    if(current >= finalTotal){
      current = finalTotal;
      clearInterval(interval);
    }
    checkoutTotal.innerHTML = `<strong>Total : ${Math.round(current)} Pi</strong>`;
  }, stepTime);
}

function displayCheckout() {
  checkoutItems.innerHTML = "";
  if(cart.length === 0){
    checkoutItems.innerHTML = "<p>Votre panier est vide</p>";
    checkoutTotal.innerHTML = "<strong>Total : 0 Pi</strong>";
    return;
  }

  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const div = document.createElement("div");
    div.classList.add("checkout-item");
    div.innerText = `${item.name} - ${item.price} Pi`;
    checkoutItems.appendChild(div);
  });

  animateTotal(total);
}
checkoutTotal.classList.add("animated");
setTimeout(() => {
  checkoutTotal.classList.remove("animated");
}, 600);
cart.forEach(item => {
  total += item.price;
  const div = document.createElement("div");
  div.classList.add("checkout-item");
  div.innerHTML = `
    <img src="${item.img}" alt="${item.name}" class="checkout-item-img">
    <span>${item.name} - ${item.price} Pi</span>
  `;
  checkoutItems.appendChild(div);
});
