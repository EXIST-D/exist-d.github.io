import siteData from './content/site/settings.json';

export const siteConfig = {
  site: siteData.site,
  name: siteData.name,
  handle: siteData.handle,
  avatar: siteData.avatar,
  role: siteData.role,
  headline: siteData.headline,
  title: siteData.title,
  description: siteData.description,
  intro: siteData.intro,
  email: siteData.email,
  github: siteData.github,
  xiaohongshu: siteData.xiaohongshu,
  bilibili: siteData.bilibili,
  resumeUrl: siteData.resumeUrl,
  location: siteData.location,
  availability: siteData.availability,
};

export const navLinks = [
  { href: '/', label: '首页', icon: 'home' },
  { href: '/projects', label: '项目', icon: 'flask' },
  { href: '/notes', label: '文章', icon: 'pen' },
  { href: '/topics', label: '专题', icon: 'hash' },
  { href: '/about', label: '关于', icon: 'user' },
];

export const techHighlights = siteData.techHighlights;
export const principles = siteData.principles;
export const skillGroups = siteData.skillGroups;
export const education = siteData.education;
export const contactLinks = siteData.contactLinks;

export const projectCategories = [
  { id: 'agent', label: 'Agent 与 RAG' },
  { id: 'skills', label: 'Agent Skills' },
  { id: 'data', label: '数据采集' },
  { id: 'tools', label: '桌面工具' },
  { id: 'game', label: '网页游戏' },
] as const;

/** Short monogram used on project covers that have no screenshot. */
export const projectSymbols: Record<string, string> = {
  pixelcampus: '像',
  weijin: '未',
  'interview-bank': 'IB',
  gleaner: '穗',
  medstatforge: 'M',
  'medical-analysis-orchestrator': 'Rx',
  'spss-academic-workflow': 'S',
  floatnote: '笺',
};

export function categoryLabel(id: string) {
  return projectCategories.find((item) => item.id === id)?.label ?? '项目';
}
