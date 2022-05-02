import { PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, ".dev.env") });

// noinspection JSValidateJSDoc
const config: PlaywrightTestConfig = {
    testDir: "./e2e",
    reporter: [
        ["list"],
        [
            "@bgotink/playwright-coverage",
            /** @type CoverageReporterOptions */
            {
                // Path to the root files should be resolved from, most likely your repository root
                sourceRoot: process.env.SOURCE_ROOT,
                // Files to ignore in coverage, useful
                // - if you're testing the demo app of a component library and want to exclude the demo sources
                // - or part of the code is generated
                // - or if you're running into any of the other many reasons people have for excluding files
                exclude: ["src/features/pages/demo/pages/*", "src/mocks/*", "src/main.tsx"],
                // Directory in which to write coverage reports
                resultDir: path.join(__dirname, process.env.COVERAGE_FOLDER ?? ""),
                // Configure the reports to generate.
                // The value is an array of istanbul reports, with optional configuration attached.
                reports: [
                    // Create an HTML view at <resultDir>/index.html
                    ["html"],
                    // Create <resultDir>/coverage.lcov for consumption by tooling
                    [
                        "lcovonly",
                        {
                            file: "coverage.lcov",
                        },
                    ],
                    // Log a coverage summary at the end of the test run
                    [
                        "text-summary",
                        {
                            file: null,
                        },
                    ],
                ],
                // Configure watermarks, see https://github.com/istanbuljs/nyc#high-and-low-watermarks
                // watermarks: {},
            },
        ],
    ],
};

// noinspection JSUnusedGlobalSymbols
export default config;
