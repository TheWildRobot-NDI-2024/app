const items = document.querySelectorAll('.item');
const dropZones = document.querySelectorAll('.drop-zone');
const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');
const resultMessage = document.getElementById('resultMessage');

const leftColumn = document.getElementById('leftColumn');
const rightColumn = document.getElementById('rightColumn');

let draggedItem = null;
let selectedItem = null;

window.mobileCheck = function () {
    let check = false;
    (function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

if (!window.mobileCheck()) {
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
                const itemsInZone = Array.from(
                    zone.querySelectorAll('.item')
                ).map((item) => item.dataset.column);

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
} else {
    items.forEach((item) => {
        item.addEventListener('click', () => {
            if (selectedItem === item) {
                // Désélectionner l'élément si on clique à nouveau dessus
                selectedItem.classList.remove('bg-blue-300');
                selectedItem = null;
            } else {
                // Désélectionner l'élément précédemment sélectionné
                if (selectedItem) selectedItem.classList.remove('bg-blue-300');

                // Sélectionner un nouvel élément
                selectedItem = item;
                selectedItem.classList.add('bg-blue-300'); // Indique visuellement l'élément sélectionné
            }
        });
    });

    // Gérer le dépôt dans les zones
    dropZones.forEach((zone) => {
        zone.addEventListener('click', () => {
            if (selectedItem) {
                // Vérifie si la zone a déjà 3 éléments
                if (zone.children.length >= 3) {
                    alert('La boîte est déjà pleine !');
                    return;
                }

                // Vérifie si l'élément à ajouter est de la même colonne que l'élément déjà présent
                const itemsInZone = Array.from(
                    zone.querySelectorAll('.item')
                ).map((item) => item.dataset.column);

                if (itemsInZone.includes(selectedItem.dataset.column)) {
                    alert(
                        'Impossible de déposer un autre élément de la même colonne !'
                    );
                    return;
                }

                // Dépose l'élément dans la boîte
                zone.appendChild(selectedItem);
                selectedItem.classList.remove('bg-blue-300'); // Retire l'indicateur visuel
                selectedItem = null; // Réinitialise la sélection
            } else {
                alert('Veuillez sélectionner un élément à déposer.');
            }
        });
    });
}

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
        zone.innerHTML = `<p class="absolute mt-2 text-sm sm:text-md -z-[0]">${
            boxes[zone.id]
        }</p>`;
    });

    // Réinitialiser les colonnes
    leftColumn.innerHTML = `
        <div class="item bg-green-500 text-black text-center py-2 rounded-lg cursor-grab z-10 w-full"
                            data-column="left" draggable="true" data-id="cerveau">Cerveau</div>
                        <div class="item bg-green-500 text-black text-center py-2 rounded-lg cursor-grab z-10 w-full"
                            data-column="left" draggable="true" data-id="coeur">Coeur</div>
                        <div class="item bg-green-500 text-black text-center py-2 rounded-lg cursor-grab z-10 w-full"
                            data-column="left" draggable="true" data-id="poumons">Poumons</div>
                        <div class="item bg-green-500 text-black text-center py-2 rounded-lg cursor-grab z-10 w-full"
                            data-column="left" draggable="true" data-id="mains">Mains</div>
                        <div class="item bg-green-500 text-black text-center py-2 rounded-lg cursor-grab z-10 w-full"
                            data-column="left" draggable="true" data-id="pieds">Pieds</div>
    `;
    rightColumn.innerHTML = `
        <div class="item bg-green-500 text-black text-center py-2 rounded-lg cursor-grab z-10 w-full"
                            data-column="right" draggable="true" data-id="necessite">Nécessité de chaque membre/espèce
                            pour la survie</div>
                        <div class="item bg-green-500 text-black text-center py-2 rounded-lg cursor-grab z-10 w-full"
                            data-column="right" draggable="true" data-id="critique">Critique aux changements de rythme
                        </div>
                        <div class="item bg-green-500 text-black text-center py-2 rounded-lg cursor-grab z-10 w-full"
                            data-column="right" draggable="true" data-id="systeme">Système respiratoire</div>
                        <div class="item bg-green-500 text-black text-center py-2 rounded-lg cursor-grab z-10 w-full"
                            data-column="right" draggable="true" data-id="ondes">Sensible aux ondes</div>
                        <div class="item bg-green-500 text-black text-center py-2 rounded-lg cursor-grab z-10 w-full"
                            data-column="right" draggable="true" data-id="temp">Sensible aux changements de température
                        </div>
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
        zone.classList.add('border-dashed', 'border-2', 'border-gray-300');
    });
});
