import gitHubIcon from "./images/github.svg";
import linkedInIcon from "./images/linkedin.svg";
import mongodb from "./images/mongo.png";
import mongo from "./images/mongo.svg";
import express from "./images/express.png";
import node from "./images/node.svg";
import tailwind from "./images/tailwind.png";
import me from "./images/me.png";
import girl from "./images/girl.png";
import punjab from "./images/Punjab.png";
import sph from "./images/sph.png";
import event from "./images/EVENT.png";
import atg from "./images/ATG.png";
import figma from "./images/Figma_design.png";
import laptop from "./images/laptop.webp";
import pinterest from "./images/pinterest.png";
import wallpaper from "./images/wallpaper.avif";
import wallpapert from "./images/wallpaper2.avif";
import wallpapertt from "./images/wallpaper3.avif";
import mernPhoto from "./images/mernPhoto.png";
import contactMe from "./images/contactMe.png"

export const assets = {
  gitHubIcon,
  linkedInIcon,
  mongo,
  mongodb,
  express,
  node,
  tailwind,
  girl,
  me,
  sph,
  atg,
  wallpaper,
  wallpapert,
  wallpapertt,
  figma,
  laptop,
  mernPhoto,
  contactMe
};

export const myWorks = [
  {
    id: 0,
    category: "backend project",
    name: "Event Planner 360",
    image: event,
    hostlink: "https://event-360-teg8.onrender.com/",
    description:
      "Developed a full-stack event planning platform for organizers with admin rights to create and edit events and ticket prices. Designed the UI/UX using Figma. Implemented core features like event creation, editing, and management, along with user authentication and authorization. Currently adding guest RSVP management, task delegation, and payment gateway integration.",
      techStack:['reactjs','expressjs','mongoose','nodejs','tailwind']
  },
  {
    id: 1,
    category: "backend project",
    name: "Student Project Hub",
    image: sph,
    hostlink: "https://sph-1.onrender.com/",
    description:
      "Developed a collaborative student project hub using the MERN stack, leveraging Express.js for backend functionality. Enabled universities to upload and showcase projects while facilitating collaboration among multiple institutions. Implemented features for project search, filtering, and real-time notifications to enhance user experience and foster innovation.",
      techStack:['html','css','js','ejs','expressjs','mongoose','reactjs',"tailwind"]
  },
  {
    id: 2,
    category: "backend project",
    name: "Pinterest",
    image: pinterest,
    hostlink: "https://backendpinterest.onrender.com/",
    description:
      "First project of learning backend . Implemented user authentication, added functionality for creating posts . Incorporated features for displaying feeds using the advanced Node.js library Express.js along with EJS for dynamic frontend rendering.",
      techStack:['expressjs','mongoose','nodejs','html','css','js','ejs']
  },
  {
    id: 3,
    category: "frontend project",
    name: "Across The Globe",
    image: atg,
    hostlink: "https://assignment-atg.onrender.com/",
    description:
      "I utilized React.js to develop a user interface for an assignment from ATG Globe. The project integrates responsive design principles and leverages React's component-based architecture to enhance usability and functionality.",
      techStack:['nodejs','reactjs','tailwind']
  },
  {
    id: 4,
    category: "frontend project",
    name: "Chokha Punjab Clone",
    image: punjab,
    hostlink: "https://chokha-punjab-clone.onrender.com/",
    description:
      "Developing a responsive and interactive clone of the Chokha Punjab website. Current Progress: Home Page: Implemented a visually appealing and responsive homepage using ReactJS and TailwindCSS. Animations: Integrated smooth animations on the homepage using GSAP for enhanced user experience. Next Steps: complete the project",
      techStack:['nodejs','reactjs','tailwind','gsap']
  },

  {
    id: 6,
    category: "Figma Design",
    name: "Student Project Hub Design",
    image: figma,
    hostlink:
      "https://www.figma.com/design/3ODMWVzdgQ8ipsv7cmExSO/Student-Project-Hub",
    description:
      "Created a comprehensive UI design using Figma for a platform that enables universities to upload and showcase their projects. This platform fosters collaboration, increases project recognition, and provides a space for users to explore and engage with inspiring projects.",
      techStack:['figma']
  },
];
