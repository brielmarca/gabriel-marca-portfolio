export interface NavigationLink {
  label: string;
  href: `#${string}`;
}

export type LocalizedSkillText = {
  en: string;
  pt: string;
};

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
  | "docker"
  | "dockerCompose"
  | "linux"
  | "vps"
  | "nginx"
  | "cloudflare"
  | "cloudflarePages"
  | "productionDeployment"
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
  label: LocalizedSkillText;
  icon: SkillIconId;
  color: `#${string}`;
}

export interface SkillCategory {
  name: LocalizedSkillText;
  code: `0${number}`;
  icon: SkillIconId;
  items: readonly SkillItem[];
}

export interface Project {
  name: string;
  type: string;
  url: string;
  description: string;
  technologies: readonly string[];
  statuses: readonly string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export interface SocialLink {
  label: string;
  href: string;
}
