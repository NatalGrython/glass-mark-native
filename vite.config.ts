import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import scssDts from "vite-plugin-sass-dts";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.ELECTRON === "true" ? "./" : ".",
  plugins: [react(), scssDts({ enabledMode: [mode] })],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "./src/styles/variables.scss" as *;
        @use "./src/styles/mixins.scss" as *;
      `,
      },
    },
  },
}));
