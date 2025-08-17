// Gestion simple du panier
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
    alert("Produit ajouté au panier !");
  });
});
let cart = [];
const cartCountElement = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const closeCart = document.querySelector(".close-cart");
const checkoutBtn = document.getElementById("checkout-btn");
const cartIcon = document.querySelector(".cart-icon");

// Ajouter produit au panier
addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const product = {
      name: button.parentElement.querySelector("h3").innerText,
      price: parseInt(button.parentElement.querySelector("p").innerText.replace("Prix : ", "").replace(" Pi",""))
    };
    cart.push(product);
    updateCart();
    alert(`${product.name} ajouté au panier !`);
  });
});

// Ouvrir panier
cartIcon.addEventListener("click", () => {
  renderCart();
  cartModal.style.display = "block";
});

// Fermer panier
closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target == cartModal) cartModal.style.display = "none";
});

// Mettre à jour compteur et total
function updateCart() {
  cartCountElement.textContent = cart.length;
}

// Afficher le contenu du panier
function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ${item.price} Pi
      <button onclick="removeFromCart(${index})">Supprimer</button>
    `;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = total;
}

// Retirer un produit
function removeFromCart(index) {
  cart.splice(index,1);
  updateCart();
  renderCart();
}
// Checkout simple
checkoutBtn.addEventListener("click", () => {
  alert(`Commande passée pour un total de ${cart.reduce((sum, item) => sum + item.price,0)} Pi !`);
  cart = [];
  updateCart();
  renderCart();
  cartModal.style.display = "none";
});
