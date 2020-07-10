const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");
// unit test
test("generate name and age", () => {
  const result = generateText("Muhannad", 30);
  expect(result).toBe("Muhannad (30 years old)");
  const result2 = generateText(undefined, undefined);
  expect(result2).toBe("undefined (undefined years old)");
});

// integration test
test("should generate a valid text output", () => {
  const result = checkAndGenerate("Muhannad", 30);
  expect(result).toBe("Muhannad (30 years old)");
});

// End 2 End test
// test("test interface ui by testing the full flow of the app in the browser", async () => {
//   const browser = await puppeteer.launch({
//     headless: true,
//     slowMo: 80,
//     args: ["--window-size=1920,1080"]
//   });
//   const page = await browser.newPage();
//   await page.goto("file:///C:Users/muhan/Desktop/try-projectsjest-unit-test");
//   await page.click("input#name");
//   await page.type("input#name", "Anna");
//   await page.click("input#age");
//   await page.type("input#age", "28");
//   await page.click("#btnAddUser");
//   const finalText = await page.$eval(".user-item", (el) => el.textContent);
//   expect(finalText).toBe("Anna (28 years old)");
// }, 10000);
