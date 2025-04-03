import lexilearner from "./assets/images/lexilearner.png";
import tomnam from "./assets/images/tomnam.png";
import redditclone from "./assets/images/redditclone.png";
import catalk from "./assets/images/catalk.png";
import sokoban from "./assets/images/sokoban.png";
import bisayaPP from "./assets/images/bisaya++.png";

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "#",
  title: "Jake",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Jake Bajo",
  description:
    "An aspiring software engineer, currently pursuing an undergraduate degree in Computer Science. I have a strong interest in server side technologies, managing servers, APIs, and databases, ensuring efficient and scalable systems. I have experience with multiple programming languages and frameworks and I always look for ways to improve my skills. ",

  // resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/jake-bajo-b78786239/",
    github: "https://github.com/Kuugang",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "LexiLearner",
    description:
      "A mobile application designed to enhance the reading comprehension of readers through an interactive and adaptive learning experience.",
    preview: lexilearner,

    stack: ["React Native", "Expo", ".NET", "PostgreSQL", "Redis"],
    sourceCode: "https://github.com/Kuugang/LexiLearner",
  },
  {
    name: "Bisaya++",
    description:
      "A strongly–typed high–level interpreted Cebuano-based programming language developed to teach Cebuanos the basics of programming. Its simple syntax and native keywords make programming easy to learn.",
    preview: bisayaPP,
    stack: ["Javascript"],

    sourceCode: "https://github.com/Kuugang/bisayaPP",
  },
  {
    name: "TomNam",
    description:
      "A platform that helps karinderya (small eatery) owners and customers connect easily. It allows eatery owners to list their menu, update prices, and accept orders, while customers can browse nearby karinderyas, check menus, place orders, and leave reviews.",
    preview: tomnam,
    stack: ["C#", ".NET", "PostgreSQL", "Flutter"],
    sourceCode: "https://github.com/Kuugang/TomNam-Server",
  },

  {
    name: "RedditClone",
    description:
      "A simple Reddit clone built using Django, following the MVC pattern. This application allows users to post content, comment, vote, and interact with different subreddits.",
    preview: redditclone,
    stack: ["Python", "Django", "PostgreSQL"],
    sourceCode: "https://github.com/Kuugang/redditclone-django",
  },

  {
    name: "SokobanFSM",
    description:
      "Application of a Finite State Machine for character movement based on player input in the game Sokoban.",
    preview: sokoban,
    stack: ["Javascript"],
    sourceCode: "https://github.com/Kuugang/Sokoban",
  },
  {
    name: "CaTalk",
    description:
      "CatTalk is a general discussion forum with a fun, cat-themed design. It’s a place to chat, share ideas, and connect with others while enjoying a cozy, feline-inspired atmosphere.",
    preview: catalk,
    stack: ["Javascript"],
    livePreview: "https://kuugang.github.io/catalk/",
    sourceCode: "https://github.com/Kuugang/catalk",
  },
];

const skills = [
  "C",
  "C#",
  "C++",
  "Django",
  "Express",
  "Git",
  "Java",
  "JavaScript",
  "Keras",
  "MongoDB",
  "NodeJS",
  "PostgreSQL",
  "Postman",
  "Python",
  "React",
  "React Native",
  "TypeScript",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "jakebajo21@gmail.com",
};

export { header, about, projects, skills, contact };
