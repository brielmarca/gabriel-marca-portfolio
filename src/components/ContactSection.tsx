import { emailAddress, socialLinks } from "@/data/contact";

export function ContactSection() {
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;

  return (
    <section id="contact" className="contact-section page-container" aria-labelledby="contact-title">
      <div className="contact-panel">
        <p className="technical-label">CHANNEL :: CONTACT</p>
        <h2 id="contact-title">Let’s build something <em>real.</em></h2>
        <p>Have a project, opportunity or question? Tell me what you are trying to build.</p>
        <div className="contact-links">
          <a className="button button-primary" href={`mailto:${emailAddress}`}>Email</a>
          {whatsappUrl ? (
            <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          ) : (
            <span className="button button-disabled" aria-disabled="true" title="WhatsApp is currently unavailable">WhatsApp</span>
          )}
          {socialLinks.slice(0, 2).map((link) => (
            <a className="button button-secondary" key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
