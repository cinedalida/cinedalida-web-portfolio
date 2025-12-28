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
