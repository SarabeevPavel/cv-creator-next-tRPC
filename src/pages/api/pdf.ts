import type { NextApiHandler } from "next";
import puppeteer from "puppeteer";

const Handler: NextApiHandler = async (_req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/testpage", {
    waitUntil: "networkidle2",
  });
  await page.emulateMediaType("screen");
  const buffer = await page.pdf({ format: "a4" });
  res.end(buffer);
  await browser.close();
};

export default Handler;
