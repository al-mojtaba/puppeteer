import puppeteer from "puppeteer";

const url = "https://www.google.com/";

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let i = 0; i < 5; i++) {
    await page.goto(url, { waitUntil: "load", timeout: 0 });
    console.log("good");
  }
  await browser.close();
};

main();
