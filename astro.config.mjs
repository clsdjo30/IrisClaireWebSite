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
        // "https://irisclaire.com/blog/amour/comment-fonctionne-un-homme-au-debut-d-une-relation-bienvenue-dans-la-jungle",
        // "https://irisclaire.com/blog/amour/les-choses-stupides-que-l-on-fait-par-amour-temoignages-epiques",
        // "https://irisclaire.com/blog/amour/la-peur-de-l-engagement-comment-y-faire-face",
        // "https://irisclaire.com/blog/amour/l-amour-vache-quand-cupidon-prend-des-vacances-a-la-ferme",
        // "https://irisclaire.com/blog/amour/amour-a-sens-unique-j-aime-quelqu-un-qui-ne-m-aime-pas",
        // "https://irisclaire.com/blog/amour/rupture-les-5-phrases-a-bannir",
        // "https://irisclaire.com/blog/amour/la-jalousie-dans-un-couple-preuve-d-amour-ou-poison",
        // "https://irisclaire.com/blog/amour/veut-il-vraiment-une-relation-serieuse-les-5-signes-qui-ne-trompent-pas",
        // "https://irisclaire.com/blog/amour/peut-on-aimer-deux-personnes-a-la-fois-la-quadrature-du-coeur",
        "https://irisclaire.com/blog/Travail",
        "https://irisclaire.com/blog/Travail/la-generation-z-au-travail-comprendre-motiver-et-integrer-la-nouvelle-force-du-monde-professionnel",
      ]
    }),
    react(),
  ],
  output: "server",
  adapter: netlify(),
});
