// ANIMATION IMAGE AVEC MASQUE
const hoverZones = document.querySelectorAll('.hover-zone');

hoverZones.forEach((hoverZone, index) => {
    const hoverImage = hoverZone.querySelector('.hover-image');
    console.log(hoverImage);
    hoverZone.addEventListener('mousemove', (e) => {
        const rect = hoverZone.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        hoverImage.style.clipPath = `circle(150px at ${x}px ${y}px)`;
    });

    hoverZone.addEventListener('mouseleave', () => {
        hoverImage.style.clipPath = 'circle(0% at 50% 50%)';
    });
});

// hoverZone.addEventListener('mousemove', (e) => {
//     const rect = hoverZone.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     hoverImage.style.clipPath = `circle(80px at ${x}px ${y}px)`;
// });

// hoverZone.addEventListener('mouseleave', () => {
//     hoverImage.style.clipPath = 'circle(0% at 50% 50%)';
// });

// ANIMATION AGRANDISSEMENT IMAGE
const image = document.getElementById('scrollImage');
const text = document.getElementById('scrollText');

const textCerveau = document.getElementById('textCerveau');
const textCoeur = document.getElementById('textCoeur');
const textPoumons = document.getElementById('textPoumons');
const textMains = document.getElementById('textMains');
const textPieds = document.getElementById('textPieds');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; // position de défilement verticale

    // ANIMATION TEXTE APPARITION SCROLL

    // Effet de transparence avec un léger mouvement vers le haut
    const animateText = (element, start, end) => {
        if (scrollPosition > start && scrollPosition < end) {
            gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 0.2,
                ease: 'power3.out'
            });
        } else {
            gsap.to(element, {
                opacity: 0,
                y: 20,
                duration: 0.2,
                ease: 'power3.in'
            });
        }
    };

    // Appliquer les animations sur chaque texte
    animateText(textCerveau, 0, 500);
    animateText(textCoeur, 350, 850);
    animateText(textPoumons, 550, 950);
    animateText(textMains, 700, 1250);
    animateText(textPieds, 900, 1400);
});
