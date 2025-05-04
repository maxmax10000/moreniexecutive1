
// Inizializzazione di AOS.js con configurazione avanzata

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

    // Assegna automaticamente l'animazione "fade-up" a TUTTI i contenitori principali
    document.querySelectorAll('section, h1, h2, p, div, article, header, main, aside, footer, li').forEach(function(element) {
        if (!element.hasAttribute('data-aos')) {
            element.setAttribute('data-aos', 'fade-up');
        }
    });

} else {
    console.warn("AOS non è stato caricato correttamente. Controlla il link a CDN AOS nel tuo HTML.");
}
