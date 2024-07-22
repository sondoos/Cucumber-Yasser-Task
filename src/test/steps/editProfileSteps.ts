import {Given, When,Then} from "@cucumber/cucumber"
import {chromium, Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";
import { faker } from '@faker-js/faker';

let randomame: string;
let oldName: string;
When('User clicks on My Account',{ timeout: 60000 }, async function () {
    await pageFixture.page.locator("//a[text()='My account']").first().click();

  });

  When('User edits firstName',{ timeout: 60000 }, async function () {
    randomame = faker.internet.displayName();
    oldName = await pageFixture.page.locator("//input[@id='FirstName']").inputValue();
    await pageFixture.page.locator("//input[@id='FirstName']").clear();
    await pageFixture.page.fill("//input[@id='FirstName']", randomame);
  });

  When('User saves the changes',{ timeout: 60000 }, async function () {
    await pageFixture.page.locator("//button[@id='save-info-button']").click();
  });

  Then('The first name is updated successfully',{ timeout: 60000 }, async function () {
    await pageFixture.page.reload();
    await pageFixture.page.waitForTimeout(10000);
    let updateName = await pageFixture.page.locator("//input[@id='FirstName']").inputValue();
    expect(updateName).not.toBe(oldName);
    expect(updateName).toBe(randomame);
  });