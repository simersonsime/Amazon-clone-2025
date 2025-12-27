import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // allow external host
    port: process.env.PORT || 4173,
    allowedHosts: ["amazon-clone-2025-hnhv.onrender.com","amazon-clone-2025-1.onrender.com"],
  },
});
