import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.mjs",
  },
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@stores", replacement: "/src/stores" },
      { find: "@types", replacement: "/src/types" },
      { find: "@utils", replacement: "/src/utils" },
    ],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".module.css"],
  },
});
