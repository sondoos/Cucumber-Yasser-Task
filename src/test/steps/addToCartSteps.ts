import {Given, When,Then} from "@cucumber/cucumber"
import {chromium, Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

    When('User searchs for a book as {string}',{ timeout: 60000 }, async function (book) {
        await pageFixture.page.locator("//input[@id='small-searchterms']").fill(book);
        await pageFixture.page.locator("//li[@class='ui-menu-item']/a/span").first().click();
    });

    Given('User adds the book to the cart',{ timeout: 60000 }, async function () {


        await pageFixture.page.waitForTimeout(10000);
        const buttonLocator = pageFixture.page.locator("//div[@class='product-essential']//div[@class='add-to-cart']//button[text()='Add to cart']");
        const isVisible = await buttonLocator.isVisible();
        const isEnabled = await buttonLocator.isEnabled();
        
        console.log(`Button visible: ${isVisible}, enabled: ${isEnabled}`);
        
        if (isVisible && isEnabled) {
            await buttonLocator.click({ force: true });
        } else {
            console.error('Button is not clickable');
        }
        if(await pageFixture.page.locator("//p[text()='The product has been added to your ']").isVisible())
        {
            await pageFixture.page.locator("//div[@class='bar-notification success']/span[@class='close']").click();
        }
    });

    When('User opens the cart',{ timeout: 60000 }, async function () {
        await pageFixture.page.waitForTimeout(3000);
        await pageFixture.page.locator("//span[text()='Shopping cart']").click();
    });
    Then('the cart badge should get updated',{ timeout: 60000 }, async function () {
        await pageFixture.page.waitForTimeout(10000);
        const isBookInCart = await pageFixture.page.locator("//td[@class='product']/a[text()='HTC One M8 Android L 5.0 Lollipop']").isVisible();
        expect(isBookInCart).toBe(true);
    });

