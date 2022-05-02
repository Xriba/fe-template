import { BrowserContext } from "@playwright/test";

export { test, expect } from "@bgotink/playwright-coverage";
export const getTestContext = async (context: BrowserContext) => {
    const cookie = {
        name: "isPlaywrightTest",
        value: "true",
        domain: "localhost",
        path: "/",
    };

    await context.addCookies([cookie]);

    return context;
};
