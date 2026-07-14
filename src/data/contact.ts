import type { SocialLink } from "@/types/portfolio";

export const emailAddress = "brielmarcacontact@gmail.com";

export function validateWhatsAppUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "wa.me" ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export const whatsappUrl = validateWhatsAppUrl(process.env.NEXT_PUBLIC_WHATSAPP_URL);

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/brielmarca" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gabrielmarca" },
  { label: "Email", href: `mailto:${emailAddress}` },
] as const satisfies readonly SocialLink[];
