import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdirSync} from 'node:fs';
const browser=await chromium.launch({channel:'chrome',headless:true});
try {
  const page=await browser.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  mkdirSync('test-results',{recursive:true});
  for(const width of [1280,390]) {
    await page.setViewportSize({width,height:900});
    await page.goto('http://127.0.0.1:4173/feedback/?source=ios&app_version=1.2.3&ios_version=26.0&email=do-not-forward@example.com',{waitUntil:'domcontentloaded'});
    const embed=page.locator('iframe.feedback-embed');
    await embed.waitFor();
    const url=new URL(await embed.getAttribute('src'));
    assert.equal(url.origin+url.pathname,'https://forms.fillout.com/t/8GZ6z9esr9us');
    assert.equal(url.searchParams.get('source'),'ios');
    assert.equal(url.searchParams.get('app_version'),'1.2.3');
    assert.equal(url.searchParams.get('email'),null);
    const frame=page.frameLocator('iframe.feedback-embed');
    await frame.getByText(/Tell us more/).first().waitFor({timeout:20000}).catch(async error => { console.log('Frame content:', await frame.locator('body').innerText().catch(()=>'(unavailable)')); await embed.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await page.screenshot({path:'test-results/feedback-load-issue.png',fullPage:true}); throw error; });
    assert.ok(await frame.getByRole('button',{name:/send feedback|submit/i}).first().isVisible());
    assert.ok(await page.locator('a[href^="mailto:"]').isVisible());
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await embed.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await page.screenshot({path:`test-results/feedback-live-${width}.png`,fullPage:true});
  }
  assert.deepEqual(errors,[]);
  console.log('Live Fillout embed loaded on desktop and mobile. App context forwarded; email query discarded. No submission was made.');
} finally {await browser.close();}
