import type { SocialLink } from "@/types/portfolio";

export const emailAddress = "brielmarcacontact@gmail.com";

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/brielmarca" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gabrielmarca" },
  { label: "Email", href: `mailto:${emailAddress}` },
] as const satisfies readonly SocialLink[];
