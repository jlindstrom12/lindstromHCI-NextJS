import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export const experience = [
  {
    title: "Technology Consultant",
    company: "Attorney General's Office for the Republic of Palau",
    period: "May 2025 — July 2025",
    description:
      "I focused my summer project around the criminal database for the country of Palau. I completely redesigned and normalized their database from scratch eliminating redundent data and built my office a fully working front-end for my new database using Microsoft Access. I also took all existing data from criminal cases of the past 40 years and migrated it over to my new database.  ",
  },
  {
    title: "Consumer Digital Touchpoints Intern",
    company: "Mondelez International",
    period: "May 2024 - Aug 2024",
    description:
      "I did web auditing for Mondelez' Promotional websites using web scraping. I created a script where you input a website URL and using selenium and pandas it pulls all code, takes screenshots, triggers google analytics and google tags, and outputs all findings into a spreadsheet in seconds.",
  },
  {
    title: "Human-Robot Interactions Researcher",
    company: "Ax-Lab: University of Chicago",
    period: "May 2023 - Aug 2023",
    description:
      "Worked in Collaboration with a student from MIT and a student from UChicago to integrate robotics into the 3D printing process. This result in a research paper published by TEI where all three of us were named first authors. See Fabrobotics for full details on this work.",
  },
]

export const education = [
  {
    degree: "B.S. Computer Science",
    school: "University Name",
    period: "2015 — 2019",
  },
]

export const contactInfo = [
  { icon: Mail, label: "Email", value: "jmlindstrom14@gmail.com", href: "mailto:jmlindstrom14@gmail.com" },
  { icon: MapPin, label: "Location", value: "Chicago, IL", href: null },
  { icon: Phone, label: "Phone", value: "+1 (202) 503-6636", href: "tel:+12025036636" },
]

export const socialLinks = [
  { icon: Github, href: "https://github.com/jlindstrom12", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jonathan-lindstrom/", label: "LinkedIn" },
  { icon: Instagram, href: "https://twitter.com", label: "Twitter" },
]

export const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Designing and implementing robust server-side solutions with scalable architectures.",
    skills: ["Node.js", "Python", "PostgreSQL", "GraphQL"],
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences that delight users.",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
  },
]

export const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "AWS",
]