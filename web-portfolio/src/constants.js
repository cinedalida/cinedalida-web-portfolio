import {
  SiAdobephotoshop,
  SiCanva,
  SiPostgresql,
  SiDocker,
  SiAseprite,
  // SiAmazonwebservices,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";
import { SiNotion } from "react-icons/si";
import { SiTrello } from "react-icons/si";


export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
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
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/EA2D2E" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
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
        name: "Google Colab",
        IconComponent: SiGooglecolab,
        color: "#0078D4",
      },
      {
        name: "Jupyter Notebook",
        IconComponent: SiJupyter,
        color: "#0078D4",
      },
      // {
      //   name: "AWS",
      //   IconComponent: SiAmazonwebservices,
      //   color: "#FF9900", 
      // },
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
        IconComponent: SiNotion,
        color: "#8B5CF6",
      },
      {
        name: "Discord",
        icon: "https://cdn.simpleicons.org/discord/5865F2",
      },
      {
        name: "Filmora",
        icon: "https://cdn.simpleicons.org/wondersharefilmora/00D2D2",
      },
      {
        name: "After Effects",
        IconComponent: SiAdobeaftereffects,
        color: "#9999FF",
      },
      {
        name: "DaVinci Resolve",
        IconComponent: SiDavinciresolve,
        color: "#9999FF",
      },
      {
        name: "Trello",
        IconComponent: SiTrello,
        color: "#0052CC",
      },
    ],
  },
];

// Projects Categoies

export const PROJECT_CATEGORIES = [
  { id: "app-dev", label: "All Projects" },
  { id: "prototypes", label: "Prototypes" },
  { id: "arts-posters", label: "Arts & Posters" },
];

// Projects Data
export const PROJECTS = [
  // Application Development
  {
    id: 1,
    title: "CareerCove - Job Matching Platform",
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
    hasDemo: true,
    demoLink: "https://www.youtube.com/watch?v=x_MH1Pqrg3A",
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
    hasDemo: true,
    demoLink: "https://www.youtube.com/watch?v=Kud7pHdQtlI",
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
    hasDemo: true,
    demoLink: "https://www.youtube.com/watch?v=iUzy_BJZXsA",
  },
  {
    id: 4,
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
    id: 5,
    title: "Lauviah Prototype",
    description:
      "Your holistic companion for academic success and mental well-being.",
    image: "LauviahCover.png",
    color: "from-blue-600/20 to-indigo-900/40", // Custom gradient color
    category: "prototypes",
    link: "https://www.figma.com/proto/klIQ3861jKHlXda8BUO2V3/Lauviah---Mobile?page-id=143%3A5147&node-id=152-10864&viewport=4146%2C4056%2C0.51&t=t4XOnQcG6YYauBed-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=143%3A5352&show-proto-sidebar=1",
  },
  {
    id: 6,
    title: "Apo Kalinga Prototype",
    description:
      "An intuitive medication management application for senior citizens.",
    image: "ApoKalingaCover.png",
    color: "from-orange-500/20 to-red-900/40",
    category: "prototypes",
    link: "https://www.figma.com/proto/WtyqbvOixeUdWkEAjIJ2UG/Apo-Kalinga---Mobile?node-id=1-3203&t=Zu9LSYSNREf1HMAA-1",
  },
  {
    id: 7,
    title: "Cha-Ching Prototype",
    description:
      "A user-friendly shopping application for a seamless retail experience.",
    image: "ChachingCover.png",
    color: "from-purple-600/20 to-pink-900/40",
    category: "prototypes",
    link: "https://www.figma.com/proto/eKpQmyexgED8oGf6kVs1xI/Cha-Ching-Shop-Mobile?node-id=125-1152&t=9O4lKfAb2sqxPWbC-1",
  },
];

