import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  reactTestingLib,
  jest,
  rxjs,
  git,
  figma,
  jobit,
  tripguide,
  threejs,
  sololearn,
  actualSolution,
  aca,
  solo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "rxjs",
    icon: rxjs,
  },
  {
    name: "jest",
    icon: jest,
  },
  {
    name: "testing lib",
    icon: reactTestingLib,
  },
];

const experiences = [
  {
    title: "React.js developer",
    company_name: "Actual Solutions",
    icon: actualSolution,
    iconBg: "#383E56",
    date: "Feb 2020 - Aug 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Armenian Code Academy",
    icon: aca,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - March 2022",
    points: [
      "Assisted with teaching and mentoring on JavaScript and React projects",
      "Supported students with troubleshooting and problem-solving in JavaScript and React",
      "Contributed to curriculum development Bor JavaScript and React courses",
    ],
  },
  {
    title: "React.js developer",
    company_name: "Sololearn",
    icon: sololearn,
    iconBg: "#E6DEDD",
    date: "August 2021 - April 2023",
    points: [
      "Developed reusable code files to implement new features",
      "Constructed stable and maintainable codebases utilizing React",
      "Worked closely with designers to ensure the technical feasibility and efficiency of designs",
      "Conducted bug fixes and code reviews to ensure code quality",
    ],
  },
];

const projects = [
  {
    name: "Sololearn",
    description:
      "SoloLearn is a free online learning platform that helps people learn to code. It has over 24 million users worldwide and offers courses in over 20 programming languages, including Python, JavaScript, HTML, CSS, and SQL.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "black-gradient",
      },
      {
        name: "react testing library",
        color: "orange-text-gradient",
      },
      {
        name: "jest",
        color: "violet-gradient",
      },
      {
        name: "rxjs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: solo,
    web_link: "https://sololearn.com",
  },
];

export { services, technologies, experiences, projects };
