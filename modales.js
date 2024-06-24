        // je récupre les éléments suivants via des sélecteur css: la modale (dialogue), le bouton qui suit juste la modale et le boutons de fermeture et je stcocke dans  des constantes
        const dialog = document.querySelector("dialog");
        const showButton = document.querySelector("dialog + button");
        const closeButton = document.querySelector("dialog button");

        // j'ajoute un écouteur d'évenement au clic qui appelera la méthode show modal sur dialogue
        showButton.addEventListener("click", () => {
            dialog.showModal();
        });

        // même pricincipe mais pour fermer la modalde
        closeButton.addEventListener("click", () => {
            dialog.close();
        });

        dialog.addEventListener('click', function (event) {
            var rect = dialog.getBoundingClientRect();
            var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
                && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                dialog.close();
            }
        });

const DialogWidht=dialog.getAttribute("data-widht");
dialog.style.width=DialogWidht;