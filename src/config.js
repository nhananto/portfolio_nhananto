module.exports = {
  siteTitle: 'Nazmul Hossain Ananto',
  siteDescription:
    'Nazmul Hossain Ananto is an incoming Software Developer, based in Bangladesh, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Nazmul Hossain Ananto, Nazmul, Hossain, Ananto, nhananto, software engineer, web developer, javascript, dhaka, bangladesh, amdocs, bit',
  siteUrl: 'https://nhananto.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Nazmul Hossain Ananto',
  location: 'Dhaka, Bangladesh',
  email: 'nhanantoo@gmail.com',
  github: 'https://github.com/nhananto',
  twitterHandle: '@AnantoNazmul',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nhananto',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nazmul-hossain-ananto-220619159/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/nhananto',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_a_n_t_s__h_e_r_e_/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AnantoNazmul',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
