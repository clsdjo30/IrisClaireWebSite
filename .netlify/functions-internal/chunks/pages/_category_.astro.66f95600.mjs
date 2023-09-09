/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, _ as __astro_tag_component__, s as spreadAttributes, u as unescapeHTML, e as renderComponent, F as Fragment } from '../astro.6b89a777.mjs';
import { $ as $$Layout } from './404.astro.23edde4b.mjs';
import 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
/* empty css                          */
const $$Astro$3 = createAstro("https://irisclaire.com");
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-4", align === "center" && "text-center"], "class:list")}>
  <h1 class="text-3xl lg:text-6xl font-bold text-violet-700 lg:tracking-tight pt-5">
    ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)}
  </h1>
  <p class="text-lg mt-1 text-violet-900">
    ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)}
  </p>
</div>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/sectionhead.astro");

const $$Astro$2 = createAstro("https://irisclaire.com");
const $$BlogContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogContainer;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["min-w-screen-xl mx-auto", className], "class:list")}>
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/blogContainer.astro");

function BlogAsideSection({
  latestPosts,
  categoriesList
}) {
  return /* @__PURE__ */ jsxs("aside", {
    class: "w-full md:w-1/3 flex flex-col items-center mt-10 lg:mt-5",
    children: [/* @__PURE__ */ jsxs("div", {
      class: "w-11/12 md:w-10/12 flex flex-col bg-purple-100 px-2 py-3 rounded-md border mb-10",
      children: [/* @__PURE__ */ jsx("h3", {
        class: "text-xl font-semibold text-purple-900 mb-3 ml-4",
        children: "Articles Recents"
      }), latestPosts.map((post) => /* @__PURE__ */ jsx("ul", {
        class: "list-disc ml-8 my-1",
        children: /* @__PURE__ */ jsx("li", {
          class: "text-sm font-light text-purple-900 hover:text-orange-500",
          children: /* @__PURE__ */ jsx("a", {
            href: `/blog/${post.attributes?.category.data.attributes?.name}/${post.attributes?.slug}`,
            children: post.attributes?.title
          })
        })
      }))]
    }), /* @__PURE__ */ jsx("div", {
      class: "px-5 md:px-10",
      children: /* @__PURE__ */ jsxs("div", {
        class: "bg-gradient-to-r from-violet-700 from-10% via-violet-800 to-violet-900 to-70% py-8 px-8 rounded-md",
        children: [/* @__PURE__ */ jsx("h3", {
          class: "mt-10 text-xl font-bold text-violet-100 text-center",
          children: "Votre compagnon divinatoire personnalisé"
        }), /* @__PURE__ */ jsx("div", {
          class: "mt-10",
          children: /* @__PURE__ */ jsx("img", {
            src: "/header.png",
            alt: "Astronaut in the air",
            class: "w-96"
          })
        }), /* @__PURE__ */ jsxs("div", {
          class: "mb-6",
          children: [/* @__PURE__ */ jsx("p", {
            class: "text-sm mt-4 text-violet-200 max-w-xl text-justify",
            children: "Plongez dans votre avenir et découvrez les mystères qui l'entourent ! Vous obtiendrez des réponses qui vont aideront à mieux vous comprendre et à prendre des décisions."
          }), /* @__PURE__ */ jsxs("div", {
            class: "w-full mt-20 flex flex-col gap-5",
            children: [/* @__PURE__ */ jsx("button", {
              class: "flex mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-2 px-16 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg",
              children: "App Store"
            }), /* @__PURE__ */ jsx("button", {
              class: "flex mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-2 px-16 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg",
              children: "Play Store"
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      class: "w-11/12 md:w-10/12 flex flex-col bg-purple-100 px-2 py-3 rounded-md border mt-10",
      children: [/* @__PURE__ */ jsx("h3", {
        class: "text-xl font-semibold text-purple-900 mb-3 ml-1",
        children: "Catégories"
      }), categoriesList.map((category) => /* @__PURE__ */ jsx("ul", {
        class: "list-disc ml-8 my-1",
        children: /* @__PURE__ */ jsx("li", {
          class: "text-md font-light text-purple-900 hover:text-orange-500",
          children: /* @__PURE__ */ jsx("a", {
            href: `/blog/${category.attributes?.name}`,
            children: category.attributes?.name
          })
        })
      }))]
    })]
  });
}
__astro_tag_component__(BlogAsideSection, "@astrojs/react");

function BlogGridItem({
  post
}) {
  const title = post.attributes.title;
  const featuredImage = post.attributes.featureImage.data[0].attributes.formats.small?.url;
  const category = post.attributes.category.data.attributes.name;
  const categorySlug = post.attributes.category.data?.attributes?.slug;
  const slug = post.attributes?.slug;
  let content = post.attributes?.description;
  content = content.length > 100 ? content.substring(0, 160) + "..." : content;
  return /* @__PURE__ */ jsxs("div", {
    className: "border border-violet-900 flex flex-col lg:flex-row justify-center items-center rounded-xl p-5 mx-5 md:4/6 overflow-hidden transition-transform h-auto mt-5",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "relative lg:w-1/2 ",
      children: [/* @__PURE__ */ jsx("img", {
        src: `http://iris-api.candcom.com${featuredImage}`,
        alt: "gallery",
        className: "object-cover object-top h-54 lg:h-48 rounded-t-lg"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute bottom-5 w-1/3 flex p-1 bg-white justify-center content-center font-semibold text-orange-400 ",
        children: category
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "mt-3 lg:w-1/2 flex flex-col justify-start items-center",
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-base font-bold text-violet-800",
          children: title
        }), /* @__PURE__ */ jsx("p", {
          className: "text-sm font-light mt-3 text-violet-900",
          children: content
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "w-full",
        children: /* @__PURE__ */ jsx("button", {
          class: "mt-5 mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-1 px-8 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg",
          children: /* @__PURE__ */ jsx("a", {
            href: `/blog/${categorySlug}/${slug}`,
            className: "text-sm",
            children: "Lire la suite"
          })
        })
      })]
    })]
  });
}
__astro_tag_component__(BlogGridItem, "@astrojs/react");

const BlogGrid = ({
  posts
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "grid grid-cols-1 gap-4 mt-10",
    children: [/* @__PURE__ */ jsx("hr", {
      className: "w-1/2 place-self-center bg-violet-900"
    }), /* @__PURE__ */ jsx("h3", {
      className: " text-center text-2xl font-bold text-violet-800",
      children: "Tous nos articles"
    }), posts.map((post) => /* @__PURE__ */ jsx(BlogGridItem, {
      post
    }, post.id))]
  });
};
__astro_tag_component__(BlogGrid, "@astrojs/react");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://irisclaire.com");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const {
    indexText = "Home",
    mainBemClass = "c-breadcrumbs",
    ariaLabel = "breadcrumbs",
    crumbs = [],
    schemaJsonScript = true
  } = Astro2.props;
  let parts = [];
  if (crumbs.length === 0) {
    const paths = Astro2.url.pathname.split("/").filter((crumb) => crumb);
    parts = [
      {
        text: indexText,
        href: "/"
      }
    ];
    paths.forEach((text, index) => {
      const href = `/${paths.slice(0, index + 1).join("/")}`;
      parts = [
        ...parts,
        {
          text: text.replace(/[-_]/g, " "),
          href
        }
      ];
    });
  }
  if (crumbs.length > 0) {
    parts = crumbs;
  }
  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: parts.map((part, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": part.href,
        name: part.text
      }
    }))
  });
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}${addAttribute(mainBemClass, "class")}>
  <ol${addAttribute(`${mainBemClass}__crumbs${Astro2.slots.has("separator") ? " has-separators" : " has-no-separators"}`, "class")}>
    ${parts.map(({ text, ...attrs }, index, array) => renderTemplate`<li${addAttribute(`${mainBemClass}__crumb`, "class")}>
          ${Astro2.slots.has("index") && index === 0 && renderTemplate`<a${spreadAttributes(attrs)}${addAttribute(`${mainBemClass}__link is-index`, "class")}>
              ${renderSlot($$result, $$slots["index"])}
            </a>`}

          ${(!Astro2.slots.has("index") || Astro2.slots.has("index") && index !== 0) && renderTemplate`<a${spreadAttributes(attrs)}${addAttribute(`${mainBemClass}__link${index + 1 === array.length ? " is-current" : ""}`, "class")}${addAttribute(index + 1 === array.length ? "location" : false, "aria-current")}>
              ${text}
            </a>`}

          ${Astro2.slots.has("separator") && array.length - 1 !== index && renderTemplate`<span class="c-breadcrumbs__separator" aria-hidden="true">
              ${renderSlot($$result, $$slots["separator"])}
            </span>`}
        </li>`)}
  </ol>
</nav>
${schemaJsonScript && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schemaJson))}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-breadcrumbs/src/Breadcrumbs.astro");

