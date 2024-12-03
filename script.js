//Début du scritp pour la partie "trait"

    document.addEventListener("DOMContentLoaded", function() {
        var points = document.querySelectorAll(".point");
        var textParts = document.querySelectorAll(".textePoint .text-part");
        var traitActive = document.querySelector(".trait-active");

        var currentPage = document.body.getAttribute('data-page'); // Récupère l'étape actuelle depuis l'attribut data-page

        if (currentPage === '1') {
            // Étape 1 : changer la couleur des points 1 et 2, et du trait entre eux
            points[0].classList.add("active");
            points[1].classList.add("active");
            textParts[0].classList.add("active");
            textParts[1].classList.add("active");
            traitActive.style.width = "32%";
            traitActive.style.left = "0%";
        } else if (currentPage === '2') {
            // Étape 2 : changer la couleur des points 2 et 3, et du trait entre eux
            points[1].classList.add("active");
            points[2].classList.add("active");
            textParts[1].classList.add("active");
            textParts[2].classList.add("active");
            traitActive.style.width = "31%";
            traitActive.style.left = "32%";
        } else if (currentPage === '3') {
            points[2].classList.add("active");
            points[3].classList.add("active");
            textParts[2].classList.add("active");
            textParts[3].classList.add("active");
            traitActive.style.width = "31%";
            traitActive.style.left = "32%";
        }
        // Ajoutez des conditions supplémentaires pour d'autres étapes si nécessaire
    });

//Fin du scritp pour la partie "trait"

//Début du script pour la "page_choixFormule", Zone de bloc cliquable pour connaître le nombre de repas

    document.addEventListener("DOMContentLoaded", function() {
        const repasElements = document.querySelectorAll('.nombreRepas');

        repasElements.forEach(element => {
            element.addEventListener('click', function() {
                // Enlever la classe active de tous les éléments
                repasElements.forEach(el => el.classList.remove('active'));

                // Ajouter la classe active à l'élément cliqué
                this.classList.add('active');
            });
        });
    });

//Fin du script pour la "page_choixFormule", Zone de bloc cliquable pour connaître le nombre de repas

//Début du script pour la "page_choix_Produit", Zone des aliments qu'on souhaite choisir en particulier
    
    // Exécuter le script une fois que le DOM est complètement chargé
    document.addEventListener('DOMContentLoaded', (event) => {
        // Sélectionner tous les éléments div à l'intérieur de .imageAliment
        const alimentDivs = document.querySelectorAll('.imageAliment div');

        // Ajouter un écouteur d'événements pour chaque div
        alimentDivs.forEach(div => {
            div.addEventListener('click', () => {
                // Basculer la classe 'selected' sur le div cliqué
                div.classList.toggle('selected');
            });
        });
    });

//Fin du script pour la "page_choix_Produit", Zone des aliments qu'on souhaite choisir en particulier

//Début du script pour la "page_choixProduit", Zone pour choisir la quantité des plats qu'on souhaite 
    
    document.addEventListener('DOMContentLoaded', () => {
        // Récupérer le nombre maximal de plats choisi
        const maxPlats = localStorage.getItem('maxPlats') || 0;

        // Mettre à jour le compteur affiché initialement
        const compteurAffichage = document.querySelector('.ZoneNombrePlat span');
        compteurAffichage.textContent = `0 / ${maxPlats}`;

        // Gérer l'augmentation et la diminution du nombre de plats
        document.querySelectorAll('.selectionPlats').forEach(selection => {
            const plusButton = selection.querySelector('.basBlocPlat img[alt="augmenter"]');
            const minusButton = selection.querySelector('.basBlocPlat img[alt="diminuer"]');
            const compteur = selection.querySelector('.rond strong');

            plusButton.addEventListener('click', () => {
                let currentValue = parseInt(compteur.textContent);
                let totalSelected = getTotalSelectedPlats();

                if (totalSelected < maxPlats) {
                    currentValue++;
                    compteur.textContent = currentValue;
                    updateCompteurAffichage();
                } else {
                    showError('Oups vous avez atteint le nombre maximal de plats sélectionnés.');
                }
            });

            minusButton.addEventListener('click', () => {
                let currentValue = parseInt(compteur.textContent);

                if (currentValue > 0) {
                    currentValue--;
                    compteur.textContent = currentValue;
                    updateCompteurAffichage();
                }
            });
        });

        function getTotalSelectedPlats() {
            let total = 0;
            document.querySelectorAll('.selectionPlats .rond strong').forEach(compteur => {
                total += parseInt(compteur.textContent);
            });
            return total;
        }

        function updateCompteurAffichage() {
            let totalSelected = getTotalSelectedPlats();
            compteurAffichage.textContent = `${totalSelected} / ${maxPlats}`;
        }

        function showError(message) {
            const overlay = document.getElementById('errorOverlay');
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.textContent = message;
            overlay.style.display = 'flex';
        
            // Fermer le message d'erreur après 3 secondes
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 3000);
        }
        
        // Code existant pour gérer les choix des formules et plats
        
    });

    
