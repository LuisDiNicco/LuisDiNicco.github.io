/**
 * LANGUAGE MODULE
 * Manejo de traducciones (Español / Inglés).
 * Persistencia en localStorage.
 */

const LANG_CONFIG = {
    DEFAULT: 'es',
    STORAGE_KEY: 'portfolio_lang',
    // Clases para el botón activo/inactivo
    ACTIVE_CLASS: ['text-green-400', 'font-bold', 'border-b', 'border-green-500'],
    INACTIVE_CLASS: ['text-gray-600', 'hover:text-gray-400']
};

const TRANSLATIONS = {
    es: {
        "nav.home": "~/",
        "nav.about": "./sobre-mi",
        "nav.projects": "./proyectos",
        "nav.contact": "./contacto",
        
        "hero.cmd": "$ whoami",
        "hero.role": "Desarrollador Backend & Futuro Ingeniero Informático",
        "hero.skills": "$ skills --list",
        
        "about.title": "// 01. Perfil",
        "about.cmd": "cat sobre_mi.txt",
        "about.p1": "<span class='text-green-500 font-bold mr-2'>></span> Soy desarrollador Backend y estudiante avanzado de Ingeniería Informática. No solo escribo código; diseño arquitecturas escalables y eficientes.",
        "about.p2": "<span class='text-green-500 font-bold mr-2'>></span> Mi enfoque está en construir sistemas robustos utilizando <span class='text-white font-bold'>NestJS</span> y <span class='text-white font-bold'>TypeScript</span>. Me obsesiona la limpieza del código (Clean Architecture), la optimización de bases de datos y la automatización de procesos (CI/CD).",
        "about.p3": "<span class='text-green-500 font-bold mr-2'>></span> Actualmente busco desafíos donde pueda aplicar lógica de ingeniería para resolver problemas de negocio reales.",
        
        "proj.title": "Arquitectura de Sistemas & Proyectos",
        "proj.p1.title": "Microservicios E-Commerce API",
        "proj.p1.desc": "Arquitectura de backend escalable diseñada para manejar alto tráfico. Implementación de patrones de diseño y clean architecture.",
        "proj.keys": "Logros Clave",
        "proj.p1.k1": "API RESTful con NestJS y TypeScript.",
        "proj.p1.k2": "Autenticación segura (JWT & OAuth2).",
        "proj.p1.k3": "Documentación con Swagger/OpenAPI.",
        "proj.p1.k4": "Coverage de tests > 80%.",
        "proj.link": "Ver Código",

        "proj.p2.title": "Sistema Real-Time & WebSockets",
        "proj.p2.desc": "Sistema de gestión de recursos con actualizaciones en tiempo real para múltiples clientes conectados simultáneamente.",
        "proj.p2.k1": "Implementación de WebSockets (Socket.io).",
        "proj.p2.k2": "Manejo de concurrencia y eventos.",
        "proj.p2.k3": "Integración con Redis para caché.",
        "proj.p2.k4": "Despliegue automatizado en nube.",

        "contact.cmd": "$ contact --info",
        "contact.title": "Conectemos",
        "contact.desc": "¿Tenés un proyecto interesante? Hablemos.",
        "contact.loc.cmd": "$ location --current",
        "contact.loc": "Buenos Aires, Argentina",
        "contact.email.cmd": "$ contact --email",
        "contact.cv.cmd": "$ cat cv.pdf",
        "contact.cv": "Descargar CV",
        "contact.social": "$ ls ./redes",
        
        "form.cmd": "$ send-message",
        "form.name": "$ nombre:",
        "form.message": "$ mensaje:",
        "form.btn": "EnviarMensaje()"
    },
    en: {
        "nav.home": "~/",
        "nav.about": "./about",
        "nav.projects": "./projects",
        "nav.contact": "./contact",
        
        "hero.cmd": "$ whoami",
        "hero.role": "Backend Developer & Future Computer Engineer",
        "hero.skills": "$ skills --list",
        
        "about.title": "// 01. Profile",
        "about.cmd": "cat about_me.txt",
        "about.p1": "<span class='text-green-500 font-bold mr-2'>></span> I am a Backend Developer and advanced Computer Engineering student. I don't just write code; I design scalable and efficient architectures.",
        "about.p2": "<span class='text-green-500 font-bold mr-2'>></span> My focus is on building robust systems using <span class='text-white font-bold'>NestJS</span> and <span class='text-white font-bold'>TypeScript</span>. I am obsessed with Clean Architecture, database optimization, and process automation (CI/CD).",
        "about.p3": "<span class='text-green-500 font-bold mr-2'>></span> Currently seeking challenges where I can apply engineering logic to solve real business problems.",
        
        "proj.title": "System Architecture & Projects",
        "proj.p1.title": "E-Commerce Microservices API",
        "proj.p1.desc": "Scalable backend architecture designed to handle high traffic. Implementation of design patterns and clean architecture.",
        "proj.keys": "Key Achievements",
        "proj.p1.k1": "RESTful API with NestJS and TypeScript.",
        "proj.p1.k2": "Secure Authentication (JWT & OAuth2).",
        "proj.p1.k3": "Documentation with Swagger/OpenAPI.",
        "proj.p1.k4": "Test Coverage > 80%.",
        "proj.link": "View Code",

        "proj.p2.title": "Real-Time System & WebSockets",
        "proj.p2.desc": "Resource management system with real-time updates for multiple simultaneously connected clients.",
        "proj.p2.k1": "WebSockets implementation (Socket.io).",
        "proj.p2.k2": "Concurrency and event handling.",
        "proj.p2.k3": "Redis integration for caching.",
        "proj.p2.k4": "Automated cloud deployment.",

        "contact.cmd": "$ contact --info",
        "contact.title": "Let's Connect",
        "contact.desc": "Do you have an interesting project? Let's talk.",
        "contact.loc.cmd": "$ location --current",
        "contact.loc": "Buenos Aires, Argentina",
        "contact.email.cmd": "$ contact --email",
        "contact.cv.cmd": "$ cat resume.pdf",
        "contact.cv": "Download CV",
        "contact.social": "$ ls ./social-links",
        
        "form.cmd": "$ send-message",
        "form.name": "$ name:",
        "form.message": "$ message:",
        "form.btn": "SendMessage()"
    }
};

