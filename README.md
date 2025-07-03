# playwright-setup

## Input correct Username and Password:
```bash
playwright.config.ts

 httpCredentials: { //for basic auth
      username: 'username',
      password: 'Password',
    },
```

```bash
login.e2e.test.ts

username: 'username',
password: 'Password',
```

## Run All Tests (Headless by default)
```bash
npx playwright test
```

## Run All Tests in Headed Mode (with browser UI)
```bash
npx playwright test --headed

