import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

//const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  outDir: "./dist",
  site: "https://mburakerman.github.io",
  base: "/",
  integrations: [tailwind(), react(), mdx()],
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
