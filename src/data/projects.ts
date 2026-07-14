import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "fourFight",
    name: "4Four Fight Academy",
    url: "https://4fourfight.com/",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker", "Linux", "Cloudflare", "REST APIs"],
    statuses: ["live", "production", "paid"],
    image: "/images/projects/4fourfight/hero.webp",
    imageWidth: 1853,
    imageHeight: 973,
  },
  {
    id: "norad",
    name: "Norad Capital",
    url: "https://projeto-norad-capital-site.pages.dev/",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Responsive Design", "Cloudflare Pages"],
    statuses: ["development", "preview", "paid"],
    image: "/images/projects/norad-capital/hero.webp",
    imageWidth: 1859,
    imageHeight: 971,
  },
];
