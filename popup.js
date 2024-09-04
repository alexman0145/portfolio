// Fonction pour créer la fenêtre pop-up
function ouvrirPopup() {
    // Créez une nouvelle fenêtre pop-up avec les propriétés souhaitées
    var popupDiv = document.createElement('div');
    popupDiv.style.position = 'fixed';
    popupDiv.style.top = '0';
    popupDiv.style.left = '0';
    popupDiv.style.width = '100%';
    popupDiv.style.backgroundColor = 'rgba(255, 255, 255)';
    popupDiv.style.textAlign = 'center';
    popupDiv.style.zIndex = '9999';
    popupDiv.style.opacity = '0.75';

    // Contenu de la fenêtre pop-up
    var popupContent = "<p class='scrolling-text'>Pour la version en anglais du site</p>";

    // Ajoutez le contenu à la fenêtre pop-up
    popupDiv.innerHTML = popupContent;

    // Bouton de fermeture avec les classes W3.CSS

    var closeButton = document.createElement('button');
    closeButton.innerHTML = 'Fermer';
    closeButton.style.backgroundColor = 'red'; // Couleur de fond rouge
    closeButton.style.color = 'white'; // Couleur du texte blanc
    closeButton.style.padding = '5px 20px'; // Espacement intérieur du bouton
    closeButton.style.border = '2px solid green'; // Supprimer la bordure
    closeButton.style.borderRadius = '10px';
    closeButton.style.cursor = 'pointer';

    closeButton.onclick = function() {
        // Supprimez la div de la fenêtre pop-up lorsque le bouton est cliqué
        popupDiv.classList.add('fade-out');

        setTimeout(function() {
            document.body.removeChild(popupDiv);
        }, 3000);
    };

    // Ajoutez le bouton de fermeture à la div de la fenêtre pop-up
    popupDiv.appendChild(closeButton);

    // Deuxième bouton
    var linkButton = document.createElement('button');
    linkButton.innerHTML = 'Accèder à la page';
    // linkButton.style.fontFamily = 'Arial, sans-serif';
    linkButton.style.color = 'red';
    linkButton.style.padding = '5px 20px';
    linkButton.style.border = '2px solid green';
    linkButton.style.borderRadius = '10px';
    linkButton.style.cursor = 'pointer';

    linkButton.onclick = function() {
        window.location.href = 'english/index.html';
    };


    popupDiv.appendChild(linkButton);
    // Appelez la fonction pour ouvrir la fenêtre pop-up lors de l'ouverture de la page
    document.body.appendChild(popupDiv);
}

// Appelez la fonction pour ouvrir la fenêtre pop-up lors de l'ouverture de la page
window.onload = ouvrirPopup;
