document.addEventListener('DOMContentLoaded', function() {
    const itemsList = document.getElementById('items-list');
    const totalAmount = document.getElementById('total-amount');
    let total = 0;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(product => {
        const item = document.createElement('div');
        item.className = 'order-item';
        item.textContent = `${product.name} - ${product.price} €`;
        itemsList.appendChild(item);
        total += product.price;
    });

    totalAmount.textContent = `${total.toFixed(2)} €`;

    document.getElementById('guest-checkout').addEventListener('click', function() {
        window.location.href = 'guest-checkout.html'; // Mettez l'URL de votre page de paiement en tant qu'invité
    });

    document.getElementById('login-checkout').addEventListener('click', function() {
        window.location.href = 'login.html'; // Mettez l'URL de votre page de connexion
    });
});
