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
    'about.p1': "<span class='text-green-500 font-bold mr-2'>›</span> Soy estudiante avanzado de Ingeniería en Informática en la UNLaM. Mi formación me permite abordar el desarrollo no solo desde el código, sino con una visión integral orientada a resolver problemas reales.",
    'about.p2': "<span class='text-green-500 font-bold mr-2'>›</span> Me especializo en el desarrollo Backend, utilizando tecnologías como <span class='text-white font-bold'>NestJS</span> y <span class='text-white font-bold'>TypeScript</span>. Me enfoco en construir arquitecturas robustas, buscando siempre que el código sea eficiente, legible y fácil de mantener.",
    'about.p3': "<span class='text-green-500 font-bold mr-2'>›</span> Busco nuevos desafíos profesionales. Ofrezco compromiso, capacidad de análisis y una firme voluntad de aportar soluciones concretas a las necesidades del proyecto.",
    
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
    'hero.status.text': 'Open to new opportunities',
    'hero.stack.cmd': '$ current --stack',
    
    // About
    'about.title': '// 01. Profile',
    'about.cmd': 'cat about_me.txt',
    // En el objeto EN:
    'about.p1': "<span class='text-green-500 font-bold mr-2'>›</span> I am an advanced Computer Engineering student at UNLaM. My background allows me to approach development not just from code, but with a comprehensive vision focused on solving real-world problems.",
    'about.p2': "<span class='text-green-500 font-bold mr-2'>›</span> I specialize in Backend development, using technologies like <span class='text-white font-bold'>NestJS</span> and <span class='text-white font-bold'>TypeScript</span>. I focus on building robust architectures, always ensuring that code is efficient, readable, and maintainable.",
    'about.p3': "<span class='text-green-500 font-bold mr-2'>›</span> I am seeking new professional challenges. I offer commitment, analytical skills, and a strong determination to provide concrete solutions to project needs.",
    
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