// ANIMATION IMAGE AVEC MASQUE
const hoverZone = document.getElementById('hover-zone');
const hoverImage = hoverZone.querySelector('.hover-image');

hoverZone.addEventListener('mousemove', (e) => {
    const rect = hoverZone.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hoverImage.style.clipPath = `circle(80px at ${x}px ${y}px)`;
});

hoverZone.addEventListener('mouseleave', () => {
    hoverImage.style.clipPath = 'circle(0% at 50% 50%)';
});

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

    const newSize = 200 + scrollPosition * 8; // plus on descend, plus l'image grandit

    const newTopPosition = 20 + scrollPosition * 0.01; // plus on descend, plus l'image descend

    const maxSize = 5000;
    const maxPosition = 120;
    console.log(newSize);
    if (newSize > maxSize) {
        image.style.width = `${maxSize}px`;
    } else {
        image.style.width = `${newSize}px`;
    }

    if (scrollPosition > 500) {
        if (newTopPosition > maxPosition) {
            image.style.top = `${maxPosition}%`;
        } else {
            image.style.top = `${newTopPosition}%`;
        }
    }

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
