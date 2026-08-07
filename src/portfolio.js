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
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    //image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mandasriharshithreddy@gmail.com',
}

export { header, about, projects, skills, contact }