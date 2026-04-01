import puppeteer from 'puppeteer';

const PORT = process.env.PORT || 55666;
const pages = [
  { url: 'index.html', output: 'cv-gildas-fremont.pdf', format: 'A4' },
  { url: 'en.html', output: 'resume-gildas-fremont.pdf', format: 'Letter' },
];

const browser = await puppeteer.launch({ headless: true });

for (const { url, output, format } of pages) {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/${url}`, { waitUntil: 'networkidle0' });

  // Activate print styles before measuring/rendering
  await page.emulateMediaType('print');

  // Click page to trigger anti-spam email reveal
  await page.click('body');

  await page.pdf({
    path: output,
    format,
    printBackground: true,
    margin: { top: '0.6cm', bottom: '0.6cm', left: '0.8cm', right: '0.8cm' },
  });

  console.log(`Generated ${output}`);
  await page.close();
}

await browser.close();
