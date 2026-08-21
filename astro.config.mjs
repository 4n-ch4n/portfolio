// @ts-check
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://4n-ch4n.github.io",
  base: "/portfolio",
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Keep the dev file-watcher inside the project. Without this it can end
      // up enumerating the drive root on Windows and crash on kernel files
      // that are permanently locked (EBUSY on lstat C:\DumpStack.log.tmp).
      fs: { allow: [fileURLToPath(new URL(".", import.meta.url))] },
      watch: {
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/dist/**",
          "**/.astro/**",
          "**/DumpStack.log.tmp",
          "**/pagefile.sys",
          "**/swapfile.sys",
          "**/hiberfil.sys",
        ],
      },
    },
  },
});
