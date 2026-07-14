# Gabriel Marca Portfolio

Personal portfolio of Gabriel Marca, a Full-Stack Developer building secure and production-ready systems.

## Live Site

https://brielmarca-portfolio.pages.dev

Pushes to `main` automatically trigger production deployments on Cloudflare Pages.

## Status

The portfolio is under active development. The current version provides the core single-page experience and is being refined for production use.

## Technology Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Implemented Sections

- Home and introduction
- About
- Skills
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

To run the production build locally after building:

```bash
npm run start
```

## Environment Variables

Copy `.env.example` to `.env.local` and provide the public WhatsApp contact URL when available:

```env
NEXT_PUBLIC_WHATSAPP_URL=
```

When this value is not configured, the WhatsApp contact action remains unavailable. Do not commit `.env.local` or credentials.

## Project Structure

```text
public/images/     Optimized application images
src/app/           Next.js App Router entry points and global styles
src/components/    Reusable portfolio sections and interface components
src/data/          Structured navigation, project, skill, and contact data
src/types/         Shared TypeScript types
```

This repository does not currently include a license.
