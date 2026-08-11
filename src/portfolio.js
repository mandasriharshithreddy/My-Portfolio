const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/mandasriharshithreddy',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name:'M.Sriharshith Reddy',
  role:'Full Stack Developer',
  //picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'Hi! I am Manda Sriharshith Reddy, a passionate Computer Science student with a strong interest in Full Stack Development, Artificial Intelligence, and building modern web applications. I enjoy solving real-world problems and continuously learning emerging technologies to create innovative and impactful solutions.',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/manda-sriharshith-reddy/',
    github: 'https://github.com/mandasriharshithreddy',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Wanderlust(Travel Listing Web-Application)',
    description:
      'Wanderlust is an End-to-End travel listing platform.It enables users to create, explore property listings,manage reviews and securely authenticate accounts for a seamless travel experience.',
    stack: ['EJS', 'Mongo', 'React', 'Node.js'],
    sourceCode: 'https://github.com/mandasriharshithreddy/Wanderlust',
    livePreview: 'https://github.com/mandasriharshithreddy/Wanderlust',
  },
  {
    name: 'Loan Analytics and Applicant Risk Profiling',
    description:
      'Designed an interactive Power-BI dashboard to analyze loan defaults,distribution and applicant demographics, Visualized loan distribution across ages,marital status and education.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/mandasriharshithreddy',
    livePreview: 'https://github.com/mandasriharshithreddy',
    //image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'My Portfolio',
    description:
      'My Portfolio is a responsive personal portfolio website built with React,showcasing my technical skills,projects,education and experience. It highlights my development journey and helps recruiters explore my work.',
    stack: ['HTML', 'CSS', 'React'],
    sourceCode: 'https://github.com/mandasriharshithreddy/My-Portfolio',
    livePreview: 'https://github.com/mandasriharshithreddy/My-Portfolio',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Data Structures',
  'MySQL',
  'OOPS',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Restful APIs',
  'Git',
  'AI',
  'Machine Learning',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mandasriharshithreddy@gmail.com',
}

export { header, about, projects, skills, contact }