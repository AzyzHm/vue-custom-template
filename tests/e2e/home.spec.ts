import { expect, test } from '@playwright/test'

test.describe('Home page', () => {
  test('loads and shows the template heading', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'Vue Custom Template' })).toBeVisible()
  })

  test('increments the counter on click', async ({ page }) => {
    await page.goto('/')

    const value = page.getByText('0', { exact: true })
    await expect(value).toBeVisible()

    await page.getByRole('button', { name: 'Increment' }).click()

    await expect(page.getByText('1', { exact: true })).toBeVisible()
  })
})
