import type { NavigationLink } from "@/types/portfolio";

export const navigationLinks = [
  { id: "home", href: "#home" },
  { id: "about", href: "#about" },
  { id: "skills", href: "#skills" },
  { id: "projects", href: "#projects" },
  { id: "contact", href: "#contact" },
] as const satisfies readonly NavigationLink[];
