import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
  name: "Chigozie Jacob",
  title: "Hi, I'm Chigozie Jacob",
  description:
    "A passionate Frontend Web Developer having an experience of building Web applications with HTML / CSS 3 / JavaScript / Reactjs  / and a little knolwedge on Server Side Rendering (Nodejs, Express, MySql).",
  resumeLink: "https://cv.hanzla.ga",
};

export const openSource = {
  githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://web.facebook.com/chigozie.jacob.733",
  // facebook: "https://www.facebook.com/1hanzla100",
  instagram: "https://www.instagram.com/1hanzla100",
  twitter: "https://twitter.com/1hanzla100",
  github: "https://github.com/Chigozie0706",
  // github: "https://github.com/1hanzla100",
  linkedin: "https://www.linkedin.com/in/hanzla-tauqeer-0869281ba/",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY FRONTENT WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean / Netlify"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },

    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },

    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Middleware",
    progressPercentage: "50",
  },
  {
    Stack: "Backend",
    progressPercentage: "30",
  },
];

export const educationInfo = [
  {
    schoolName: "Abubarkar Tafawa Balewa University",
    subHeader: "Bachelor of Technology (B.Tech) in Computer Science",
    duration: "September 2017 - April 2019",
    desc: "Participated in the research of XXX and published 3 papers.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    schoolName: "Harvard",
    subHeader: "Master of Science in Computer Science",
    duration: "September 2017 - April 2019",
    desc: "Participated in the research of XXX and published 3 papers.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    schoolName: "Stanford University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2013 - April 2017",
    desc:
      "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    descBullets: ["Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Google",
    companylogo: googlelogo,
    date: "June 2018 – Present",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Github",
    companylogo: github,
    date: "May 2017 – May 2018",
    desc:
      "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "Software Engineer Intern",
    company: "Airbnb",
    companylogo: airbnb,
    date: "Jan 2015 – Sep 2015",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const projects = [
  {
    name: "lorem ipsum",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: {
      name: "hanzla",
      url: "kasjfklsdjf",
    },
  },
];
