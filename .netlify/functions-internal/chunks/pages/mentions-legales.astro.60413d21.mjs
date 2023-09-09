/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.6b89a777.mjs';
import { d as $$Container, $ as $$Layout } from './404.astro.23edde4b.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'svgo';
/* empty css                          *//* empty css                         */
const $$Astro = createAstro("https://irisclaire.com");
const $$MentionsLegales = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MentionsLegales;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mentions L\xE9gales" }, { "default": ($$result2) => renderTemplate`

   ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div${addAttribute(["mt-10 mx-4", align === "center" && "text-justify"], "class:list")}>
      <h1 class="text-center text-4xl lg:text-3xl font-bold text-violet-900 lg:tracking-tight">
        Mentions Légales
      </h1>

      <div class=" mx-auto max-w-4xl mt-8 mb-56">
        
          <p class="text-base leading-relaxed text-slate-500 mt-3">
            Ce site est édité par DIGITALFY société par actions simplifiée au
            capital de 8000 euros, immatriculée au RCS de LILLE METROPOLE sous
            le numéro 509 233 961 dont le siège social est situé , résidant 99 Avenue Achille Peretti
            , 9220 Neuilly-sur-Seine.
          </p>
          <p class="text-base leading-relaxed text-slate-500 mt-3">
            L’utilisateur pourra contacter la société également 
            <a href="/contact" class="text-blue-600 visited:text-purple-600 hover:text-orange-400">en ligne</a>.
          </p>
          <p class="text-base leading-relaxed text-slate-500 mt-3">Numéro de TVA : FR 07509233961.</p>
          <p class="text-base leading-relaxed text-slate-500 mt-3">
            Le directeur de la publication est Monsieur Cédric Le Sergent.
          </p>
          <p class="text-base leading-relaxed text-slate-500 mt-3">
            Ce site est hébergé par la société Vercel Inc., située 340 S Lemon
            Ave #4133 Walnut, CA 91789, et joignable au (559) 288-7060.
          </p>
       
      </div>
    </div>
  ` })}

` })}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/mentions-legales.astro");

const $$file = "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/mentions-legales.astro";
const $$url = "/mentions-legales";

export { $$MentionsLegales as default, $$file as file, $$url as url };
