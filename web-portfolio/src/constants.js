import {
  SiAdobephotoshop,
  SiCanva,
  SiPostgresql,
  SiDocker,
  SiAseprite,
  SiAmazonwebservices,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
];

// Tech Stack Data
export const TECH_STACK = [
  {
    id: "front-end",
    label: "Frontend",
    items: [
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      {
        name: "CSS3",
        IconComponent: FaCss3Alt,
        color: "#0078D4",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      {
        name: "Bootstrap",
        icon: "https://cdn.simpleicons.org/bootstrap/7952B3",
      },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
    ],
  },
  {
    id: "back-end",
    label: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/EA2D2E" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
      {
        name: "PostgreSQL",
        IconComponent: SiPostgresql,
        color: "#007ACC",
      },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      {
        name: "Docker",
        IconComponent: SiDocker,
        color: "#007ACC",
      },
      {
        name: "Azure",
        IconComponent: VscAzure,
        color: "#0078D4",
      },
      {
        name: "AWS",
        IconComponent: SiAmazonwebservices,
        color: "#FF9900", // Official AWS Orange
      },
    ],
  },
  {
    id: "other-tools",
    label: "Other tools",
    items: [
      {
        name: "VS Code",
        IconComponent: BiLogoVisualStudio,
        color: "#007ACC",
      },
      {
        name: "Photoshop",
        IconComponent: SiAdobephotoshop,
        color: "#31A8FF",
      },

      {
        name: "Canva",
        IconComponent: SiCanva,
        color: "#00C4CC",
      },
      {
        name: "Aseprite",
        IconComponent: SiAseprite,
        color: "#7D929E",
      },
      {
        name: "Notion",
        icon: "https://cdn.simpleicons.org/notion/white",
      },
      {
        name: "Discord",
        icon: "https://cdn.simpleicons.org/discord/5865F2",
      },
      {
        name: "Filmora",
        icon: "https://cdn.simpleicons.org/wondersharefilmora/00D2D2",
      },
    ],
  },
];

// Projects Categoies

export const PROJECT_CATEGORIES = [
  { id: "app-dev", label: "Application Dev" },
  { id: "prototypes", label: "Prototypes" },
  { id: "arts-posters", label: "Arts & Posters" },
];

// Projects Data
export const PROJECTS = [
  // Application Development
  {
    id: 1,
    title: "CareerCove",
    category: "app-dev",
    description: `**CareerCove** is a *web-based, skill-oriented job matching platform* for the computing industry that acts as a **middleman between job seekers and scraped job data** from *JobStreet, Indeed, and Kalibrr*.
<br/>
<br/>
It takes *scraped job postings* and a *parsed user resume* as inputs, then produces **personalized job recommendations** using **Named Entity Recognition (NER)** and **semantic similarity search**.
<br/>
<br/>
**Key Features:**
- *Customizable Career Filters*
- *Data Analytics Dashboards*
- *Job Bookmarking and Application Tracking System*
- *Secure Document Repository*`,
    image: "CareerCove_proj.png",
    tags: [
      "Python",
      "JavaScript",
      "Tailwind CSS",
      "Azure",
      "Docker",
      "PostgreSQL",
      "FastAPI",
      "React.js",
    ],
    link: "https://github.com/cinedalida/CareerCove-frontend",
    hasFrontend: true,
    frontendLink: "https://careercove-six.vercel.app/",
  },
  {
    id: 2,
    title: "La Spot – DLSU-D Parking System",
    category: "app-dev",
    description: `
**La Spot** is a *web-based parking system* developed for **De La Salle University – Dasmariñas**. It was built as a *final project for the Application Development course* to improve parking management on campus.
<br/>
<br/>
The system has two parts:<br/>
**User Side** – allows students and staff to view available parking slots  
**Admin Side** – enables administrators to manage parking data using **CRUD operations**
<br/>
<br/>
La Spot provides a clear overview of parking availability and supports **vehicle management**, **parking slot registration**, and **account control** through a *responsive web interface*.
  `,
    image: "Laspot_proj.png",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MySQL"],
    link: "https://github.com/cinedalida/La-Spot-Main",
    hasFrontend: false,
  },
  {
    id: 3,
    title: "Hollow Knight Game Gallery",
    category: "app-dev",
    description:
      "Hollow Knight-themed gallery built to showcase and celebrate the game. Developed to practice multi-page routing and user account control.",
    image: "GameArtGal_proj.png",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MySQL"],
    link: "https://github.com/cinedalida/Game-Themed-Landing-Page",
    hasFrontend: false,
  },
  {
    id: 3,
    title: "Product Landing Page",
    category: "app-dev",
    description:
      "A Logitech-inspired product landing page created as part of freeCodeCamp's Responsive Web Design certification.",
    image: "ProdLangPage_proj.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/cinedalida/Product-Landing-Page-freeCodeCamp",
    hasFrontend: false,
  },
];

export const PROTOTYPES = [
  {
    id: 4,
    title: "Lauviah Prototype",
    description:
      "Your holistic companion for academic success and mental well-being.",
    image: "/lauviah.jpg",
    color: "from-blue-600/20 to-indigo-900/40", // Custom gradient color
    category: "prototypes",
    link: "#",
  },
  {
    id: 5,
    title: "Apo Kalinga Prototype",
    description:
      "An intuitive medication management application for senior citizens.",
    image: "/apo-kalinga.jpg",
    color: "from-orange-500/20 to-red-900/40",
    category: "prototypes",
    link: "#",
  },
  {
    id: 6,
    title: "Cha-Ching Prototype",
    description:
      "A user-friendly shopping application for a seamless retail experience.",
    image: "/cha-ching.jpg",
    color: "from-purple-600/20 to-pink-900/40",
    category: "prototypes",
    link: "#",
  },
];

export const ARTS = [
  {
    id: 7,
    title: "Art Portfolio",
    category: "arts-posters",
    description:
      "Canva presentation for my art compilation. From organizational works, school projects to personal projects.",
    image: "art-portfolio.jpg",
    tags: ["Canva", "Graphic Design"],
    link: "#",
  },
  {
    id: 8,
    title: "Artworks",
    category: "arts-posters",
    description:
      "A compilation of my commissioned works both digital and traditional art on Instagram.",
    image: "artworks.jpg",
    tags: ["Digital Art", "Traditional Art", "Commission"],
    link: "#",
  },
];

export const STARTER_QUESTIONS = [
  { label: "What is 'Hiraya Manawari'?", icon: "✨" },
  { label: "Tell me about La Spot.", icon: "🚗" },
  { label: "Design or Code?", icon: "🎨" },
  { label: "Current CS projects?", icon: "💻" },
];
