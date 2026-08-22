# STRATA — Architecture · Engineering · Construction Studio Template

> A digital studio system for firms whose work deserves to be **experienced**, not listed.

STRATA is a premium website template for architecture firms, interior design studios,
structural engineering practices, construction companies, urban planners and
design-build studios. Museum-catalogue aesthetic, Swiss typography, deliberately slow motion.

![Stack](https://img.shields.io/badge/Next.js-15-black) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8) ![License](https://img.shields.io/badge/License-MIT-green)

---

## The System

| Pages (13) | Signature Components |
| --- | --- |
| Home | Project Story (design intent + pull quote) |
| Projects (filterable index) | Project Data Panel |
| Project Detail ×12 | Architectural Gallery (editorial plates) |
| Studio | SVG Floor Plans & Sections |
| Services + 9 Service Details | Material Palette swatches |
| Team | Awards Timeline (vertical) |
| Journal + Articles ×6 | Commission Intake form |
| Awards, Commission, Contact, 404 | Hero slideshow with `01 / 12` counter |

## Visual Identity

- **Palette** — Bone `#EFEAE2` · Ink `#171512` · Concrete `#857F74` · Mist `#A9A295` · Paper `#E6DFD2`
- **Typography** — Fraunces (display serif) + Inter (sans) + IBM Plex Mono (data labels), via `next/font`
- **Motion** — Slow only: 1.1s reveals, 9s hero drift, 0.7s hover transforms. Honors `prefers-reduced-motion`.

## Stack

Free & open source only:

- [Next.js 15](https://nextjs.org) — App Router, static generation, API routes
- [Tailwind CSS v4](https://tailwindcss.com) — CSS-first design tokens in `globals.css`
- [TypeScript](https://typescriptlang.org) — strict mode
- Zero CMS, zero database, zero paid dependencies

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm run start      # serve production build
```

## Deploy to Vercel

1. Push this repo to GitHub *(already done if you're reading this on GitHub)*.
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** this repository.
3. Framework preset is auto-detected (**Next.js**) — click **Deploy**. No env vars required.
4. Optional: set `NEXT_PUBLIC_SITE_URL` to your production domain for correct SEO/sitemap URLs.

That's it — builds are fully static (`generateStaticParams`) except the commission API route.

## Customization

Everything lives in `src/content/` — no code changes needed to rebrand:

| File | What it controls |
| --- | --- |
| `src/lib/site.ts` | Name, tagline, emails, offices, nav |
| `src/content/projects.ts` | All 12 projects: data, narrative, gallery, plans, materials, credits |
| `src/content/services.ts` | 9 services with scope + process |
| `src/content/team.ts` | People & portraits |
| `src/content/journal.ts` | Essays / news / project stories |
| `src/content/awards.ts` | Awards timeline entries |
| `src/app/globals.css` | Design tokens (colors, fonts, easing) |

### Images

Photography uses the Unsplash CDN (free license). Replace any `photoId` in
`src/content/projects.ts` with your own image IDs or swap `unsplash()` for local files
in `/public`. Floor plans are hand-drawn inline SVG (`src/components/floor-plan.tsx`).

### Commission Form

Submissions POST to `/api/commission`, which validates and returns a reference number
(`MRD-YYYY-NNNN`). To receive them by email, plug in your provider inside
`src/app/api/commission/route.ts` — e.g. [Resend](https://resend.com):

```bash
npm i resend
```

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "enquiries@yourdomain.com",
  to: "studio@yourdomain.com",
  subject: `Commission enquiry ${reference}`,
  text: JSON.stringify(data, null, 2),
});
```

Add `RESEND_API_KEY` in Vercel → Settings → Environment Variables.

## License

MIT — use it for client work, sell sites built with it, make it yours.
