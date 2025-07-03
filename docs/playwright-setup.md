1. Install Playwright

2. create Playwright.config.ts code

export default defineConfig({
  timeout: 60000, //timeout for each test
  testDir: 'e2e', //directory for the tests
  testMatch: ['**/*.e2e.test.ts'], //pattern for the tests
  use: {
    headless: false, //for headless mode
    httpCredentials: { //for basic auth
      username: 'username',
      password: 'password',
    },
    video: 'retain-on-failure', //only keep video on failure. On and Off are also available.
    screenshot: 'only-on-failure', //only keep screenshot on failure. On and Off are also available.
  },
}); 

3. Create testSetup.ts

import { test as base } from '@playwright/test';

// Custom Playwright test hook that will be used across all test files
const test = base.extend({});

const BASE_URL = 'url';

// Global setup for each test
test.beforeEach(async ({ page }) => {
  // Go to the app to initialize the environment
  await page.goto(BASE_URL);

  // Clear local storage and session storage before each test
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  // Clear cookies if your app uses them
  await page.context().clearCookies();

  // Ensure page has loaded completely
  await page.waitForLoadState('load', { timeout: 10000 });
});

// Export the customized test for use in other test files
export { test, BASE_URL }; 





