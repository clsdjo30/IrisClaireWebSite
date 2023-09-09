/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, F as Fragment$1, m as maybeRenderHead } from '../astro.6b89a777.mjs';
import { $ as $$BlogLayout } from './_slug_.astro.a0ae8238.mjs';
import { a as BlogGrid, $ as $$BlogContainer, b as $$Sectionhead, c as $$Breadcrumbs, B as BlogAsideSection } from './_category_.astro.66f95600.mjs';
import { useState } from 'react';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
/* empty css                          */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import './404.astro.23edde4b.mjs';
import 'svgo';
/* empty css                          *//* empty css                         *//* empty css                          */import 'date-fns';
import 'react-markdown';

const Pagination = ({
  currentPage,
  totalPosts,
  onPageChange
}) => {
  const postsPerPage = 4;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex justify-center mt-10",
    children: [/* @__PURE__ */ jsx("button", {
      className: `pr-3 pagination-button text-violet-800 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`,
      onClick: handlePreviousPage,
      disabled: currentPage === 1,
      children: "Previous"
    }), /* @__PURE__ */ jsx("div", {
      className: "flex space-x-3 text-violet-800",
      children: Array.from({
        length: totalPages
      }, (_, index) => index + 1).map((page) => /* @__PURE__ */ jsx("button", {
        className: `pagination-button ${page === currentPage ? " text-orange-500" : ""}`,
        onClick: () => handlePageChange(page),
        children: page
      }, page))
    }), /* @__PURE__ */ jsx("button", {
      className: `pl-3 pagination-button text-violet-800 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`,
      onClick: handleNextPage,
      disabled: currentPage === totalPages,
      children: "Next"
    })]
  });
};
__astro_tag_component__(Pagination, "@astrojs/react");

const BlogContainer = ({
  posts
}) => {
  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToShow = posts.slice(startIndex, endIndex);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(BlogGrid, {
      posts: postsToShow
    }), /* @__PURE__ */ jsx(Pagination, {
      currentPage,
      totalPosts: posts.length,
      onPageChange: handlePageChange
    })]
  });
};
__astro_tag_component__(BlogContainer, "@astrojs/react");

function BlogHeader({
  posts
}) {
  const isAhead = posts.find((post) => post.attributes.isAhead === true);
  const aheadImage = isAhead.attributes.featureImage.data[0].attributes.formats.small.url;
  const aheadTitle = isAhead.attributes.title;
  const aheadContent = isAhead.attributes.description;
  const firstContent = aheadContent.length > 100 ? aheadContent.substring(0, 150) + "..." : aheadContent;
  const aheadSlug = isAhead.attributes.slug;
  const aheadCategory = isAhead.attributes.category.data.attributes?.name;
  const isSecond = posts.find((post) => post.attributes.isSecond === true);
  const secondPostImage = isSecond.attributes.featureImage.data[0].attributes.formats.small.url;
  const secondPostTitle = isSecond.attributes.title;
  const secondPostContent = isSecond.attributes.description;
  const secondContent = secondPostContent.length > 50 ? secondPostContent.substring(0, 100) + "..." : secondPostContent;
  const secondSlug = isSecond.attributes.slug;
  const secondCategory = isSecond.attributes.category.data.attributes?.name;
  const isThird = posts.find((post) => post.attributes.isThird === true);
  const thirdPostImage = isThird.attributes.featureImage.data[0].attributes.formats.small.url;
  const thirdPostTitle = isThird.attributes.title;
  const thirdPostContent = isThird.attributes.description;
  const thirdContent = thirdPostContent.length > 50 ? thirdPostContent.substring(0, 100) + "..." : thirdPostContent;
  const thirdSlug = isThird.attributes.slug;
  const thirdCategory = isThird.attributes.category.data.attributes?.name;
  return /* @__PURE__ */ jsx("div", {
    className: "w-full flex ",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col w-full",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "m-5 border border-violet-900 flex flex-col justify-start items-center rounded-lg p-5",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "relative w-full",
          children: [/* @__PURE__ */ jsx("img", {
            src: `http://iris-api.candcom.com${aheadImage}`,
            alt: "gallery",
            className: "object-cover object-top h-72 w-full rounded-t-lg"
          }), /* @__PURE__ */ jsx("div", {
            className: "absolute bottom-10 w-32 flex p-1 bg-white justify-center content-center font-semibold text-orange-400 ",
            children: aheadCategory
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "mt-5",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-2xl font-bold text-violet-800",
            children: aheadTitle
          }), /* @__PURE__ */ jsx("p", {
            className: "text-sm font-light mt-3 text-violet-900",
            children: firstContent
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "w-full",
          children: /* @__PURE__ */ jsx("button", {
            class: " mt-5 mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-1 px-8 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg",
            children: /* @__PURE__ */ jsx("a", {
              href: `/blog/${aheadCategory}/${aheadSlug}`,
              className: "text-sm",
              children: "Lire la suite"
            })
          })
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col lg:flex-row w-full gap-5 lg:gap-0",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex-col lg:w-1/2 border border-violet-900 flex items-center rounded-xl p-5 mx-5",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "relative",
            children: [/* @__PURE__ */ jsx("img", {
              src: `http://iris-api.candcom.com${secondPostImage}`,
              alt: "gallery",
              className: "object-cover object-top h-48 w-96 rounded-t-lg"
            }), /* @__PURE__ */ jsx("div", {
              className: "absolute bottom-5 w-1/3 flex p-1 bg-white justify-center content-center font-semibold text-orange-400 ",
              children: secondCategory
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "mt-5",
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-lg font-bold text-violet-800",
              children: secondPostTitle
            }), /* @__PURE__ */ jsx("p", {
              className: "text-sm font-light mt-3 text-violet-900",
              children: secondContent
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full",
            children: /* @__PURE__ */ jsx("button", {
              class: "mt-5 mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-1 px-8 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg",
              children: /* @__PURE__ */ jsx("a", {
                href: `/blog/${secondCategory}/${secondSlug}`,
                className: "text-sm",
                children: "Lire la suite"
              })
            })
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex-col lg:w-1/2 border border-violet-900 flex  items-center rounded-xl p-5 mx-5",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "relative",
            children: [/* @__PURE__ */ jsx("img", {
              src: `http://iris-api.candcom.com${thirdPostImage}`,
              alt: "gallery",
              className: "object-cover object-top h-48 w-96 rounded-t-lg"
            }), /* @__PURE__ */ jsx("div", {
              className: "absolute bottom-5 w-1/3 flex p-1 bg-white justify-center content-center font-semibold text-orange-400 ",
              children: thirdCategory
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "mt-5",
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-lg font-bold text-violet-800",
              children: thirdPostTitle
            }), /* @__PURE__ */ jsx("p", {
              className: "text-sm font-light mt-3 text-violet-900",
              children: thirdContent
            }), /* @__PURE__ */ jsx("button", {
              class: "mt-5 mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-1 px-8 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg",
              children: /* @__PURE__ */ jsx("a", {
                href: `/blog/${thirdCategory}/${thirdSlug}`,
                className: "text-sm",
                children: "Lire la suite"
              })
            })]
          })]
        })]
      })]
    })
  });
}
__astro_tag_component__(BlogHeader, "@astrojs/react");

