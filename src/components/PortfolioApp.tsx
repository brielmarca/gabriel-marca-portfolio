"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdDarkMode, MdLanguage, MdLightMode } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { SkillGlyph } from "@/components/SkillGlyph";
import { skillCategories } from "@/data/skills";

const emailAddress = "brielmarcacontact@gmail.com";

type Language = "en" | "pt";
type Theme = "dark" | "light";

const navigationLinks = [
  { href: "#home", label: { en: "Home", pt: "Início" } },
  { href: "#about", label: { en: "About", pt: "Sobre" } },
  { href: "#skills", label: { en: "Skills", pt: "Habilidades" } },
  { href: "#projects", label: { en: "Projects", pt: "Projetos" } },
  { href: "#contact", label: { en: "Contact", pt: "Contato" } },
] as const;

const copy = {
  en: {
    skip: "Skip to main content",
    brandLabel: "Gabriel Marca, home",
    primaryNavigation: "Primary navigation",
    mobileNavigation: "Mobile navigation",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    switchLanguage: "Mudar para português",
    languageCode: "PT",
    useLightTheme: "Use light theme",
    useDarkTheme: "Use dark theme",
    heroAvailability: "Open to client projects and future opportunities",
    heroLead: "Full-Stack Developer",
    heroBuilding: "building",
    heroSecure: "secure",
    heroAnd: "and",
    heroProduction: "production-ready",
    heroSystems: "systems.",
    contactMe: "Contact Me",
    viewProjects: "View My Projects",
    aboutTitle: "The Story",
    aboutParagraphs: [
      "I’m Gabriel Marca, a Full-Stack Developer from Brazil. I lived in Portugal for several years, and that was where I started learning programming about four years ago. What began as curiosity became something I took seriously, and since then I’ve kept improving by building projects, solving problems and taking on more complex challenges.",
      "Today, I work on paid projects for businesses, handling everything from frontend and backend development to databases, deployment and infrastructure. Security is part of that work from the beginning, with authentication, permissions, protected data, HTTPS/TLS and careful credential handling built into the process.",
      "I also mentor six students, helping them understand how software is really built instead of just copying code. I’m still learning every day, but now I’m doing it while creating systems that people and companies actually use.",
    ],
    skillsTitle: "Technical Arsenal",
    projectsTitle: "Featured Work",
    viewLiveProject: "View Live Project",
    projectStatus: "Project status",
    technologiesUsed: "Technologies used",
    fourFight: {
      type: "Full-Stack Gym Management System",
      intro: "For 4Four Fight Academy, I developed a complete management platform built for real-world use, including:",
      highlights: [
        "A professional public website presenting the academy, programs, schedules and membership plans.",
        "Secure authentication, protected student areas, role-based permissions and MFA/TOTP.",
        "Student, attendance, belt, profile and monthly membership management.",
        "An administration dashboard, PostgreSQL database, video uploads and operational tools.",
        "Production infrastructure with Docker, Linux, Nginx, Cloudflare, Redis, HTTPS/TLS and automated deployments.",
      ],
      statuses: ["Live", "In Production", "Paid Client Project"],
      imageAlt: "4Four Fight Academy website home page",
    },
    norad: {
      type: "Premium Finance Website",
      description: "A premium institutional website being developed for a finance company focused on real estate credit and Home Equity. The project combines a responsive frontend, clear content structure and a professional visual system designed around trust and clarity.",
      statuses: ["In Development", "Public Preview", "Paid Client Project"],
      imageAlt: "Norad Capital website home page",
    },
    contactTitleStart: "Let’s build something",
    contactTitleEmphasis: "real.",
    contactDescription: "Have a project, opportunity or question? Tell me what you are trying to build.",
    startConversation: "Start a conversation",
    openWhatsApp: "Open WhatsApp",
    availableSoon: "Available soon",
    viewMyWork: "View my work",
    connectProfessionally: "Connect professionally",
    footer: "Built and designed by Gabriel Marca.",
  },
  pt: {
    skip: "Pular para o conteúdo principal",
    brandLabel: "Gabriel Marca, início",
    primaryNavigation: "Navegação principal",
    mobileNavigation: "Navegação mobile",
    openMenu: "Abrir menu de navegação",
    closeMenu: "Fechar menu de navegação",
    switchLanguage: "Switch to English",
    languageCode: "EN",
    useLightTheme: "Usar tema claro",
    useDarkTheme: "Usar tema escuro",
    heroAvailability: "Disponível para projetos de clientes e futuras oportunidades",
    heroLead: "Full-Stack Developer",
    heroBuilding: "construindo sistemas",
    heroSecure: "seguros",
    heroAnd: "e",
    heroProduction: "prontos para produção",
    heroSystems: ".",
    contactMe: "Entrar em Contato",
    viewProjects: "Ver Meus Projetos",
    aboutTitle: "A Trajetória",
    aboutParagraphs: [
      "Eu sou Gabriel Marca, Full-Stack Developer brasileiro. Vivi vários anos em Portugal, onde comecei a aprender programação há cerca de quatro anos. O que começou como curiosidade virou algo que passei a levar a sério e, desde então, continuo evoluindo ao criar projetos, resolver problemas e assumir desafios cada vez mais complexos.",
      "Hoje, trabalho em projetos pagos para empresas, cuidando de frontend, backend, bancos de dados, deploy e infraestrutura. A segurança faz parte do processo desde o início, com autenticação, permissões, proteção de dados, HTTPS/TLS e tratamento cuidadoso de credenciais.",
      "Também acompanho seis alunos, ajudando eles a entender como um software é realmente construído, em vez de apenas copiar código. Continuo aprendendo todos os dias, mas agora faço isso enquanto crio sistemas que pessoas e empresas realmente utilizam.",
    ],
    skillsTitle: "Arsenal Técnico",
    projectsTitle: "Projetos em Destaque",
    viewLiveProject: "Ver Projeto Online",
    projectStatus: "Status do projeto",
    technologiesUsed: "Tecnologias utilizadas",
    fourFight: {
      type: "Sistema Full-Stack de Gestão para Academia",
      intro: "Para a 4Four Fight Academy, desenvolvi uma plataforma completa de gestão, preparada para uso real, incluindo:",
      highlights: [
        "Site público profissional para apresentar a academia, modalidades, horários e planos.",
        "Autenticação segura, áreas protegidas para alunos, permissões por função e MFA/TOTP.",
        "Gestão de alunos, presenças, faixas, perfis e mensalidades.",
        "Painel administrativo, banco PostgreSQL, uploads de vídeo e ferramentas operacionais.",
        "Infraestrutura de produção com Docker, Linux, Nginx, Cloudflare, Redis, HTTPS/TLS e deploys automáticos.",
      ],
      statuses: ["Online", "Em Produção", "Projeto Pago para Cliente"],
      imageAlt: "Página inicial do site da 4Four Fight Academy",
    },
    norad: {
      type: "Site Premium para Empresa Financeira",
      description: "Site institucional premium em desenvolvimento para uma empresa financeira focada em crédito imobiliário e Home Equity. O projeto combina frontend responsivo, estrutura de conteúdo clara e um sistema visual profissional pensado para transmitir confiança e clareza.",
      statuses: ["Em Desenvolvimento", "Prévia Pública", "Projeto Pago para Cliente"],
      imageAlt: "Página inicial do site da Norad Capital",
    },
    contactTitleStart: "Vamos construir algo",
    contactTitleEmphasis: "real.",
    contactDescription: "Tem um projeto, oportunidade ou dúvida? Me conte o que você está tentando construir.",
    startConversation: "Iniciar uma conversa",
    openWhatsApp: "Abrir WhatsApp",
    availableSoon: "Disponível em breve",
    viewMyWork: "Ver meus trabalhos",
    connectProfessionally: "Conectar profissionalmente",
    footer: "Desenvolvido e projetado por Gabriel Marca.",
  },
} as const;

