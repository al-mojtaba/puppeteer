import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: true, // Run in headless mode
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto("https://example.com");
  console.log(await page.title());

  await browser.close();
})();
