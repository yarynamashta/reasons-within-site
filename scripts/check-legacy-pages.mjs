import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";

const output = ".legacy-pages";
// Cover URLs already published in App Store Connect and the shipped iOS app.
const required = {
  "index.html": "/",
  "privacy.html": "/privacy/",
  "support.html": "/support/",
  "terms.html": "/terms/",
  "uk/privacy.html": "/uk/privacy/",
  "fr/privacy.html": "/fr/privacy/",
  "es/privacy.html": "/es/privacy/",
  "uk/terms.html": "/uk/terms/",
  "fr/terms.html": "/fr/terms/",
  "es/terms.html": "/es/terms/",
};
for (const [file, path] of Object.entries(required)) {
  assert.ok(readFileSync(`${output}/${file}`, "utf8").includes(
    `content="0; url=https://www.reasonswithin.com${path}"`,
  ), `Wrong legacy destination: ${file}`);
}
const files = readdirSync(output, { recursive: true }).filter(
  (file) => file.endsWith(".html") && file !== "404.html",
);
assert.equal(files.length, 36);
for (const file of files) {
  const html = readFileSync(`${output}/${file}`, "utf8");
  const destination = html.match(/http-equiv="refresh" content="0; url=([^"]+)"/)?.[1];
  assert.ok(destination, `Missing no-JavaScript forward: ${file}`);
  const url = new URL(destination);
  assert.equal(url.origin, "https://www.reasonswithin.com");
  assert.ok(html.includes(`<link rel="canonical" href="${destination}">`));
  assert.ok(html.includes(`<a href="${destination}">`));
  assert.ok(!html.includes("/src/") && !html.includes("<script"));
  // Each destination must exist in the real prerendered production build.
  const page = `dist${url.pathname}index.html`;
  assert.ok(existsSync(page), `No production page for ${file}: ${page}`);
  assert.ok(readFileSync(page, "utf8").includes("<main"));
}
const missing = readFileSync(`${output}/404.html`, "utf8");
assert.ok(missing.includes("noindex") && !missing.includes('http-equiv="refresh"'));
assert.ok(existsSync(`${output}/.nojekyll`));
console.log("Legacy URL checks passed: 36 forwards to existing production pages, including all published privacy and terms URLs.");
