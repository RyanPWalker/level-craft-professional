# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

Marketing website for **Level Craft Construction** ("Level Craft" for short), a residential and commercial general contractor in Orem, Utah. It is a small multi-page Next.js site, statically exported and hosted on GitHub Pages.

This repo is the **professional** redesign, started from a copy of `RyanPWalker/level-craft` (the pixel-art/gaming-themed version). Content, SEO, and business facts are shared; the theme and layout differ.

## Commands

```bash
yarn install   # install deps (Yarn 4 via Corepack — run `corepack enable` once)
yarn dev       # dev server at http://localhost:3000
yarn build     # static export to ./out — run this to verify changes
yarn start     # serve ./out locally
```

There is no test suite or linter yet. `yarn build` (which type-checks) is the verification step.

## Layout

- `app/site.ts`: business facts (legal name, owner, location, service area, home `county`, and `serviceCities`, license, phone, Formspree endpoint) and the `servicePages` list that drives the nav, footer, sitemap, and "Other services" links
- `app/faqs.ts`: FAQ answers shared across service pages (licensing, estimates, service area)
- `app/layout.tsx`: root layout, default metadata (`metadataBase`, title template), and the business JSON-LD
- `app/seo.tsx`: SEO helpers. `pageMetadata()` builds each page's title, description, canonical URL, and Open Graph/Twitter tags. `JsonLd` renders structured data.
- `app/sitemap.ts`, `app/robots.ts`: generate `sitemap.xml` and `robots.txt` at build time. The sitemap lists the home page, the contact page, and `servicePages`.
- `app/og.png/route.tsx`: generates the social share image (`/og.png`) at build time
- `app/contact/`: contact page with the estimate request form (`components/ContactForm.tsx`, a client component). The form posts to Formspree (`site.formEndpoint`); name and phone are required, email and message optional. The estimate buttons across the site link here.
- `app/page.tsx`: the homepage. Content (services, process steps, values) lives in arrays at the top of the file.
- `app/home-renovation/`, `app/basement-finishing/`, `app/concrete/`, `app/commercial/`, `app/hvac/`: service landing pages, to be built out further for SEO and targeting. Each currently renders the shared `ServicePage` template with its own content and `metadata`. A page defines a `page` object (path with trailing slash, title, description), passes it to `pageMetadata()` and `ServicePage`, which emits `Service`, `BreadcrumbList`, and `FAQPage` JSON-LD and renders the page's `faqs` plus links to the other service pages. FAQ answers must be visible on the page and truthful. A page can diverge from the template when it needs to.
- `app/components/SiteHeader.tsx` (top bar with license and phone, sticky header), `NavLinks.tsx` (client component: desktop links, the mobile menu, and current-page highlighting), `SiteFooter.tsx` (multi-column), `ContactCTA.tsx`: shared across pages. The header and footer are rendered in `app/layout.tsx`.
- `app/components/Logo.tsx`: stand-in spirit-level mark plus the wordmark. Keep it in sync with `app/icon.svg`.
- `app/components/Icon.tsx`: line icons (24×24, `currentColor` strokes), referenced by name
- `app/globals.css`: all styles. Plain CSS, with design tokens as custom properties on `:root`.
- `app/icon.svg`: favicon (the spirit-level mark)
- `public/`: static assets, copied as-is into `out/`
- `next.config.ts`: static export config. `basePath` comes from `PAGES_BASE_PATH`.
- `.github/workflows/deploy.yml`: builds and deploys to GitHub Pages on push to `main`

## Hard constraints: static export on GitHub Pages

`output: "export"` means there is **no server at runtime**. Do not add:

