import puppeteer from 'puppeteer';

const PORT = process.env.PORT || 55666;
const pages = [
  { url: 'index.html', output: 'cv-gildas-fremont.pdf' },
  { url: 'en.html', output: 'cv-gildas-fremont-en.pdf' },
];

const browser = await puppeteer.launch({ headless: true });

for (const { url, output } of pages) {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/${url}`, { waitUntil: 'networkidle0' });

  // Reveal contacts by clicking the header toggle, then close it
  await page.click('header .contact-toggle');
  await page.waitForSelector('header .contact-dropdown.open');
  // Close it so it doesn't appear open in the PDF (print CSS shows contacts inline)
  await page.click('header .contact-toggle');
  await page.waitForFunction(() => !document.querySelector('header .contact-dropdown.open'));

  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
    margin: { top: '1cm', bottom: '1cm', left: '1cm', right: '1cm' },
  });

  console.log(`Generated ${output}`);
  await page.close();
}

await browser.close();
