/**
 * NAVIGATION MODULE
 * Maneja el ScrollSpy (detectar sección activa) y smooth scroll.
 */

const NAV_CONFIG = Object.freeze({
    SELECTORS: {
        LINKS: '.nav-link',
        SECTIONS: 'header, section' // Elementos a rastrear
    },
    CLASSES: {
        ACTIVE: 'nav-active',
        INACTIVE: 'text-gray-400'
    },
    // Configuración del Observer
    OPTIONS: {
        root: null, // viewport
        rootMargin: '-20% 0px -70% 0px', // Activa cuando la sección está en el medio-arriba de la pantalla
        threshold: 0
    }
});

function setupNavigation() {
    const links = document.querySelectorAll(NAV_CONFIG.SELECTORS.LINKS);
    const sections = document.querySelectorAll(NAV_CONFIG.SELECTORS.SECTIONS);

    // 1. INTERSECTION OBSERVER (ScrollSpy)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Removemos clase activa de todos
                links.forEach(link => {
                    link.classList.remove(NAV_CONFIG.CLASSES.ACTIVE);
                    link.classList.add(NAV_CONFIG.CLASSES.INACTIVE);
                });

                // Buscamos el link correspondiente a esta sección
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                
                if (activeLink) {
                    activeLink.classList.add(NAV_CONFIG.CLASSES.ACTIVE);
                    activeLink.classList.remove(NAV_CONFIG.CLASSES.INACTIVE);
                }
            }
        });
    }, NAV_CONFIG.OPTIONS);

    sections.forEach(section => {
        if(section.id) observer.observe(section);
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', setupNavigation);