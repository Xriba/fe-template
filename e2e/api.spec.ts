import { expect, getTestContext, test } from "./test";
import { getPaginatedUsers } from "../src/mocks/data";

const appUrl = process.env.APP_URL + "/api";

test("Test API page", async ({ context, page }) => {
    await getTestContext(context);

    await page.route("**/users", (route) => {
        route.fulfill({
            status: 200,
            contentType: "text/json",
            body: JSON.stringify(getPaginatedUsers()),
        });
    });
    await page.goto(appUrl);

    const title = await page.locator("#title");

    await expect(title).toBeVisible();
    await expect(title).toHaveText("Caricamento dati tramite API call");

    const table = await page.locator(".Table");

    await expect(table).toBeVisible();
});

test("Test loading users error", async ({ context, page }) => {
    await getTestContext(context);

    await page.route("**/users", (route) => {
        route.fulfill({
            status: 500,
        });
    });
    await page.goto(appUrl);

    const error = await page.locator(".error");

    await expect(error).toBeVisible();
});
