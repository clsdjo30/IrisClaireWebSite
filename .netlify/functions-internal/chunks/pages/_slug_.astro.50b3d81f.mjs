/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent } from '../astro.6b89a777.mjs';
import { $ as $$Layout } from './404.astro.fbae7f7c.mjs';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'svgo';

function SingleBlog({
  title,
  publishedAt,
  content,
  author,
  featureImage,
  readingTime
}) {
  const imageUrl = featureImage.data[0].attributes.formats.medium.url;
  console.log("GROSSE IMAGE", imageUrl);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: " my-4 text-center",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-center text-4xl leading-tight text-gray-900 my-4 font-bold",
        children: title
      }), /* @__PURE__ */ jsxs("div", {
        className: "text-gray-500 flex justify-center items-center space-x-2",
        children: [/* @__PURE__ */ jsx("span", {
          className: "flex space-x-2 items-center overflow-hidden",
          children: /* @__PURE__ */ jsx("p", {
            className: "font-medium text-xs text-gray-600 cursor-pointer",
            children: author?.name
          })
        }), /* @__PURE__ */ jsx("span", {
          children: "·"
        }), /* @__PURE__ */ jsx("span", {
          children: format(new Date(publishedAt), "MM/dd/yyyy")
        }), /* @__PURE__ */ jsx("span", {
          children: "·"
        }), /* @__PURE__ */ jsx("span", {
          children: readingTime
        })]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "rounded-md h-56 w-full overflow-hidden",
      children: /* @__PURE__ */ jsx("img", {
        className: "object-cover",
        src: `http://iris-api.candcom.com/${imageUrl}`
      })
    }), /* @__PURE__ */ jsx("article", {
      className: "prose  max-w-full w-full my-4",
      children: /* @__PURE__ */ jsx(ReactMarkdown, {
        components: {
          img: (props) => {
            const copyProps = {
              ...props
            };
            if (!props?.src.includes("http")) {
              copyProps.src = `http://localhost:1337${url}`;
            }
            return /* @__PURE__ */ jsx("img", {
              ...copyProps
            });
          }
        },
        children: content
      })
    })]
  });
}
__astro_tag_component__(SingleBlog, "@astrojs/react");

const $$Astro = createAstro("https://chimerical-caramel-133df7.netlify.app");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const response = await fetch(`http://iris-api.candcom.com/api/posts?populate=*`);
  const data = await response.json();
  const posts = data.data;
  console.log("Posts", posts);
  const { slug } = Astro2.params;
  console.log("slug", slug);
  const post = posts.find((post2) => post2.attributes.slug === slug);
  console.log("PostUnique", post);
  if (!post)
    return Astro2.redirect("/404");
  const { title, publishedAt, content, author, featureImage, readingTime } = post.attributes;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "title": "article de blog" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "SingleBlogItem", SingleBlog, { "title": title, "publishedAt": publishedAt, "content": content, "author": author, "featureImage": featureImage, "readingTime": readingTime })}
` })}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog/[slug].astro");

const $$file = "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

export { $$slug as default, $$file as file, $$url as url };
