import { test, expect } from '@playwright/test';

test('mobile menu announces its state and public layout fits 360px', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Menü öffnen' });
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click();
  await expect(page.getByRole('button', { name: 'Menü schließen' })).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('navigation', { name: 'Hauptnavigation' }).getByRole('link', { name: 'Kontakt', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Ihre Pläne. Unser Gespräch.' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
});

test('inquiry requires HTTP 202 and keeps input and idempotency key across failures', async ({ page }) => {
  const keys: string[] = [];
  let status = 200;
  await page.route('**/api/public/inquiries', async route => {
    keys.push(route.request().headers()['idempotency-key']);
    await route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(status === 202 ? { reference: 'TEST-ONLY' } : status === 200 ? { reference: 'INVALID' } : { detail: 'Bitte versuchen Sie es erneut.' }) });
  });
  await page.goto('/kontakt');
  await page.getByLabel('Vorname').fill('Test');
  await page.getByLabel('Nachname').fill('Browser');
  await page.getByLabel('E-Mail *', { exact: true }).fill('test@example.com');
  await page.getByLabel('Ihre Nachricht').fill('Isolierter Browsertest ohne Zustellung.');
  await page.getByRole('checkbox').check();
  for (const code of [200, 404, 409, 413, 422, 429]) {
    status = code;
    await Promise.all([page.waitForResponse('**/api/public/inquiries'), page.getByRole('button', { name: /Anfrage absenden/ }).click()]);
    await expect(page.locator('.contact-form').getByRole('alert')).toBeVisible();
    await expect(page.getByText('Vielen Dank für Ihr Vertrauen.')).toHaveCount(0);
    await expect(page.getByLabel('Vorname')).toHaveValue('Test');
  }
  status = 202;
  await page.getByRole('button', { name: /Anfrage absenden/ }).click();
  await expect(page.getByText('Ihre Anfrage wurde angenommen und wird persönlich bearbeitet.')).toBeVisible();
  expect(keys).toHaveLength(7);
  expect(keys[0]).toBeTruthy();
  expect(new Set(keys).size).toBe(1);
});
