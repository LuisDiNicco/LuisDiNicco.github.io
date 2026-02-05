import { ui } from '../i18n';

// Tipado estricto para asegurar que solo usamos keys que existen en i18n
type TranslationKey = keyof typeof ui.es;

export interface Project {
  title: TranslationKey;
  description: TranslationKey;
  tags: string[];
  linkText: TranslationKey;
  linkUrl: string;
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
    tags: ['Node.js', 'Redis', 'Socket.io'],
    linkText: 'proj.link',
    linkUrl: 'https://github.com/LuisDiNicco',
    achievements: [
      'proj.p2.k1',
      'proj.p2.k2',
      'proj.p2.k3',
      'proj.p2.k4',
    ]
  }
];