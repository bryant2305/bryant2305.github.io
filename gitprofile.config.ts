const CONFIG = {
  github: {
    username: 'bryant2305',
    sortBy: 'updated',
    limit: 8,
    exclude: {
      forks: true,
      projects: ['bryant2305.github.io', 'bryant2305'],
    },
  },
  social: {
    linkedin: 'www.linkedin.com/in/bryant-perez-garcia-6b5913252',
    website: 'https://bryant2305.github.io',
    email: 'bryantperezgarcia005@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  skills: [
    'PHP', 'Laravel', 'JavaScript', 'Node.js', 'Nest.js', 'Serverless', 'MicroServices',
    'Caching', 'Redis', 'MySQL', 'SQL', 'MongoDB', 'Git', 'Docker', 'PHPUnit', 'AWS',
  ],
  experiences: [
    {
      company: 'OGTIC',
      position: 'Back-end Developer Intern',
      from: 'April 2023',
      to: 'Jun 2023',
      companyLink: 'https://ogtic.gob.do/',
    },
    {
      company: 'OGTIC',
      position: 'Back-end Developer',
      from: 'Jun 2023',
      to: 'Present',
      companyLink: 'https://ogtic.gob.do/',
    },
  ],
  certifications: [
    {
      name: 'Sample Certification',
      body: 'Description of certification',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description: 'Brief description of the publication.',
    },
  ],
  blog: {
    source: 'dev',
    username: 'arifszn',
    limit: 2,
  },
  googleAnalytics: { id: '' },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk',
      'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe',
      'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter',
      'dim', 'nord', 'sunset', 'procyon',
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
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
