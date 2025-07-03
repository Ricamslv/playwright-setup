# Playwright Basic Commands

## Install Playwright (if not already installed)
```bash
npm install --save-dev @playwright/test
npx playwright install
```

## Run All Tests (Headless by default)
```bash
npx playwright test
```

## Run All Tests in Headed Mode (with browser UI)
```bash
npx playwright test --headed
```

## Run a Specific Test File
```bash
npx playwright test e2e/example.e2e.test.ts
```

## Run Tests in UI Mode (Interactive)
```bash
npx playwright test --ui
```

## Show Trace Viewer for Failed Tests
```bash
npx playwright show-trace trace.zip
```

## Generate Code with Codegen
```bash
npx playwright codegen <url>
```

## List All Available Browsers
```bash
npx playwright install --help
```

---
For more commands, see the [Playwright CLI docs](https://playwright.dev/docs/test-cli). 