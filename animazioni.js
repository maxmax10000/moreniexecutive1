
// Inizializzazione di AOS.js con configurazione professionale

// Controllo che AOS sia caricato prima di inizializzare
if (typeof AOS !== 'undefined') {
    AOS.init({
        // Anima una sola volta quando l'elemento entra in vista
        once: true,
        // Durata standard delle animazioni (in millisecondi)
        duration: 800,
        // Tipo di easing per transizioni fluide
        easing: 'ease-in-out',
        // Offset in pixel prima che l'elemento venga animato
        offset: 120,
        // Delay minimo per creare movimento naturale
        delay: 100,
        // Non ripete l'animazione se si torna indietro scrollando
        mirror: false,
        // Disabilita AOS su dispositivi piccoli per performance
        disable: function () {
            return window.innerWidth < 480;
        }
    });
} else {
    console.warn("AOS non è stato caricato correttamente. Controlla il link a CDN AOS nel tuo HTML.");
}
