import {Given, When,Then} from "@cucumber/cucumber"
import {chromium, Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

let browser:Browser;
let page:Page;

    When('user searchs for a {string}', async function (book) {
        await pageFixture.page.locator("//input[@placeholder='Search books or authors']").fill(book);
        await pageFixture.page.locator("//mat-option[@role='option']").first().click();
    });

    When('user adds the book to the cart', async function () {
        await pageFixture.page.locator("//span[contains(text(), 'Add to Cart')]").click();
    });

    Then('the cart badge should get updated', async function () {

    });

