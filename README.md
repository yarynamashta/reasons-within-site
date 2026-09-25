# Reasons Within website

React + Vite marketing website for Reasons Within, prepared for Vercel at https://reasonswithin.com/. This repository now contains the designed website from the local `reasons-within-web` project.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

To inspect the complete prerendered output:

```sh
npm run build
npm run preview
```

## Rendering and search

React renders all 20 pages to HTML at build time with `react-dom/server`, then hydrates in the browser. Search engines and visitors without JavaScript receive the full content. A running SSR server is unnecessary for this content-only site. English has the new marketing landing page; Ukrainian, French, and Spanish retain the existing translated product, support, and policy copy with the shared brand styling.

Each production page includes its own title and description, canonical URL, language alternatives, social sharing metadata, and app banner. Landing pages include `MobileApplication` JSON-LD. The build also emits a sitemap, robots.txt, and a 404 page. Native FAQ disclosures work without JavaScript. Fonts, screenshots, and social imagery are hosted locally. No site analytics or remote fonts are added. When configured, the feedback page embeds the third-party Fillout form, which processes submissions under its own service terms.

## Deploy to Vercel

Import `yarynamashta/reasons-within-site` into Vercel, with `main` as the
production branch and the repository root as the root directory. Use the
**Vite** preset, `npm run build` as the build command, and `dist` as the output
directory. `vercel.json` includes these settings. If the project was already
imported as a plain HTML site, update its settings to match and redeploy.

The tracked `.env.production` contains only public build configuration: the
production origin `https://reasonswithin.com`, root base path, and the published
feedback form URL. No account credentials are needed for the build. Vercel
environment variables override these settings; remove stale `SITE_URL` or
`BASE_PATH` overrides before deploying.

Add `reasonswithin.com` in Vercel's Domains settings and apply the DNS records
shown there at your DNS provider. Configure `www.reasonswithin.com` to redirect
to the primary domain. Wait for domain verification and HTTPS, then check the
homepage, `/uk/`, `/support/`, `/feedback/`, `/sitemap.xml`, and `/robots.txt`.
Old `.html` page addresses permanently redirect to their new directory URLs.
Unknown routes should return HTTP 404; no SPA fallback is configured.

Only `dist/` is published. Source files and local environment files are not
part of the output. Canonical URLs refer to the production domain. For a local
non-indexable preview build, run `SITE_URL= npm run build`; rebuild normally
before production. The original `reasons-within-web` directory remains untouched.

After deployment, verify the domain in Google Search Console and submit
`https://reasonswithin.com/sitemap.xml`. If the old GitHub Pages deployment is
still active, disable it in the repository's Pages settings; it does not build
this Vite application. Search rankings and indexing cannot be guaranteed.

## Feedback

The `/feedback/` page and translated equivalents embed the published Fillout form configured in `.env`, with an email fallback and direct form link. The main form is currently shared across languages; localized page text does not translate Fillout’s questions. See [feedback setup](docs/feedback-setup.md) for form creation, Trello connection, language options, and the planned iOS entry point.

## App Store links

See [App Store URL mapping](docs/app-store-urls.md) for Privacy Policy, Support, Terms of Use, and Marketing paths in all four languages. Public routes use `/privacy/`, `/support/`, and `/terms/`; each is emitted as a directory with an `index.html` so static hosts can serve it directly.

## Check

Start `npm run preview -- --port 4173`, then run `npm run check`. It uses an installed Google Chrome through Playwright to check four viewport sizes, WCAG accessibility rules, all 20 routes, internal links, images, FAQ behavior, browser errors, and content without JavaScript. Screenshots go to `test-results/`. `CHECK_URL` may override the local preview URL.

`node scripts/social-card.mjs` exports the social card from local HTML and brand assets (requires the preview server on port 4173). Rebuild after regenerating it.

Verify production metadata locally (nothing is published):

```sh
npm run build
node scripts/check-seo.mjs
```

## Source map

- `src/pages/index.jsx`: marketing sections as React components.
- `src/pages/`: localized page components.
- `src/pages.jsx`: routes and localized metadata.
- `src/landing.css`: responsive design and app typography.
- `src/base.css`: document page styles.
- `src/prerender.jsx`: HTML, metadata, sitemap, and crawler output.
- `public/`: original app icon, optimized screenshots, fonts, and sharing image.
- `docs/research.md`: marketing guidance, Pinterest inspiration, and decisions.

Product claims and assets were checked against the local iOS app theme, actual screenshot fixtures, and existing product/support/privacy copy. Screenshot data is illustrative. Subscription prices are intentionally read in the App Store/app instead of hardcoded on the site.

## External form accessibility

The hosted Fillout form currently has contrast failures in its description text
and submit button. Adjust those colors in the Fillout editor. The local browser
accessibility checks cover our pages and exclude the cross-origin form iframe;
its appearance cannot be corrected through this site’s CSS. The general site
checks use a placeholder for the external form. `scripts/check-feedback.mjs`
checks the live integration separately. During the live audit, Fillout also
reported missing translations and third-party browser errors; verify the form
in its editor before launch.
