const config = {
  github: {
    username: 'bryant2305', // Tu nombre de usuario de GitHub
    sortBy: 'stars', // Ordenar por actualización más reciente
    limit: 6, // Número de proyectos a mostrar
    exclude: {
      forks: true, // Excluir forks
      projects: ['bryant2305.github.io' , 'bryant2305'], // Lista de proyectos a excluir
    },
  },
  social: {
    linkedin: 'www.linkedin.com/in/bryant-perez-garcia-6b5913252',
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
    phone: '+18294322305',
    email: 'bryantperezgarcia005@gmail.com',
  },
  resume: {
    fileUrl: '', // URL de tu currículum si lo tienes
  },
  skills: [
    'TypeScript',
    'Node.js',
    'NestJS',
    'PHP',
    'Laravel',
    '.NET',
    'MicroServices',
    'Serverless',
    'gRPC',
    'Redis',
    'Caching',
    'Mysql',
    'SQL',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Git',
  ],
  experiences: [
    {
      company: 'Oficina Gubernamental de la Tecnologia de la informacion y comunicacion (OGTIC)',
      position: 'Backend Developer Intern',
      from: 'April 2023',
      to: 'Jun 2023',
      companyLink: 'https://ogtic.gob.do',
    },
     {
      company: 'Oficina Gubernamental de la Tecnologia de la informacion y comunicacion (OGTIC)',
      position: 'Backend Developer',
      from: 'Jun 2023',
      to: 'Present',
      companyLink: 'https://ogtic.gob.do',
    },
  ],
  certifications: [
     {
      name: 'AWS Knowledge: Cloud Essentials',
      body: 'AMAZON WEB SERVICES',
      year: '2024',
      link: 'https://www.credly.com/badges/946b3d5f-5fa6-4dd5-a159-b872db9c63bc/linked_in_profile', // Agrega el enlace a la certificación si lo tienes en línea.
    },
    {
      name: 'AWS Knowledge: Serverless',
      body: 'AMAZON WEB SERVICES',
      year: '2025',
      link: 'https://www.credly.com/badges/bf6c973b-6837-47e9-b280-a8283557b003', // Agrega el enlace a la certificación si lo tienes en línea.
    },
    {
      name: 'Deploying Serverless Applications',
      body: 'AMAZON WEB SERVICES',
      year: '2025',
      link: '', // Agrega el enlace a la certificación si lo tienes en línea.
    },
    {
      name: 'AWS Lambda Certification',
      body: 'AMAZON WEB SERVICES',
      year: '2025',
      link: '', // Agrega el enlace a la certificación si lo tienes en línea.
    },
    
  ],
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
