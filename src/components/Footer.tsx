import { socialLinks } from "@/data/contact";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <p>Built and designed by Gabriel Marca. {new Date().getFullYear()}</p>
        <nav aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>{link.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
