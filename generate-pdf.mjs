import puppeteer from 'puppeteer';

const PORT = process.env.PORT || 55666;
const pages = [
  { url: 'index.html', output: 'cv-gildas-fremont.pdf', format: 'A4' },
  { url: 'en.html', output: 'cv-gildas-fremont-en.pdf', format: 'Letter' },
];

const browser = await puppeteer.launch({ headless: true });

for (const { url, output, format } of pages) {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/${url}`, { waitUntil: 'networkidle0' });

  // Contacts are revealed automatically on page load via reveal()

  await page.pdf({
    path: output,
    format,
    printBackground: true,
    margin: { top: '0.8cm', bottom: '0.8cm', left: '1cm', right: '1cm' },
  });

  console.log(`Generated ${output}`);
  await page.close();
}

await browser.close();
