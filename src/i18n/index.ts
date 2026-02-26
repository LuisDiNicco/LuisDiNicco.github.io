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
    'nav.experience': './experiencia',
    'nav.skills': './conocimientos',
    'nav.projects': './proyectos',
    'nav.contact': './contacto',
    
    // Hero
    'hero.cmd': '$ whoami',
    'hero.role': 'Desarrollador Backend & Estudiante de Ingeniería en Informática',
    'hero.skills': '$ skills --list',
    'hero.status.cmd': '$ systemctl status', // <--- NUEVO
    'hero.status.text': 'Disponible para nuevas oportunidades', // <--- NUEVO
    'hero.stack.cmd': '$ current --stack', // <--- NUEVO
    
    // About
    'about.title': '// 01. Perfil',
    'about.cmd': 'cat sobre_mi.txt',
    'about.p1': "<span class='text-green-500 font-bold mr-2'>›</span> Soy estudiante de Ingeniería en Informática en la UNLaM. Mi formación me permite abordar el desarrollo no solo desde el código, sino con una visión integral orientada a resolver problemas reales.",
    'about.p2': "<span class='text-green-500 font-bold mr-2'>›</span> Me especializo en el desarrollo Backend, utilizando tecnologías como <span class='text-white font-bold'>NestJS</span> y <span class='text-white font-bold'>TypeScript</span>. Me enfoco en construir arquitecturas robustas, buscando siempre que el código sea eficiente, legible y fácil de mantener.",
    'about.p3': "<span class='text-green-500 font-bold mr-2'>›</span> Busco nuevos desafíos profesionales. Ofrezco compromiso, capacidad de análisis y una firme voluntad de aportar soluciones concretas a las necesidades del proyecto.",
    
    // Experience
    'exp.title': 'Experiencia Laboral',
    'exp.cmd': '$ history | grep "work"',
    'exp.job1.title': 'Backend Developer',
    'exp.job1.company': 'Procontacto',
    'exp.job1.date': 'Septiembre 2025 - Presente',
    'exp.job1.desc': 'Desarrollo y mantenimiento de servicios backend, optimización de consultas a bases de datos y creación de APIs RESTful para integraciones con sistemas de terceros.',
    
    // Skills
    'skills.title': 'Conocimientos Técnicos',
    'skills.filter.all': 'ls -a',
    'skills.filter.langs': 'grep "lenguajes"',
    'skills.filter.backend': 'grep "backend"',
    'skills.filter.db': 'grep "bases de datos"',
    'skills.filter.tools': 'grep "herramientas"',
    'skills.filter.soft': 'grep "blandas"',
    'skills.filter.spoken': 'grep "idiomas"',
    
    // Projects General
    'proj.title': 'Arquitectura & Proyectos',
    'proj.link': 'Ver Código',
    'proj.demo': 'Ver Demo',
    'proj.keys': 'Logros Clave',

    // Proyecto 1
    'proj.p1.title': 'Microservicios E-Commerce API',
    'proj.p1.desc': 'Arquitectura de backend escalable diseñada para manejar alto tráfico. Implementación de patrones de diseño y clean architecture.',
    'proj.p1.k1': 'API RESTful con NestJS y TypeScript.',
    'proj.p1.k2': 'Autenticación segura (JWT & OAuth2).',
    'proj.p1.k3': 'Documentación con Swagger/OpenAPI.',
    'proj.p1.k4': 'Coverage de tests > 80%.',

    // Proyecto 2
    'proj.p2.title': 'Mi Carrerita: Suite de Gestión y Analítica Universitaria',
    'proj.p2.desc': 'Ecosistema integral que automatiza el seguimiento académico, combinando análisis de historial, proyección de graduación y planificación inteligente.',
    'proj.p2.k1': 'Grafo interactivo de correlatividades.',
    'proj.p2.k2': 'Dashboard analítico de rendimiento.',
    'proj.p2.k3': 'Generador de horarios sin solapamientos.',
    'proj.p2.k4': 'Arquitectura escalable y coverage > 80%.',

    // Proyecto 3
    'proj.p3.title': 'Real-Time Chat Server',
    'proj.p3.desc': 'Servidor de mensajería en tiempo real con soporte para salas, mensajes privados y notificaciones push.',
    'proj.p3.k1': 'Implementación de WebSockets con Socket.io.',
    'proj.p3.k2': 'Gestión de estado distribuido con Redis.',
    'proj.p3.k3': 'Autenticación de conexiones en tiempo real.',
    'proj.p3.k4': 'Arquitectura orientada a eventos.',

    // Proyecto 4
    'proj.p4.title': 'Task Queue Processing System',
    'proj.p4.desc': 'Sistema distribuido para el procesamiento asíncrono de tareas pesadas, como envío de emails masivos y generación de reportes.',
    'proj.p4.k1': 'Integración con RabbitMQ / BullMQ.',
    'proj.p4.k2': 'Manejo de reintentos y dead-letter queues.',
    'proj.p4.k3': 'Monitoreo de workers en tiempo real.',
    'proj.p4.k4': 'Escalado horizontal de consumidores.',

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
    'form.btn': 'EnviarMensaje()',
    'form.sending': 'Enviando mensaje...',
    'form.success': '> Mensaje enviado correctamente! En breve responderé tu mensaje.',
    'form.err_security': '⚠️ Error de seguridad: Caracteres no permitidos.',
    'form.err_email': '⚠️ Por favor ingresa un email válido.',
    'form.err_connection': '> Error: El servidor rechazó la conexión.',
    'form.err_critical': '> Error crítico: No se pudo conectar con el servidor.'
  },
  en: {
    // Nav
    'nav.home': '~/',
    'nav.about': './about',
    'nav.experience': './experience',
    'nav.skills': './skills',
    'nav.projects': './projects',
    'nav.contact': './contact',
    
    // Hero
    'hero.cmd': '$ whoami',
    'hero.role': 'Backend Developer & Computer Engineering Student',
    'hero.skills': '$ skills --list',
    'hero.status.cmd': '$ systemctl status',
    'hero.status.text': 'Open to new opportunities',
    'hero.stack.cmd': '$ current --stack',
    
    // About
    'about.title': '// 01. Profile',
    'about.cmd': 'cat about_me.txt',
    // En el objeto EN:
    'about.p1': "<span class='text-green-500 font-bold mr-2'>›</span> I am a Computer Engineering student at UNLaM. My background allows me to approach development not just from code, but with a comprehensive vision focused on solving real-world problems.",
    'about.p2': "<span class='text-green-500 font-bold mr-2'>›</span> I specialize in Backend development, using technologies like <span class='text-white font-bold'>NestJS</span> and <span class='text-white font-bold'>TypeScript</span>. I focus on building robust architectures, always ensuring that code is efficient, readable, and maintainable.",
    'about.p3': "<span class='text-green-500 font-bold mr-2'>›</span> I am seeking new professional challenges. I offer commitment, analytical skills, and a strong determination to provide concrete solutions to project needs.",
    
    // Experience
    'exp.title': 'Work Experience',
    'exp.cmd': '$ history | grep "work"',
    'exp.job1.title': 'Backend Developer',
    'exp.job1.company': 'Procontacto',
    'exp.job1.date': 'September 2025 - Present',
    'exp.job1.desc': 'Development and maintenance of backend services, database query optimization, and creation of RESTful APIs for third-party integrations.',

    // Skills
    'skills.title': 'Technical Knowledge',
    'skills.filter.all': 'ls -a',
    'skills.filter.langs': 'grep "languages"',
    'skills.filter.backend': 'grep "backend"',
    'skills.filter.db': 'grep "databases"',
    'skills.filter.tools': 'grep "tools"',
    'skills.filter.soft': 'grep "soft_skills"',
    'skills.filter.spoken': 'grep "languages_spoken"',
    // Projects General
    'proj.title': 'Architecture & Projects',
    'proj.link': 'View Code',
    'proj.demo': 'View Demo',
    'proj.keys': 'Key Achievements',

    // Project 1
    'proj.p1.title': 'E-Commerce Microservices API',
    'proj.p1.desc': 'Scalable backend architecture designed to handle high traffic. Implementation of design patterns and clean architecture.',
    'proj.p1.k1': 'RESTful API with NestJS and TypeScript.',
    'proj.p1.k2': 'Secure Authentication (JWT & OAuth2).',
    'proj.p1.k3': 'Documentation with Swagger/OpenAPI.',
    'proj.p1.k4': 'Test Coverage > 80%.',

    // Project 2
    'proj.p2.title': 'Mi Carrerita: University Management & Analytics Suite',
    'proj.p2.desc': 'Comprehensive ecosystem that automates academic tracking, combining history analysis, graduation projection, and intelligent scheduling.',
    'proj.p2.k1': 'Interactive graph of course prerequisites.',
    'proj.p2.k2': 'Analytical performance dashboard.',
    'proj.p2.k3': 'Conflict-free schedule generator.',
    'proj.p2.k4': 'Scalable architecture and coverage > 80%.',

    // Project 3
    'proj.p3.title': 'Real-Time Chat Server',
    'proj.p3.desc': 'Real-time messaging server with support for rooms, private messages, and push notifications.',
    'proj.p3.k1': 'WebSockets implementation with Socket.io.',
    'proj.p3.k2': 'Distributed state management with Redis.',
    'proj.p3.k3': 'Real-time connection authentication.',
    'proj.p3.k4': 'Event-driven architecture.',

    // Project 4
    'proj.p4.title': 'Task Queue Processing System',
    'proj.p4.desc': 'Distributed system for asynchronous processing of heavy tasks, such as mass email sending and report generation.',
    'proj.p4.k1': 'Integration with RabbitMQ / BullMQ.',
    'proj.p4.k2': 'Retry handling and dead-letter queues.',
    'proj.p4.k3': 'Real-time worker monitoring.',
    'proj.p4.k4': 'Horizontal scaling of consumers.',

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
    'form.btn': 'SendMessage()',
    'form.sending': 'Sending message...',
    'form.success': '> Message sent successfully! Thanks for reaching out.',
    'form.err_security': '⚠️ Security error: Forbidden characters.',
    'form.err_email': '⚠️ Please enter a valid email.',
    'form.err_connection': '> Error: Server rejected the connection.',
    'form.err_critical': '> Critical error: Could not connect to server.'
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}