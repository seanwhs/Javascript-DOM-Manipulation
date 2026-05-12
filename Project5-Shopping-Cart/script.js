/**
 * PROJECT 05: SHOPPING CART
 */

// 1. DATA: List of products
const products = [
    { id: 1, name: "Wireless Mouse", price: 25.00 },
    { id: 2, name: "Mechanical Keyboard", price: 85.00 },
    { id: 3, name: "Gaming Monitor", price: 199.00 },
    { id: 4, name: "USB-C Hub", price: 45.00 }
];

let cart = [];

const productsGrid = document.querySelector("#products-grid");
const cartItemsContainer = document.querySelector("#cart-items");
const subtotalEl = document.querySelector("#subtotal");
const taxEl = document.querySelector("#tax");
const totalEl = document.querySelector("#total");

// 2. RENDER PRODUCTS
function displayProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join("");
}

// 3. CART LOGIC
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

// 4. RENDER CART & SYNC UI
function renderCart() {
    // Render list
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong> x ${item.quantity}
                <br><small>$${(item.price * item.quantity).toFixed(2)}</small>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join("");

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    // Update UI
    subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    taxEl.innerText = `$${tax.toFixed(2)}`;
    totalEl.innerText = `$${total.toFixed(2)}`;
}

// Initialize
displayProducts();
renderCart();