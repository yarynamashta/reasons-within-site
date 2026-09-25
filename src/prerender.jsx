import { renderToString } from "react-dom/server";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { App, pages } from "./App.jsx";

const template = readFileSync("dist/index.html", "utf8");
const site = __SITE_URL__.replace(/\/$/, "");
if (site && !/^https:\/\/[^/]+/.test(site))
  throw new Error(
    "SITE_URL must be the final HTTPS URL, including any base path.",
  );
const esc = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const base = import.meta.env.BASE_URL;
const canonicalPath = (path) =>
  path.replace(/index\.html$/, "").replace(/\.html$/, "/");
const url = (path) => `${site}/${canonicalPath(path)}`;
const locales = { en: "en_US", uk: "uk_UA", fr: "fr_FR", es: "es_ES" };
for (const [path, page] of Object.entries(pages)) {
  const filename = path.split("/").at(-1);
  const alternates = ["en", "uk", "fr", "es"]
    .map(
      (lang) =>
        `<link rel="alternate" hreflang="${lang}" href="${esc(url((lang === "en" ? "" : lang + "/") + filename))}">`,
    )
    .join("\n");
  const metadata = `<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="theme-color" content="#f9f9fb">
<meta name="apple-itunes-app" content="app-id=6778074598">
<link rel="icon" type="image/png" href="${base}icon.png">
<link rel="apple-touch-icon" href="${base}icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Reasons Within">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:locale" content="${locales[page.lang]}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
${
  site
    ? `<link rel="canonical" href="${esc(url(path))}">
${alternates}
<link rel="alternate" hreflang="x-default" href="${esc(url(filename))}">
<meta property="og:url" content="${esc(url(path))}">
<meta property="og:image" content="${esc(site)}/social-card.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Reasons Within. Your body has patterns. Find your reasons.">
<meta name="twitter:image" content="${esc(site)}/social-card.png">`
    : '<meta name="robots" content="noindex, nofollow">'
}
${filename === "index.html" ? `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "MobileApplication", name: "Reasons Within", operatingSystem: "iOS", applicationCategory: "HealthApplication", description: page.description, inLanguage: page.lang, ...(site ? { url: url(path), image: site + "/icon.png" } : {}), installUrl: "https://apps.apple.com/app/reasons-within/id6778074598", featureList: ["Apple Health insights", "Personal patterns", "Daily readiness", "Private Feel check-ins", "Weekly and Monthly Reviews"], offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free download with optional in-app subscription" } }).replaceAll("<", "\\u003c")}</script>` : ""}`;
  const html = template
    .replace('lang="en"', `lang="${page.lang}"`)
    .replace(
      "<body>",
      `<body${path === "index.html" ? ' class="landing"' : ""}>`,
    )
    .replace("<!--seo-->", metadata)
    .replace("<!--app-->", renderToString(<App path={path} />));
  const target = `dist/${canonicalPath(path)}index.html`;
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
}
writeFileSync(
  "dist/404.html",
  template
    .replace(
      "<!--seo-->",
      '<title>Page not found — Reasons Within</title><meta name="robots" content="noindex">',
    )
    .replace("<!--app-->", renderToString(<App path="404.html" />)),
);
if (site) {
  writeFileSync(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(
      pages,
    )
      .map((path) => `<url><loc>${esc(url(path))}</loc></url>`)
      .join("")}</urlset>`,
  );
  writeFileSync(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`,
  );
} else {
  writeFileSync("dist/robots.txt", "User-agent: *\nDisallow: /\n");
  console.warn(
    "Preview build: indexing disabled. Set SITE_URL to the final public URL for production SEO.",
  );
}
console.log(`Prerendered ${Object.keys(pages).length} pages and 404.html.`);
