document.addEventListener('DOMContentLoaded', () => {
    const productsList = document.getElementById('products-list');
    const deliveryDays = document.getElementById('delivery-days');
    const deliveryTime = document.getElementById('delivery-time');

    // Liste des produits
    const products = [
        { name: 'Baguette', price: 0.90 },
        { name: 'Croissant', price: 1.00 },
        { name: 'Pain au Chocolat', price: 1.50 },
        { name: 'Éclair au Chocolat', price: 2.50 },
        { name: 'Tarte aux Fraises', price: 3.00 },
        { name: 'Quiche Lorraine', price: 4.00 },
        { name: 'Pain de Campagne', price: 2.00 },
        { name: 'Brioche', price: 2.50 },
        { name: 'Macaron', price: 1.20 }
    ];

    // Génération des produits
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productName = document.createElement('span');
        productName.textContent = `${product.name} - ${product.price}€ `;

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = 0;
        quantityInput.value = 0;
        quantityInput.classList.add('quantity-input');

        productDiv.appendChild(productName);
        productDiv.appendChild(quantityInput);
        productsList.appendChild(productDiv);
    });

    // Génération des jours de livraison
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    days.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        dayDiv.classList.add('day');
        dayDiv.addEventListener('click', () => {
            toggleActive(dayDiv);
            updateTotalPrice();
        });
        deliveryDays.appendChild(dayDiv);
    });

    // Génération des moments de livraison
    const times = ['Matin', 'Après-midi'];
    times.forEach(time => {
        const timeDiv = document.createElement('div');
        timeDiv.textContent = time;
        timeDiv.classList.add('time-slot');
        timeDiv.addEventListener('click', () => {
            clearActive(deliveryTime);
            toggleActive(timeDiv);
        });
        deliveryTime.appendChild(timeDiv);
    });

    // Ajout d'écouteurs d'événement pour chaque champ de quantité
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', updateTotalPrice);
    });

    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
        let totalPrice = 0;
        let activeDays = document.querySelectorAll('.day.active').length;
        activeDays = activeDays === 0 ? 1 : activeDays; // Au moins un jour est compté

        document.querySelectorAll('.product').forEach(productDiv => {
            const price = parseFloat(productDiv.querySelector('span').textContent.split('-')[1].replace('€', ''));
            const quantity = parseInt(productDiv.querySelector('.quantity-input').value);
            totalPrice += price * quantity;
        });

        totalPrice *= activeDays; // Multiplier par le nombre de jours de livraison sélectionnés
        document.getElementById('price-total').textContent = totalPrice.toFixed(2);
    }

    // Fonctions pour gérer l'activation des jours et des moments de livraison
    function toggleActive(element) {
        element.classList.toggle('active');
    }

    function clearActive(parent) {
        parent.querySelectorAll('.active').forEach(activeElem => {
            activeElem.classList.remove('active');
        });
    }
});