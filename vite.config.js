import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ko: resolve(__dirname, "ko/index.html"),
        ja: resolve(__dirname, "ja/index.html"),
        de: resolve(__dirname, "de/index.html"),
        es: resolve(__dirname, "es/index.html"),
        zh: resolve(__dirname, "zh/index.html"),
        fr: resolve(__dirname, "fr/index.html"),
      },
    },
  },
});
