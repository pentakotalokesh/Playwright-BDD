import { Given, When, Then } from "@cucumber/cucumber";
import { firefox } from "playwright";

let browser, context, page;

Given("I open the OrangeHRM login page", { timeout: 30000 }, async function () {
  browser = await firefox.launch();
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://opensource-demo.orangehrmlive.com/");
});

When("I log in with valid credentials", async function () {
  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "admin123");
  await page.click('button[type="submit"]');
});

Then("I should see the dashboard", async function () {
  await page.waitForSelector('h6:has-text("Dashboard")');
  await browser.close();
});
