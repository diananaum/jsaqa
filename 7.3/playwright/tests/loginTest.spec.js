const { test, expect } = require('@playwright/test');
require('../user');

test.beforeEach(async({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");
});

test("Should successfully login", async({ page }) => {
    const emailInput = page.getByPlaceholder("Email");
    const passwordInput = page.getByPlaceholder("Пароль");
    const confirmButton = page.getByTestId("login-submit-btn");

    await emailInput.fill(email);
    await passwordInput.fill(password);
    await page.click("text=Войти");

    await expect(page).toHaveURL("https://netology.ru/profile");
});

test("Should not login if email is invalid", async({ page }) => {
    const emailInput = page.getByPlaceholder("Email");
    const passwordInput = page.getByPlaceholder("Пароль");
    const confirmButton = page.getByTestId("login-submit-btn");

    await emailInput.fill("12345");
    await passwordInput.fill("12345");
    await page.click("text=Войти");

    await expect(page.getByText('Неверный email')).toHaveText(/Неверный email/);
});

test("Should not login if password is invalid", async({ page }) => {
    const emailInput = page.getByPlaceholder("Email");
    const passwordInput = page.getByPlaceholder("Пароль");
    const confirmButton = page.getByTestId("login-submit-btn");

    await emailInput.fill(email);
    await passwordInput.fill("12345");
    await page.click("text=Войти");

    await expect(page.getByTestId("login-error-hint")).toBeVisible();
});