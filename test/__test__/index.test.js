const puppeteer = require("puppeteer");
const timeout = 30000;

describe("Test index page", () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(timeout);
    browser = await puppeteer.launch({
      headless: false,
      args: [`--window-size=1280,720`]
    });
    page = await browser.newPage();
    await page.goto(URL, { waitUntil: "domcontentloaded" });
  }, timeout);

  afterEach(async () => {
    await page.waitFor(1000);
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });

  test("Title of the page", async () => {
    const expectedPageTitle = "Home Page - AspNetCoreE2ESample";
    const title = await page.title();
    expect(title).toBe(expectedPageTitle);
  });

  test("Should email address field value is test@example.com", async () => {
    const inputFieldName = "#exampleInputEmail1";
    const expectedValue = "test@example.com";
    await page.click(inputFieldName);
    await page.type(inputFieldName, "test@example.com");

    let inputValue = await page.$eval(inputFieldName, el => el.value);

    expect(inputValue).toBe(expectedValue);
  });

  test("Should password field value is examplePassword", async () => {
    const inputFieldName = "#exampleInputPassword1";
    const expectedValue = "examplePassword";
    await page.click(inputFieldName);
    await page.type(inputFieldName, "examplePassword");

    let inputValue = await page.$eval(inputFieldName, el => el.value);

    expect(inputValue).toBe(expectedValue);
  });
});
