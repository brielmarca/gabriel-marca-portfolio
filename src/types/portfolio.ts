export interface NavigationLink {
  label: string;
  href: `#${string}`;
}

export interface SkillCategory {
  name: string;
  code: string;
  items: readonly string[];
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
