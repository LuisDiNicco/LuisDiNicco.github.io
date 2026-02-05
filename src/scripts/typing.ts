// src/scripts/typing.ts

export function initTypewriter() {
  const section = document.getElementById('about-me');
  const textElement = document.getElementById('typewriter-text');
  const cursorElement = document.getElementById('cursor');
  const contentElement = document.getElementById('about-content');

  // Si no encuentra los elementos, no hace nada (seguridad)
  if (!section || !textElement || !cursorElement || !contentElement) return;

  const TEXT = "cat about_me.txt";
  const SPEED_MS = 75;
  const INITIAL_DELAY_MS = 300;

  function typeWriterEffect() {
    if(!textElement || !contentElement) return;
    
    textElement.textContent = "";
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < TEXT.length) {
        textElement.textContent += TEXT.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        finishAnimation();
      }
    }, SPEED_MS);
  }

  function finishAnimation() {
    if(!contentElement || !cursorElement) return;
    
    // Mostramos el contenido con fade-in
    contentElement.classList.remove('opacity-0');
    
    // Ocultamos el cursor al finalizar
    cursorElement.style.display = 'none';
  }

  // Observer para disparar solo cuando se ve la sección
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(typeWriterEffect, INITIAL_DELAY_MS);
        observer.unobserve(entry.target); // Solo una vez
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
}