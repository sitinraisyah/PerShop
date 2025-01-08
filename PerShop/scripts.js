document.addEventListener('DOMContentLoaded', () => {
    console.log('PerShop Page Loaded Successfully!');
});

document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', event => {
                event.preventDefault();
                alert('Item added to cart!');
                window.location.href = 'cart.html';
            });
        });
document.getElementById('search-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const products = document.querySelectorAll('.product');

        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });