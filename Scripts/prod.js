
document.addEventListener('DOMContentLoaded', (event) => {
    displayProducts();
});

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productBrand = document.getElementById('productBrand').value;
    const productDescription = document.getElementById('productDescription').value;
    const productImage = document.getElementById('productImage').files[0];
    const genderprod = document.getElementById('gender').value;
    const productPrice = document.getElementById('productPrice').value;

    if (productName && productBrand && productDescription && productImage && productPrice) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const product = {
                name: productName,
                brand: productBrand,
                gender:genderprod,
                description: productDescription,
                image: e.target.result,
                price: productPrice
            };

            let products = JSON.parse(localStorage.getItem('products')) || [];
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));

            displayProducts();
        }
        reader.readAsDataURL(productImage);
        
        document.getElementById('productForm').reset();
        document.getElementById('productForm').style.display='none';
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}
function toggleDisplay() {
    const cont = document.getElementById('productForm');
    cont.style.display = (cont.style.display === 'none' || cont.style.display === '') ? 'block' : 'none';
  }
function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    let products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'card';
        productCard.innerHTML = `
                    <img src="${product.image}" class="img-fluid rounded-start" alt="${product.name}">
                
                <div 
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text"><strong>Marque:</strong> ${product.brand}</p>
                        <p class="card-text"><strong>gender:</strong> ${product.gender}</p>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Prix:</strong> ${product.price} $</p>
                        <button class="btn btn-danger" onclick="removeProduct(${index})">Supprimer</button>
                        <button class="btn btn-secondary" onclick="modifyProduct(${index})">Modifier</button>
                    </div>
                </div>
            
        `;
        productList.appendChild(productCard);
    });

    document.getElementById('prdct').innerText = products.length;
}

function removeProduct(index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
}

let currentProductIndex;

function modifyProduct(index) {
    currentProductIndex = index;
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let product = products[index];

    document.getElementById('modifyProductName').value = product.name;
    document.getElementById('modifyProductBrand').value = product.brand;
    document.getElementById('modifyProductGender').value = product.gender;
    document.getElementById('modifyProductDescription').value = product.description;
    document.getElementById('modifyProductPrice').value = product.price;

    var modifyProductModal = new bootstrap.Modal(document.getElementById('modifyProductModal'));
    modifyProductModal.show();
}

function saveModifiedProduct() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products[currentProductIndex].name = document.getElementById('modifyProductName').value;
    products[currentProductIndex].brand = document.getElementById('modifyProductBrand').value;
    products[currentProductIndex].gender = document.getElementById('modifyProductGender').value;
    products[currentProductIndex].description = document.getElementById('modifyProductDescription').value;
    products[currentProductIndex].price = document.getElementById('modifyProductPrice').value;
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();

    var modifyProductModal = bootstrap.Modal.getInstance(document.getElementById('modifyProductModal'));
    modifyProductModal.hide();
}
const hamBurger = document.querySelector(".one");

hamBurger.addEventListener("click", function () {
document.querySelector("#sidebar").classList.remove("expand");
});
const hamBurge = document.getElementById("kk");

hamBurge.addEventListener("click", function () {
document.querySelector("#sidebar").classList.toggle("expand");
});
function logout() {
    var a = confirm("Do you want to logout?");
    if (a) {
        window.location.href = "index.html";
    } else {
        return false;
    }
  }