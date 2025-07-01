import { Mail, Github, Linkedin, Download, Twitter, Globe, Instagram, House } from "lucide-react";

export const menu = [
  { name: "home", icon: House, link: "/home" },
  { name: "work", icon: House, link: "/work" },
  { name: "review", icon: House, link: "/review" },
]

export const links = [
  { title: "Email Me", icon: Mail, link: "mailto:ibhimwhar@example.com" },
  { title: "GitHub", icon: Github, link: "https://github.com/ibhimwhar" },
  { title: "LinkedIn", icon: Linkedin, link: "https://linkedin.com/in/ibhimwhar" },
  { title: "X/Twitter", icon: Twitter, link: "https://twitter.com/ibhimwhar" },
  { title: "Website", icon: Globe, link: "https://ibhimwhar.dev" },
  { title: "Instagram", icon: Instagram, link: "https://instagram.com/ibhimwhar" },
  { title: "Download CV", icon: Download, action: () => console.log("Downloading CV...") },
];

export const projects = [
  { name: "Product Landing Page", img: "https://placehold.co/300x200?text=Landing+Page", link: "/projects/landing-page" },
  { name: "E-commerce Store", img: "https://placehold.co/300x200?text=E-commerce", link: "/projects/ecommerce" },
  { name: "Portfolio Website", img: "https://placehold.co/300x200?text=Portfolio", link: "/projects/portfolio" },
  { name: "Admin Dashboard", img: "https://placehold.co/300x200?text=Dashboard", link: "/projects/dashboard" },
  { name: "Blog Platform", img: "https://placehold.co/300x200?text=Blog", link: "/projects/blog" },
  { name: "Music Player UI", img: "https://placehold.co/300x200?text=Music+App", link: "/projects/music" },
];

export const testimonials = [
  { user: "Sarah Johnson", avatar: "https://placehold.co/40x40?text=SJ", description: "Incredible work. Ibhimwhar transformed our website beautifully." },
  { user: "David Lee", avatar: "https://placehold.co/40x40?text=DL", description: "Top-tier design and development skills. Highly recommend." },
  { user: "Sophia Chen", avatar: "https://placehold.co/40x40?text=SC", description: "Very collaborative and quick turnaround. Excellent work." },
  { user: "Michael Brown", avatar: "https://placehold.co/40x40?text=MB", description: "Attention to detail is outstanding. I love the UI improvements." },
  { user: "Emily Davis", avatar: "https://placehold.co/40x40?text=ED", description: "Creative, professional, and easy to work with. Great experience." },
  { user: "Carlos Gomez", avatar: "https://placehold.co/40x40?text=CG", description: "Delivered the project ahead of schedule with impressive quality." },
];

export const skills = [
  { title: "Design Tools", list: ["Figma", "Illustrator", "Canva", "Framer"] },
  { title: "Frontend Development", list: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vite"] },
  { title: "Backend & Tools", list: ["Node.js", "Express", "MongoDB", "REST APIs", "Postman"] },
  { title: "Other Skills", list: ["Responsive Design", "UI/UX Principles", "SEO Basics", "Website Performance Optimization"] },
  { title: "Soft Skills", list: ["Communication", "Problem-solving", "Time Management", "Team Collaboration", "Adaptability"] },
  { title: "Bonus Skills", list: ["Firebase", "Socket.IO", "Basic DevOps Concepts"] },
];

export const Articles = [
  { title: "egeg", link: "#", description: "A brief description of what this article covers. It summarizes the content to spark curiosity and encourage clicks." },
  { title: "sabsb", link: "#", description: "lorem lorem lorem lorem" },
]