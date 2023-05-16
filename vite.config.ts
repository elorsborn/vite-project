import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      // srcDir: "src",
      // filename: "service-worker.js",
      // strategies: "injectManifest",
      // injectRegister: false,
      // manifest: false,
      // injectManifest: {
      //   injectionPoint: null,
      // },
    }),
  ],
  // plugins: [react()],
});