function setLanguage(lang) {
    // 1. Guardar preferencia
    localStorage.setItem(LANG_CONFIG.STORAGE_KEY, lang);

    // 2. Actualizar textos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang][key]) {
            // Usamos innerHTML para permitir negritas y colores dentro del texto
            el.innerHTML = TRANSLATIONS[lang][key];
        }
    });

    // 3. Actualizar estado visual de los botones
    updateButtons(lang);

    // 4. Caso especial: Actualizar el typewriter (si existe)
    // Esto fuerza a que si recargan la animación, use el nuevo idioma
    if (typeof TYPING_CONFIG !== 'undefined') {
        const typeText = document.getElementById('typewriter-text');
        if(typeText && !typeText.textContent.includes(TRANSLATIONS[lang]["about.cmd"])) {
             // Si el texto estático es diferente, lo actualizamos directo
             typeText.textContent = TRANSLATIONS[lang]["about.cmd"];
        }
    }
}

function updateButtons(currentLang) {
    const btnEs = document.getElementById('lang-es');
    const btnEn = document.getElementById('lang-en');

    if (!btnEs || !btnEn) return;

    // Resetear clases
    btnEs.className = 'cursor-pointer transition-all duration-300 px-2';
    btnEn.className = 'cursor-pointer transition-all duration-300 px-2';

    if (currentLang === 'es') {
        btnEs.classList.add(...LANG_CONFIG.ACTIVE_CLASS);
        btnEn.classList.add(...LANG_CONFIG.INACTIVE_CLASS);
    } else {
        btnEn.classList.add(...LANG_CONFIG.ACTIVE_CLASS);
        btnEs.classList.add(...LANG_CONFIG.INACTIVE_CLASS);
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('lang-es');
    const btnEn = document.getElementById('lang-en');

    // Cargar idioma guardado o default
    const savedLang = localStorage.getItem(LANG_CONFIG.STORAGE_KEY) || LANG_CONFIG.DEFAULT;
    setLanguage(savedLang);

    // Event Listeners
    if(btnEs) btnEs.addEventListener('click', () => setLanguage('es'));
    if(btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
});