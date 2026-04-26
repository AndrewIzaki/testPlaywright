import { test, expect } from '@playwright/test';

//Item sendo criado na lista
test('criando item', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/');

  const [msg] = await Promise.all([
    page.waitForEvent('console'),
    page.locator('#Item').fill('Tarefa 1'),
    page.locator('#btnAdd').click()
  ]);

  expect(msg.text()).toBe('Item adicionado com sucesso');
});