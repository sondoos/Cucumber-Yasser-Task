import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser:Browser;
let page:Page;


BeforeAll(async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    pageFixture.page = page;
    await page.setViewportSize({ width: 1920, height: 1080 });
});

AfterAll(async function () {
    await pageFixture.page.close;
    await browser.close();
    
})