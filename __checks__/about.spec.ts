import { test, expect } from '@playwright/test'

// You can override the default Playwright test timeout of 30s
// test.setTimeout(60_000);

test('webshop homepage', async ({ page }) => {
  const response = await page.goto('https://muhammad.engineer')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/Muhammad Nasr2/)
  await page.screenshot({ path: 'homepage.jpg' })
})
