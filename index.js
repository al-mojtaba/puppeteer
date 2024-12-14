import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: true, // Run in headless mode
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  console.log("Running tests..");
  const page = await browser.newPage();

  await page.goto(
    "https://www.bybit.com/copyTrade/trade-center/detail?leaderMark=DLlcAmuhyFKi1WG5zqIIug%3D%3D&copyFrom=CTList",
    { timeout: 0 }
  );

  const element = await page.$('div[data-orientation="horizontal"] span div');
  await element.click();

  console.log(await page.title());

  console.log(`All done ✨`);

  await browser.close();
})();
