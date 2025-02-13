const config = {
  github: {
    username: 'bryant2305', // Tu nombre de usuario de GitHub
    sortBy: 'updated', // Ordenar por actualización más reciente
    limit: 8, // Número de proyectos a mostrar
    exclude: {
      forks: true, // Excluir forks
      projects: [], // Lista de proyectos a excluir
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://bryant2305.github.io/', 
    phone: '',
    email: 'bryant2305@gmail.com',
  },
  resume: {
    fileUrl: '', // URL de tu currículum si lo tienes
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'NestJS',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Empresa X',
      position: 'Backend Developer',
      from: '2022',
      to: 'Actual',
      companyLink: '',
    },
  ],
  certifications: [],
  externalProjects: [],
  blog: {},
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  seo: {
    title: 'Bryant - Portfolio',
    description: 'Portafolio de Bryant mostrando habilidades y proyectos.',
    imageURL: 'https://bryant2305.github.io/assets/preview.png',
  },
  themeConfig: {
    defaultTheme: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    hideAvatarRing: false,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
