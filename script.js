body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    text-align: center;
}

nav {
    background-color: #333;
    text-align: center;
}

nav ul.menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

nav ul.menu li {
    margin: 0 15px;
}

nav ul.menu li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

nav ul.menu li a:hover {
    text-decoration: underline;
}

main {
    padding: 20px;
}

.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.product {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    width: 200px;
    text-align: center;
}

#contact {
    margin-top: 40px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
}

#contact-form input, #contact-form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
}

#contact-form button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#contact-form button:hover {
    background-color: #45a049;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #222;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
}

