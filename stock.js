document.querySelectorAll('.btn-preparer').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const quantite = input.value;
        if (quantite && !isNaN(quantite) && quantite > 0) {
            // Logique pour envoyer la demande de préparation à la cuisine
            alert('Demande de préparation pour ' + quantite + ' envoyée à la cuisine.');
        } else {
            alert('Veuillez entrer une quantité valide.');
        }
    });
});
function ajouterAuStock(article) {
    const inputId = 'input-' + article;
    const quantiteId = 'quantite-' + article;
    const quantiteInput = document.getElementById(inputId);
    const quantiteSpan = document.getElementById(quantiteId);

    const quantiteAjoutee = parseInt(quantiteInput.value);
    if (quantiteAjoutee > 0) {
        const quantiteActuelle = parseInt(quantiteSpan.textContent);
        quantiteSpan.textContent = quantiteActuelle + quantiteAjoutee;
        quantiteInput.value = ''; // Réinitialiser le champ de saisie
    } else {
        alert('Veuillez entrer une quantité valide.');
    }
}
function ajouterAuStock(article) {
    const inputId = 'input-' + article;
    const quantiteId = 'quantite-' + article;
    const quantiteInput = document.getElementById(inputId);
    const quantiteSpan = document.getElementById(quantiteId);

    const quantiteAjoutee = parseInt(quantiteInput.value);
    if (quantiteAjoutee > 0) {
        const quantiteActuelle = parseInt(quantiteSpan.textContent);
        quantiteSpan.textContent = quantiteActuelle + quantiteAjoutee;
        quantiteInput.value = ''; // Réinitialiser le champ de saisie
    } else {
        alert('Veuillez entrer une quantité valide.');
    }
}

