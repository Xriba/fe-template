import { expect, test } from "./test";

const appUrl = process.env.APP_URL + "/api";

test("Test API page", async ({ page }) => {
    await page.goto(appUrl);

    const title = await page.locator("#title");
    await expect(title).toBeVisible();
    await expect(title).toHaveText("Caricamento dati tramite API call");
});
