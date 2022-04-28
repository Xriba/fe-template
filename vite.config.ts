import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: path.resolve(__dirname, "./src"),
            layouts: path.resolve(__dirname, "./src/features/layouts"),
            pages: path.resolve(__dirname, "./src/features/pages"),
        },
    },
});