const $$Astro = createAstro("https://irisclaire.com");
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const response = await fetch(`http://iris-api.candcom.com/api/posts?populate=*`);
  const data = await response.json();
  const posts = data.data;
  const { category } = Astro2.params;
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.attributes?.updatedAt).getTime();
    const dateB = new Date(b.attributes?.updatedAt).getTime();
    return dateB - dateA;
  });
  const latestPosts = sortedPosts.slice(0, 5);
  const categoryPosts = posts.filter((post) => post.attributes.category.data.attributes.name === category);
  async function getCategories() {
    const response2 = await fetch("https://iris-api.candcom.com/api/categories?populate=*");
    const categoriesData = await response2.json();
    const categoriesList2 = categoriesData.data;
    return categoriesList2;
  }
  const categoriesList = await getCategories();
  const customCrumbs = [
    {
      text: "Home",
      href: "/blog"
    },
    ...categoriesList.map((category2) => ({
      text: category2.attributes?.name,
      href: `/blog/${category2.attributes?.name}`
    }))
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `title` }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$BlogContainer, { "class": "w-full md:w-10/12 pb-3 bg-slate-100 h-auto mb-10 pt-6" }, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
        Tous les sujets du moment sur notre blog : astrologie, horoscope,
        spiritualité, rituel, développement personnel…
      ` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`${category}` })}` })}
    ${maybeRenderHead()}<div class="pt-6 mx-4">
      ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "mainBemClass": "c-breadcrumbs", "indexText": "Home", "ariaLabel": "a structured list of pages", "crumbs": customCrumbs }, { "index": ($$result4) => renderTemplate`<svg aria-label="Home Page" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
          </path><polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>`, "separator": ($$result4) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>` })}
    </div>

    <div class="container w-full mx-auto flex flex-wrap py-6">
      <div class="w-full md:w-2/3 flex flex-col items-center px-3">
        ${renderComponent($$result3, "BlogGrid", BlogGrid, { "posts": categoryPosts, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Blog/BlogGrid.jsx", "client:component-export": "default" })}
      </div>

      ${renderComponent($$result3, "Aside", BlogAsideSection, { "categoriesList": categoriesList, "latestPosts": latestPosts })}
    </div>
  ` })}
` })}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog/[category].astro");

const $$file = "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog/[category].astro";
const $$url = "/blog/[category]";

const _category_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogContainer as $, BlogAsideSection as B, _category_ as _, BlogGrid as a, $$Sectionhead as b, $$Breadcrumbs as c };
