# Gabriel Marca Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://brielmarca-portfolio.pages.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Personal portfolio of **Gabriel Marca**, a Full-Stack Developer focused on building secure, responsive and production-ready systems.

## Live Website

**[brielmarca-portfolio.pages.dev](https://brielmarca-portfolio.pages.dev)**

Every push to `main` automatically triggers a production deployment through Cloudflare Pages.

## Highlights

- Dark and Light Mode with saved user preference
- Complete localization in English, Brazilian Portuguese and Spanish
- Responsive layout validated from mobile to large desktop screens
- Accessible keyboard navigation and reduced-motion support
- Real paid client projects
- Technology stack with categorized icons
- Production engineering and database knowledge
- Direct contact through Email, WhatsApp, LinkedIn and GitHub
- Static Next.js export deployed automatically on Cloudflare Pages

## Technology Stack

- **Framework:** Next.js App Router
- **Interface:** React, TypeScript and Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Cloudflare Pages
- **Architecture:** Static export

## Featured Projects

### 4Four Fight Academy

A Full-Stack platform developed for a martial arts academy, including authentication, protected areas, administration tools, student management, database management, VPS infrastructure, HTTPS/TLS and production deployment.

**Live:** [4fourfight.com](https://4fourfight.com/)

### Norad Capital

A premium institutional website for a finance company focused on real estate credit and Home Equity, with a responsive frontend and a professional visual system built around trust and clarity.

**Preview:** [projeto-norad-capital-site.pages.dev](https://projeto-norad-capital-site.pages.dev/)

## Main Sections

- Introduction
- About
- Education and next step
- Technical skills
- Featured projects
- Contact

## Local Development

Requirements:

- Node.js 20 or later
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Validation

```bash
npm run lint
npm run type-check
npm run build
```

The production build generates a static export in `out/`.

## Environment Variables

Create an ignored `.env.local` file when configuring the WhatsApp contact destination locally:

```env
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/message/GLN4TWI6DY3HH1
```

Do not commit `.env.local`, credentials or deployment tokens.

## Project Structure

```text
public/images/     Optimized portfolio images
src/app/           Next.js entry points and global styles
src/components/    Reusable sections and interface components
src/data/          Structured project, skill and contact data
src/i18n/          Typed multilingual messages and locale state
src/types/         Shared TypeScript types
```

## Contact

- **Portfolio:** [brielmarca-portfolio.pages.dev](https://brielmarca-portfolio.pages.dev)
- **GitHub:** [github.com/brielmarca](https://github.com/brielmarca)
- **LinkedIn:** [linkedin.com/in/gabrielmarca](https://www.linkedin.com/in/gabrielmarca)
- **Email:** [brielmarcacontact@gmail.com](mailto:brielmarcacontact@gmail.com)

---

Built and designed by Gabriel Marca.