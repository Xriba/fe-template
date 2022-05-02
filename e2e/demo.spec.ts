import { expect, test } from "./test";

const appUrl = process.env.APP_URL + "/";

test("Test Demo page", async ({ page }) => {
    await page.goto(appUrl);

    const title = await page.locator("#title");
    await expect(title).toBeVisible();
    await expect(title).toHaveText("Demo della UI Library");
});
