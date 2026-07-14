export type Locale = "en" | "pt" | "es";

export type EducationItemId = "programming" | "highSchool" | "universityGoal";
export type EducationIconId = "code" | "school" | "university";

export interface EducationItem {
  id: EducationItemId;
  icon: EducationIconId;
  institution?: string;
  location?: string;
  status?: "planned";
}

export interface NavigationLink {
  id: "home" | "about" | "skills" | "projects" | "contact";
  href: `#${string}`;
}

export type SkillIconId =
  | "backend"
  | "frontend"
  | "databases"
  | "infrastructure"
  | "security"
  | "languages"
  | "tools"
  | "springBoot"
  | "nodeJs"
  | "express"
  | "restApi"
  | "businessLogic"
  | "react"
  | "html5"
  | "css3"
  | "tailwindCss"
  | "vite"
  | "responsiveDesign"
  | "postgresql"
  | "mysql"
  | "mariadb"
  | "mongodb"
  | "redis"
  | "supabase"
  | "sqlite"
  | "prisma"
  | "dataModeling"
  | "databaseIndexing"
  | "queryOptimization"
  | "transactions"
  | "databaseMigrations"
  | "backupStrategy"
  | "docker"
  | "dockerCompose"
  | "linux"
  | "vps"
  | "nginx"
  | "cloudflare"
  | "cloudflarePages"
  | "productionDeployment"
  | "logging"
  | "errorTracking"
  | "caching"
  | "cdn"
  | "authenticationAuthorization"
  | "jwt"
  | "springSecurity"
  | "roleBasedAccess"
  | "mfa"
  | "rateLimiting"
  | "cors"
  | "https"
  | "secureCredentials"
  | "environmentVariables"
  | "java"
  | "javascript"
  | "typescript"
  | "python"
  | "php"
  | "c"
  | "cplusplus"
  | "csharp"
  | "git"
  | "github"
  | "intellijIdea"
  | "visualStudioCode"
  | "postman"
  | "opencode";

export interface SkillItem {
  icon: SkillIconId;
  color: `#${string}`;
  group?: "technologies" | "engineeringConcepts";
}

export interface SkillCategory {
  code: `0${number}`;
  icon: SkillIconId;
  items: readonly SkillItem[];
}

export interface Project {
  id: "fourFight" | "norad";
  name: string;
  url: string;
  technologies: readonly string[];
  statuses: readonly ("live" | "production" | "paid" | "development" | "preview")[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  testimonial?: Readonly<Partial<Record<Locale, ProjectTestimonial>>>;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: {
    src: string;
    alt: string;
  };
}

export interface SocialLink {
  label: string;
  href: string;
}
