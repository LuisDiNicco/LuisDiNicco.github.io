// src/data/skills.ts

export interface Skill {
  name: string;
  category: 'languages' | 'backend' | 'database' | 'devops' | 'tools';
  icon: string; // Referencia al ID del icono (ej: 'simple-icons:nestjs')
}

export const SKILLS: Skill[] = [
  // --- LENGUAJES ---
  { name: 'JavaScript', category: 'languages', icon: 'simple-icons:javascript' },
  { name: 'TypeScript', category: 'languages', icon: 'simple-icons:typescript' },
  { name: 'Python', category: 'languages', icon: 'simple-icons:python' },
  { name: 'Java', category: 'languages', icon: 'fa-brands:java' },
  { name: 'C++', category: 'languages', icon: 'simple-icons:cplusplus' },
  { name: 'C', category: 'languages', icon: 'simple-icons:c' },
  { name: 'HTML5', category: 'languages', icon: 'simple-icons:html5' },
  { name: 'CSS3', category: 'languages', icon: 'simple-icons:css3' },

  // --- BACKEND ---
  { name: 'NestJS', category: 'backend', icon: 'simple-icons:nestjs' },
  { name: 'Node.js', category: 'backend', icon: 'simple-icons:nodedotjs' },
  { name: 'MQTT', category: 'backend', icon: 'simple-icons:mqtt' },
  { name: 'Swagger', category: 'backend', icon: 'simple-icons:swagger' },
  { name: 'TypeORM', category: 'backend', icon: 'simple-icons:typeorm' },
  
  // --- DATABASE ---
  { name: 'SQL Server', category: 'database', icon: 'simple-icons:microsoftsqlserver' },
  { name: 'PostgreSQL', category: 'database', icon: 'simple-icons:postgresql' },
  { name: 'MariaDB', category: 'database', icon: 'simple-icons:mariadb' },
  { name: 'MongoDB', category: 'database', icon: 'simple-icons:mongodb' },
  { name: 'SQLite', category: 'database', icon: 'simple-icons:sqlite' },
  { name: 'Redis', category: 'database', icon: 'simple-icons:redis' },

  // --- DEVOPS / TOOLS ---
  { name: 'Git', category: 'tools', icon: 'simple-icons:git' },
  { name: 'Docker', category: 'tools', icon: 'simple-icons:docker' },
  { name: 'Apache Kafka', category: 'tools', icon: 'simple-icons:apachekafka' },
  { name: 'Bash', category: 'tools', icon: 'simple-icons:gnubash' },
  { name: 'PowerShell', category: 'tools', icon: 'simple-icons:powershell' },
  { name: 'Postman', category: 'tools', icon: 'simple-icons:postman' },
];

export const SKILL_CATEGORIES = [
  { id: 'all', labelKey: 'skills.filter.all', color: 'text-gray-400' },
  { id: 'languages', labelKey: 'skills.filter.langs', color: 'text-yellow-400' },
  { id: 'backend', labelKey: 'skills.filter.backend', color: 'text-blue-400' },
  { id: 'database', labelKey: 'skills.filter.db', color: 'text-green-400' },
  { id: 'tools', labelKey: 'skills.filter.tools', color: 'text-purple-400' },
] as const;