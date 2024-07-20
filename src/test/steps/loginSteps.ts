import {Given, When,Then} from "@cucumber/cucumber"
import {chromium, Page,Browser, expect} from "@playwright/test"

let browser:Browser;
let page:Page;

Given('User navigates to the application', async function () {
  browser = await chromium.launch({headless:false});
  page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://the-internet.herokuapp.com/login');
 
  });

  Given('User enters the username as {string}', async function (username) {
    await page.locator('#username').fill(username)

  });

  Given('User enters the password as {string}', async function (password) {
    await page.locator('#password').fill(password)

  });


  When('User clicks on the login button', async function () {
    await page.click('button[type="submit"]');

  });
  Then('Login should be success', async function () {
    await page.waitForSelector('#flash');
    const message = await page.textContent('#flash');
    expect(message).toContain('You logged into a secure area!');
    await browser.close();

  });

  Then('Login should fail', async function () {
    await page.waitForSelector('#flash');
    const message = await page.textContent('#flash');
    expect(message).toContain('Your password is invalid!');
    await browser.close();

  });
