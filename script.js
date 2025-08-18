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
function updateCart() {
  cartCountElement.textContent = cart.length;

  function updateCart() {
  cartCountElement.textContent = cart.length;

  // Sauvegarder le panier dans sessionStorage
  sessionStorage.setItem("cart", JSON.stringify(cart));

  // Animation bounce
  cartCountElement.classList.add("bounce");
  setTimeout(() => {
    cartCountElement.classList.remove("bounce");
  }, 500);
}

  // Ajouter la classe bounce pour l'animation
  cartCountElement.classList.add("bounce");

  // Retirer la classe après l'animation pour pouvoir la rejouer
  setTimeout(() => {
    cartCountElement.classList.remove("bounce");
  }, 500);
}

checkoutBtn.addEventListener("click", () => {
  window.location.href = "checkout.html"; // redirection vers la page checkout
});
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = {
      name: button.parentElement.querySelector("h3").innerText,
      price: parseInt(button.parentElement.querySelector("p").innerText.replace("Prix : ", "").replace(" Pi",""))
    };
    cart.push(product);
    updateCart(); // Met à jour compteur + sessionStorage
  });
});
// Sélection des éléments
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");

// Fonction pour afficher le panier
function renderCart() {
  cartItemsContainer.innerHTML = ""; // vider le contenu
  if(cart.length === 0){
    cartItemsContainer.innerHTML = "<p>Le panier est vide</p>";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name} - ${item.price} Pi</span>
      <button class="remove-item" data-index="${index}">Supprimer</button>
    `;
    cartItemsContainer.appendChild(div);
  });

  // Ajouter les événements pour supprimer
  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      cart.splice(idx,1);
      updateCart();
      renderCart();
    });
  });
}
// Ouvrir le modal au clic sur le compteur panier
cartCountElement.addEventListener("click", () => {
  cartModal.style.display = "block";
  renderCart();
});

// Fermer le modal si clic en dehors
window.addEventListener("click", (e) => {
  if(e.target === cartModal){
    cartModal.style.display = "none";
  }
});
