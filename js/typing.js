/**
 * TYPEWRITER MODULE
 * Efecto de escritura para la sección About Me.
 * Se activa ÚNICAMENTE cuando el usuario hace scroll hasta la sección.
 */

const TYPING_CONFIG = Object.freeze({
    TEXT: "cat about_me.txt",
    SPEED_MS: 75,           // Velocidad de escritura
    INITIAL_DELAY_MS: 300,  // Pequeña pausa después de que aparece en pantalla
    SELECTORS: {
        SECTION: 'about-me',      // La sección que vigilamos
        TEXT: 'typewriter-text',
        CURSOR: 'cursor',
        CONTENT: 'about-content'
    }
});

function typeWriterEffect() {
    const textElement = document.getElementById(TYPING_CONFIG.SELECTORS.TEXT);
    const cursorElement = document.getElementById(TYPING_CONFIG.SELECTORS.CURSOR);
    const contentElement = document.getElementById(TYPING_CONFIG.SELECTORS.CONTENT);
    
    // Validamos que existan los elementos
    if (!textElement || !contentElement) return;

    // Limpiamos por si acaso
    textElement.textContent = "";

    let charIndex = 0;
    
    // Iniciamos la escritura
    const typeInterval = setInterval(() => {
        if (charIndex < TYPING_CONFIG.TEXT.length) {
            textElement.textContent += TYPING_CONFIG.TEXT.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typeInterval);
            finishAnimation(contentElement, cursorElement);
        }
    }, TYPING_CONFIG.SPEED_MS);
}

function finishAnimation(contentElement, cursorElement) {
    // Mostramos el contenido
    contentElement.classList.remove('opacity-0');
    
    // Ocultamos el cursor al finalizar
    if (cursorElement) {
        cursorElement.style.display = 'none';
    }
}

function setupObserver() {
    const section = document.getElementById(TYPING_CONFIG.SELECTORS.SECTION);
    
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si la sección es visible...
            if (entry.isIntersecting) {
                // 1. Esperamos el delay inicial
                setTimeout(typeWriterEffect, TYPING_CONFIG.INITIAL_DELAY_MS);
                
                // 2. IMPORTANTE: Dejamos de observar para que no se repita
                // cada vez que subes y bajas. Solo ocurre una vez.
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // Se activa cuando el 30% de la sección es visible
    });

    observer.observe(section);
}

// Iniciamos el vigilante cuando carga el sitio
document.addEventListener('DOMContentLoaded', setupObserver);