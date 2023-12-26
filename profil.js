// Sélectionnez l'élément input de type "file"
const inputPhoto = document.getElementById('photo-profil');

// Sélectionnez l'élément img de la photo de profil
const profileImage = document.getElementById('profile-image');

// Écoutez les changements dans l'input de la photo de profil
inputPhoto.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        profileImage.style.display = 'block'; // Affiche l'image
        profileImage.src = URL.createObjectURL(file);
    } else {
        profileImage.style.display = 'none'; // Masque l'image si aucun fichier n'est sélectionné
    }
});
