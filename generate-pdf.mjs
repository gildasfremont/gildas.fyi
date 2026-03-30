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

  // Contacts are revealed automatically on page load via reveal()

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
