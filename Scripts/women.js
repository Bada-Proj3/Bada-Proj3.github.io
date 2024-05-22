document.addEventListener('DOMContentLoaded', displayProducts);

function displayProducts() {
    const productList = document.getElementById('prd');
    productList.innerHTML = '';

    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        if(product.gender === "female"){
        const productCard = document.createElement('div');
        productCard.className = 'col-6 col-md-4 product-card';

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.className = 'img-fluid';

        const productName = document.createElement('div');
        productName.className = 'product-name';
        productName.textContent = product.name;

        const productPrice = document.createElement('div');
        productPrice.className = 'product-price';
        productPrice.textContent = `$${product.price}`;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);

        productList.appendChild(productCard);
    }
    });

    //document.getElementById('prdct').innerText = products.length;
}
/*********************************************************************************** */


       