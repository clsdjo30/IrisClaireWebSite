/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, F as Fragment, m as maybeRenderHead } from '../astro.6b89a777.mjs';
import { a as $$Container, $ as $$Layout } from './404.astro.fbae7f7c.mjs';
import { $ as $$Sectionhead } from './about.astro.05418bf4.mjs';
import 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'svgo';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';

function BlogGridItem({
  post
}) {
  const {
    title
  } = post;
  const featuredImage = post.featureImage.data[0].attributes;
  const category = post.category.data?.attributes?.name;
  const slug = post.slug;
  let {
    content
  } = post;
  content = content.length > 100 ? content.substring(0, 100) + "..." : content;
  return /* @__PURE__ */ jsxs("div", {
    className: "md:4/6 overflow-hidden transition-transform h-auto mt-8",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "h-48 w-full overflow-hidden",
      children: [/* @__PURE__ */ jsx("div", {
        className: "",
        children: /* @__PURE__ */ jsx("p", {
          className: " font-extrabold text-lg text-orange-600 cursor-pointer z-1000 capitalize",
          children: category
        })
      }), /* @__PURE__ */ jsx("img", {
        className: "relative object-cover z-0",
        src: `http://iris-api.candcom.com${featuredImage?.url}`
      })]
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("h1", {
        className: "my-2 font-bold text-sm md:text-md text-gray-900",
        children: title
      }), /* @__PURE__ */ jsx("p", {
        className: "my-2 font-light text-xs md:text-md text-gray-900 text-justify",
        children: content
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "flex justify-between my-4 items-center",
      children: /* @__PURE__ */ jsx("div", {
        className: "inline-flex rounded-md ",
        children: /* @__PURE__ */ jsx("a", {
          href: `/blog/${slug}`,
          className: "inline-flex items-center justify-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-violet-500 hover:bg-violet-400",
          children: "Lire la suite"
        })
      })
    })]
  });
}
__astro_tag_component__(BlogGridItem, "@astrojs/react");

function BlogGrid({
  posts
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4",
    children: posts.map((post) => /* @__PURE__ */ jsx(BlogGridItem, {
      post: post.attributes
    }, post.id))
  });
}
__astro_tag_component__(BlogGrid, "@astrojs/react");

