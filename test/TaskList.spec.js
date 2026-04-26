import { test, expect } from '@playwright/test';

test('criando item', async({page})=>{
  await page.goto('http://127.0.0.1:3000/');

  await page.locator('#btnAdd').click()
})