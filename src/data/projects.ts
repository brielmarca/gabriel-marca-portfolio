import type { Project } from "@/types/portfolio";

export const projects = [
  {
    name: "4Four Fight Academy",
    type: "Full-Stack Gym Management System",
    url: "https://4fourfight.com/",
    description: "A full-stack platform developed for a martial arts academy. The system includes the public website, authentication, protected areas, administration tools, student management, monthly membership flows, video uploads, database management, VPS infrastructure, HTTPS/TLS and production deployment.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker", "Linux", "Cloudflare", "REST APIs"],
    statuses: ["Live", "In Production", "Paid Client Project"],
    image: "/images/projects/4fourfight.png",
    imageAlt: "4Four Fight Academy website home page",
  },
  {
    name: "Norad Capital",
    type: "Premium Finance Website",
    url: "https://projeto-norad-capital-site.pages.dev/",
    description: "A premium institutional website being developed for a finance company focused on real estate credit and Home Equity. The project combines a responsive frontend, clear content structure and a professional visual system designed around trust and clarity.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Responsive Design", "Cloudflare Pages"],
    statuses: ["In Development", "Public Preview", "Paid Client Project"],
    image: "/images/projects/norad-capital.png",
    imageAlt: "Norad Capital website home page",
  },
] as const satisfies readonly Project[];
