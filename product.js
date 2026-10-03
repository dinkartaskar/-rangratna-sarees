const products = [
  {
    id: "RS001",
    name: "Chocobar Daisy Print Saree",
    category: "Sarees",
    price: 550,
    delivery: "Delivery Charges Extra",
    image: "images/saree-chocobar.jpg",
    rating: 4.8,
    badge: "NEW",
    description: "सुंदर Daisy Print Saree. Daily Wear आणि Occasion Wear साठी योग्य."
  },

  {
    id: "RW001",
    name: "Stylish Women Wallet",
    category: "Women Wallet",
    price: 165,
    delivery: "COD Available",
    image: "images/women-wallet.jpg",
    rating: 4.7,
    badge: "₹165",
    description: "Stylish women wallet with multiple card slots. Lightweight आणि gifting साठी योग्य."
  },

  {
    id: "MW001",
    name: "Premium Men's Wallet",
    category: "Men Wallet",
    price: 165,
    codCharge: 40,
    delivery: "PAN India Delivery",
    image: "images/mens-wallet.jpg",
    rating: 4.6,
    badge: "₹165",
    description: "Compact आणि stylish men's wallet. PAN India delivery available."
  }
];

const whatsappNumber = "918830168543";

function productCard(product) {

  const extra = product.codCharge
    ? `COD Charges ₹${product.codCharge}`
    : (product.delivery || "");

  const message =
    `नमस्कार RANGRATNA SAREES,\n` +
    `मला हा product order करायचा आहे.\n\n` +
    `Product: ${product.name}\n` +
    `Product ID: ${product.id}\n` +
    `Price: ₹${product.price}\n` +
    `${extra}`;

  const whatsapp =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return `
    <div class="product-card">

      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

        <span class="product-badge">
          ${product.badge}
        </span>

      </div>

      <div class="product-info">

        <small>${product.category}</small>

        <h3>${product.name}</h3>

        <div class="rating">
          ★★★★★ ${product.rating}
        </div>

        <div class="product-price">
          ₹${product.price}
        </div>

        <p>${extra}</p>

        <p>
          Product ID: ${product.id}
        </p>

        <a
          href="${whatsapp}"
          target="_blank"
          class="order-button"
        >
          💬 Order on WhatsApp
        </a>

      </div>

    </div>
  `;
}
