import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";
const fs = require("fs-extra");

let browser:Browser;
let context: BrowserContext;
let page:Page;


Before(async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext({
        recordVideo: { dir: 'test-results/videos' }, // Configure video recording
        viewport: { width: 1920, height: 1080 }
    });
    page = await context.newPage();
    pageFixture.page = page;
});

After(async function ({pickle}) {
    let videoPath: string;
    const img = await pageFixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" });
    await this.attach(img,"image/png");
    videoPath = await pageFixture.page.video().path();
    await this.attach(
        fs.readFileSync(videoPath),
        'video/webm'
    );
    await pageFixture.page.click("//a[text()='Log out']");
    await pageFixture.page.close;
    await browser.close();
    
})