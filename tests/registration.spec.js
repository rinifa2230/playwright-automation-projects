import { test, expect } from '@playwright/test';

test('user can register on Demo Web Shop', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/register');
  // Select Gender
  await page.getByRole('radio', { name: 'Female' }).check();
  //Fill in registration form
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('Riddhi');
  await page.getByRole('textbox', { name: 'First name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name:' }).fill('Test');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByLabel('Email:').fill(`test_${Date.now()}@riddhi.com`);
  await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Test@1234');
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Test@1234');

  // Click Register
  //await page.waitForSelector('button', { state: 'visible', timeout: 50000 });
  await page.getByRole('button', { name: 'register' }).click();
  await page.waitForLoadState('networkidle');


  await page.locator('.register-continue-button').waitFor({ state: 'visible' });
  await page.locator('.register-continue-button').click();


   //verify registration success
   //await expect(page.getByRole('link')).toHaveText({name: 'Email:' });
  
});