// src/data/skills.ts

export interface Skill {
  name: string;
  category: 'languages' | 'backend' | 'database' | 'devops' | 'tools';
  icon: string; // Referencia al ID del icono (ej: 'simple-icons:nestjs')
  url?: string; // URL a la página de la tecnología o Wikipedia
  level: 'Básico' | 'Intermedio' | 'Avanzado';
}

export const SKILLS: Skill[] = [
  // --- LENGUAJES ---
  { name: 'JavaScript', category: 'languages', icon: 'simple-icons:javascript', url: 'https://es.wikipedia.org/wiki/JavaScript', level: 'Intermedio' },
  { name: 'TypeScript', category: 'languages', icon: 'simple-icons:typescript', url: 'https://www.typescriptlang.org/', level: 'Intermedio' },
  { name: 'Python', category: 'languages', icon: 'simple-icons:python', url: 'https://es.wikipedia.org/wiki/Python', level: 'Básico' },
  { name: 'Java', category: 'languages', icon: 'fa-brands:java', url: 'https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)', level: 'Intermedio' },
  { name: 'C++', category: 'languages', icon: 'simple-icons:cplusplus', url: 'https://es.wikipedia.org/wiki/C%2B%2B', level: 'Básico' },
  { name: 'C', category: 'languages', icon: 'simple-icons:c', url: 'https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)', level: 'Intermedio' },
  { name: 'HTML5', category: 'languages', icon: 'simple-icons:html5', url: 'https://es.wikipedia.org/wiki/HTML5', level: 'Básico' },
  { name: 'CSS3', category: 'languages', icon: 'simple-icons:css3', url: 'https://es.wikipedia.org/wiki/CSS', level: 'Básico' },

  // --- BACKEND ---
  { name: 'NestJS', category: 'backend', icon: 'simple-icons:nestjs', url: 'https://nestjs.com/', level: 'Intermedio' },
  { name: 'Node.js', category: 'backend', icon: 'simple-icons:nodedotjs', url: 'https://nodejs.org/', level: 'Intermedio' },
  { name: 'MQTT', category: 'backend', icon: 'simple-icons:mqtt', url: 'https://mqtt.org/', level: 'Básico' },
  { name: 'Swagger', category: 'backend', icon: 'simple-icons:swagger', url: 'https://swagger.io/', level: 'Intermedio' },
  { name: 'TypeORM', category: 'backend', icon: 'simple-icons:typeorm', url: 'https://typeorm.io/', level: 'Intermedio' },
  
  // --- DATABASE ---
  { name: 'SQL Server', category: 'database', icon: 'simple-icons:microsoftsqlserver', url: 'https://es.wikipedia.org/wiki/SQL_Server', level: 'Avanzado' },
  { name: 'PostgreSQL', category: 'database', icon: 'simple-icons:postgresql', url: 'https://www.postgresql.org/', level: 'Intermedio' },
  { name: 'MariaDB', category: 'database', icon: 'simple-icons:mariadb', url: 'https://mariadb.org/', level: 'Intermedio' },
  { name: 'MongoDB', category: 'database', icon: 'simple-icons:mongodb', url: 'https://www.mongodb.com/', level: 'Intermedio' },
  { name: 'SQLite', category: 'database', icon: 'simple-icons:sqlite', url: 'https://www.sqlite.org/', level: 'Intermedio' },
  { name: 'Redis', category: 'database', icon: 'simple-icons:redis', url: 'https://redis.io/', level: 'Básico' },

  // --- DEVOPS / TOOLS ---
  { name: 'Git', category: 'tools', icon: 'simple-icons:git', url: 'https://git-scm.com/', level: 'Intermedio' },
  { name: 'Docker', category: 'tools', icon: 'simple-icons:docker', url: 'https://www.docker.com/', level: 'Básico' },
  { name: 'Apache Kafka', category: 'tools', icon: 'simple-icons:apachekafka', url: 'https://kafka.apache.org/', level: 'Básico' },
  { name: 'Bash', category: 'tools', icon: 'simple-icons:gnubash', url: 'https://www.gnu.org/software/bash/', level: 'Básico' },
  { name: 'PowerShell', category: 'tools', icon: 'simple-icons:powershell', url: 'https://learn.microsoft.com/es-es/powershell/', level: 'Básico' },
  { name: 'Postman', category: 'tools', icon: 'simple-icons:postman', url: 'https://www.postman.com/', level: 'Intermedio' },
];

export const SKILL_CATEGORIES = [
  { id: 'all', labelKey: 'skills.filter.all', color: 'text-gray-400' },
  { id: 'languages', labelKey: 'skills.filter.langs', color: 'text-yellow-400' },
  { id: 'backend', labelKey: 'skills.filter.backend', color: 'text-blue-400' },
  { id: 'database', labelKey: 'skills.filter.db', color: 'text-green-400' },
  { id: 'tools', labelKey: 'skills.filter.tools', color: 'text-purple-400' },
] as const;