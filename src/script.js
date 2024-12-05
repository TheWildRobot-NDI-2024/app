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

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; // position de défilement verticale

    const newSize = 200 + scrollPosition * 0.2; // plus on descend, plus l'image grandit

    const newTopPosition = 50 + scrollPosition * 0.05; // plus on descend, plus l'image descend

    image.style.width = `${newSize}px`;
    image.style.top = `${newTopPosition}%`;
    console.log(scrollPosition);

    // ANIMATION TEXTE APPARITION SCROLL
    if (scrollPosition > 850) {
        gsap.to(text, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    } else {
        gsap.to(text, { opacity: 0, y: 30, duration: 1, ease: 'power3.in' });
    }
});
