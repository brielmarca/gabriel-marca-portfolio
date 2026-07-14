import type { Locale, SkillIconId } from "@/types/portfolio";

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly Widen<Item>[]
    : T extends object
      ? { readonly [Key in keyof T]: Widen<T[Key]> }
      : T;

const english = {
  metadata: {
    title: "Gabriel Marca | Full-Stack Developer",
    description: "Gabriel Marca builds secure, production-ready web systems for businesses.",
  },
  accessibility: {
    skip: "Skip to main content",
    brand: "Gabriel Marca, home",
    primaryNavigation: "Primary navigation",
    mobileNavigation: "Mobile navigation",
    socialLinks: "Social links",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    coreTechnologies: "Core technologies",
    projectStatus: "Project status",
    technologiesUsed: "Technologies used",
    portraitAlt: "Gabriel Marca, Full-Stack Developer",
    externalProject: "Open {project} in a new tab",
    externalLink: "Opens in a new tab",
    contactAction: "Contact Gabriel via {method}",
  },
  language: {
    change: "Change language",
    menu: "Choose a language",
    selected: "Selected language: {language}",
    en: "English",
    pt: "Português",
    es: "Español",
  },
  theme: {
    light: "Switch to light mode",
    dark: "Switch to dark mode",
  },
  navigation: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  annotations: {
    about: "MODULE :: ABOUT",
    education: "// education & direction",
    skills: "MODULE :: CAPABILITIES",
    projects: "MODULE :: PROJECTS",
    contact: "CHANNEL :: CONTACT",
  },
  hero: {
    availability: "Open to client projects and future opportunities",
    lead: "Full-Stack Developer",
    building: "building",
    secure: "secure",
    and: "and",
    production: "production-ready",
    systems: " systems.",
    contact: "Contact Me",
    projects: "View My Projects",
  },
  about: {
    title: "The Story",
    paragraphs: [
      "I’m Gabriel Marca, a Full-Stack Developer from Brazil. I lived in Portugal for several years, and that was where I started learning programming about four years ago. What began as curiosity became something I took seriously, and since then I’ve kept improving by building projects, solving problems and taking on more complex challenges.",
      "Today, I work on paid projects for businesses, handling everything from frontend and backend development to databases, deployment and infrastructure. Security is part of that work from the beginning, with authentication, permissions, protected data, HTTPS/TLS and careful credential handling built into the process.",
      "I also mentor six students, helping them understand how software is really built instead of just copying code. I’m still learning every day, but now I’m doing it while creating systems that people and companies actually use.",
    ],
  },
  education: {
    title: "Education & Next Step",
    ageLocation: "{age} years old · {country}",
    countries: { brazil: "Brazil" },
    statuses: { planned: "Planned" },
    items: {
      programming: {
        label: "Programming Studies",
        title: "Professional Programming Studies",
        description: "Studied programming during secondary education in Portugal.",
      },
      highSchool: {
        label: "High School",
        title: "Secondary Education",
        description: "Completed in Brazil.",
      },
      universityGoal: {
        label: "University Goal",
        title: "Informatics Engineering",
        description: "Planning to pursue a degree in Informatics Engineering.",
      },
    },
  },
  skillsSection: { title: "Technical Arsenal", groups: { technologies: "Technologies", engineeringConcepts: "Engineering concepts" } },
  skillLabels: {
    backend: "Backend", frontend: "Frontend", databases: "Databases", infrastructure: "Infrastructure", security: "Security", languages: "Languages", tools: "Tools",
    springBoot: "Spring Boot", nodeJs: "Node.js", express: "Express", restApi: "REST APIs", businessLogic: "Business Logic", react: "React", html5: "HTML5", css3: "CSS3", tailwindCss: "Tailwind CSS", vite: "Vite", responsiveDesign: "Responsive Design", postgresql: "PostgreSQL", mysql: "MySQL", mariadb: "MariaDB", mongodb: "MongoDB", redis: "Redis", supabase: "Supabase", sqlite: "SQLite", prisma: "Prisma", dataModeling: "Data Modeling", databaseIndexing: "Database Indexing", queryOptimization: "Query Optimization", transactions: "Transactions", databaseMigrations: "Database Migrations", backupStrategy: "Backup Strategy", docker: "Docker", dockerCompose: "Docker Compose", linux: "Linux", vps: "VPS", nginx: "Nginx", cloudflare: "Cloudflare", cloudflarePages: "Cloudflare Pages", productionDeployment: "Production Deployment", logging: "Logging", errorTracking: "Error Tracking", caching: "Caching", cdn: "CDN", authenticationAuthorization: "Authentication & Authorization", jwt: "JWT Authentication", springSecurity: "Spring Security", roleBasedAccess: "Role-Based Access Control", mfa: "MFA / TOTP", rateLimiting: "Rate Limiting", cors: "CORS", https: "HTTPS / TLS", secureCredentials: "Secure Credential Handling", environmentVariables: "Environment Variables", java: "Java", javascript: "JavaScript", typescript: "TypeScript", python: "Python", php: "PHP", c: "C", cplusplus: "C++", csharp: "C#", git: "Git", github: "GitHub", intellijIdea: "IntelliJ IDEA", visualStudioCode: "Visual Studio Code", postman: "Postman", opencode: "OpenCode",
  } satisfies Record<SkillIconId, string>,
  projectsSection: {
    title: "Featured Work",
    action: "View Live Project",
    statuses: { live: "Live", production: "In Production", paid: "Paid Client Project", development: "In Development", preview: "Public Preview" },
    technologyLabels: { "Responsive Design": "Responsive Design" },
    fourFight: {
      type: "Full-Stack Gym Management System",
      description: "A full-stack platform developed for a martial arts academy. The system includes the public website, authentication, protected areas, administration tools, student management, monthly membership flows, video uploads, database management, VPS infrastructure, HTTPS/TLS and production deployment.",
      imageAlt: "4Four Fight Academy website home page",
    },
    norad: {
      type: "Premium Finance Website",
      description: "A premium institutional website being developed for a finance company focused on real estate credit and Home Equity. The project combines a responsive frontend, clear content structure and a professional visual system designed around trust and clarity.",
      imageAlt: "Norad Capital website home page",
    },
  },
  contact: {
    titleStart: "Let’s build something",
    titleEmphasis: "real.",
    description: "Have a project, opportunity or question? Tell me what you are trying to build.",
    email: "Email",
    whatsapp: "WhatsApp",
    github: "GitHub",
    linkedin: "LinkedIn",
    emailAction: "Send an email",
    whatsappAction: "Start a conversation",
    availableSoon: "Available soon",
    githubAction: "View repositories",
    linkedinAction: "View professional profile",
  },
  footer: "Built and designed by Gabriel Marca.",
} as const;

