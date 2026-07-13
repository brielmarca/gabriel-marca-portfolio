import type { SkillCategory } from "@/types/portfolio";

export const skillCategories = [
  {
    name: "Backend",
    code: "01",
    items: ["Java", "Spring Boot", "Node.js", "Express", "Python", "PHP", "REST APIs", "Business Logic"],
  },
  {
    name: "Frontend",
    code: "02",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Responsive Design"],
  },
  {
    name: "Databases",
    code: "03",
    items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Redis", "Supabase", "SQLite", "Prisma"],
  },
  {
    name: "Infrastructure",
    code: "04",
    items: ["Docker", "Docker Compose", "Linux", "VPS", "Nginx", "Cloudflare", "Cloudflare Pages", "Production Deployment"],
  },
  {
    name: "Security",
    code: "05",
    items: ["JWT Authentication", "Spring Security", "Role-Based Access Control", "MFA / TOTP", "Rate Limiting", "CORS", "HTTPS / TLS", "Secure Credential Handling", "Environment Variables"],
  },
  {
    name: "Languages and Tools",
    code: "06",
    items: ["C", "C++", "C#", "Git", "GitHub", "IntelliJ IDEA", "Visual Studio Code", "Postman", "OpenCode"],
  },
] as const satisfies readonly SkillCategory[];
