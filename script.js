// OFERTAS REALES - MULTITIENDAS
const products = [
    {
        name: "Smartphone Xiaomi Poco X6 Pro",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        price: "€299,99",
        originalPrice: "€349,99",
        discount: "14%",
        link: "https://www.amazon.es/dp/B0CRP9CJ7Z",
        store: "amazon",
        description: "12GB RAM + 512GB - Snapdragon"
    },
    {
        name: "Auriculares Sony WH-1000XM4",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        price: "€228,00",
        originalPrice: "€349,99",
        discount: "35%",
        link: "https://www.amazon.es/dp/B08C3W9J5X",
        store: "amazon",
        description: "Cancelación de ruido líder"
    },
    {
        name: "Smartwatch GT8 Pro 1.85\"",
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=300&fit=crop",
        price: "€22,99",
        originalPrice: "€35,99",
        discount: "36%",
        link: "https://es.aliexpress.com/item/1005005500762541.html",
        store: "aliexpress",
        description: "Monitorización deportiva completa"
    },
    {
        name: "Tablet Samsung Galaxy Tab S9",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
        price: "€699,00",
        originalPrice: "€899,00",
        discount: "22%",
        link: "https://www.mediamarkt.es/es/product/_tablet-samsung-galaxy-tab-s9-128-gb-8-gb-11-wifi-gris-1488709.html",
        store: "mediamarkt",
        description: "11\" - 128GB - S-Pen incluido"
    },
    {
        name: "Monitor Gaming 27\" 144Hz",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop",
        price: "€189,99",
        originalPrice: "€249,99",
        discount: "24%",
        link: "https://www.pccomponentes.com/msi-optix-g27c4-27-led-fullhd-144hz-freesync-curva",
        store: "pccomponentes",
        description: "Full HD - 1ms - Curvo"
    },
    {
        name: "Echo Dot 4ª Generación",
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=300&fit=crop",
        price: "€47,99",
        originalPrice: "€59,99",
        discount: "20%",
        link: "https://www.amazon.es/dp/B084DWCZY9",
        store: "amazon",
        description: "Altavoz inteligente con Alexa"
    }
];

function loadProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = products.map(product => {
        const storeName = getStoreName(product.store);
        const storeBadge = getStoreBadge(product.store);
        
        return `
        <div class="product-card">
            <div class="store-badge ${product.store}">
                ${storeBadge} ${storeName}
            </div>
            
            <img src="${product.image}" alt="${product.name}" 
                 onerror="this.src='https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop'">
            
            <h3>${product.name}</h3>
            <p class="product-meta">${product.description}</p>
            
            <div class="price">
                <span class="original-price">${product.originalPrice}</span>
                <span class="current-price">${product.price}</span>
                <span class="discount">${product.discount}</span>
            </div>
            
            <a href="${product.link}" class="btn" target="_blank" rel="noopener noreferrer">
                🔥 Ver Oferta Real
            </a>
        </div>
        `;
    }).join('');
}

function getStoreName(store) {
    const stores = {
        amazon: "Amazon",
        aliexpress: "AliExpress",
        mediamarkt: "MediaMarkt",
        pccomponentes: "PC Componentes"
    };
    return stores[store] || store;
}

function getStoreBadge(store) {
    const badges = {
        amazon: "🅰️",
        aliexpress: "🚢",
        mediamarkt: "🔧",
        pccomponentes: "💻"
    };
    return badges[store] || "🏪";
}

// Inicializar
document.addEventListener('DOMContentLoaded', loadProducts);