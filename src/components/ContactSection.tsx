import type { ReactNode } from "react";
import { emailAddress, socialLinks } from "@/data/contact";

interface ContactActionProps {
  label: string;
  detail: string;
  href?: string;
  primary?: boolean;
}

function ContactIcon({ label }: { label: string }) {
  let paths: ReactNode;

  switch (label) {
    case "Email":
      paths = (
        <>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <path d="m4 7 8 6 8-6" />
        </>
      );
      break;
    case "WhatsApp":
      paths = (
        <>
          <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
          <path d="M9 8.5c.5 2.6 2.4 4.5 5 5" />
        </>
      );
      break;
    case "LinkedIn":
      paths = (
        <>
          <circle cx="8" cy="8" r="2.5" />
          <path d="M3.5 20c.3-4 1.8-6 4.5-6s4.2 2 4.5 6M15 8h6M18 5v6M15 15h6M15 19h6" />
        </>
      );
      break;
    default:
      paths = <path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 4l-2 16" />;
  }

  return <svg viewBox="0 0 24 24" focusable="false">{paths}</svg>;
}

function ContactAction({ label, detail, href, primary = false }: ContactActionProps) {
  const content = (
    <>
      <span className="contact-action-icon" aria-hidden="true"><ContactIcon label={label} /></span>
      <span className="contact-action-copy">
        <strong>{label}</strong>
        <small>{detail}</small>
      </span>
    </>
  );

  if (!href) {
    return <span className="contact-action is-unavailable" aria-disabled="true">{content}</span>;
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      className={`contact-action ${primary ? "is-primary" : ""}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

export function ContactSection() {
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;

  return (
    <section id="contact" className="contact-section page-container" aria-labelledby="contact-title">
      <div className="contact-panel">
        <p className="technical-label">CHANNEL :: CONTACT</p>
        <h2 id="contact-title">Let’s build something <em>real.</em></h2>
        <p>Have a project, opportunity or question? Tell me what you are trying to build.</p>
        <div className="contact-links">
          <ContactAction label="Email" detail="Start a conversation" href={`mailto:${emailAddress}`} primary />
          <ContactAction label="WhatsApp" detail={whatsappUrl ? "Open WhatsApp" : "Available soon"} href={whatsappUrl} />
          {socialLinks.slice(0, 2).map((link) => (
            <ContactAction
              key={link.label}
              label={link.label}
              detail={link.label === "GitHub" ? "View my work" : "Connect professionally"}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
