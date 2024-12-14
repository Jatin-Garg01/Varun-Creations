const products = [
    {
        img: "img/Products_images/Bollywood earings/1.jpg",
        name: "Bollywood earings",
        originalPrice: 650,
        discountedPrice: 550,
        discount: "15% Off",
        stock: true, // Stock availability
    },
    {
        img: "img/bollywood earings/2.jpg",
        name: "Pearl Mirror Chokker",
        originalPrice: 650,
        discountedPrice: 550,
        discount: "15% Off",
        stock: false, // Out of stock
    },
    {
        img: "img/bollywood earings/4.jpg",
        name: "Pearl Mirror Chokker",
        originalPrice: 650,
        discountedPrice: 550,
        discount: "15% Off",
        stock: true, // Stock availability
    },
    // Add more products here...
];

// Function to generate product HTML
function generateProducts() {
    const container = document.getElementById("product-container");
    products.forEach(product => {
        const stockText = product.stock ? "In Stock" : "Out of Stock";
        const productHTML = `
            <div class="pro">
                <img src="${product.img}" alt="${product.name}">
                <div class="des">
                    <h5 class="Name">${product.name}</h5>
                    <p class="price">
                        <strike>Rs.${product.originalPrice}</strike> &nbsp;
                        Rs.${product.discountedPrice} &nbsp; 
                        <span class="discount">${product.discount}</span>
                    </p>
                </div>
                <button class="cart"><b>${stockText}</b></button>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// Call the function on page load
generateProducts();

