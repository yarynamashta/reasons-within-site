import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
const site = (process.env.SITE_URL || "https://reasonswithin.com").replace(/\/$/, "");
const files = readdirSync("dist", { recursive: true }).filter(
  (p) => p.endsWith(".html") && p !== "404.html",
);
assert.equal(files.length, 20);
for (const file of files) {
  const html = readFileSync(`dist/${file}`, "utf8");
  assert.ok(html.includes(`<link rel="canonical" href="${site}/`));
  assert.equal((html.match(/hreflang=/g) || []).length, 5);
  assert.ok(html.includes(`<meta property="og:image" content="${site}/social-card.png"`));
  assert.ok(!html.includes("noindex"));
  for (const match of html.matchAll(
    /(?:rel="canonical"[^>]*href|hreflang="[^"]+"[^>]*href)="([^"]+)"/g,
  )) {
    assert.ok(!match[1].includes(".html"), `Non-clean SEO URL in ${file}`);
  }
  assert.ok(!html.includes("<!--app-->"));
  const schema = html.match(
    /<script type="application\/ld\+json">(.*?)<\/script>/s,
  );
  if (/^(?:(?:uk|fr|es)\/)?index\.html$/.test(file))
    assert.equal(JSON.parse(schema[1])["@type"], "MobileApplication");
}
assert.equal(
  (readFileSync("dist/sitemap.xml", "utf8").match(/<url>/g) || []).length,
  20,
);
assert.match(readFileSync("dist/robots.txt", "utf8"), /Allow: \//);
console.log(
  "Production SEO passed for all 20 pages: canonical URLs, language alternates, sharing metadata, JSON-LD, sitemap, and indexing.",
);
