// src/i18n/index.ts

export const LANGUAGES = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    // Nav
    'nav.home': '~/',
    'nav.about': './sobre-mi',
    'nav.skills': './conocimientos', // <--- NUEVO
    'nav.projects': './proyectos',
    'nav.contact': './contacto',
    
    // Hero
    'hero.cmd': '$ whoami',
    'hero.role': 'Desarrollador Backend & Futuro Ingeniero en Informática',
    'hero.skills': '$ skills --list',
    'hero.status.cmd': '$ systemctl status', // <--- NUEVO
    'hero.status.text': 'Disponible para nuevas oportunidades', // <--- NUEVO
    'hero.stack.cmd': '$ current --stack', // <--- NUEVO
    
    // About
    'about.title': '// 01. Perfil',
    'about.cmd': 'cat sobre_mi.txt',
    'about.p1': "<span class='text-green-500 font-bold mr-2'>›</span> Soy desarrollador Backend y estudiante avanzado de Ingeniería Informática. No solo escribo código; diseño arquitecturas escalables y eficientes.",
    'about.p2': "<span class='text-green-500 font-bold mr-2'>›</span> Mi enfoque está en construir sistemas robustos utilizando <span class='text-white font-bold'>NestJS</span> y <span class='text-white font-bold'>TypeScript</span>. Me obsesiona la limpieza del código (Clean Architecture), la optimización de bases de datos y la automatización de procesos.",
    'about.p3': "<span class='text-green-500 font-bold mr-2'>›</span> Actualmente busco desafíos donde pueda aplicar lógica de ingeniería para resolver problemas de negocio reales.",
    
    // Skills
    'skills.title': 'Conocimientos Técnicos',
    'skills.filter.all': 'ls -a',
    'skills.filter.langs': 'grep "lenguajes"',
    'skills.filter.backend': 'grep "backend"',
    'skills.filter.db': 'grep "bases de datos"',
    'skills.filter.tools': 'grep "herramientas"',
    
    // Projects General
    'proj.title': 'Arquitectura & Proyectos',
    'proj.link': 'Ver Código',
    'proj.keys': 'Logros Clave',

    // Proyecto 1
    'proj.p1.title': 'Microservicios E-Commerce API',
    'proj.p1.desc': 'Arquitectura de backend escalable diseñada para manejar alto tráfico. Implementación de patrones de diseño y clean architecture.',
    'proj.p1.k1': 'API RESTful con NestJS y TypeScript.',
    'proj.p1.k2': 'Autenticación segura (JWT & OAuth2).',
    'proj.p1.k3': 'Documentación con Swagger/OpenAPI.',
    'proj.p1.k4': 'Coverage de tests > 80%.',

    // Proyecto 2
    'proj.p2.title': 'Sistema Real-Time & WebSockets',
    'proj.p2.desc': 'Sistema de gestión de recursos con actualizaciones en tiempo real para múltiples clientes conectados simultáneamente.',
    'proj.p2.k1': 'Implementación de WebSockets (Socket.io).',
    'proj.p2.k2': 'Manejo de concurrencia y eventos.',
    'proj.p2.k3': 'Integración con Redis para caché.',
    'proj.p2.k4': 'Despliegue automatizado en nube.',

    // Contact
    'contact.cmd': '$ contact --info',
    'contact.title': 'Conectemos',
    'contact.desc': '¿Tenés un proyecto interesante? Hablemos.',
    'contact.loc': 'Buenos Aires, Argentina',
    'contact.email': '$ contact --email',
    'contact.cv': '$ cat cv.pdf',
    'contact.social': '$ ls ./redes',
    
    // Form
    'form.cmd': '$ send-message',
    'form.name': '$ nombre:',
    'form.email': '$ email:',
    'form.message': '$ mensaje:',
    'form.btn': 'EnviarMensaje()'
  },
  en: {
    // Nav
    'nav.home': '~/',
    'nav.about': './about',
    'nav.skills': './skills', // <--- NUEVO
    'nav.projects': './projects',
    'nav.contact': './contact',
    
    // Hero
    'hero.cmd': '$ whoami',
    'hero.role': 'Backend Developer & Future Computer Engineer',
    'hero.skills': '$ skills --list',
    'hero.status.cmd': '$ systemctl status',
    'hero.status.text': 'Online & Open to new opportunities',
    'hero.stack.cmd': '$ current --stack',
    
    // About
    'about.title': '// 01. Profile',
    'about.cmd': 'cat about_me.txt',
    'about.p1': "<span class='text-green-500 font-bold mr-2'>›</span> I am a Backend Developer and advanced Computer Engineering student. I don't just write code; I design scalable and efficient architectures.",
    'about.p2': "<span class='text-green-500 font-bold mr-2'>›</span> My focus is on building robust systems using <span class='text-white font-bold'>NestJS</span> and <span class='text-white font-bold'>TypeScript</span>. I am obsessed with Clean Architecture, database optimization, and process automation.",
    'about.p3': "<span class='text-green-500 font-bold mr-2'>›</span> Currently seeking challenges where I can apply engineering logic to solve real business problems.",
    
    // Skills
    'skills.title': 'Technical Knowledge',
    'skills.filter.all': 'ls -a',
    'skills.filter.langs': 'grep "languages"',
    'skills.filter.backend': 'grep "backend"',
    'skills.filter.db': 'grep "databases"',
    'skills.filter.tools': 'grep "tools"',
    // Projects General
    'proj.title': 'Architecture & Projects',
    'proj.link': 'View Code',
    'proj.keys': 'Key Achievements',

    // Project 1
    'proj.p1.title': 'E-Commerce Microservices API',
    'proj.p1.desc': 'Scalable backend architecture designed to handle high traffic. Implementation of design patterns and clean architecture.',
    'proj.p1.k1': 'RESTful API with NestJS and TypeScript.',
    'proj.p1.k2': 'Secure Authentication (JWT & OAuth2).',
    'proj.p1.k3': 'Documentation with Swagger/OpenAPI.',
    'proj.p1.k4': 'Test Coverage > 80%.',

    // Project 2
    'proj.p2.title': 'Real-Time System & WebSockets',
    'proj.p2.desc': 'Resource management system with real-time updates for multiple simultaneously connected clients.',
    'proj.p2.k1': 'WebSockets implementation (Socket.io).',
    'proj.p2.k2': 'Concurrency and event handling.',
    'proj.p2.k3': 'Redis integration for caching.',
    'proj.p2.k4': 'Automated cloud deployment.',

    // Contact
    'contact.cmd': '$ contact --info',
    'contact.title': 'Let\'s Connect',
    'contact.desc': 'Do you have an interesting project? Let\'s talk.',
    'contact.loc': 'Buenos Aires, Argentina',
    'contact.email': '$ contact --email',
    'contact.cv': '$ cat resume.pdf',
    'contact.social': '$ ls ./social-links',
    
    // Form
    'form.cmd': '$ send-message',
    'form.name': '$ name:',
    'form.email': '$ email:',
    'form.message': '$ message:',
    'form.btn': 'SendMessage()'
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}