- API routes / Route Handlers that need a request, Server Actions, middleware, or rewrites/redirects/headers in `next.config.ts`
- `cookies()`, `headers()`, or anything else that forces dynamic rendering
- Dynamic routes without `generateStaticParams`
- `next/image` optimization (it's disabled through `images.unoptimized`)

Forms must post to a third-party service or use `mailto:`. The site uses Formspree (`site.formEndpoint`).

### Domain

There is no custom domain yet (no `public/CNAME`; `levelcraft.co` is still served by the original repo), so GitHub Pages serves this site at `https://ryanpwalker.github.io/level-craft-professional/`. The deploy workflow passes that path prefix to `next.config.ts` as `PAGES_BASE_PATH`; it becomes empty once a custom domain is set. `site.url` (canonical URLs, sitemap, JSON-LD) stays `https://levelcraft.co`, the intended final domain.

- Use `next/link` for internal page links so they get the `basePath`. Don't hard-code root-relative URLs in plain `<a>` tags, CSS `url(/...)`, or `<img src>`.
- Hash links (`#services`) are fine. `#contact` works on every page: content pages render `ContactCTA`, and the contact page puts it on the form section.

### SEO

- Every page exports `metadata` built with `pageMetadata()`, so it gets a canonical URL and share tags. New pages also go in `servicePages` (nav, footer, sitemap) when they are service pages.
- Titles name the service and the home county ("... in Utah County"), which helps local search. Descriptions and body copy make clear the work isn't limited to it ("in Utah County and across Utah"). Descriptions stay under about 155 characters.
- Keep structured data truthful. Leave placeholder details (an empty license number) out of JSON-LD, and keep out-of-state work out of `areaServed`.

## Design theme

A clean, **professional** contractor site whose job is to win construction, renovation, and commercial customers. Credibility and clarity come first; no gaming or pixel-art elements (those belong to the original `level-craft` repo).

- Fonts: **Archivo** (`--font-heading`, weights 600–800) for headings, the wordmark, and large numerals; **Inter** (`--font-sans`) for everything else.
- Colors: dark navy (`--navy`, `--ink`) for the hero, panels, CTA, and footer; warm stone (`--surface`) for alternating sections; copper (`--accent`) for primary buttons, eyebrows, and icons, with `--accent-light` on dark backgrounds. Keep text contrast at WCAG AA.
- Layout patterns: top bar with license and phone, sticky white header, navy hero with a faint blueprint grid and a white contact card, a credentials strip, two-column section heads (heading left, intro right), bordered cards with soft shadows on hover, numbered process steps (01–04), and a split About section.
- Icons: add new ones to `Icon.tsx` as simple 24×24 stroked paths. No raster images until real project photos are provided.
- Eyebrows are small uppercase labels with a short rule before them (`.eyebrow`, `.eyebrow-light` on dark).

## Conventions

- TypeScript, App Router, React Server Components by default. Add `"use client"` only when interactivity requires it.
- Styling: plain CSS in `globals.css`. Reuse the existing tokens (`--navy`, `--accent`, `--surface`, etc.) and classes (`.container`, `.section`, `.section-head`, `.card`, `.btn`, `.eyebrow`, `.checklist`). Don't add Tailwind or a CSS-in-JS library unless asked.
- Keep it mobile-friendly. The existing breakpoints are `max-width: 960px` (two-column grids, header CTA hides), `860px` (nav links collapse into the mobile menu), `800px` (hero and split sections stack), and `600px` (single-column grid).
- Keep dependencies minimal.

## Yarn notes

- Yarn 4 is pinned through `packageManager` in `package.json`. Use `yarn`, never `npm`/`npx` (use `yarn dlx` instead).
- `nodeLinker: node-modules` (`.yarnrc.yml`). Not PnP.
- Yarn's `npmMinimalAgeGate` (1 day) refuses package versions published within the last 24 hours. If an install fails with "quarantined", pin the previous version rather than disabling the gate.
- CI runs `yarn install --immutable`, so commit `yarn.lock` whenever dependencies change.

## Business facts

These come from the owner. Keep the site's claims consistent with them.

- Owner Joaquin Harris. Based in Orem, Utah, serving all of Utah. Out-of-state projects are considered case by case: invite people to ask, don't promise.
- Licensed Utah B100 General Contractor, insured, with general liability coverage.
- Legal entity for the footer copyright: J & M Harris Enterprises, LLC. Branding is "Level Craft Construction".
- In-house work: residential remodels, additions, repairs, and improvements; commercial tenant improvements, office build-outs, and remodels; wood and metal framing; drywall; interior and exterior painting; tile; concrete (driveways, patios, walkways, pads); carpentry; full project management.
- **HVAC, plumbing, and electrical are coordinated through qualified trades, not done in-house.** Don't write copy implying Level Craft installs or repairs HVAC itself. Don't claim services not listed here, such as ground-up new construction, demolition, or 24/7 service.

## Content placeholders

Business details live in `app/site.ts`. The phone number is real. Don't treat it as a secret, since it's meant to be shown on the page.

Don't publish an email address anywhere on the site (including `mailto:` links), to keep it away from spam bots. Email-style contact goes through the contact page form.

These are still placeholders, not real business info. Don't present them as real:

- License number (`site.license.number`, empty, so it's hidden until set)
- Logo: the owner has an existing logo to provide. The spirit-level mark is a stand-in.
- Process steps and some value copy are generic
