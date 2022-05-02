import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import * as path from "path";

const include = ["src/mapping/**/*.spec.ts", "src/services/**/*.spec.tsx"];

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: path.resolve(__dirname, "./src"),
            layouts: path.resolve(__dirname, "./src/features/layouts"),
            pages: path.resolve(__dirname, "./src/features/pages"),
        },
    },
    test: {
        environment: "happy-dom",
        globals: true,
        setupFiles: "vitest.setup.ts",
        include,
        coverage: {
            all: false,
            include,
        },
    },
});
