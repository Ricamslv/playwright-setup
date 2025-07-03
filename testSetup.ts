import { test as base } from '@playwright/test';

// Custom Playwright test hook that will be used across all test files
const test = base.extend({});

const BASE_URL = 'https://cms.mosstg.info/powercmsx';

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