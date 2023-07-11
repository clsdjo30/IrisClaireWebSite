import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://chimerical-caramel-133df7.netlify.app",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), react()],
  output: "server",
  adapter: netlify()
});