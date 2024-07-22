import {Given, When,Then} from "@cucumber/cucumber"
import {chromium, Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";
import { faker } from '@faker-js/faker';


let randomEmail: string;

Given('User navigates to the application',{ timeout: 60000 }, async function () {
    await pageFixture.page.goto('https://demo.nopcommerce.com/');
  });

  When('User opens the Register page',{ timeout: 60000 }, async function () {
    await pageFixture.page.locator("//a[text()='Register']").click()

  });

  When('User selects his gender',{ timeout: 60000 }, async function () {
    await pageFixture.page.locator("//input[@id='gender-female']").check();

  });

  When('User enters his firstName: as {string}',{ timeout: 60000 }, async function (firstName) {

    await pageFixture.page.locator("//input[@id='FirstName']").fill(firstName)
  });

  When('User enters his lastName: as {string}',{ timeout: 60000 }, async function (lastName) {

    await pageFixture.page.locator("//input[@id='LastName']").fill(lastName)
  });

  When('User enters his email',{ timeout: 60000 }, async function () {

    randomEmail = faker.internet.email();
    await pageFixture.page.fill('input#Email', randomEmail);
  });
  When('User enters his password as {string}',{ timeout: 60000 }, async function (password) {

    await pageFixture.page.locator("//input[@id='Password']").fill(password)
  });


  When('User enters the confirmPassword as {string}',{ timeout: 60000 }, async function (confirmPassword) {

    await pageFixture.page.locator("//input[@id='ConfirmPassword']").fill(confirmPassword)
  });

  When('User clicks on the Register button',{ timeout: 60000 }, async function () {

    await pageFixture.page.locator("//button[@id='register-button']").click();
  });

  Then('User should be registered successfully',{ timeout: 60000 }, async function () {
    const registrationMessage = pageFixture.page.locator("//div[text()='Your registration completed']");
    await expect(registrationMessage).toBeVisible();

  });
  //==============================================================================
  Given('User Opens Login page',{ timeout: 60000 }, async function () {
    await pageFixture.page.locator("//a[text()='Log in']").click();

  });

  Given('User enters the login email',{ timeout: 60000 }, async function () {
    await pageFixture.page.locator("//input[@id='Email']").fill(randomEmail)

  });

  Given('User enters the login password as {string}',{ timeout: 60000 }, async function (password) {
    await pageFixture.page.locator("//input[@id='Password']").fill(password)

  });


  When('User clicks on the login button', async function () {
    await pageFixture.page.click("//button[text()='Log in']");

  });
  Then('Login should be success',{ timeout: 60000 }, async function () {
    await expect(pageFixture.page.locator("//a[text()='Log out']")).toBeVisible();

  });

