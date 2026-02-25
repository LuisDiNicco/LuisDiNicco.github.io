import { ui } from '../i18n';

// Tipado estricto para asegurar que solo usamos keys que existen en i18n
type TranslationKey = keyof typeof ui.es;

export interface Project {
  title: TranslationKey;
  description: TranslationKey;
  tags: string[];
  linkText: TranslationKey;
  linkUrl: string;
  demoText?: TranslationKey;
  demoUrl?: string;
  achievements: TranslationKey[];
}

export const PROJECTS: Project[] = [
  {
    title: 'proj.p1.title',
    description: 'proj.p1.desc',
    tags: ['NestJS', 'PostgreSQL', 'Docker'],
    linkText: 'proj.link',
    linkUrl: 'https://github.com/LuisDiNicco',
    achievements: [
      'proj.p1.k1',
      'proj.p1.k2',
      'proj.p1.k3',
      'proj.p1.k4',
    ]
  },
  {
    title: 'proj.p2.title',
    description: 'proj.p2.desc',
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
    ]
  },
  {
    title: 'proj.p3.title',
    description: 'proj.p3.desc',
    tags: ['Node.js', 'Socket.io', 'Redis', 'Express'],
    linkText: 'proj.link',
    linkUrl: 'https://github.com/LuisDiNicco',
    achievements: [
      'proj.p3.k1',
      'proj.p3.k2',
      'proj.p3.k3',
      'proj.p3.k4',
    ]
  },
  {
    title: 'proj.p4.title',
    description: 'proj.p4.desc',
    tags: ['TypeScript', 'BullMQ', 'Redis', 'Docker'],
    linkText: 'proj.link',
    linkUrl: 'https://github.com/LuisDiNicco',
    achievements: [
      'proj.p4.k1',
      'proj.p4.k2',
      'proj.p4.k3',
      'proj.p4.k4',
    ]
  }
];