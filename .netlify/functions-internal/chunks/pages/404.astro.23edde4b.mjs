/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, s as spreadAttributes, u as unescapeHTML, e as renderComponent, F as Fragment, f as renderHead } from '../astro.6b89a777.mjs';
import { optimize } from 'svgo';
/* empty css                          *//* empty css                         */
const $$Astro$o = createAstro("https://irisclaire.com");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["min-w-screen-xl mx-auto ", className], "class:list")}>
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/container.astro");

const $$Astro$n = createAstro("https://irisclaire.com");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro");

const $$Astro$m = createAstro("https://irisclaire.com");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro");

const $$Astro$l = createAstro("https://irisclaire.com");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-seo/src/components/OpenGraphImageTags.astro");

const $$Astro$k = createAstro("https://irisclaire.com");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro");

const $$Astro$j = createAstro("https://irisclaire.com");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-seo/src/components/ExtendedTags.astro");

const $$Astro$i = createAstro("https://irisclaire.com");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-seo/src/components/TwitterTags.astro");

const $$Astro$h = createAstro("https://irisclaire.com");
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro");

const $$Astro$g = createAstro("https://irisclaire.com");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || props.openGraph.basic.title == null || props.openGraph.basic.type == null || props.openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}

${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>

${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}

<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>

${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}
${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}
${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}
${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-seo/src/SEO.astro");

const __vite_glob_1_0 = "";

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({"/src/icons/tarot.svg": __vite_glob_1_0});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$f = createAstro("https://irisclaire.com");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-icon/lib/Icon.astro");

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$e = createAstro("https://irisclaire.com");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>
    ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}
</svg>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-icon/lib/Spritesheet.astro");

const $$Astro$d = createAstro("https://irisclaire.com");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}
${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-icon/lib/SpriteProvider.astro");

const $$Astro$c = createAstro("https://irisclaire.com");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>
    ${title ? renderTemplate`<title>${title}</title>` : ""}
    <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use>
</svg>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-icon/lib/Sprite.astro");

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$b = createAstro("https://irisclaire.com");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    xl: "px-16 py-3",
    lg: "px-5 py-2.5",
    md: "px-4 py-2",
    sm: "px-0.5 py-0.5"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-black text-violet-800 hover:bg-violet-500  hover:text-violet-100 border-2 border-transparent text-md font-semibold",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-violet-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</a>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/ui/link.astro");

