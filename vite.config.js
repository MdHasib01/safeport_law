import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    assetsInlineLimit: 0, // 🛑 Don't do this unless needed
  },
  theme: {
    extend: {
      backgroundImage: {
        "building-bg": "url('/public/woman-guarantee-block.png')",
      },
    },
  },
});
