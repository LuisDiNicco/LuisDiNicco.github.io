import { ui } from '../i18n';

// Tipado estricto para asegurar que solo usamos keys que existen en i18n
type TranslationKey = keyof typeof ui.es;

export interface Project {
  title: TranslationKey;
  description: TranslationKey;
  problem: TranslationKey;
  solution: TranslationKey;
  tags: string[];
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
    tags: ['NestJS', 'PostgreSQL', 'Docker'],
    linkText: 'proj.link',
    linkUrl: 'https://github.com/LuisDiNicco',
    achievements: [
      'proj.p1.k1',
      'proj.p1.k2',
      'proj.p1.k3',
      'proj.p1.k4',
    ],
    image: 'https://placehold.co/600x400/111/22c55e?text=E-Commerce+API'
  },
  {
    title: 'proj.p2.title',
    description: 'proj.p2.desc',
    problem: 'proj.p2.problem',
    solution: 'proj.p2.solution',
    tags: ['NestJS', 'React', 'Prisma', 'JWT & OAuth 2.0', 'Jest'],
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
    image: 'https://placehold.co/600x400/111/22c55e?text=Mi+Carrerita'
  },
  {
    title: 'proj.p3.title',
    description: 'proj.p3.desc',
    problem: 'proj.p3.problem',
    solution: 'proj.p3.solution',
    tags: ['Node.js', 'Socket.io', 'Redis', 'Express'],
    linkText: 'proj.link',
    linkUrl: 'https://github.com/LuisDiNicco',
    achievements: [
      'proj.p3.k1',
      'proj.p3.k2',
      'proj.p3.k3',
      'proj.p3.k4',
    ],
    image: 'https://placehold.co/600x400/111/22c55e?text=Real-Time+Chat'
  },
  {
    title: 'proj.p4.title',
    description: 'proj.p4.desc',
    problem: 'proj.p4.problem',
    solution: 'proj.p4.solution',
    tags: ['TypeScript', 'BullMQ', 'Redis', 'Docker'],
    linkText: 'proj.link',
    linkUrl: 'https://github.com/LuisDiNicco',
    achievements: [
      'proj.p4.k1',
      'proj.p4.k2',
      'proj.p4.k3',
      'proj.p4.k4',
    ],
    image: 'https://placehold.co/600x400/111/22c55e?text=Task+Queue'
  }
];