function BlogHeader({
  posts
}) {
  const isAhead = posts.find((post) => post.attributes.isAhead === true);
  const aheadImage = isAhead.attributes.featureImage.data[0].attributes.formats.medium.url;
  const aheadTitle = isAhead.attributes.title;
  const aheadContent = isAhead.attributes.content;
  const firstContent = aheadContent.length > 100 ? aheadContent.substring(0, 100) + "..." : aheadContent;
  const aheadSlug = isAhead.attributes.slug;
  const isSecond = posts.find((post) => post.attributes.isSecond === true);
  const secondPostImage = isSecond.attributes.featureImage.data[0].attributes.formats.small.url;
  const secondPostTitle = isSecond.attributes.title;
  const secondPostContent = isSecond.attributes.content;
  const secondContent = secondPostContent.length > 50 ? secondPostContent.substring(0, 50) + "..." : secondPostContent;
  const secondSlug = isSecond.attributes.slug;
  const isThird = posts.find((post) => post.attributes.isThird === true);
  const thirdPostImage = isThird.attributes.featureImage.data[0].attributes.formats.small.url;
  const thirdPostTitle = isThird.attributes.title;
  const thirdContent = thirdPostTitle.length > 50 ? thirdPostTitle.substring(0, 50) + "..." : thirdPostTitle;
  const thirdSlug = isThird.attributes.slug;
  return /* @__PURE__ */ jsxs("div", {
    className: "w-full flex flex-row flex-wrap mx-auto justify-content-center",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "w-full pt-64 relative mb-3 lg:mb-0.5",
      children: [/* @__PURE__ */ jsx("img", {
        src: `http://iris-api.candcom.com${aheadImage}`,
        alt: "gallery",
        className: "w-full object-cover h-full object-center block absolute inset-0 "
      }), /* @__PURE__ */ jsx("div", {
        className: " w-full",
        children: /* @__PURE__ */ jsxs("div", {
          className: " z-20 w-full h-1/3 bg-slate-100 opacity-75 py-8 px-6",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-2xl text-violet-800 font-medium title-font mb-2",
            children: aheadTitle
          }), /* @__PURE__ */ jsx("p", {
            className: "leading-relaxed text-violet-800 font-normal",
            children: firstContent
          }), /* @__PURE__ */ jsxs("a", {
            href: `/blog/${aheadSlug}`,
            className: "mt-3 text-orange-500 inline-flex items-center font-semibold",
            children: ["Lire la suite", /* @__PURE__ */ jsx("svg", {
              fill: "none",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              className: "w-4 h-4 ml-2",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", {
                d: "M5 12h14M12 5l7 7-7 7"
              })
            })]
          })]
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col md:flex-row gap-0.5",
      children: [/* @__PURE__ */ jsx("div", {
        className: "relative w-full lg:w-1/2",
        children: /* @__PURE__ */ jsxs("div", {
          className: "pt-64 lg:pt-72 flex flex-wrap w-full relative",
          children: [/* @__PURE__ */ jsx("img", {
            alt: "gallery",
            className: "w-full object-cover h-10/12 object-center block opacity-75 absolute inset-0",
            src: `http://iris-api.candcom.com${secondPostImage}`
          }), /* @__PURE__ */ jsx("div", {
            className: "z-20 w-full bg-slate-100 opacity-75 py-5 px-6",
            children: /* @__PURE__ */ jsxs("div", {
              className: "z-10 w-full",
              children: [/* @__PURE__ */ jsx("h2", {
                className: "text-sm text-violet-800 font-medium title-font mb-2",
                children: secondPostTitle
              }), /* @__PURE__ */ jsx("p", {
                className: "leading-relaxed text-xs text-violet-800",
                children: secondContent
              }), /* @__PURE__ */ jsxs("a", {
                href: `/blog/${secondSlug}`,
                className: "mt-3 text-orange-500 inline-flex items-center text-xs",
                children: ["Lire la suite", /* @__PURE__ */ jsx("svg", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  className: "w-4 h-4 ml-2",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", {
                    d: "M5 12h14M12 5l7 7-7 7"
                  })
                })]
              })]
            })
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "relative w-full lg:w-1/2",
        children: /* @__PURE__ */ jsxs("div", {
          className: "pt-64 lg:pt-72 flex flex-wrap w-full relative",
          children: [/* @__PURE__ */ jsx("img", {
            alt: "gallery",
            className: "w-full object-cover h-10/12 object-center block opacity-75 absolute inset-0",
            src: `http://iris-api.candcom.com${thirdPostImage}`
          }), /* @__PURE__ */ jsx("div", {
            className: "z-20 w-full bg-slate-100 opacity-75 py-5 px-6",
            children: /* @__PURE__ */ jsxs("div", {
              className: "z-10 w-full",
              children: [/* @__PURE__ */ jsx("h2", {
                className: "text-sm text-violet-800 font-medium title-font mb-2",
                children: thirdPostTitle
              }), /* @__PURE__ */ jsx("p", {
                className: "leading-relaxed text-xs text-violet-800",
                children: thirdContent
              }), /* @__PURE__ */ jsxs("a", {
                href: `/blog/${thirdSlug}`,
                className: "mt-3 text-orange-500 inline-flex items-center text-xs",
                children: ["Lire la suite", /* @__PURE__ */ jsx("svg", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  className: "w-4 h-4 ml-2",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", {
                    d: "M5 12h14M12 5l7 7-7 7"
                  })
                })]
              })]
            })
          })]
        })
      })]
    })]
  });
}
__astro_tag_component__(BlogHeader, "@astrojs/react");

const $$Astro = createAstro("https://chimerical-caramel-133df7.netlify.app");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const response = await fetch(`http://iris-api.candcom.com/api/posts?populate=*`);
  const data = await response.json();
  const posts = data.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "w-10/12 pb-3 bg-slate-100 h-auto mb-10 pt-6" }, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
        Tous les sujets du moment sur notre blog : astrologie, horoscope,
        spiritualité, rituel, développement personnel…
      ` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Le Blog d'Iris Claire` })}` })}

    ${maybeRenderHead()}<div class="container w-full  mx-auto flex flex-wrap py-6">
      <div class="w-full md:w-2/3 flex flex-col items-center px-3">
        ${renderComponent($$result3, "BlogHeader", BlogHeader, { "posts": posts, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Blog/BlogHeader", "client:component-export": "default" })}
        ${renderComponent($$result3, "BlogGrid", BlogGrid, { "posts": posts, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Blog/BlogGrid.jsx", "client:component-export": "default" })}
      </div>

      <aside class="w-full md:w-1/3 flex flex-col items-center md:px-10">
        <div class=" bg-gradient-to-r from-violet-700 from-10% via-violet-800 to-violet-900 to-70% py-8 px-8 rounded-md">
        <h3 class="mt-10 text-xl font-bold text-violet-100 text-center">
          Votre compagnon divinatoire personnalisé
        </h3>
        <div class="mt-10">
          <img src="/header.png" alt="Astronaut in the air" class="w-96">
        </div>
        <div class="mb-6">
          <p class="text-sm mt-4 text-violet-200 max-w-xl text-justify">
            Plongez dans votre avenir et découvrez les mystères qui l'entourent
            ! Vous obtiendrez des réponses qui vont aideront à mieux vous
            comprendre et à prendre des décisions.
          </p>
          <div class="w-full mt-20 flex flex-col gap-5">
            <button class="flex mx-auto  text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-2 px-16 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg">
              App Store
            </button>
            <button class="flex mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-2 px-16 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg">
              Play Store
            </button>
          </div>
        </div>
        </div>
      </aside>
    </div>
  ` })}
` })}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog.astro");

const $$file = "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
