import { chromium } from "@playwright/test";
const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.goto("http://127.0.0.1:4173");
  await page.setContent(`<style>
@font-face{font-family:Newsreader;src:url('http://127.0.0.1:4173/assets/fonts/Newsreader-Regular.ttf')}
@font-face{font-family:Newsreader;src:url('http://127.0.0.1:4173/assets/fonts/Newsreader-Italic.ttf');font-style:italic}
@font-face{font-family:Hanken;src:url('http://127.0.0.1:4173/assets/fonts/HankenGrotesk-Regular.ttf')}
*{box-sizing:border-box}body{margin:0;background:#f9f9fb;font-family:Hanken;color:#222228}main{height:630px;padding:64px 72px;background:radial-gradient(ellipse at 88% 65%,#e6cbf2,transparent 55%)}header{display:flex;align-items:center;gap:16px;font-size:25px}header img{width:52px;border-radius:14px}h1{font:72px/1.08 Newsreader;letter-spacing:-1px;margin:65px 0 25px}em{color:#b72855}p{font-size:22px;color:#525258}small{display:block;margin-top:36px;font-size:15px;color:#962d62}.phone{position:absolute;right:82px;top:90px;width:205px;border:5px solid white;border-radius:29px;transform:rotate(6deg);box-shadow:0 20px 60px #45234520;overflow:hidden;line-height:0}.phone img{display:block;width:100%;height:auto;margin-top:-9.615385%}
</style><main><header><img src="http://127.0.0.1:4173/icon.png" alt="">Reasons Within</header><h1>Your body has patterns.<br><em>Find your reasons.</em></h1><p>Personal Apple Health insights.<br>Private. On your iPhone.</p><small>Sleep · Recovery · Activity · How you feel</small><div class="phone"><img src="http://127.0.0.1:4173/assets/personal-patterns.png" alt=""></div></main>`);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() =>
    Array.from(document.images).every((i) => i.complete),
  );
  await page.screenshot({ path: "public/social-card.png" });
} finally {
  await browser.close();
}