export type Messages = Widen<typeof english>;

const portuguese = {
  metadata: {
    title: "Gabriel Marca | Desenvolvedor Full-Stack",
    description: "Gabriel Marca desenvolve sistemas web seguros e prontos para produção para empresas.",
  },
  accessibility: {
    skip: "Pular para o conteúdo principal",
    brand: "Gabriel Marca, início",
    primaryNavigation: "Navegação principal",
    mobileNavigation: "Navegação móvel",
    socialLinks: "Links sociais",
    openMenu: "Abrir menu de navegação",
    closeMenu: "Fechar menu de navegação",
    coreTechnologies: "Principais tecnologias",
    projectStatus: "Status do projeto",
    technologiesUsed: "Tecnologias utilizadas",
    portraitAlt: "Gabriel Marca, Desenvolvedor Full-Stack",
    externalProject: "Abrir {project} em uma nova aba",
    externalLink: "Abre em uma nova aba",
    contactAction: "Entrar em contato com Gabriel por {method}",
  },
  language: {
    change: "Alterar idioma",
    menu: "Escolha um idioma",
    selected: "Idioma selecionado: {language}",
    en: "English",
    pt: "Português",
    es: "Español",
  },
  theme: {
    light: "Mudar para o modo claro",
    dark: "Mudar para o modo escuro",
  },
  navigation: { home: "Início", about: "Sobre", skills: "Habilidades", projects: "Projetos", contact: "Contato" },
  annotations: { about: "MÓDULO :: SOBRE", education: "// formação e direção", skills: "MÓDULO :: HABILIDADES", projects: "MÓDULO :: PROJETOS", contact: "CANAL :: CONTATO" },
  hero: {
    availability: "Disponível para projetos de clientes e futuras oportunidades",
    lead: "Desenvolvedor Full-Stack",
    building: "criando sistemas",
    secure: "seguros",
    and: "e",
    production: "prontos para produção",
    systems: ".",
    contact: "Entre em contato",
    projects: "Ver meus projetos",
  },
  about: {
    title: "Minha trajetória",
    paragraphs: [
      "Sou Gabriel Marca, Desenvolvedor Full-Stack do Brasil. Vivi em Portugal por vários anos, e foi lá que comecei a aprender programação há cerca de quatro anos. O que começou como curiosidade virou algo que passei a levar a sério e, desde então, continuo evoluindo ao criar projetos, resolver problemas e assumir desafios cada vez mais complexos.",
      "Hoje, trabalho em projetos pagos para empresas, cuidando desde o desenvolvimento frontend e backend até bancos de dados, deploy e infraestrutura. A segurança faz parte desse trabalho desde o início, com autenticação, permissões, proteção de dados, HTTPS/TLS e cuidado com credenciais incorporados ao processo.",
      "Também acompanho seis alunos como mentor, ajudando-os a entender como um software é realmente construído, em vez de apenas copiar código. Continuo aprendendo todos os dias, mas agora faço isso enquanto crio sistemas que pessoas e empresas realmente utilizam.",
    ],
  },
  education: {
    title: "Formação e próximo passo",
    ageLocation: "{age} anos · {country}",
    countries: { brazil: "Brasil" },
    statuses: { planned: "Planejado" },
    items: {
      programming: {
        label: "Estudos em Programação",
        title: "Curso Profissional de Programação",
        description: "Estudei programação durante o ensino secundário em Portugal.",
      },
      highSchool: {
        label: "Ensino Médio",
        title: "Conclusão da educação básica",
        description: "Concluído no Brasil.",
      },
      universityGoal: {
        label: "Objetivo universitário",
        title: "Engenharia Informática",
        description: "Pretendo cursar Engenharia Informática.",
      },
    },
  },
  skillsSection: { title: "Arsenal técnico", groups: { technologies: "Tecnologias", engineeringConcepts: "Conceitos de engenharia" } },
  skillLabels: {
    backend: "Backend", frontend: "Frontend", databases: "Bancos de dados", infrastructure: "Infraestrutura", security: "Segurança", languages: "Linguagens", tools: "Ferramentas",
    springBoot: "Spring Boot", nodeJs: "Node.js", express: "Express", restApi: "REST APIs", businessLogic: "Lógica de negócio", react: "React", html5: "HTML5", css3: "CSS3", tailwindCss: "Tailwind CSS", vite: "Vite", responsiveDesign: "Design responsivo", postgresql: "PostgreSQL", mysql: "MySQL", mariadb: "MariaDB", mongodb: "MongoDB", redis: "Redis", supabase: "Supabase", sqlite: "SQLite", prisma: "Prisma", dataModeling: "Modelagem de dados", databaseIndexing: "Indexação de banco de dados", queryOptimization: "Otimização de consultas", transactions: "Transações", databaseMigrations: "Migrações de banco de dados", backupStrategy: "Estratégia de backup", docker: "Docker", dockerCompose: "Docker Compose", linux: "Linux", vps: "VPS", nginx: "Nginx", cloudflare: "Cloudflare", cloudflarePages: "Cloudflare Pages", productionDeployment: "Deploy em produção", logging: "Logs", errorTracking: "Rastreamento de erros", caching: "Cache", cdn: "CDN", authenticationAuthorization: "Autenticação e autorização", jwt: "Autenticação JWT", springSecurity: "Spring Security", roleBasedAccess: "Controle de acesso baseado em funções", mfa: "MFA / TOTP", rateLimiting: "Rate Limiting", cors: "CORS", https: "HTTPS / TLS", secureCredentials: "Tratamento seguro de credenciais", environmentVariables: "Variáveis de ambiente", java: "Java", javascript: "JavaScript", typescript: "TypeScript", python: "Python", php: "PHP", c: "C", cplusplus: "C++", csharp: "C#", git: "Git", github: "GitHub", intellijIdea: "IntelliJ IDEA", visualStudioCode: "Visual Studio Code", postman: "Postman", opencode: "OpenCode",
  },
  projectsSection: {
    title: "Projetos em destaque",
    action: "Ver projeto ao vivo",
    statuses: { live: "Ao vivo", production: "Em produção", paid: "Projeto pago para cliente", development: "Em desenvolvimento", preview: "Prévia pública" },
    technologyLabels: { "Responsive Design": "Design responsivo" },
    fourFight: {
      type: "Sistema Full-Stack de gestão para academia",
      description: "Uma plataforma Full-Stack desenvolvida para uma academia de artes marciais. O sistema inclui o site público, autenticação, áreas protegidas, ferramentas administrativas, gestão de alunos, fluxos de mensalidades, upload de vídeos, gestão de banco de dados, infraestrutura em VPS, HTTPS/TLS e deploy em produção.",
      imageAlt: "Página inicial do site da 4Four Fight Academy",
    },
    norad: {
      type: "Site premium para o setor financeiro",
      description: "Um site institucional premium em desenvolvimento para uma empresa do setor financeiro focada em crédito imobiliário e Home Equity. O projeto combina um frontend responsivo, uma estrutura de conteúdo clara e um sistema visual profissional desenvolvido em torno de confiança e clareza.",
      imageAlt: "Página inicial do site da Norad Capital",
    },
  },
  contact: {
    titleStart: "Vamos construir algo",
    titleEmphasis: "real.",
    description: "Tem um projeto, oportunidade ou pergunta? Conte o que você está tentando construir.",
    email: "E-mail",
    whatsapp: "WhatsApp",
    github: "GitHub",
    linkedin: "LinkedIn",
    emailAction: "Enviar um e-mail",
    whatsappAction: "Iniciar uma conversa",
    availableSoon: "Em breve",
    githubAction: "Ver repositórios",
    linkedinAction: "Ver perfil profissional",
  },
  footer: "Desenvolvido e projetado por Gabriel Marca.",
} as const satisfies Messages;

