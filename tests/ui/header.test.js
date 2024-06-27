const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('http://localhost:8090'); 
    const homeLink = await page.$('body > header:nth-child(1) > a:nth-child(3)');
    const text = await homeLink.textContent();
    expect(text).toBe('View My Grades');
  });
  