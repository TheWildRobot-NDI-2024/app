const items = document.querySelectorAll('.item');
const dropZones = document.querySelectorAll('.drop-zone');
const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');
const resultMessage = document.getElementById('resultMessage');

const leftColumn = document.getElementById('leftColumn');
const rightColumn = document.getElementById('rightColumn');

let draggedItem = null;

// Activer le drag pour chaque élément
items.forEach((item) => {
    item.addEventListener('dragstart', () => {
        draggedItem = item;
    });

    item.addEventListener('dragend', () => {
        draggedItem = null;
    });
});

// Gérer les zones de drop
dropZones.forEach((zone) => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault(); // Permet le drop
        zone.classList.add('bg-green-100');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('bg-green-100');
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('bg-green-100');
        if (draggedItem) {
            // Vérifie si la zone a déjà 2 éléments
            if (zone.children.length >= 3) {
                console.log('La boîte est déjà pleine !');
                alert('La boîte est déjà pleine !');
                return; // Ne pas permettre de déposer plus d'éléments
            }

            // Vérifie si l'élément à ajouter est de la même colonne que l'élément déjà présent
            const itemsInZone = Array.from(zone.querySelectorAll('.item')).map(
                (item) => item.dataset.column
            );

            if (itemsInZone.includes(draggedItem.dataset.column)) {
                console.log(
                    'Impossible de déposer un autre élément de la même colonne !'
                );
                alert(
                    'Impossible de déposer un autre élément de la même colonne !'
                );
                return; // Ne pas permettre de déposer un élément de la même colonne
            }

            zone.appendChild(draggedItem); // Ajouter l'élément dans la boîte
        }
    });
});

// Logique de validation
submitButton.addEventListener('click', () => {
    // Liste des paires correctes
    const correctPairs = {
        box1: ['cerveau', 'ondes'],
        box2: ['coeur', 'critique'],
        box3: ['poumons', 'systeme'],
        box4: ['mains', 'temp'],
        box5: ['pieds', 'necessite']
    };

    let isCorrect = true;

    dropZones.forEach((zone) => {
        const itemsInZone = Array.from(zone.querySelectorAll('.item')).map(
            (item) => item.dataset.id
        );
        const expectedItems = correctPairs[zone.id] || [];

        if (itemsInZone.sort().toString() !== expectedItems.sort().toString()) {
            isCorrect = false;
        }
    });

    // Afficher le résultat
    resultMessage.classList.remove('hidden');
    if (isCorrect) {
        resultMessage.textContent =
            'Bravo ! Toutes les paires sont correctes 🎉';
        resultMessage.classList.remove('text-red-500');
        resultMessage.classList.add('text-green-500');
    } else {
        resultMessage.textContent = 'Dommage, il y a des erreurs 😢';
        resultMessage.classList.remove('text-green-500');
        resultMessage.classList.add('text-red-500');

        // Afficher les erreurs
        dropZones.forEach((zone) => {
            const itemsInZone = Array.from(zone.querySelectorAll('.item')).map(
                (item) => item.dataset.id
            );
            const expectedItems = correctPairs[zone.id] || [];

            if (
                itemsInZone.sort().toString() !==
                expectedItems.sort().toString()
            ) {
                zone.classList.add('border-2', 'border-red-500');
            }
        });
    }
});

const boxes = {
    box1: 'Biodiversité marine',
    box2: 'Courants marins',
    box3: 'Plancton',
    box4: 'Coraux',
    box5: 'Ecosystème marin'
};

resetButton.addEventListener('click', () => {
    // Réinitialiser les boîtes
    dropZones.forEach((zone) => {
        zone.innerHTML = `<p class="absolute mt-2 -z-[0]">${
            boxes[zone.id]
        }</p>`;
    });

    // Réinitialiser les colonnes
    leftColumn.innerHTML = `
        <div class="item bg-green-500 text-white text-center py-4 rounded-lg cursor-grab z-10" draggable="true" data-id="cerveau" data-column="left">Cerveau</div>
        <div class="item bg-green-500 text-white text-center py-4 rounded-lg cursor-grab z-10" draggable="true" data-id="coeur" data-column="left">Coeur</div>
        <div class="item bg-green-500 text-white text-center py-4 rounded-lg cursor-grab z-10" draggable="true" data-id="poumons" data-column="left">Poumons</div>
        <div class="item bg-green-500 text-white text-center py-4 rounded-lg cursor-grab z-10" draggable="true" data-id="mains" data-column="left">Mains</div>
        <div class="item bg-green-500 text-white text-center py-4 rounded-lg cursor-grab z-10" draggable="true" data-id="pieds" data-column="left">Pieds</div>
    `;
    rightColumn.innerHTML = `
        <div class="item bg-green-500 text-white text-center py-4 rounded-lg cursor-grab z-10" draggable="true" data-id="necessite" data-column="right">Nécessité de chaque membre/espèce pour la survie</div>
        <div class="item bg-green-500 text-white text-center py-4 rounded-lg cursor-grab z-10" draggable="true" data-id="critique" data-column="right">Critique aux changements de rythme</div>
        <div class="item bg-green-500 text-white text-center py-4 rounded-lg cursor-grab z-10" draggable="true" data-id="systeme" data-column="right">Système respiratoire</div>
        <div class="item bg-green-500 text-white text-center py-4 rounded-lg cursor-grab z-10" draggable="true" data-id="ondes" data-column="right">Sensible aux ondes</div>
        <div class="item bg-green-500 text-white text-center py-4 rounded-lg cursor-grab z-10" draggable="true" data-id="temp" data-column="right">Sensible aux changements de température</div>
    `;

    // Réactiver le drag & drop
    const resetItems = document.querySelectorAll('.item');
    resetItems.forEach((item) => {
        item.addEventListener('dragstart', () => {
            draggedItem = item;
        });

        item.addEventListener('dragend', () => {
            draggedItem = null;
        });
    });

    // Cacher le message de validation
    resultMessage.classList.add('hidden');

    // Réinitialiser les erreurs
    dropZones.forEach((zone) => {
        zone.classList.remove('border-2', 'border-red-500');
    });
});
