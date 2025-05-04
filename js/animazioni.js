
// Inizializzazione di AOS.js con configurazione professionale

if (typeof AOS !== 'undefined') {
    AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-in-out',
        offset: 120,
        delay: 100,
        mirror: false,
        disable: function () {
            return window.innerWidth < 480;
        }
    });

    // Assegna automaticamente l'animazione "fade-up" a tutti gli elementi principali
    document.querySelectorAll('section, h1, h2, p').forEach(function(element) {
        element.setAttribute('data-aos', 'fade-up');
    });

} else {
    console.warn("AOS non è stato caricato correttamente. Controlla il link a CDN AOS nel tuo HTML.");
}
