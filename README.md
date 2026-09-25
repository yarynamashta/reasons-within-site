# Reasons Within — site

Static marketing and support site for the Reasons Within iOS app.

- **Production domain:** https://reasonswithin.com/
- **Deploy:** Vercel, connected to this repository with `main` as the production branch.
- **Contact email:** info@reasonswithin.com — use this address everywhere on the site (support, privacy policy, App Store contact).

## Pages

| File | Page |
|---|---|
| `index.html` | Landing page |
| `support.html` | Support / FAQ |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms of use and subscription terms |
| `uk/`, `fr/`, `es/` | Localized versions of every page |

All pages use `styles.css` and load no third-party scripts, analytics, or remote fonts.

## Deployment and SEO

The site is plain HTML/CSS and requires no build step. `vercel.json` configures
static hosting, preserves `.html` page URLs, and redirects directory URLs to
trailing slashes and explicit `index.html` URLs to their canonical directories.

Before launch:

1. Import this repository into Vercel. Use the **Other** framework preset,
   repository root, no build command, and `.` as the output directory.
2. Add `reasonswithin.com` in the project's Domains settings. Apply the DNS
   records Vercel displays, then verify the domain and HTTPS certificate.
   Add `www.reasonswithin.com` as a redirect to the primary domain if used.
3. Deploy and check the homepage, all localized pages, assets, `robots.txt`,
   and `sitemap.xml` over HTTPS. Verify `/uk` redirects to `/uk/`,
   `/uk/index.html` redirects to `/uk/`, and `/uk/support.html` loads directly.
   Confirm missing pages return HTTP 404.
4. Verify the domain in Google Search Console and submit
   `https://reasonswithin.com/sitemap.xml`. Inspect the homepage URL to check
   indexability. Submission does not guarantee indexing or rankings.
5. If the previous GitHub Pages site is still published, retire it or configure
   its migration separately. Vercel cannot redirect requests to the old host.

Every page has its own canonical URL, reciprocal language alternates (including
an English `x-default`), and social preview metadata using the app icon. Homepage
URLs use trailing slashes consistently in navigation and metadata. When adding a
page or translation, update its metadata, the corresponding language alternates,
and `sitemap.xml`. If the domain changes, update all absolute URLs and `robots.txt`.

References: [Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json),
[Google localized-page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).
