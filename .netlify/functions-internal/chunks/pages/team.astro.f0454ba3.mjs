/* empty css                         */import { g as createCollectionToGlobResultMap, h as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, F as Fragment, m as maybeRenderHead } from '../astro.6b89a777.mjs';
import { $ as $$Picture } from './index.astro.31e4a440.mjs';
import { d as $$Container, $ as $$Layout } from './404.astro.23edde4b.mjs';
import { b as $$Sectionhead } from './_category_.astro.66f95600.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
import './endpoint.js.c8e13618.mjs';
import 'sharp';
import 'react';
import 'pure-react-carousel';
/* empty css                           */import 'react/jsx-runtime';
import 'svgo';
/* empty css                          *//* empty css                         *//* empty css                          */
// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/team/Alexandra.md": () => import('../Alexandra.65f495b4.mjs'),"/src/content/team/Cedric.md": () => import('../Cedric.5bfc6310.mjs'),"/src/content/team/Celine.md": () => import('../Celine.c4c7ac6f.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"team":{"type":"content","entries":{"alexandra":"/src/content/team/Alexandra.md","celine":"/src/content/team/Celine.md","cedric":"/src/content/team/Cedric.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/team/Alexandra.md": () => import('../Alexandra.efea3b9f.mjs'),"/src/content/team/Cedric.md": () => import('../Cedric.329fca3b.mjs'),"/src/content/team/Celine.md": () => import('../Celine.b2a3dacb.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro("https://irisclaire.com");
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Team;
  const publishedTeamMembers = await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Team" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`Notre petite équipe de passionés` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`La Team` })}` })}

    
    ${maybeRenderHead()}<div class="w-7/12 md:w-full  grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12"> 
      ${publishedTeamMembers.map((teamMemberEntry) => renderTemplate`<div class="group">
            <div class="w-full aspect-square">
              ${renderComponent($$result3, "Picture", $$Picture, { "src": teamMemberEntry.data.avatar.src, "alt": teamMemberEntry.data.avatar.alt, "sizes": "(max-width: 800px) 100vw, 400px", "widths": [200, 400], "aspectRatio": "1:1", "background": "#ffffff", "fit": "cover", "position": "center", "class": "w-full rounded-md transition group-hover:-translate-y-1 group-hover:shadow-xl" })}
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-violet-700 font-semibold">
                ${teamMemberEntry.data.name}
              </h2>
              <h3 class="text-sm text-violet-900">
                ${teamMemberEntry.data.title}
              </h3>
            </div>
          </div>`)}
    </div>
    <div class="flex flex-col gap-3 mx-auto max-w-4xl my-16 px-10">
      <h2 class="font-bold text-3xl text-violet-700">
       Story Telling d'Iris Claire
      </h2>
      <p class="text-lg leading-relaxed text-violet-900">
        We're a multi-cultural team from around the world! We come from diverse
        backgrounds, bringing different personalities, experiences and skills to
        the job. This is what makes our team so special.
      </p>
    </div>
  ` })}
` })}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/team.astro");

const $$file = "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/team.astro";
const $$url = "/team";

export { $$Team as default, $$file as file, $$url as url };
