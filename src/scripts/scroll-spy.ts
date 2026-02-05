// src/scripts/scroll-spy.ts

export function initScrollSpy() {
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Quitamos la clase activa de todos
        navLinks.forEach((link) => {
          link.classList.remove('nav-active');
          link.classList.add('text-gray-400');
        });

        // Buscamos el link correspondiente (usando el href="#id")
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (activeLink) {
          activeLink.classList.add('nav-active');
          activeLink.classList.remove('text-gray-400');
        }
      }
    });
  }, {
    root: null,
    rootMargin: '-20% 0px -70% 0px', // Mismo margen que tenías antes
    threshold: 0
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
}