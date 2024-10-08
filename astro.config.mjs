import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://gogowheelsandtires.com/',
  integrations: [tailwind()],
  output: "server",
  adapter: netlify()
});