import { test, expect } from '@playwright/test';

//skip this test
test.skip("selector cheatsheet", async({ page }) => {})
//just one test
test.only("selector cheatsheet", async({ page }) => {})

// in order to run test with tag use command
// npx playwright test --grep @myTag
test("test with tag @myTag", async({page}) => {

})

test.describe("group of tests", () => {
    test("selector cheatsheet", async({ page }) => {})
})

test("selector cheatsheet", async({ page }) => {
    // go to page
    await page.goto("https://www.example.com");

    // assign locator to the variable
    const pageTitle = await page.locator("h1");
    
    // assertions
    await expect(pageTitle).toContainText("Example Domain");
    await expect(pageTitle).toHaveCount(10);
    await expect(pageTitle).not.toBeVisible();
    

    // some locator strategies
    await page.click('text=some text');
    await page.click('#someId');
    await page.click('.someClass');
    //only visible element
    await page.click('.submit-button:visible');

    // use 

    await page.type("locator", "some text  ");

    page.click("someSelector");
})

test.describe.only('some group', () => {
    test.beforeAll(async () => {
        console.log('before all hook');
    })


    test("dummy1", async () => {

    })

    test("dummy2", async () => {

    })
})


//test.only("screenshot", async({ page }) => {
//    await page.goto('https://example.com/');
// this will make full screen screenshot (without browser)
//    await page.screenshot({path: 'screenshot1.png', fullPage : true})
//    await (await page.$('h1')).screenshot({path : "screenshot_elem.png"})
//})