const $$Astro = createAstro("https://irisclaire.com");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const response = await fetch(
    `http://iris-api.candcom.com/api/posts?populate=*`
  );
  const data = await response.json();
  const posts = data.data;
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
  const customCrumbs = [
    {
      text: "Home",
      href: "/blog"
    },
    ...categoriesList.map((category) => ({
      text: category.attributes?.name,
      href: `/blog/${category.attributes?.name}`
    }))
  ];
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": "Le Blog d'Iris Clair", "description": "Tous les sujets du moment sur notre blog : astrologie, horoscope, spiritualit\xE9, rituel, d\xE9veloppement personnel\u2026", "image": "https://iris-clair.vercel.app/opengraph.jpg", "imageAlt": "Iris Clair Blog", "author": "Iris Clair", "url": "https://iris-clair.vercel.app/blog" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$BlogContainer, { "class": "w-full md:w-10/12 pb-3 bg-slate-100 h-auto mb-10 pt-6" }, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment$1, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
        Tous les sujets du moment sur notre blog : astrologie, horoscope,
        spiritualité, rituel, développement personnel…
      ` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment$1, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Le Blog d'Iris Clair` })}` })}
    ${maybeRenderHead()}<div class="pt-6 mx-4">
      ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "mainBemClass": "c-breadcrumbs", "indexText": "Home", "ariaLabel": "a structured list of pages", "crumbs": customCrumbs }, { "index": ($$result4) => renderTemplate`<svg aria-label="Home Page" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
          </path><polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>`, "separator": ($$result4) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>` })}
    </div>

    <div class="container w-full mx-auto flex flex-wrap py-6">
      <div class="w-full md:w-2/3 flex flex-col items-center px-3">
        ${renderComponent($$result3, "BlogHeader", BlogHeader, { "posts": posts, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Blog/BlogHeader", "client:component-export": "default" })}
        
        ${renderComponent($$result3, "BlogContainer", BlogContainer, { "posts": posts, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Blog/BlogContainer.jsx", "client:component-export": "default" })}
      </div>
      ${renderComponent($$result3, "Aside", BlogAsideSection, { "categoriesList": categoriesList, "latestPosts": latestPosts })}
    </div>
  ` })}
` })}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog.astro");

const $$file = "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
