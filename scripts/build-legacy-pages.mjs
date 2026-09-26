import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// GitHub Pages retains the URLs in the shipped app and App Store metadata.
// Publish only these static forwards there; Vercel hosts the actual website.
const site = "https://www.reasonswithin.com";
const output = ".legacy-pages";
const escape = (text) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
let count = 0;

for (const language of ["en", "uk", "fr", "es"]) {
  const prefix = language === "en" ? "" : `${language}/`;
  for (const page of ["", "privacy", "support", "terms", "feedback"]) {
    const destination = `${site}/${prefix}${page ? `${page}/` : ""}`;
    const target = escape(destination);
    const html = `<!doctype html>
<html lang="${language}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Reasons Within</title>
  <link rel="canonical" href="${target}">
  <meta http-equiv="refresh" content="0; url=${target}">
</head>
<body>
  <main><h1>Reasons Within</h1><p><a href="${target}">${target}</a></p></main>
</body>
</html>
`;
    const paths = page
      ? [`${prefix}${page}.html`, `${prefix}${page}/index.html`]
      : [`${prefix}index.html`];
    for (const path of paths) {
      const file = `${output}/${path}`;
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, html);
      count += 1;
    }
  }
}
writeFileSync(`${output}/.nojekyll`, "");
writeFileSync(`${output}/404.html`, `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Page not found — Reasons Within</title>
<meta name="robots" content="noindex"></head>
<body><main><h1>Page not found</h1><a href="${site}/">Reasons Within</a></main></body></html>
`);
console.log(`Generated ${count} legacy URL forwards and a 404 page.`);