export const ARTS = [
  {
    id: 8,
    title: "Art Portfolio",
    category: "arts-posters",
    description:
      "Canva presentation for my art compilation. From organizational works, school projects to personal projects.",
    image: "ArtPortfolio_anp.png",
    link: "https://www.canva.com/design/DAGqDxPSwAw/gH_ud84KudWeqiTK7YFcTQ/view?utm_content=DAGqDxPSwAw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7ddaf47cdc",
  },
  {
    id: 9,
    title: "Artworks",
    category: "arts-posters",
    description:
      "A compilation of my commissioned works both digital and traditional art on Instagram.",
    image: "ArtAcc_anp.png",
    link: "https://www.instagram.com/peamupbubbber/",
  },
  {
    id: 10,
    title: "Posters",
    category: "arts-posters",
    description: "A compilation of my creative posters on Instagram.",
    image: "PosterAcc_anp.png",
    link: "https://www.instagram.com/pan_cinen/",
  },
];

export const STARTER_QUESTIONS = [
  { label: "What is 'Hiraya Manawari'?", icon: "✨" },
  { label: "Tell me about La Spot.", icon: "🚗" },
  { label: "Design or Code?", icon: "🎨" },
  { label: "Current CS projects?", icon: "💻" },
];


export const WORK_EXPERIENCE = [
  {
    company: "Eskwelabs",
    role: "Education Innovation Fellowship (EIF) Intern",
    period: "July 2025 - October 2025",
    location: "Remote",
    points: [
      "Designed and built data pipeline prototypes automating Typeform survey data to Google Sheets using Google Apps Script and n8n.",
      "Transformed data into organized tables for efficient access, supporting End of Sprint Analysis for Project Management.",
      "Collaborated in hands-on learning sprints with 10+ EIF members on website UI/UX and data visualization.",
    ],
  },
    {
    company: "AWS User Group BuildHers+ Philippines",
    role: "AmbassadHERS+ Operations Department - SheCodes",
    period: "February 2026 - Present",
    location: "Remote",
    points: [
      "Contributing to community-driven initiatives focused on empowering women in the AWS and cloud computing ecosystem.",
      "Collaborating with the Tech and Development team to support operational workflows and technical projects.",
    ],
  },
  {
    company: "Edukasyon.ph",
    role: "Graphic Design Intern",
    period: "July 2025 - Present",
    location: "Remote",
    points: [
      "Crafted over 15 bulk publications and assets for Admin and B2C projects using Canva, Adobe Photoshop, and Figma.",
      "Codesigned campaigns such as EDK Club Time and Wikasaysayan with the Brand Manager and 10+ team members.",
    ],
  },
  {
    company: "DLSU-D Registrar's Office",
    role: "Student Assistant",
    period: "September 2025 - Present",
    location: "Dasmariñas, Cavite",
    points: [
      "Completed 136+ office duty hours supporting enrollment, registration, and general registrar transactions.",
      "Encoded over 100 student application files, ensuring accurate record-keeping and efficient processing.",
    ],
  },
];

export const INVOLVEMENT = [
  {
    org: "DLSUD - Computer Science Program Council (CSPC)",
    role: "Chief Executive Officer",
    period: "November 2025 - Present",
    points: [
      "Leading overall council strategy, operations, and executive coordination.",
      "Developed automation tools like a dynamic event caption generator using n8n and Gemini AI.",
      "Representing the Computer Science student body in institutional meetings and decision-making.",
    ],
  },
    {
    org: "DLSUD - Computer Science Program Council (CSPC)",
    role: "Vice Chief Executive Officer",
    period: "June 2025 - November 2025",
    points: [
      "Managed internal operations for 50+ council members and designed efficient Trello/Discord workspaces.",
      "Helped manage council events such as Panimola 2025, Specifi, and Organization Recruitment.",
    ],
  },
  {
    org: "DLSU-D Computer Science Program Council (CSPC)",
    role: "Multimedia Committee Head",
    period: "September 2024 - May 2025",
    points: [
      "Led over 15 creative members to design promotional materials and visual collaterals for council events and projects.",
      "Managed social media content and created visual assets for major events including Interdepartmental Sportsfest and Codeyssey.",
      "Produced creative assets for organizational initiatives such as Back to Basics: RobotiCS 101 and various holiday publications.",
    ],
  },
];