const technologies = [
  "Java & Spring Boot",
  "React & TypeScript",
  "PostgreSQL",
  "Docker & Linux",
  "Node.js & Express",
  "Cloudflare",
  "REST APIs",
] as const;

function TechnologyGroup({ hidden = false }: { hidden?: boolean }) {
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

function HeaderControl({
  label,
  children,
  onClick,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`header-control-button ${className}`}
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ContactAction({
  label,
  detail,
  href,
  icon: Icon,
  color,
  primary = false,
}: {
  label: string;
  detail: string;
  href?: string;
  icon: IconType;
  color: string;
  primary?: boolean;
}) {
  const content = (
    <>
      <span className="contact-action-icon is-platform" aria-hidden="true" style={{ color }}>
        <Icon />
      </span>
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

export function PortfolioApp() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [isOpen, setIsOpen] = useState(false);
  const [settingsReady, setSettingsReady] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const text = copy[language];
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLanguage = window.localStorage.getItem("portfolio-language");
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      const nextLanguage: Language = savedLanguage === "pt" ? "pt" : "en";
      const nextTheme: Theme = savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

      setLanguage(nextLanguage);
      setTheme(nextTheme);
      document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : "en";
      document.documentElement.dataset.theme = nextTheme;
      setSettingsReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!settingsReady) return;
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    window.localStorage.setItem("portfolio-language", language);
  }, [language, settingsReady]);

  useEffect(() => {
    if (!settingsReady) return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme, settingsReady]);

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

  const projectData = [
    {
      name: "4Four Fight Academy",
      type: text.fourFight.type,
      url: "https://4fourfight.com/",
      image: "/images/projects/4fourfight/hero.webp",
      imageAlt: text.fourFight.imageAlt,
      imageWidth: 1853,
      imageHeight: 973,
      statuses: text.fourFight.statuses,
      description: text.fourFight.intro,
      highlights: text.fourFight.highlights,
      technologies: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "Linux", "Cloudflare", "REST APIs"],
    },
    {
      name: "Norad Capital",
      type: text.norad.type,
      url: "https://projeto-norad-capital-site.pages.dev/",
      image: "/images/projects/norad-capital/hero.webp",
      imageAlt: text.norad.imageAlt,
      imageWidth: 1859,
      imageHeight: 971,
      statuses: text.norad.statuses,
      description: text.norad.description,
      highlights: undefined,
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Responsive Design", "Cloudflare Pages"],
    },
  ] as const;

  return (
    <>
      <a className="skip-link" href="#main-content">{text.skip}</a>
      <div className="ambient ambient-purple" aria-hidden="true" />
      <div className="ambient ambient-blue" aria-hidden="true" />
      <header className="site-header">
        <div className="page-container header-inner enhanced-header-inner">
          <a className="brand" href="#home" aria-label={text.brandLabel}>GM<span>.</span></a>
          <nav aria-label={text.primaryNavigation} className="hidden md:block">
            <ul className="flex items-center gap-1 lg:gap-4">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a className="nav-link" href={link.href}>{link.label[language]}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <div className="header-controls">
              <HeaderControl
                label={text.switchLanguage}
                className="language-control"
                onClick={() => setLanguage((current) => current === "en" ? "pt" : "en")}
              >
                <MdLanguage aria-hidden="true" />
                <span>{text.languageCode}</span>
              </HeaderControl>
              <HeaderControl
                label={theme === "dark" ? text.useLightTheme : text.useDarkTheme}
                onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <MdLightMode aria-hidden="true" /> : <MdDarkMode aria-hidden="true" />}
              </HeaderControl>
            </div>
            <div className="md:hidden mobile-menu-wrapper">
              <button
                ref={menuButtonRef}
                type="button"
                className="menu-button"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? text.closeMenu : text.openMenu}
                onClick={() => setIsOpen((open) => !open)}
              >
                <span className="sr-only">{isOpen ? text.closeMenu : text.openMenu}</span>
                <span aria-hidden="true" className={`menu-lines ${isOpen ? "is-open" : ""}`}>
                  <span />
                  <span />
                </span>
              </button>
              {isOpen && (
                <nav id="mobile-navigation" aria-label={text.mobileNavigation} className="mobile-nav-panel">
                  <ul>
                    {navigationLinks.map((link, index) => (
                      <li key={link.href}>
                        <a href={link.href} onClick={() => closeAndFocusSection(link.href)}>
                          <span aria-hidden="true">0{index + 1}</span>
                          {link.label[language]}
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
            <p className="availability"><span aria-hidden="true" />{text.heroAvailability}</p>
            <h1 id="hero-title" tabIndex={-1}>
              <span className="hero-lead whitespace-nowrap">{text.heroLead}</span>{" "}
              <span className="hero-building">{text.heroBuilding} <strong>{text.heroSecure}</strong> {text.heroAnd}</span>{" "}
              <span className="hero-nowrap">{text.heroProduction}</span>{text.heroSystems}
            </h1>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">{text.contactMe}</a>
              <a className="button button-secondary" href="#projects">{text.viewProjects}</a>
            </div>
            <div className="technology-strip" role="group" aria-label="Core technologies">
              <div className="technology-track">
                <TechnologyGroup />
                <TechnologyGroup hidden />
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-glow" aria-hidden="true" />
              <Image
                src="/images/gabriel/portrait.webp"
                alt="Gabriel Marca, Full-Stack Developer"
                width={576}
                height={1024}
                priority
                quality={90}
                sizes="(max-width: 767px) 84vw, (max-width: 1023px) 48vw, 38vw"
                className="portrait-image"
              />
              <div className="interface-card code-card" aria-hidden="true">
                <span>const</span> developer = &#123;<br />
                &nbsp;&nbsp;focus: <b>&apos;production&apos;</b>,<br />
                &nbsp;&nbsp;security: <b>true</b><br />
                &#125;;
              </div>
              <div className="interface-card deploy-card" aria-hidden="true">
                <span>DEPLOYMENT_STATUS</span><br />services online <b>[OK]</b>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="content-section page-container" aria-labelledby="about-title">
          <div className="about-layout">
            <div className="section-heading">
              <p className="technical-label">MODULE :: ABOUT</p>
              <h2 id="about-title" tabIndex={-1}>{text.aboutTitle}</h2>
              <span className="heading-rule" aria-hidden="true" />
            </div>
            <div className="about-copy">
              {text.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>
        <section id="skills" className="content-section page-container" aria-labelledby="skills-title">
          <div className="section-heading is-centered">
            <p className="technical-label">MODULE :: CAPABILITIES</p>
            <h2 id="skills-title" tabIndex={-1}>{text.skillsTitle}</h2>
            <span className="heading-rule" aria-hidden="true" />
          </div>
          <div className="skills-grid enhanced-skills-grid">
            {skillCategories.map((category) => {
              return (
                <article className="skill-card enhanced-skill-card" key={category.code}>
                  <div className="skill-card-header">
                    <span className="skill-icon" aria-hidden="true"><SkillGlyph icon={category.icon} /></span>
                    <h3>{category.name[language]}</h3>
                    <span className="skill-index" aria-hidden="true">{category.code}</span>
                  </div>
                  <ul>
                    {category.items.map((item) => {
                      return (
                        <li key={item.label.en}>
                          <span className="skill-item-icon" aria-hidden="true" style={{ color: item.color }}><SkillGlyph icon={item.icon} /></span>
                          <span>{item.label[language]}</span>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>
        <section id="projects" className="content-section page-container" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="technical-label">MODULE :: PROJECTS</p>
            <h2 id="projects-title" tabIndex={-1}>{text.projectsTitle}</h2>
            <span className="heading-rule" aria-hidden="true" />
          </div>
          <div className="projects-list">
            {projectData.map((project, index) => {
              const isReversed = index % 2 === 1;
              return (
                <article className={`project-card ${isReversed ? "is-reversed" : ""}`} key={project.name}>
                  <a className="project-image-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${text.viewLiveProject}: ${project.name}`}>
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      quality={90}
                      sizes="(max-width: 1099px) 100vw, 58vw"
                      className="project-image"
                    />
                  </a>
                  <div className="project-content">
                    <p className="project-number">PROJECT_0{index + 1}</p>
                    <p className="project-type">{project.type}</p>
                    <h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                    <ul className="status-list" aria-label={text.projectStatus}>
                      {project.statuses.map((status) => <li key={status}>{status}</li>)}
                    </ul>
                    <p className="project-description project-introduction">{project.description}</p>
                    {project.highlights && (
                      <ul className="project-highlights">
                        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                      </ul>
                    )}
                    <ul className="technology-list" aria-label={text.technologiesUsed}>
                      {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    <a className="project-action" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${text.viewLiveProject}: ${project.name}`}>
                      {text.viewLiveProject}
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
            <p className="technical-label">CHANNEL :: CONTACT</p>
            <h2 id="contact-title">{text.contactTitleStart} <em>{text.contactTitleEmphasis}</em></h2>
            <p>{text.contactDescription}</p>
            <div className="contact-links">
              <ContactAction label="Email" detail={text.startConversation} href={`mailto:${emailAddress}`} icon={SiGmail} color="#EA4335" primary />
              <ContactAction label="WhatsApp" detail={whatsappUrl ? text.openWhatsApp : text.availableSoon} href={whatsappUrl} icon={FaWhatsapp} color="#25D366" />
              <ContactAction label="GitHub" detail={text.viewMyWork} href="https://github.com/brielmarca" icon={FaGithub} color="#AEBBD0" />
              <ContactAction label="LinkedIn" detail={text.connectProfessionally} href="https://www.linkedin.com/in/gabrielmarca" icon={FaLinkedinIn} color="#0A66C2" />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-container footer-inner">
          <p>{text.footer} {new Date().getFullYear()}</p>
          <nav aria-label="Social links">
            <a href="https://github.com/brielmarca" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/gabrielmarca" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${emailAddress}`}>Email</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
