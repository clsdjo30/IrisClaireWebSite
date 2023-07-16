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
      customPages: [
        
          "https://main--chimerical-caramel-133df7.netlify.app/blog/Travail%20et%20Carri%C3%A8res",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/Amour",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/comment-fonctionne-un-homme-au-debut-d-une-relation-bienvenue-dans-la-jungle",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/triangle-amoureux-comment-s-en-sortir",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/les-choses-stupides-que-l-on-fait-par-amour-temoignages-epiques",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/faut-il-etre-amis-avant-d-etre-en-couple",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/la-peur-de-l-engagement-comment-y-faire-face",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/l-amour-vache-quand-cupidon-prend-des-vacances-a-la-ferme",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/amour-a-sens-unique-j-aime-quelqu-un-qui-ne-m-aime-pas",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/rupture-les-5-phrases-a-bannir",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/la-jalousie-dans-un-couple-preuve-d-amour-ou-poison",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/veut-il-vraiment-une-relation-serieuse-les-5-signes-qui-ne-trompent-pas",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/amour/peut-on-aimer-deux-personnes-a-la-fois-la-quadrature-du-coeur",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/travail-et-carrieres/la-resilience-au-travail-comment-rebondir-face-aux-defis-professionnels",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/travail-et-carrieres/le-manager-pervers-narcissique-comment-le-reconnaitre-et-comment-s-en-proteger",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/travail-et-carrieres/equilibre-entre-vie-professionnelle-et-vie-personnelle-7-conseils-pour-y-parvenir-avec-succes-1",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/travail-et-carrieres/la-demission-silencieuse-comprendre-et-combattre-le-quiet-quitting",
          "https://main--chimerical-caramel-133df7.netlify.app/blog/travail-et-carrieres/la-gestion-du-stress-au-travail-strategies-et-conseils"
        
      ]
    }),
    react(),
  ],
  output: "server",
  adapter: netlify(),
});
