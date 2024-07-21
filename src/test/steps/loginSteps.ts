import {Given, When,Then} from "@cucumber/cucumber"
import {chromium, Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";


Given('User navigates to the application',{ timeout: 60000 }, async function () {
    await pageFixture.page.goto('https://bookcart.azurewebsites.net/');
  });
  Given('User Opens Login page',{ timeout: 60000 }, async function () {
    await pageFixture.page.locator("//span[text()=' Login ']").click();

  });

  Given('User enters the username as {string}',{ timeout: 60000 }, async function (username) {
    await pageFixture.page.locator("//input[@placeholder='Username']").fill(username)

  });

  Given('User enters the password as {string}',{ timeout: 60000 }, async function (password) {
    await pageFixture.page.locator("//input[@placeholder='Password']").fill(password)

  });


  When('User clicks on the login button', async function () {
    await pageFixture.page.click("//span[text()='Login']");

  });
  Then('Login should be success',{ timeout: 60000 }, async function () {
    await expect(pageFixture.page.locator("//mat-icon[text()='favorite']")).toBeVisible();

  });

