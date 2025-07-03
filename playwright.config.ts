import { defineConfig } from '@playwright/test';

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