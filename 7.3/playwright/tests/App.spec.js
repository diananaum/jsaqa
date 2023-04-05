const { test, expect } = require("@playwright/test");
const { timeout } = require("../playwright.config");

test("test", async ({ page }) => {
  // Go to https://netology.ru/free/management#/
  await page.goto("https://netology.ru/free/management#/", { timeout: 60000 });

  // Click a
  await page.getByText("a");
  await expect(page).toHaveURL("https://netology.ru/");

  // Click text=Учиться бесплатно
  await page.click("text=Учиться бесплатно");
  await expect(page).toHaveURL("https://netology.ru/free");

  page.click("text=Бизнес и управление");

  // Click text=Как стать продакт или проджект-менеджером
  await page.click("text=Как стать продакт или проджект-менеджером");
  await expect(page).toHaveURL(
    "https://netology.ru/programs/product-project-marathon"
  );
});