const spanish = {
  metadata: {
    title: "Gabriel Marca | Desarrollador Full-Stack",
    description: "Gabriel Marca desarrolla sistemas web seguros y listos para producción para empresas.",
  },
  accessibility: {
    skip: "Saltar al contenido principal",
    brand: "Gabriel Marca, inicio",
    primaryNavigation: "Navegación principal",
    mobileNavigation: "Navegación móvil",
    socialLinks: "Enlaces sociales",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
    coreTechnologies: "Tecnologías principales",
    projectStatus: "Estado del proyecto",
    technologiesUsed: "Tecnologías utilizadas",
    portraitAlt: "Gabriel Marca, Desarrollador Full-Stack",
    externalProject: "Abrir {project} en una nueva pestaña",
    externalLink: "Se abre en una nueva pestaña",
    contactAction: "Contactar con Gabriel por {method}",
  },
  language: {
    change: "Cambiar idioma",
    menu: "Elige un idioma",
    selected: "Idioma seleccionado: {language}",
    en: "English",
    pt: "Português",
    es: "Español",
  },
  theme: {
    light: "Cambiar al modo claro",
    dark: "Cambiar al modo oscuro",
  },
  navigation: { home: "Inicio", about: "Sobre mí", skills: "Habilidades", projects: "Proyectos", contact: "Contacto" },
  annotations: { about: "MÓDULO :: SOBRE MÍ", education: "// formación y dirección", skills: "MÓDULO :: HABILIDADES", projects: "MÓDULO :: PROYECTOS", contact: "CANAL :: CONTACTO" },
  hero: {
    availability: "Disponible para proyectos de clientes y futuras oportunidades",
    lead: "Desarrollador Full-Stack",
    building: "que crea sistemas",
    secure: "seguros",
    and: "y",
    production: "listos para producción",
    systems: ".",
    contact: "Contáctame",
    projects: "Ver mis proyectos",
  },
  about: {
    title: "Mi trayectoria",
    paragraphs: [
      "Soy Gabriel Marca, desarrollador Full-Stack de Brasil. Viví en Portugal durante varios años, y fue allí donde empecé a aprender programación hace unos cuatro años. Lo que comenzó como curiosidad se convirtió en algo que decidí tomar en serio y, desde entonces, he seguido mejorando al crear proyectos, resolver problemas y asumir desafíos cada vez más complejos.",
      "Hoy trabajo en proyectos remunerados para empresas, encargándome del desarrollo frontend y backend, las bases de datos, el deploy y la infraestructura. La seguridad forma parte del trabajo desde el principio, con autenticación, permisos, protección de datos, HTTPS/TLS y un manejo cuidadoso de credenciales integrados en el proceso.",
      "También acompaño como mentor a seis estudiantes, ayudándolos a entender cómo se construye realmente el software en lugar de limitarse a copiar código. Sigo aprendiendo todos los días, pero ahora lo hago mientras creo sistemas que personas y empresas usan de verdad.",
    ],
  },
  education: {
    title: "Formación y próximo paso",
    ageLocation: "{age} años · {country}",
    countries: { brazil: "Brasil" },
    statuses: { planned: "Planificado" },
    items: {
      programming: {
        label: "Estudios de Programación",
        title: "Estudios profesionales de Programación",
        description: "Estudié programación durante la educación secundaria en Portugal.",
      },
      highSchool: {
        label: "Educación secundaria",
        title: "Finalización de la educación básica",
        description: "Concluida en Brasil.",
      },
      universityGoal: {
        label: "Objetivo universitario",
        title: "Ingeniería Informática",
        description: "Planeo estudiar Ingeniería Informática.",
      },
    },
  },
  skillsSection: { title: "Arsenal técnico", groups: { technologies: "Tecnologías", engineeringConcepts: "Conceptos de ingeniería" } },
  skillLabels: {
    backend: "Backend", frontend: "Frontend", databases: "Bases de datos", infrastructure: "Infraestructura", security: "Seguridad", languages: "Lenguajes", tools: "Herramientas",
    springBoot: "Spring Boot", nodeJs: "Node.js", express: "Express", restApi: "REST APIs", businessLogic: "Lógica de negocio", react: "React", html5: "HTML5", css3: "CSS3", tailwindCss: "Tailwind CSS", vite: "Vite", responsiveDesign: "Diseño responsivo", postgresql: "PostgreSQL", mysql: "MySQL", mariadb: "MariaDB", mongodb: "MongoDB", redis: "Redis", supabase: "Supabase", sqlite: "SQLite", prisma: "Prisma", dataModeling: "Modelado de datos", databaseIndexing: "Indexación de bases de datos", queryOptimization: "Optimización de consultas", transactions: "Transacciones", databaseMigrations: "Migraciones de bases de datos", backupStrategy: "Estrategia de copias de seguridad", docker: "Docker", dockerCompose: "Docker Compose", linux: "Linux", vps: "VPS", nginx: "Nginx", cloudflare: "Cloudflare", cloudflarePages: "Cloudflare Pages", productionDeployment: "Deploy en producción", logging: "Registros", errorTracking: "Seguimiento de errores", caching: "Caché", cdn: "CDN", authenticationAuthorization: "Autenticación y autorización", jwt: "Autenticación JWT", springSecurity: "Spring Security", roleBasedAccess: "Control de acceso basado en roles", mfa: "MFA / TOTP", rateLimiting: "Rate Limiting", cors: "CORS", https: "HTTPS / TLS", secureCredentials: "Gestión segura de credenciales", environmentVariables: "Variables de entorno", java: "Java", javascript: "JavaScript", typescript: "TypeScript", python: "Python", php: "PHP", c: "C", cplusplus: "C++", csharp: "C#", git: "Git", github: "GitHub", intellijIdea: "IntelliJ IDEA", visualStudioCode: "Visual Studio Code", postman: "Postman", opencode: "OpenCode",
  },
  projectsSection: {
    title: "Proyectos destacados",
    action: "Ver proyecto en vivo",
    statuses: { live: "En vivo", production: "En producción", paid: "Proyecto remunerado para cliente", development: "En desarrollo", preview: "Vista previa pública" },
    technologyLabels: { "Responsive Design": "Diseño responsivo" },
    fourFight: {
      type: "Sistema Full-Stack de gestión para academia",
      description: "Una plataforma Full-Stack desarrollada para una academia de artes marciales. El sistema incluye el sitio público, autenticación, áreas protegidas, herramientas administrativas, gestión de alumnos, flujos de mensualidades, carga de videos, gestión de bases de datos, infraestructura en VPS, HTTPS/TLS y deploy en producción.",
      imageAlt: "Página de inicio del sitio web de 4Four Fight Academy",
    },
    norad: {
      type: "Sitio web premium para el sector financiero",
      description: "Un sitio institucional premium en desarrollo para una empresa del sector financiero enfocada en crédito inmobiliario y Home Equity. El proyecto combina un frontend responsivo, una estructura de contenido clara y un sistema visual profesional diseñado en torno a la confianza y la claridad.",
      imageAlt: "Página de inicio del sitio web de Norad Capital",
    },
  },
  contact: {
    titleStart: "Construyamos algo",
    titleEmphasis: "real.",
    description: "¿Tienes un proyecto, una oportunidad o una pregunta? Cuéntame qué estás intentando construir.",
    email: "Correo",
    whatsapp: "WhatsApp",
    github: "GitHub",
    linkedin: "LinkedIn",
    emailAction: "Enviar un correo",
    whatsappAction: "Iniciar una conversación",
    availableSoon: "Próximamente",
    githubAction: "Ver repositorios",
    linkedinAction: "Ver perfil profesional",
  },
  footer: "Desarrollado y diseñado por Gabriel Marca.",
} as const satisfies Messages;

export const messages = {
  en: english,
  pt: portuguese,
  es: spanish,
} as const satisfies Record<Locale, Messages>;

export const documentLanguages: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
  es: "es",
};
