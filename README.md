# Fratelanza

Fratelanza — a small React + Vite + TypeScript site showcasing a digital agency UI built with Tailwind CSS and shadcn-style components.

## Features
- Clean, responsive UI with Tailwind CSS
- Shadcn-style UI primitives (Button, Card, Badge, Input, Select, Textarea, Label)
- AOS scroll animations
- Routing via `react-router-dom`
- SEO meta tags and social preview (`index.html` + `public/og-image.svg`)
- Accessible navigation with active state and a back-to-top button

## Quick start
Requirements: Node.js 18+ and npm.

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

## Project structure (key files)
- `index.html` — app entry/SEO metadata
- `src/main.tsx` — app bootstrap and AOS init
- `src/App.tsx` — router and layout
- `src/layouts/Layout.tsx` — global layout (Navbar, Footer, BackToTop)
- `src/components` — UI components and page sections
- `public/` — favicon and social preview image

## Notes
- The contact form uses shadcn form primitives from `src/components/ui`.
- Logo and social preview assets are in `public/`.


## Pages
An overview of the main routes and what they contain:

- `Home` (`/`) — composed of `Hero`, `Services` overview, `WhyChooseUs`, `RecentProjects`, `Testimonials`, and a CTA section.
- `About Us` (`/about-us`) — company story, values and team sections.
- `Services` (`/services`) — detailed services and offerings.
- `Portfolio` (`/portfolio`) — recent projects and case studies.
- `Contact` (`/contact-us`) — contact overview, cards and the contact form.
- `Not Found` (`*`) — fallback page when route not found.

## Notable components
- `src/components/Navbar.tsx` — site navigation with active-route highlighting.
- `src/components/Footer.tsx` — footer with contact details and links.
- `src/components/contact/ContactForm.tsx` — contact form built with shadcn primitives.
- `src/components/ui/*` — shared UI primitives (Button, Card, Badge, Input, Select, Textarea, Label, Tabs).
- `src/components/BackToTop.tsx` — floating back-to-top button.

## Major packages used
Key dependencies (see `package.json` for full list):

- React & routing: `react`, `react-dom`, `react-router-dom`
- Build & dev: `vite`, `typescript`, `@vitejs/plugin-react`
- Styling: `tailwindcss`, `@tailwindcss/vite`, `tailwind-merge`, `tw-animate-css`
- UI primitives & utilities: `shadcn`, `radix-ui`, `class-variance-authority`, `clsx`, `tailwind-merge`
- Icons & fonts: `@fortawesome/fontawesome-free`, `@hugeicons/react`, `@fontsource-variable/inter`, `lucide-react`
- Animations: `aos`

## Deployment notes
- This is a static SPA output by Vite. Build with:

```bash
npm run build
```

and serve the `dist/` directory on a static host (Vercel, Netlify, S3 + CloudFront, etc.).

## Contributing
- Feel free to open issues or PRs. For local development:

```bash
npm install
npm run dev
```

Follow the existing code style and Tailwind utility patterns.

---
