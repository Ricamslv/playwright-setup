import { test, BASE_URL } from '../../testSetup'; 
import { expect } from '@playwright/test';

test('Login and access protected page', async ({ page }) => {
  await page.goto(BASE_URL);   // Go to login page

  await page.getByRole('textbox', { name: 'ユーザー名 :' }).fill('username');
  await page.getByRole('textbox', { name: 'パスワード :' }).fill('password');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.waitForTimeout(2000);
  
  expect(page.url()).toContain('url'); 
});