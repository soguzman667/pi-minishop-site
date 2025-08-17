// ===== MiniShop Pi - script.js =====

// Exemple de produits
const products = [
    { id: 1, name: "Pi T-shirt", price: 15, image: "images/tshirt.png" },
    { id: 2, name: "Pi Mug", price: 10, image: "images/mug.png" },
    { id: 3, name: "Pi Casquette", price: 12, image: "images/cap.png" }
];

// Panier
let cart = [];

// ===== Fonction pour afficher les produits =====
function displayProducts() {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = ""; // vider avant d'afficher
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product-card";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>${product.price} €</p>
            <button onclick="addToCart(${product.id})">Ajouter au panier</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// ===== Fonction pour ajouter un produit au panier =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    displayCart();
}

// ===== Fonction pour afficher le panier =====
function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>${item.price * item.quantity} €</span>
            <button onclick="removeFromCart(${item.id})">Supprimer</button>
        `;
        cartContainer.appendChild(itemDiv);
    });

    const totalDiv = document.createElement("div");
    totalDiv.className = "cart-total";
    totalDiv.innerHTML = `<strong>Total: ${total} €</strong>`;
    cartContainer.appendChild(totalDiv);
}

// ===== Fonction pour supprimer un produit du panier =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCart();
}

// ===== Fonction pour gérer le formulaire de commande =====
function submitOrder(event) {
    event.preventDefault();
    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }
    const name = document.getElementById("customer-name").value;
    const email = document.getElementById("customer-email").value;
    const address = document.getElementById("customer-address").value;

    if (!name || !email || !address) {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    // Ici, tu pourrais envoyer la commande à un serveur ou la sauvegarder
    alert(`Merci pour votre commande, ${name} !`);
    
    // Réinitialiser le panier et le formulaire
    cart = [];
    displayCart();
    document.getElementById("order-form").reset();
}

// ===== Initialisation =====
window.onload = function() {
    displayProducts();

    // Ajouter l'événement du formulaire
    const orderForm = document.getElementById("order-form");
    if(orderForm) orderForm.addEventListener("submit", submitOrder);
};
