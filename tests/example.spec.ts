import { test, expect } from '@playwright/test';

test("Simple basic test", async({ page }) => {
    // test code here 
    await page.goto("https://www.example.com");
    const pageTitle = await page.locator("h1");
    await expect(pageTitle).toContainText("Example Domain");
    page.click("someSelector");
})