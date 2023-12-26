document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Votre logique pour ajouter le produit au panier
            alert('Produit ajouté au panier!');
        });
    });

    var checkoutButton = document.getElementById('checkout');
    if(checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            window.location.href = 'paiement.html'; // Assurez-vous que ce chemin est correct
        }) }
});

// Exemple de script pour animer le défilement vers une section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

let lastScrollValue = 0;
const nav = document.querySelector('nav');

document.addEventListener('scroll', () => {
    let top = document.documentElement.scrollTop;
    if (lastScrollValue < top) {
        nav.classList.add("hidden");
    } else {
        nav.classList.remove("hidden");
    }
    lastScrollValue = top;
});


// Ajoutez des gestionnaires d'événements aux boutons si nécessaire