const $$Astro$a = createAstro("https://irisclaire.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Footer;
  const siteLink = [
    {
      name: "Team",
      url: "/team"
    },
    {
      name: "Contact",
      url: "/contact"
    },
    {
      name: "Blog",
      url: "/blog"
    }
  ];
  const legalLink = [
    {
      name: "CGV/CGU",
      url: "/cgv-cgu"
    },
    {
      name: "Mentions l\xE9gales",
      url: "/mentions-legales"
    },
    {
      name: "Politique de confidentialit\xE9",
      url: "/politique-de-confidentialite"
    },
    {
      name: "Charte d'Iris Claire",
      url: "/rgpd"
    }
  ];
  const socialLink = [
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@iris_claire_app?lang=fr-FR"
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.fr/digitalfysas/"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/iris_claire_app/"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/people/Iris-Claire/61550798863584/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gradient-to-r from-violet-700 from-10% via-violet-800 to-violet-900 to-70%">
  <div class="container mx-auto flex flex-col justify-center items-start space-y-26 px-26 pb-8 pt-12 md:flex-row md:space-y-0 md:space-x-0 md:px-12">
    <div class="flex w-full flex-col text-center md:w-1/5 md:text-left">
      <div class="w-full text-lg font-extrabold md:w-fit md:text-left">
        <a href="/" class="text-3xl ml-2"><span class="font-bold text-violet-200">Iris</span>
          <span class="text-orange-500">Claire</span>
        </a>
        <!-- Code block for white alternative button starts -->
        <button class="w-8/12 mx-2 my-2 bg-white transition duration-150 ease-in-out rounded text-gray-800 border border-gray-300 px-6 py-2 text-xs hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
          Join our Newsletter
        </button>
        <!-- Code block for white alternative button ends -->
      </div>
    </div>
    <div class="w-full text-center text-violet-200 md:w-1/5 md:text-left mt-10 md:mt-0 ">
      <div class="text-sm font-semibold">Company</div>
      <ul class="flex flex-col justify-content-start align-top gap-1 text-xs mb-5">
        ${siteLink.map(({ name, url }) => renderTemplate`<li class="pt-3">
              <a class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"${addAttribute(url, "href")} rel="noopener noreferrer">
                ${name}
              </a>
            </li>`)}
      </ul>
    </div>
    <div class="w-full text-center text-violet-200 md:w-1/5 md:text-left mt-5 md:mt-0">
      <div class="text-sm font-semibold">Legal</div>
      <ul class="flex flex-col justify-center gap-1 text-xs mb-5">
        ${legalLink.map(({ name, url }) => renderTemplate`<li class="pt-3">
              <a class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"${addAttribute(url, "href")} rel="noopener noreferrer">
                ${name}
              </a>
            </li>`)}
      </ul>
    </div>
    <div class="w-full text-center text-violet-200 md:w-1/5 md:text-left mt-5 md:mt-0">
      <div class="text-sm font-semibold">Follow</div>
      <!-- List des icone reseaux sociaux -->
      <div class="flex justify-center md:justify-start gap-4 mt-3">
        <div class="flex items-center gap-4">
          ${socialLink.map(({ name, url }) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": url, "size": "sm", "style": "muted", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
                ${renderComponent($$result2, "Icon", $$Icon, { "name": `bx:bxl-${name.toLowerCase()}`, "class": "text-violet-800 hover:text-orange-500 h-6 w-6" })}
              ` })}`)}
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto border-t border-slate-200 p-8 text-center text-sm text-violet-200 dark:border-violet-200 md:flex-row md:px-12">
    Made in Paris with 🐕 ©Copyright 2023 by DigitalFy SAS. All rights
    reserved.
  </div>
</footer>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/footer.astro");

const $$Astro$9 = createAstro("https://irisclaire.com");
const $$Astronav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Astronav;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}

`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-navbar/src/Astronav.astro");

const $$Astro$8 = createAstro("https://irisclaire.com");
const $$MenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu">
  ${renderSlot($$result, $$slots["default"], renderTemplate`
    <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Toggle Menu</title>
      <path class="astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path>
      <path class="astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
    </svg>
  `)}
</button>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-navbar/src/components/MenuIcon.astro");

const $$Astro$7 = createAstro("https://irisclaire.com");
const $$OpenIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-toggle", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-navbar/src/components/OpenIcon.astro");

const $$Astro$6 = createAstro("https://irisclaire.com");
const $$CloseIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-navbar/src/components/CloseIcon.astro");

const $$Astro$5 = createAstro("https://irisclaire.com");
const $$MenuItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-toggle", className], "class:list")}>
    ${renderSlot($$result, $$slots["default"])}
</nav>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-navbar/src/components/MenuItems.astro");

const $$Astro$4 = createAstro("https://irisclaire.com");
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-navbar/src/components/Dropdown.astro");

const $$Astro$3 = createAstro("https://irisclaire.com");
const $$DropdownItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["dropdown-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/astro-navbar/src/components/DropdownItems.astro");

const $$Astro$2 = createAstro("https://irisclaire.com");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    {
      title: "L'Application",
      path: "/"
    },
    {
      title: "Team",
      path: "/team"
    },
    {
      title: "Blog",
      path: "/blog"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<header class="flex flex-col lg:flex-row justify-between items-center my-5 mx-5 md:px-32">
    ${renderComponent($$result2, "Astronav", $$Astronav, {}, { "default": ($$result3) => renderTemplate`
      <div class="flex w-full lg:w-auto items-center justify-between">
        <a href="/" class="text-3xl"><span class="font-bold text-violet-800">Iris</span>
          <span class="text-orange-500">Claire</span>
        </a>
        <div class="block lg:hidden">
          ${renderComponent($$result3, "MenuIcon", $$MenuIcon, { "class": "w-4 h-4 text-violet-800" })}
        </div>
      </div>
      ${renderComponent($$result3, "MenuItems", $$MenuItems, { "class": "hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0" }, { "default": ($$result4) => renderTemplate`
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          ${menuitems.map((item, index) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate`
                <li>
                  <a${addAttribute(item.path, "href")} class="flex lg:px-3 py-2 text-violet-900 hover:text-orange-500">
                    ${item.title}
                  </a>
                </li>
              ` })}`)}
        </ul>
        <div class="lg:hidden flex items-center mt-3 gap-4">
          ${renderComponent($$result4, "Link", $$Link, { "href": "https://www.tiktok.com/@iris.claire8", "size": "sm", "style": "muted", "target": "_blank" }, { "default": ($$result5) => renderTemplate`
            ${renderComponent($$result5, "Icon", $$Icon, { "name": "bx:bxl-tiktok", "class": "text-violet-800 hover:text-orange-500 h-6 w-6" })}
          ` })}
          ${renderComponent($$result4, "Link", $$Link, { "href": "https://www.pinterest.fr/digitalfysas/", "size": "sm", "style": "muted", "target": "_blank" }, { "default": ($$result5) => renderTemplate`
          ${renderComponent($$result5, "Icon", $$Icon, { "name": "bx:bxl-pinterest", "class": "text-violet-800 hover:text-orange-500 h-6 w-6" })}
        ` })}
          ${renderComponent($$result4, "Link", $$Link, { "href": "https://www.instagram.com/iris_claire_app/", "size": "sm", "style": "muted", "target": "_blank" }, { "default": ($$result5) => renderTemplate`
            ${renderComponent($$result5, "Icon", $$Icon, { "name": "bx:bxl-instagram", "class": "text-violet-800 hover:text-orange-500 h-6 w-6" })}
          ` })}
          ${renderComponent($$result4, "Link", $$Link, { "href": "https://www.facebook.com/people/Iris-Claire/61550798863584/", "size": "sm", "style": "muted", "target": "_blank" }, { "default": ($$result5) => renderTemplate`
            ${renderComponent($$result5, "Icon", $$Icon, { "name": "bx:bxl-facebook", "class": "text-violet-800 hover:text-orange-500 h-6 w-6" })}
          ` })}
        </div>
      ` })}
    ` })}
    <div>
      <div class="hidden lg:flex items-center gap-4">
        ${renderComponent($$result2, "Link", $$Link, { "href": "https://www.tiktok.com/@iris.claire8", "size": "sm", "style": "muted", "target": "_blank" }, { "default": ($$result3) => renderTemplate`
          ${renderComponent($$result3, "Icon", $$Icon, { "name": "bx:bxl-tiktok", "class": "text-violet-800 hover:text-orange-500 h-6 w-6" })}
        ` })}
        ${renderComponent($$result2, "Link", $$Link, { "href": "https://www.pinterest.fr/digitalfysas/", "size": "sm", "style": "muted", "target": "_blank" }, { "default": ($$result3) => renderTemplate`
          ${renderComponent($$result3, "Icon", $$Icon, { "name": "bx:bxl-pinterest", "class": "text-violet-800 hover:text-orange-500 h-6 w-6" })}
        ` })}
        ${renderComponent($$result2, "Link", $$Link, { "href": "https://www.instagram.com/iris_claire_app/", "size": "sm", "style": "muted", "target": "_blank" }, { "default": ($$result3) => renderTemplate`
          ${renderComponent($$result3, "Icon", $$Icon, { "name": "bx:bxl-instagram", "class": "text-violet-800 hover:text-orange-500 h-6 w-6" })}
        ` })}
        ${renderComponent($$result2, "Link", $$Link, { "href": "https://www.facebook.com/people/Iris-Claire/61550798863584/", "size": "sm", "style": "muted", "target": "_blank" }, { "default": ($$result3) => renderTemplate`
          ${renderComponent($$result3, "Icon", $$Icon, { "name": "bx:bxl-facebook", "class": "text-violet-800 hover:text-orange-500 h-6 w-6" })}
        ` })}
      </div>
    </div>
  </header>
