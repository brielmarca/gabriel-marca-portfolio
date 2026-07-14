"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ProjectTestimonial } from "@/components/ProjectTestimonial";
import { SkillGlyph } from "@/components/SkillGlyph";
import { emailAddress, socialLinks, whatsappUrl } from "@/data/contact";
import { navigationLinks } from "@/data/navigation";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { useLanguage } from "@/i18n/LanguageProvider";
import { messages } from "@/i18n/messages";

const themeStorageKey = "portfolio-theme";
type Theme = "dark" | "light";

function subscribeToTheme(onThemeChange: () => void) {
  const observer = new MutationObserver(onThemeChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

const technologies = [
  "Java & Spring Boot",
  "React & TypeScript",
  "PostgreSQL",
  "Docker & Linux",
  "Node.js & Express",
  "Cloudflare",
  "REST APIs",
] as const;

function TechnologyGroup({ hidden = false }: Readonly<{ hidden?: boolean }>) {
  return (
    <ul className="technology-group" aria-hidden={hidden || undefined}>
      {technologies.map((technology) => (
        <li key={technology}>
          <span aria-hidden="true">◆</span>
          {technology}
        </li>
      ))}
    </ul>
  );
}

function ThemeControl({ label, theme, onClick }: Readonly<{ label: string; theme: Theme; onClick: () => void }>) {
  return (
    <button type="button" className="header-control-button" aria-label={label} title={label} onClick={onClick}>
      {theme === "dark" ? <MdLightMode aria-hidden="true" /> : <MdDarkMode aria-hidden="true" />}
    </button>
  );
}

function ContactAction({
  label,
  detail,
  accessibleLabel,
  href,
  icon: Icon,
  color,
  platform,
  primary = false,
}: Readonly<{
  label: string;
  detail: string;
  accessibleLabel: string;
  href?: string;
  icon: IconType;
  color: string;
  platform: string;
  primary?: boolean;
}>) {
  const content = (
    <>
      <span className="contact-action-icon is-platform" data-platform={platform} aria-hidden="true" style={{ color }}>
        <Icon />
      </span>
      <span className="contact-action-copy">
        <strong>{label}</strong>
        <small>{detail}</small>
      </span>
    </>
  );

  if (!href) {
    return <span className="contact-action is-unavailable" aria-label={`${accessibleLabel}. ${detail}`} aria-disabled="true">{content}</span>;
  }

  const isExternal = href.startsWith("http");
  return (
    <a
      className={`contact-action ${primary ? "is-primary" : ""}`}
      href={href}
      aria-label={accessibleLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

function format(template: string, key: string, value: string) {
  return template.replace(`{${key}}`, value);
}

export function PortfolioApp() {
  const { locale } = useLanguage();
  const text = messages[locale];
  const theme = useSyncExternalStore<Theme>(subscribeToTheme, getThemeSnapshot, () => "dark");
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const followSystemTheme = (event: MediaQueryListEvent) => {
      let savedTheme: string | null = null;
      try {
        savedTheme = window.localStorage.getItem(themeStorageKey);
      } catch {}
      if (savedTheme === "dark" || savedTheme === "light") return;
      document.documentElement.dataset.theme = event.matches ? "light" : "dark";
    };

    mediaQuery.addEventListener("change", followSystemTheme);
    return () => mediaQuery.removeEventListener("change", followSystemTheme);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const closeAndFocusSection = (href: string) => {
    setIsOpen(false);
    requestAnimationFrame(() => {
      document.querySelector<HTMLElement>(`${href} h1, ${href} h2`)?.focus({ preventScroll: true });
    });
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch {}
  };

  const themeLabel = theme === "dark" ? text.theme.light : text.theme.dark;
  const externalContactLabel = (method: string) => `${format(text.accessibility.contactAction, "method", method)}. ${text.accessibility.externalLink}`;

  return (
    <>
      <a className="skip-link" href="#main-content">{text.accessibility.skip}</a>
      <div className="ambient ambient-purple" aria-hidden="true" />
      <div className="ambient ambient-blue" aria-hidden="true" />
      <header className="site-header">
        <div className="page-container header-inner enhanced-header-inner">
          <a className="brand" href="#home" aria-label={text.accessibility.brand}>GM<span>.</span></a>
          <nav aria-label={text.accessibility.primaryNavigation} className="hidden md:block">
            <ul className="flex items-center gap-1 lg:gap-4">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a className="nav-link" href={link.href}>{text.navigation[link.id]}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <div className="header-controls">
              <LanguageSelector text={text.language} />
              <ThemeControl label={themeLabel} theme={theme} onClick={toggleTheme} />
            </div>
            <div className="md:hidden mobile-menu-wrapper">
              <button
                ref={menuButtonRef}
                type="button"
                className="menu-button"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? text.accessibility.closeMenu : text.accessibility.openMenu}
                onClick={() => setIsOpen((open) => !open)}
              >
                <span className="sr-only">{isOpen ? text.accessibility.closeMenu : text.accessibility.openMenu}</span>
                <span aria-hidden="true" className={`menu-lines ${isOpen ? "is-open" : ""}`}><span /><span /></span>
              </button>
              {isOpen && (
                <nav id="mobile-navigation" aria-label={text.accessibility.mobileNavigation} className="mobile-nav-panel">
                  <ul>
                    {navigationLinks.map((link, index) => (
                      <li key={link.id}>
                        <a href={link.href} onClick={() => closeAndFocusSection(link.href)}>
                          <span aria-hidden="true">0{index + 1}</span>
                          {text.navigation[link.id]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <section id="home" className="hero-section page-container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="technical-label">SYS_INIT :: PORTFOLIO_V1.0</p>
            <p className="availability"><span aria-hidden="true" />{text.hero.availability}</p>
            <h1 id="hero-title" tabIndex={-1}>
              <span className="hero-lead">{text.hero.lead}</span>{" "}
              <span className="hero-building">{text.hero.building} <strong>{text.hero.secure}</strong> {text.hero.and}</span>{" "}
              <span className="hero-nowrap">{text.hero.production}</span>{text.hero.systems}
            </h1>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">{text.hero.contact}</a>
              <a className="button button-secondary" href="#projects">{text.hero.projects}</a>
            </div>
            <div className="technology-strip" role="group" aria-label={text.accessibility.coreTechnologies}>
              <div className="technology-track"><TechnologyGroup /><TechnologyGroup hidden /></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-glow" aria-hidden="true" />
              <Image src="/images/gabriel/portrait.webp" alt={text.accessibility.portraitAlt} width={576} height={1024} priority quality={90} sizes="(max-width: 767px) 84vw, (max-width: 1023px) 48vw, 38vw" className="portrait-image" />
              <div className="interface-card code-card" aria-hidden="true">
                <span>const</span> developer = &#123;<br />&nbsp;&nbsp;focus: <b>&apos;production&apos;</b>,<br />&nbsp;&nbsp;security: <b>true</b><br />&#125;
              </div>
              <div className="interface-card deploy-card" aria-hidden="true"><span>DEPLOYMENT_STATUS</span><br />services online <b>[OK]</b></div>
            </div>
          </div>
        </section>
        <section id="about" className="content-section page-container" aria-labelledby="about-title">
          <div className="about-layout">
            <div className="section-heading">
              <p className="technical-label">{text.annotations.about}</p>
              <h2 id="about-title" tabIndex={-1}>{text.about.title}</h2>
              <span className="heading-rule" aria-hidden="true" />
            </div>
            <div className="about-copy">{text.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </section>
        <section id="skills" className="content-section page-container" aria-labelledby="skills-title">
          <div className="section-heading is-centered">
            <p className="technical-label">{text.annotations.skills}</p>
            <h2 id="skills-title" tabIndex={-1}>{text.skillsSection.title}</h2>
            <span className="heading-rule" aria-hidden="true" />
          </div>
          <div className="skills-grid enhanced-skills-grid">
            {skillCategories.map((category) => (
              <article className="skill-card enhanced-skill-card" key={category.code}>
                <div className="skill-card-header">
                  <span className="skill-icon" aria-hidden="true"><SkillGlyph icon={category.icon} /></span>
                  <h3>{text.skillLabels[category.icon]}</h3>
                  <span className="skill-index" aria-hidden="true">{category.code}</span>
                </div>
                <ul>
                  {category.items.map((item) => (
                    <li key={item.icon}>
                      <span className="skill-item-icon" data-icon={item.icon} aria-hidden="true" style={{ color: item.color }}><SkillGlyph icon={item.icon} /></span>
                      <span>{text.skillLabels[item.icon]}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section id="projects" className="content-section page-container" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="technical-label">{text.annotations.projects}</p>
            <h2 id="projects-title" tabIndex={-1}>{text.projectsSection.title}</h2>
            <span className="heading-rule" aria-hidden="true" />
          </div>
          <div className="projects-list">
            {projects.map((project, index) => {
              const projectText = text.projectsSection[project.id];
              const externalLabel = format(text.accessibility.externalProject, "project", project.name);
              return (
                <article className={`project-card ${index % 2 === 1 ? "is-reversed" : ""}`} key={project.id}>
                  <a className="project-image-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={externalLabel}>
                    <Image src={project.image} alt={projectText.imageAlt} width={project.imageWidth} height={project.imageHeight} quality={90} sizes="(max-width: 1099px) 100vw, 58vw" className="project-image" />
                  </a>
                  <div className="project-content">
                    <p className="project-number">PROJECT_0{index + 1}</p>
                    <p className="project-type">{projectText.type}</p>
                    <h3><a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={externalLabel}>{project.name}</a></h3>
                    <ul className="status-list" aria-label={text.accessibility.projectStatus}>
                      {project.statuses.map((status) => <li key={status}>{text.projectsSection.statuses[status]}</li>)}
                    </ul>
                    <p className="project-description">{projectText.description}</p>
                    <ProjectTestimonial testimonial={project.testimonial?.[locale]} />
                    <ul className="technology-list" aria-label={text.accessibility.technologiesUsed}>
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology === "Responsive Design" ? text.projectsSection.technologyLabels[technology] : technology}</li>
                      ))}
                    </ul>
                    <a className="project-action" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={externalLabel}>
                      {text.projectsSection.action}
                      <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section id="contact" className="contact-section page-container" aria-labelledby="contact-title">
          <div className="contact-panel">
            <p className="technical-label">{text.annotations.contact}</p>
            <h2 id="contact-title">{text.contact.titleStart} <em>{text.contact.titleEmphasis}</em></h2>
            <p>{text.contact.description}</p>
            <div className="contact-links">
              <ContactAction label={text.contact.email} detail={text.contact.emailAction} accessibleLabel={format(text.accessibility.contactAction, "method", text.contact.email)} href={`mailto:${emailAddress}`} icon={SiGmail} color="#EA4335" platform="email" primary />
              <ContactAction label={text.contact.whatsapp} detail={whatsappUrl ? text.contact.whatsappAction : text.contact.availableSoon} accessibleLabel={whatsappUrl ? externalContactLabel(text.contact.whatsapp) : format(text.accessibility.contactAction, "method", text.contact.whatsapp)} href={whatsappUrl} icon={SiWhatsapp} color="#25B95A" platform="whatsapp" />
              <ContactAction label={text.contact.linkedin} detail={text.contact.linkedinAction} accessibleLabel={externalContactLabel(text.contact.linkedin)} href={socialLinks.find((link) => link.label === "LinkedIn")?.href} icon={FaLinkedin} color="#0A66C2" platform="linkedin" />
              <ContactAction label={text.contact.github} detail={text.contact.githubAction} accessibleLabel={externalContactLabel(text.contact.github)} href={socialLinks.find((link) => link.label === "GitHub")?.href} icon={SiGithub} color="var(--monochrome-icon)" platform="github" />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-container footer-inner">
          <p>{text.footer} {new Date().getFullYear()}</p>
          <nav aria-label={text.accessibility.socialLinks}>
            <a href={socialLinks[0].href} target="_blank" rel="noopener noreferrer" aria-label={`GitHub. ${text.accessibility.externalLink}`}>GitHub</a>
            <a href={socialLinks[1].href} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn. ${text.accessibility.externalLink}`}>LinkedIn</a>
            <a href={`mailto:${emailAddress}`}>{text.contact.email}</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
