import { ui } from '../i18n';

// Tipado estricto para asegurar que solo usamos keys que existen en i18n
type TranslationKey = keyof typeof ui.es;

export interface Project {
  title: TranslationKey;
  description: TranslationKey;
  problem: TranslationKey;
  solution: TranslationKey;
  stack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
  };
  linkText: TranslationKey;
  linkUrl: string;
  demoText?: TranslationKey;
  demoUrl?: string;
  achievements: TranslationKey[];
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'proj.p1.title',
    description: 'proj.p1.desc',
    problem: 'proj.p1.problem',
    solution: 'proj.p1.solution',
    stack: {
      backend: ['NestJS', 'TypeScript', 'Node.js'],
      database: ['PostgreSQL', 'Redis'],
      tools: ['Docker', 'Swagger', 'Jest']
    },
    linkText: 'proj.link',
    linkUrl: 'https://github.com/LuisDiNicco',
    achievements: [
      'proj.p1.k1',
      'proj.p1.k2',
      'proj.p1.k3',
      'proj.p1.k4',
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'proj.p2.title',
    description: 'proj.p2.desc',
    problem: 'proj.p2.problem',
    solution: 'proj.p2.solution',
    stack: {
      frontend: ['React', 'Tailwind CSS'],
      backend: ['NestJS', 'TypeScript'],
      database: ['PostgreSQL', 'Prisma ORM'],
      tools: ['JWT', 'OAuth 2.0', 'Jest']
    },
    linkText: 'proj.link',
    linkUrl: 'https://github.com/LuisDiNicco/Mi-Carrerita',
    demoText: 'proj.demo',
    demoUrl: 'https://mi-carrerita.vercel.app/',
    achievements: [
      'proj.p2.k1',
      'proj.p2.k2',
      'proj.p2.k3',
      'proj.p2.k4',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'proj.p3.title',
    description: 'proj.p3.desc',
    problem: 'proj.p3.problem',
    solution: 'proj.p3.solution',
    stack: {
      frontend: ['HTML/CSS', 'Vanilla JS'],
      backend: ['Node.js', 'Express', 'Socket.io'],
      database: ['Redis'],
      tools: ['Nginx', 'Docker']
    },
    linkText: 'proj.link',
    linkUrl: 'https://github.com/LuisDiNicco',
    achievements: [
      'proj.p3.k1',
      'proj.p3.k2',
      'proj.p3.k3',
      'proj.p3.k4',
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'proj.p4.title',
    description: 'proj.p4.desc',
    problem: 'proj.p4.problem',
    solution: 'proj.p4.solution',
    stack: {
      backend: ['TypeScript', 'Node.js'],
      database: ['Redis'],
      tools: ['BullMQ', 'Docker', 'Prometheus']
    },
    linkText: 'proj.link',
    linkUrl: 'https://github.com/LuisDiNicco',
    achievements: [
      'proj.p4.k1',
      'proj.p4.k2',
      'proj.p4.k3',
      'proj.p4.k4',
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop'
  }
];