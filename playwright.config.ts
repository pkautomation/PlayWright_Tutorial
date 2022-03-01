import { PlaywrightTestConfig } from "@playwright/test";

// to run with a config with a specific project configuration use command:
// npx playwright test --config=playwright.config.ts --project Webkit
// run with different reporters
// npx playwright test --config=playwright.config.ts --project Webkit --reporter=line
// npx playwright test --config=playwright.config.ts --project Webkit --reporter=list
// npx playwright test --config=playwright.config.ts --project Webkit --reporter=dot
// npx playwright test --config=playwright.config.ts --project Webkit --reporter=junit
// npx playwright test --config=playwright.config.ts --project Webkit --reporter=html

const config: PlaywrightTestConfig = {
    timeout: 60 * 1000,
    retries: 1,
    use: {
        headless: false,
        viewport: { width: 1600, height: 900 },
        actionTimeout: 15 * 1000,
        ignoreHTTPSErrors: false,
        video: "off",
        screenshot: "off"
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' }
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit' }
        }
    ]
}

export default config;