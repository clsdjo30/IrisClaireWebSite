import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import { i as deserializeManifest } from './chunks/astro.6b89a777.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';
import 'html-escaper';

const _page0  = () => import('./chunks/endpoint@_@js.25787dfe.mjs');
const _page1  = () => import('./chunks/index@_@astro.5cd8fe33.mjs');
const _page2  = () => import('./chunks/mentions-legales@_@astro.dbf776cb.mjs');
const _page3  = () => import('./chunks/cgv-cgu@_@astro.03bec29f.mjs');
const _page4  = () => import('./chunks/contact@_@astro.c3470d30.mjs');
const _page5  = () => import('./chunks/_slug_@_@astro.fb7a3b98.mjs');
const _page6  = () => import('./chunks/_category_@_@astro.e4a23a50.mjs');
const _page7  = () => import('./chunks/blog@_@astro.5c8c8ac2.mjs');
const _page8  = () => import('./chunks/team@_@astro.72dc3e55.mjs');
const _page9  = () => import('./chunks/404@_@astro.11f4339a.mjs');const pageMap = new Map([["node_modules/@astrojs/image/dist/endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/mentions-legales.astro", _page2],["src/pages/cgv-cgu.astro", _page3],["src/pages/contact.astro", _page4],["src/pages/blog/[categoy]/[slug].astro", _page5],["src/pages/blog/[category].astro", _page6],["src/pages/blog.astro", _page7],["src/pages/team.astro", _page8],["src/pages/404.astro", _page9]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/image/dist/endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){document.getElementById(\"astronav-menu\")?.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".astronav-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});const o=document.querySelectorAll(\".astronav-dropdown\");o.forEach(e=>{e.querySelector(\"button\")?.addEventListener(\"click\",r=>{e.classList.toggle(\"open\"),e.setAttribute(\"aria-expanded\",e.getAttribute(\"aria-expanded\")===\"true\"?\"false\":\"true\"),e.hasAttribute(\"open\")?e.removeAttribute(\"open\"):e.setAttribute(\"open\",\"\"),e?.querySelector(\".dropdown-toggle\")?.classList.toggle(\"hidden\"),Array.from(o).filter(t=>t!==e).forEach(t=>{t.classList.remove(\"open\"),t.removeAttribute(\"open\"),t.setAttribute(\"aria-expanded\",\"false\"),t.querySelector(\".dropdown-toggle\")?.classList.add(\"hidden\")}),r.stopPropagation()})}),document.addEventListener(\"click\",()=>{o.forEach(e=>{e.classList.remove(\"open\"),e.removeAttribute(\"open\"),e.setAttribute(\"aria-expanded\",\"false\")}),document.querySelectorAll(\".dropdown-toggle\").forEach(e=>e.classList.add(\"hidden\"))})});\n"}],"styles":[{"type":"external","src":"/_astro/404.1f85793c.css"},{"type":"external","src":"/_astro/blog.594a5b9c.css"},{"type":"external","src":"/_astro/404.e5367cc6.css"},{"type":"external","src":"/_astro/index.bac33636.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){document.getElementById(\"astronav-menu\")?.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".astronav-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});const o=document.querySelectorAll(\".astronav-dropdown\");o.forEach(e=>{e.querySelector(\"button\")?.addEventListener(\"click\",r=>{e.classList.toggle(\"open\"),e.setAttribute(\"aria-expanded\",e.getAttribute(\"aria-expanded\")===\"true\"?\"false\":\"true\"),e.hasAttribute(\"open\")?e.removeAttribute(\"open\"):e.setAttribute(\"open\",\"\"),e?.querySelector(\".dropdown-toggle\")?.classList.toggle(\"hidden\"),Array.from(o).filter(t=>t!==e).forEach(t=>{t.classList.remove(\"open\"),t.removeAttribute(\"open\"),t.setAttribute(\"aria-expanded\",\"false\"),t.querySelector(\".dropdown-toggle\")?.classList.add(\"hidden\")}),r.stopPropagation()})}),document.addEventListener(\"click\",()=>{o.forEach(e=>{e.classList.remove(\"open\"),e.removeAttribute(\"open\"),e.setAttribute(\"aria-expanded\",\"false\")}),document.querySelectorAll(\".dropdown-toggle\").forEach(e=>e.classList.add(\"hidden\"))})});\n"}],"styles":[{"type":"external","src":"/_astro/404.1f85793c.css"},{"type":"external","src":"/_astro/blog.594a5b9c.css"},{"type":"external","src":"/_astro/404.e5367cc6.css"}],"routeData":{"route":"/mentions-legales","type":"page","pattern":"^\\/mentions-legales\\/?$","segments":[[{"content":"mentions-legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentions-legales.astro","pathname":"/mentions-legales","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){document.getElementById(\"astronav-menu\")?.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".astronav-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});const o=document.querySelectorAll(\".astronav-dropdown\");o.forEach(e=>{e.querySelector(\"button\")?.addEventListener(\"click\",r=>{e.classList.toggle(\"open\"),e.setAttribute(\"aria-expanded\",e.getAttribute(\"aria-expanded\")===\"true\"?\"false\":\"true\"),e.hasAttribute(\"open\")?e.removeAttribute(\"open\"):e.setAttribute(\"open\",\"\"),e?.querySelector(\".dropdown-toggle\")?.classList.toggle(\"hidden\"),Array.from(o).filter(t=>t!==e).forEach(t=>{t.classList.remove(\"open\"),t.removeAttribute(\"open\"),t.setAttribute(\"aria-expanded\",\"false\"),t.querySelector(\".dropdown-toggle\")?.classList.add(\"hidden\")}),r.stopPropagation()})}),document.addEventListener(\"click\",()=>{o.forEach(e=>{e.classList.remove(\"open\"),e.removeAttribute(\"open\"),e.setAttribute(\"aria-expanded\",\"false\")}),document.querySelectorAll(\".dropdown-toggle\").forEach(e=>e.classList.add(\"hidden\"))})});\n"}],"styles":[{"type":"external","src":"/_astro/404.1f85793c.css"},{"type":"external","src":"/_astro/blog.594a5b9c.css"},{"type":"external","src":"/_astro/404.e5367cc6.css"}],"routeData":{"route":"/cgv-cgu","type":"page","pattern":"^\\/cgv-cgu\\/?$","segments":[[{"content":"cgv-cgu","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cgv-cgu.astro","pathname":"/cgv-cgu","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){document.getElementById(\"astronav-menu\")?.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".astronav-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});const o=document.querySelectorAll(\".astronav-dropdown\");o.forEach(e=>{e.querySelector(\"button\")?.addEventListener(\"click\",r=>{e.classList.toggle(\"open\"),e.setAttribute(\"aria-expanded\",e.getAttribute(\"aria-expanded\")===\"true\"?\"false\":\"true\"),e.hasAttribute(\"open\")?e.removeAttribute(\"open\"):e.setAttribute(\"open\",\"\"),e?.querySelector(\".dropdown-toggle\")?.classList.toggle(\"hidden\"),Array.from(o).filter(t=>t!==e).forEach(t=>{t.classList.remove(\"open\"),t.removeAttribute(\"open\"),t.setAttribute(\"aria-expanded\",\"false\"),t.querySelector(\".dropdown-toggle\")?.classList.add(\"hidden\")}),r.stopPropagation()})}),document.addEventListener(\"click\",()=>{o.forEach(e=>{e.classList.remove(\"open\"),e.removeAttribute(\"open\"),e.setAttribute(\"aria-expanded\",\"false\")}),document.querySelectorAll(\".dropdown-toggle\").forEach(e=>e.classList.add(\"hidden\"))})});\n"}],"styles":[{"type":"external","src":"/_astro/404.1f85793c.css"},{"type":"external","src":"/_astro/blog.594a5b9c.css"},{"type":"external","src":"/_astro/404.e5367cc6.css"},{"type":"external","src":"/_astro/contact.4c266ef0.css"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){document.getElementById(\"astronav-menu\")?.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".astronav-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});const o=document.querySelectorAll(\".astronav-dropdown\");o.forEach(e=>{e.querySelector(\"button\")?.addEventListener(\"click\",r=>{e.classList.toggle(\"open\"),e.setAttribute(\"aria-expanded\",e.getAttribute(\"aria-expanded\")===\"true\"?\"false\":\"true\"),e.hasAttribute(\"open\")?e.removeAttribute(\"open\"):e.setAttribute(\"open\",\"\"),e?.querySelector(\".dropdown-toggle\")?.classList.toggle(\"hidden\"),Array.from(o).filter(t=>t!==e).forEach(t=>{t.classList.remove(\"open\"),t.removeAttribute(\"open\"),t.setAttribute(\"aria-expanded\",\"false\"),t.querySelector(\".dropdown-toggle\")?.classList.add(\"hidden\")}),r.stopPropagation()})}),document.addEventListener(\"click\",()=>{o.forEach(e=>{e.classList.remove(\"open\"),e.removeAttribute(\"open\"),e.setAttribute(\"aria-expanded\",\"false\")}),document.querySelectorAll(\".dropdown-toggle\").forEach(e=>e.classList.add(\"hidden\"))})});\n"}],"styles":[{"type":"external","src":"/_astro/404.1f85793c.css"},{"type":"external","src":"/_astro/blog.594a5b9c.css"},{"type":"external","src":"/_astro/404.e5367cc6.css"}],"routeData":{"route":"/blog/[categoy]/[slug]","type":"page","pattern":"^\\/blog\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"categoy","dynamic":true,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["categoy","slug"],"component":"src/pages/blog/[categoy]/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){document.getElementById(\"astronav-menu\")?.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".astronav-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});const o=document.querySelectorAll(\".astronav-dropdown\");o.forEach(e=>{e.querySelector(\"button\")?.addEventListener(\"click\",r=>{e.classList.toggle(\"open\"),e.setAttribute(\"aria-expanded\",e.getAttribute(\"aria-expanded\")===\"true\"?\"false\":\"true\"),e.hasAttribute(\"open\")?e.removeAttribute(\"open\"):e.setAttribute(\"open\",\"\"),e?.querySelector(\".dropdown-toggle\")?.classList.toggle(\"hidden\"),Array.from(o).filter(t=>t!==e).forEach(t=>{t.classList.remove(\"open\"),t.removeAttribute(\"open\"),t.setAttribute(\"aria-expanded\",\"false\"),t.querySelector(\".dropdown-toggle\")?.classList.add(\"hidden\")}),r.stopPropagation()})}),document.addEventListener(\"click\",()=>{o.forEach(e=>{e.classList.remove(\"open\"),e.removeAttribute(\"open\"),e.setAttribute(\"aria-expanded\",\"false\")}),document.querySelectorAll(\".dropdown-toggle\").forEach(e=>e.classList.add(\"hidden\"))})});\n"}],"styles":[{"type":"external","src":"/_astro/404.1f85793c.css"},{"type":"external","src":"/_astro/blog.594a5b9c.css"},{"type":"external","src":"/_astro/404.e5367cc6.css"},{"type":"external","src":"/_astro/blog.0d5b174d.css"}],"routeData":{"route":"/blog/[category]","type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"category","dynamic":true,"spread":false}]],"params":["category"],"component":"src/pages/blog/[category].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){document.getElementById(\"astronav-menu\")?.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".astronav-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});const o=document.querySelectorAll(\".astronav-dropdown\");o.forEach(e=>{e.querySelector(\"button\")?.addEventListener(\"click\",r=>{e.classList.toggle(\"open\"),e.setAttribute(\"aria-expanded\",e.getAttribute(\"aria-expanded\")===\"true\"?\"false\":\"true\"),e.hasAttribute(\"open\")?e.removeAttribute(\"open\"):e.setAttribute(\"open\",\"\"),e?.querySelector(\".dropdown-toggle\")?.classList.toggle(\"hidden\"),Array.from(o).filter(t=>t!==e).forEach(t=>{t.classList.remove(\"open\"),t.removeAttribute(\"open\"),t.setAttribute(\"aria-expanded\",\"false\"),t.querySelector(\".dropdown-toggle\")?.classList.add(\"hidden\")}),r.stopPropagation()})}),document.addEventListener(\"click\",()=>{o.forEach(e=>{e.classList.remove(\"open\"),e.removeAttribute(\"open\"),e.setAttribute(\"aria-expanded\",\"false\")}),document.querySelectorAll(\".dropdown-toggle\").forEach(e=>e.classList.add(\"hidden\"))})});\n"}],"styles":[{"type":"external","src":"/_astro/404.1f85793c.css"},{"type":"external","src":"/_astro/blog.594a5b9c.css"},{"type":"external","src":"/_astro/404.e5367cc6.css"},{"type":"external","src":"/_astro/blog.0d5b174d.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){document.getElementById(\"astronav-menu\")?.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".astronav-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});const o=document.querySelectorAll(\".astronav-dropdown\");o.forEach(e=>{e.querySelector(\"button\")?.addEventListener(\"click\",r=>{e.classList.toggle(\"open\"),e.setAttribute(\"aria-expanded\",e.getAttribute(\"aria-expanded\")===\"true\"?\"false\":\"true\"),e.hasAttribute(\"open\")?e.removeAttribute(\"open\"):e.setAttribute(\"open\",\"\"),e?.querySelector(\".dropdown-toggle\")?.classList.toggle(\"hidden\"),Array.from(o).filter(t=>t!==e).forEach(t=>{t.classList.remove(\"open\"),t.removeAttribute(\"open\"),t.setAttribute(\"aria-expanded\",\"false\"),t.querySelector(\".dropdown-toggle\")?.classList.add(\"hidden\")}),r.stopPropagation()})}),document.addEventListener(\"click\",()=>{o.forEach(e=>{e.classList.remove(\"open\"),e.removeAttribute(\"open\"),e.setAttribute(\"aria-expanded\",\"false\")}),document.querySelectorAll(\".dropdown-toggle\").forEach(e=>e.classList.add(\"hidden\"))})});\n"}],"styles":[{"type":"external","src":"/_astro/404.1f85793c.css"},{"type":"external","src":"/_astro/blog.594a5b9c.css"},{"type":"external","src":"/_astro/404.e5367cc6.css"}],"routeData":{"route":"/team","type":"page","pattern":"^\\/team\\/?$","segments":[[{"content":"team","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/team.astro","pathname":"/team","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){document.getElementById(\"astronav-menu\")?.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".astronav-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});const o=document.querySelectorAll(\".astronav-dropdown\");o.forEach(e=>{e.querySelector(\"button\")?.addEventListener(\"click\",r=>{e.classList.toggle(\"open\"),e.setAttribute(\"aria-expanded\",e.getAttribute(\"aria-expanded\")===\"true\"?\"false\":\"true\"),e.hasAttribute(\"open\")?e.removeAttribute(\"open\"):e.setAttribute(\"open\",\"\"),e?.querySelector(\".dropdown-toggle\")?.classList.toggle(\"hidden\"),Array.from(o).filter(t=>t!==e).forEach(t=>{t.classList.remove(\"open\"),t.removeAttribute(\"open\"),t.setAttribute(\"aria-expanded\",\"false\"),t.querySelector(\".dropdown-toggle\")?.classList.add(\"hidden\")}),r.stopPropagation()})}),document.addEventListener(\"click\",()=>{o.forEach(e=>{e.classList.remove(\"open\"),e.removeAttribute(\"open\"),e.setAttribute(\"aria-expanded\",\"false\")}),document.querySelectorAll(\".dropdown-toggle\").forEach(e=>e.classList.add(\"hidden\"))})});\n"}],"styles":[{"type":"external","src":"/_astro/404.1f85793c.css"},{"type":"external","src":"/_astro/blog.594a5b9c.css"},{"type":"external","src":"/_astro/404.e5367cc6.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://irisclaire.com","base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog/[category].astro",{"propagation":"none","containsHead":true}],["C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/cgv-cgu.astro",{"propagation":"none","containsHead":true}],["C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/mentions-legales.astro",{"propagation":"none","containsHead":true}],["C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/team.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog/[categoy]/[slug].astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/team@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/blog.astro":"chunks/pages/blog.astro.5c9eb56c.mjs","/src/pages/cgv-cgu.astro":"chunks/pages/cgv-cgu.astro.93d22c8a.mjs","/src/pages/contact.astro":"chunks/pages/contact.astro.38c80a70.mjs","/src/pages/mentions-legales.astro":"chunks/pages/mentions-legales.astro.60413d21.mjs","/src/pages/team.astro":"chunks/pages/team.astro.f0454ba3.mjs","\u0000@astro-page:node_modules/@astrojs/image/dist/endpoint@_@js":"chunks/endpoint@_@js.25787dfe.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.5cd8fe33.mjs","\u0000@astro-page:src/pages/mentions-legales@_@astro":"chunks/mentions-legales@_@astro.dbf776cb.mjs","\u0000@astro-page:src/pages/cgv-cgu@_@astro":"chunks/cgv-cgu@_@astro.03bec29f.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact@_@astro.c3470d30.mjs","\u0000@astro-page:src/pages/blog/[categoy]/[slug]@_@astro":"chunks/_slug_@_@astro.fb7a3b98.mjs","\u0000@astro-page:src/pages/blog/[category]@_@astro":"chunks/_category_@_@astro.e4a23a50.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog@_@astro.5c8c8ac2.mjs","\u0000@astro-page:src/pages/team@_@astro":"chunks/team@_@astro.72dc3e55.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.11f4339a.mjs","C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/content/team/Alexandra.md?astroContentCollectionEntry=true":"chunks/Alexandra.65f495b4.mjs","C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/content/team/Cedric.md?astroContentCollectionEntry=true":"chunks/Cedric.5bfc6310.mjs","C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/content/team/Celine.md?astroContentCollectionEntry=true":"chunks/Celine.c4c7ac6f.mjs","C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/content/team/Alexandra.md?astroPropagatedAssets":"chunks/Alexandra.efea3b9f.mjs","C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/content/team/Cedric.md?astroPropagatedAssets":"chunks/Cedric.329fca3b.mjs","C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/content/team/Celine.md?astroPropagatedAssets":"chunks/Celine.b2a3dacb.mjs","C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/content/team/Alexandra.md":"chunks/Alexandra.e59d3dea.mjs","C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/content/team/Cedric.md":"chunks/Cedric.875113e0.mjs","C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/content/team/Celine.md":"chunks/Celine.4be03502.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.fa6a42ad.js","@components/Faq.jsx":"_astro/Faq.476dc7a5.js","@components/Blog/BlogGrid.jsx":"_astro/BlogGrid.b050e0c5.js","@components/Blog/BlogContainer.jsx":"_astro/BlogContainer.a3a6fc64.js","@components/Blog/BlogHeader":"_astro/BlogHeader.5d691082.js","@components/HeroSlider.jsx":"_astro/HeroSlider.86c9277b.js","@astrojs/react/client.js":"_astro/client.de827894.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/bg-pattern-3.953aef31.png","/_astro/bg-pattern.644014d6.png","/_astro/myanswer.87b61e6b.png","/_astro/inter-vietnamese-variable-wghtOnly-normal.ac4e131c.woff2","/_astro/inter-cyrillic-ext-variable-wghtOnly-normal.848492d3.woff2","/_astro/inter-greek-variable-wghtOnly-normal.89b4a3fe.woff2","/_astro/inter-greek-ext-variable-wghtOnly-normal.fe977ddb.woff2","/_astro/inter-latin-ext-variable-wghtOnly-normal.45606f83.woff2","/_astro/inter-latin-variable-wghtOnly-normal.450f3ba4.woff2","/_astro/inter-cyrillic-variable-wghtOnly-normal.262a1054.woff2","/_astro/header.c424481d.png","/_astro/game_draw.95e213cb.png","/_astro/404.e5367cc6.css","/_astro/404.1f85793c.css","/_astro/blog.594a5b9c.css","/_astro/blog.0d5b174d.css","/_astro/contact.4c266ef0.css","/_astro/index.bac33636.css","/adaptive-icon.png","/app_smartphone.png","/couple.png","/favicon.svg","/friendship.png","/happy-1.png","/happy.png","/happy2.png","/header.png","/iris_003.png","/opengraph.jpg","/robots.txt","/trouple.png","/woman_on_left.png","/woman_on_left@x2.png","/wooman_on_left_001.png","/avatar/woman_avatar_one.png","/avatar/woman_avatar_three.png","/avatar/woman_avatar_two.png","/faq/desktop_faq.png","/faq/mobile_faq.png","/team/cedric.png","/team/celine.png","/team/fiona.png","/_astro/BlogContainer.a3a6fc64.js","/_astro/BlogGrid.b050e0c5.js","/_astro/BlogHeader.5d691082.js","/_astro/client.de827894.js","/_astro/Faq.476dc7a5.js","/_astro/HeroSlider.86c9277b.js","/_astro/index.03be2d59.js","/_astro/jsx-runtime.b9e88e07.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
