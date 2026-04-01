import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const fontB64 = readFileSync(join(__dirname, 'CalSansUI-Variable.woff2')).toString('base64');
const avatarB64 = readFileSync(join(__dirname, 'img/gildas.jpg')).toString('base64');

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @font-face {
    font-family: "Cal Sans UI";
    src: url("data:font/woff2;base64,${fontB64}") format("woff2-variations");
    font-weight: 300 700;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    background: #fdfefd;
    font-family: "Cal Sans UI", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 80px;
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  /* Halos: same colors & positions as the home intro glows */
  .halo {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  /* Orange on "problème" — top-left area of text */
  .halo-orange { width: 340px; height: 280px; background: rgba(230,120,30,0.10); top: 60px; left: 160px; }
  /* Green on "solution" — middle-right area */
  .halo-green { width: 320px; height: 260px; background: rgba(40,180,80,0.09); top: 180px; right: 100px; }
  /* Violet on "livre avec" — bottom-left area */
  .halo-violet { width: 300px; height: 240px; background: rgba(140,60,200,0.08); bottom: 100px; left: 80px; }

  .tagline {
    font-size: 68px;
    font-weight: 700;
    color: #1a1d1a;
    line-height: 1.1;
    letter-spacing: -0.02em;
    font-variation-settings: 'GEOM' 0;
    margin-bottom: 32px;
    position: relative;
    z-index: 1;
  }
  .bottom {
    display: flex;
    align-items: center;
    gap: 14px;
    position: relative;
    z-index: 1;
  }
  .avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    object-fit: cover;
  }
  .name {
    font-size: 26px;
    font-weight: 600;
    color: #1a1d1a;
    font-variation-settings: 'GEOM' 0;
  }
</style>
</head>
<body>
  <div class="halo halo-orange"></div>
  <div class="halo halo-green"></div>
  <div class="halo halo-violet"></div>
  <div class="tagline">Je trouve le vrai problème, conçois la bonne solution et la livre avec votre équipe.</div>
  <div class="bottom">
    <img class="avatar" src="data:image/jpeg;base64,${avatarB64}">
    <span class="name">Gildas Frémont</span>
  </div>
</body>
</html>`;

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.screenshot({ path: join(__dirname, 'img/og.png'), type: 'png' });
await browser.close();
console.log('og.png generated');
