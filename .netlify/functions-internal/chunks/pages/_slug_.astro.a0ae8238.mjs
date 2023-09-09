/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, e as renderComponent, f as renderHead, d as renderSlot, _ as __astro_tag_component__, m as maybeRenderHead } from '../astro.6b89a777.mjs';
import { a as $$SEO, b as $$Navbar, c as $$Footer } from './404.astro.23edde4b.mjs';
/* empty css                          *//* empty css                          */import { $ as $$BlogContainer, B as BlogAsideSection } from './_category_.astro.66f95600.mjs';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

const $$Astro$1 = createAstro("https://irisclaire.com");
const $$BlogLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title, image, description, imageAlt, author } = Astro2.props;
  const { href } = Astro2.url;
  const canonicalURL = new URL(
    "https://irisclaire.com/" + Astro2.url.pathname,
    Astro2.site
  ).toString();
  const makeUrl = new URL(href, Astro2.site).toString();
  const resolvedImageWithDomain = new URL(
    image,
    "http://iris-api.candcom.com"
  ).toString();
  console.log("IMAGE ASTRO PROPS", resolvedImageWithDomain);
  const makeTitle = title ? title + " | Le Blog d'Iris Clair" : "Iris Claire - Votre Portail vers l'Univers Mystique du Tarot";
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/adaptive-icon.png">
    <link rel="sitemap" href="/sitemap-index.xml">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>

    <!-- <link rel="preload" as="image" href={src} alt="Hero" /> -->
    ${renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": description, "canonical": canonicalURL, "twitter": {
    creator: author,
    site: href,
    title,
    description,
    image: resolvedImageWithDomain,
    imageAlt,
    card: "summary_large_image"
  }, "openGraph": {
    basic: {
      url: makeUrl,
      type: "article",
      title,
      image: resolvedImageWithDomain
    },
    image: {
      url: resolvedImageWithDomain,
      alt: imageAlt
    }
  } })}
  ${renderHead()}</head>
  <body class="bg-violet-100">
    ${renderComponent($$result, "Navbar", $$Navbar, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, {})}
    
  </body>
</html>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/layouts/BlogLayout.astro");

function SingleBlog({
  title,
  publishedAt,
  content,
  author,
  featureImage,
  readingTime
}) {
  const imageUrl = featureImage.data[0].attributes.formats.medium.url;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: " my-4",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-2xl leading-tight text-violet-800 mt-4 font-bold",
        children: title
      }), /* @__PURE__ */ jsxs("div", {
        className: "text-gray-500 flex justify-end items-center space-x-2",
        children: [/* @__PURE__ */ jsx("span", {
          className: "flex space-x-2 items-start overflow-hidden",
          children: /* @__PURE__ */ jsx("p", {
            className: "font-medium text-xs text-orange-500 cursor-pointer",
            children: author.data.attributes?.name
          })
        }), /* @__PURE__ */ jsx("span", {
          children: "·"
        }), /* @__PURE__ */ jsx("span", {
          className: "font-medium text-xs text-orange-500 cursor-pointer",
          children: format(new Date(publishedAt), "MM/dd/yyyy")
        }), /* @__PURE__ */ jsx("span", {
          children: "·"
        }), /* @__PURE__ */ jsx("span", {
          children: readingTime
        })]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "w-full",
      children: /* @__PURE__ */ jsx("img", {
        className: "object-contain w-full",
        src: `http://iris-api.candcom.com/${imageUrl}`
      })
    }), /* @__PURE__ */ jsx("article", {
      className: "prose  max-w-full w-full mx-10 my-16 text-justify text-violet-900",
      children: /* @__PURE__ */ jsx(ReactMarkdown, {
        components: {
          img: (props) => {
            const copyProps = {
              ...props
            };
            if (!props?.src.includes("http")) {
              copyProps.src = `http://iris-api.candcom.com/${url}`;
            }
            return /* @__PURE__ */ jsx("img", {
              ...copyProps
            });
          },
          h3: ({
            node,
            ...props
          }) => {
            return /* @__PURE__ */ jsx("h3", {
              className: "text-2xl font-bold text-violet-800",
              ...props
            });
          }
        },
        children: content
      })
    })]
  });
}
__astro_tag_component__(SingleBlog, "@astrojs/react");

const $$Astro = createAstro("https://irisclaire.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const response = await fetch(
    `http://iris-api.candcom.com/api/posts?populate=*`
  );
  const data = await response.json();
  const posts = data.data;
  const { slug } = Astro2.params;
  async function getCategories() {
    const response2 = await fetch(
      "https://iris-api.candcom.com/api/categories?populate=*"
    );
    const categoriesData = await response2.json();
    const categoriesList2 = categoriesData.data;
    return categoriesList2;
  }
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.attributes?.updatedAt).getTime();
    const dateB = new Date(b.attributes?.updatedAt).getTime();
    return dateB - dateA;
  });
  const latestPosts = sortedPosts.slice(0, 5);
  const categoriesList = await getCategories();
  const post = posts.find((post2) => post2.attributes.slug === slug);
  if (!post)
    return Astro2.redirect("/404");
  const {
    title,
    publishedAt,
    content,
    author,
    featureImage,
    readingTime,
    description,
    imagedescription,
    categorySlug
  } = post.attributes;
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": title, "image": featureImage.data[0].attributes?.url, "description": description, "imageAlt": imagedescription, "author": author.data.attributes?.name, "url": `https://iris.candcom.com/blog/${categorySlug}/${slug}` }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$BlogContainer, { "class": "w-full md:w-10/12 bg-slate-100 h-auto mb-10" }, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="container w-full mx-auto flex flex-wrap pt-6">
      <div class="w-full md:w-2/3 flex flex-col items-center px-6 ">
        ${renderComponent($$result3, "SingleBlogItem", SingleBlog, { "title": title, "publishedAt": publishedAt, "content": content, "author": author, "featureImage": featureImage, "readingTime": readingTime })}
      </div>
      ${renderComponent($$result3, "Aside", BlogAsideSection, { "categoriesList": categoriesList, "latestPosts": latestPosts })}
    </div>
  ` })}
` })}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog/[categoy]/[slug].astro");

const $$file = "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog/[categoy]/[slug].astro";
const $$url = "/blog/[categoy]/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogLayout as $, _slug_ as _ };
