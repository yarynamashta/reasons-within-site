import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdirSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";
const origin = process.env.CHECK_URL || "http://127.0.0.1:4173";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const errors = [];
try {
  const context = await browser.newContext();
  // Keep site checks deterministic; check-feedback.mjs exercises the live form.
  await context.route("https://forms.fillout.com/**", (route) =>
    route.fulfill({ contentType: "text/html", body: "<!doctype html><html lang=\"en\"><title>External form placeholder</title><body><p>Feedback form</p></body></html>" }),
  );
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("response", (r) => {
    if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
  });
  mkdirSync("test-results", { recursive: true });
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 960 });
    await page.goto(origin, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator("h1").count(), 1);
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `Overflow at ${width}px`,
    );
    for (const img of await page.locator(".phone img").all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate((i) => i.decode());
    }
    await page.evaluate(() => scrollTo(0, 0));
    await page.locator("summary").first().click();
    assert.ok(
      (await page.locator("details").first().getAttribute("open")) !== null,
    );
    await page.locator("summary").first().click();
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    assert.deepEqual(
      axe.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
      [],
      `Accessibility at ${width}px`,
    );
    await page.screenshot({
      path: `test-results/home-${width}.png`,
      fullPage: true,
    });
  }
  for (const lang of ["", "uk/", "fr/", "es/"])
    for (const name of ["", "support/", "privacy/", "terms/", "feedback/"]) {
      await page.goto(`${origin}/${lang}${name}`, { waitUntil: "networkidle" });
      assert.equal(await page.locator("h1").count(), 1);
      assert.equal(
        await page.locator("html").getAttribute("lang"),
        lang.slice(0, -1) || "en",
      );
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `Overflow at ${lang}${name}`,
      );
      if (name) {
        assert.equal(
          await page
            .locator(".document-header .home-link")
            .getAttribute("href"),
          `/${lang}`,
        );
        assert.ok(
          await page.locator(".document-header .home-link").isVisible(),
        );
        if (!lang) {
          // The cross-origin Fillout form is audited separately by its owner.
          const audit = await new AxeBuilder({ page })
            .exclude("iframe.feedback-embed")
            .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
            .analyze();
          assert.deepEqual(
            audit.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })) })),
            [],
            `Accessibility: ${name}`,
          );
          await page.screenshot({
            path: `test-results/${name.slice(0, -1)}-mobile.png`,
            fullPage: false,
          });
        }
        const expectedTitle = await page.locator("h1").textContent();
        await page.goto(`${origin}/${lang}${name.slice(0, -1)}`, {
          waitUntil: "networkidle",
        });
        assert.equal(await page.locator("h1").textContent(), expectedTitle);
      }
      assert.equal(await page.locator('a[href$=".html"]').count(), 0);
      const links = await page
        .locator("a[href]")
        .evaluateAll((as) =>
          as
            .map((a) => a.getAttribute("href"))
            .filter(
              (h) =>
                !h.startsWith("http") &&
                !h.startsWith("mailto:") &&
                !h.startsWith("#"),
            ),
        );
      for (const link of new Set(links))
        assert.equal(
          (await page.request.get(new URL(link, page.url()).href)).status(),
          200,
          `Broken ${link}`,
        );
    }
  const noJS = await browser.newContext({ javaScriptEnabled: false });
  const plain = await noJS.newPage();
  await plain.goto(origin);
  assert.match(
    await plain.locator("h1").textContent(),
    /Your body has patterns/,
  );
  await plain.locator("summary").first().click();
  assert.notEqual(
    await plain.locator("details").first().getAttribute("open"),
    null,
  );
  await noJS.close();
  const html = readFileSync("dist/index.html", "utf8");
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /name="description"/);
  assert.deepEqual(errors, []);
  console.log(
    "Passed: 4 viewport sizes, site accessibility (excluding the third-party form), 20 routes, local links, images, FAQ, no-JS rendering, and browser errors.",
  );
} finally {
  await browser.close();
}
