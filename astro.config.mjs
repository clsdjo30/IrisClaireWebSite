import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://irisclaire.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap({
      customPages: [
        "https://irisclaire.com/blog/Travail%20et%20Carri%C3%A8res",
        "https://irisclaire.com/blog/Amour",
        "https://irisclaire.com/blog/Amour/triangle-amoureux-comment-s-en-sortir",
        "https://irisclaire.com/blog/Amour/faut-il-etre-amis-avant-d-etre-en-couple",
        "https://irisclaire.com/blog/Tarologie",
        "https://irisclaire.com/blog/Tarologie/explorez-les-mysteres-du-tarot-divinatoire-pour-decouvrir-votre-aven",
        "https://irisclaire.com/blog/Travail",
        "https://irisclaire.com/blog/Travail/la-generation-z-au-travail-comprendre-motiver-et-integrer-la-nouvelle-force-du-monde-professionnel",
      ]
    }),
    react(),
  ],
  output: "server",
  adapter: netlify(),
});
