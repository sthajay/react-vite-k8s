import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "login",
      filename: "remoteEntry.js",
      exposes: {
        "./loginService": "./src/services/login.ts",
        "./Login": "./src/components/Login/Login.tsx",
      },
      shared: ["react", "react-dom", "axios", "rxjs"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