` })}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/navbar/navbar.astro");

const $$Astro$1 = createAstro("https://irisclaire.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL("https://irisclaire.com/", Astro2.site).toString();
  const resolvedImageWithDomain = new URL(
    "/opengraph.jpg",
    Astro2.site
  ).toString();
  const { title } = Astro2.props;
  const makeTitle = title ? title + " | Iris Claire - Votre Guide Spirituel Personnel" : "Iris Claire - Votre Portail vers l'Univers Mystique du Tarot";
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/adaptive-icon.png">
    <link rel="sitemap" href="/sitemap-index.xml">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>

    <!-- <link rel="preload" as="image" href={src} alt="Hero" /> -->
    ${renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": "D\xE9couvrez le tarot unique Iris Claire, votre guide spirituel personnel pour l'amour, la carri\xE8re et le bien-\xEAtre. Rejoignez la communaut\xE9 Iris Claire aujourd'hui.", "canonical": canonicalURL, "twitter": {
    creator: "@PlusLoinCece",
    site: "www.irisclaire.online",
    card: "summary_large_image"
  }, "openGraph": {
    basic: {
      url: "/opengraph.jpg",
      type: "website",
      title: `Iris Claire - Votre Portail vers l'Univers Mystique du Tarot`,
      image: resolvedImageWithDomain
    },
    image: {
      alt: "Iris Claire Homepage Screenshot"
    }
  } })}
  ${renderHead()}</head>
  <body class="bg-violet-100">
    ${renderComponent($$result, "Navbar", $$Navbar, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, {})}
    
  </body>
</html>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/layouts/Layout.astro");

const $$Astro = createAstro("https://irisclaire.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="min-h-[calc(100vh-16rem)] flex items-center justify-center">
      <div class="mt-16 text-center">
        <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">404</h1>
        <p class="text-lg mt-4 text-slate-600">Page not found.</p>
      </div>
    </div>
  ` })}
` })}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/404.astro");

const $$file = "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, $$SEO as a, $$Navbar as b, $$Footer as c, $$Container as d, $$Icon as e, $$Link as f };
