const products = [
    { name: "Produit 1", price: "10 Pi" },
    { name: "Produit 2", price: "20 Pi" },
    { name: "Produit 3", price: "30 Pi" }
];

const productList = document.querySelector(".product-list");

products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${product.name}</h3><p>Prix: ${product.price}</p>`;
    productList.appendChild(div);
});
