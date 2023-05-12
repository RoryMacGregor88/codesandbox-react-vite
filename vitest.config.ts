/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["vitest-setup.ts"],
    alias: {
      "@src": __dirname + "/frontend/src"
    },
    coverage: {
      reporter: ["text", "json", "html"]
    }
  }
});
