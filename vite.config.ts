import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // Relative asset URLs work on both the GitHub Pages project URL and a
  // custom domain such as wavnix.com.
  base: "./",
  publicDir: path.resolve(__dirname, "videos"),
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.source.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
