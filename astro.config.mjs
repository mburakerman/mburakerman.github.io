import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isDev = import.meta.env.DEV;

export default defineConfig({
  outDir: "./dist",
  site: "https://mburakerman.github.io",
  base: isDev ? "/" : "/astro-demo/",
  integrations: [tailwind()],
  redirects: {
    "/blog": "/",
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
});
