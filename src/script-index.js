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
let ticking = false;
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; // position de défilement verticale

    // ANIMATION TEXTE APPARITION SCROLL

    // Effet de transparence avec un léger mouvement vers le haut
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const animateText = (element, start, end) => {
                if (scrollPosition > start && scrollPosition < end) {
                    gsap.to(element, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out'
                    });
                } else {
                    gsap.to(element, {
                        opacity: 0,
                        y: 100,
                        duration: 0.3,
                        ease: 'power3.in'
                    });
                }
            };
            console.log(scrollPosition);
            // Appliquer les animations sur chaque texte
            animateText(textCerveau, 840, 1100);
            animateText(textCoeur, 1900, 2300);
            animateText(textPoumons, 2900, 3300);
            animateText(textMains, 3900, 4300);
            animateText(textPieds, 5000, 90000);

            ticking = false;
        });
        ticking = true;
    }
});
