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
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap({
      hostname: "https://chimerical-caramel-133df7.netlify.app",
      customPages: [
        
          "https://main--chimerical-caramel-133df7.netlify.app/blog/Travail%20et%20Carri%C3%A8res",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/Amour",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/comment-fonctionne-un-homme-au-debut-d-une-relation-bienvenue-dans-la-jungle",
        
      ]
    }),
    react(),
  ],
  output: "server",
  adapter: netlify(),
});
