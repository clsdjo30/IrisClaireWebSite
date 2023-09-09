import 'kleur/colors';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
import mime from 'mime';
/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, e as renderComponent, _ as __astro_tag_component__ } from '../astro.6b89a777.mjs';
import { e as $$Icon, f as $$Link, d as $$Container, $ as $$Layout } from './404.astro.23edde4b.mjs';
import { i as isRemoteImage, a as isSSRService, p as parseAspectRatio, e as extname } from './endpoint.js.c8e13618.mjs';
import { useState } from 'react';
import { CarouselProvider, ButtonBack, Slider, Slide, ButtonNext } from 'pure-react-carousel';
/* empty css                           */import { jsx, Fragment, jsxs } from 'react/jsx-runtime';

function resolveSize(transform) {
  if (transform.width && transform.height) {
    return transform;
  }
  if (!transform.width && !transform.height) {
    throw new Error(`"width" and "height" cannot both be undefined`);
  }
  if (!transform.aspectRatio) {
    throw new Error(
      `"aspectRatio" must be included if only "${transform.width ? "width" : "height"}" is provided`
    );
  }
  let aspectRatio;
  if (typeof transform.aspectRatio === "number") {
    aspectRatio = transform.aspectRatio;
  } else {
    const [width, height] = transform.aspectRatio.split(":");
    aspectRatio = Number.parseInt(width) / Number.parseInt(height);
  }
  if (transform.width) {
    return {
      ...transform,
      width: transform.width,
      height: Math.round(transform.width / aspectRatio)
    };
  } else if (transform.height) {
    return {
      ...transform,
      width: Math.round(transform.height * aspectRatio),
      height: transform.height
    };
  }
  return transform;
}
async function resolveTransform(input) {
  if (typeof input.src === "string") {
    return resolveSize(input);
  }
  const metadata = "then" in input.src ? (await input.src).default : input.src;
  let { width, height, aspectRatio, background, format = metadata.format, ...rest } = input;
  if (!width && !height) {
    width = metadata.width;
    height = metadata.height;
  } else if (width) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    height = height || Math.round(width / ratio);
  } else if (height) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    width = width || Math.round(height * ratio);
  }
  return {
    ...rest,
    src: metadata.src,
    width,
    height,
    aspectRatio,
    format,
    background
  };
}
async function getImage(transform) {
  var _a, _b, _c;
  if (!transform.src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  let loader = (_a = globalThis.astroImage) == null ? void 0 : _a.loader;
  if (!loader) {
    const { default: mod } = await import('./endpoint.js.c8e13618.mjs').then(n => n.s).catch(() => {
      throw new Error(
        "[@astrojs/image] Builtin image loader not found. (Did you remember to add the integration to your Astro config?)"
      );
    });
    loader = mod;
    globalThis.astroImage = globalThis.astroImage || {};
    globalThis.astroImage.loader = loader;
  }
  const resolved = await resolveTransform(transform);
  const attributes = await loader.getImageAttributes(resolved);
  const isDev = (_b = (Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://irisclaire.com","ASSETS_PREFIX":undefined},{SSR:true,}))) == null ? void 0 : _b.DEV;
  const isLocalImage = !isRemoteImage(resolved.src);
  const _loader = isDev && isLocalImage ? globalThis.astroImage.defaultLoader : loader;
  if (!_loader) {
    throw new Error("@astrojs/image: loader not found!");
  }
  const { searchParams } = isSSRService(_loader) ? _loader.serializeTransform(resolved) : globalThis.astroImage.defaultLoader.serializeTransform(resolved);
  const imgSrc = !isLocalImage && resolved.src.startsWith("//") ? `https:${resolved.src}` : resolved.src;
  let src;
  if (/^[\/\\]?@astroimage/.test(imgSrc)) {
    src = `${imgSrc}?${searchParams.toString()}`;
  } else {
    searchParams.set("href", imgSrc);
    src = `/_image?${searchParams.toString()}`;
  }
  if ((_c = globalThis.astroImage) == null ? void 0 : _c.addStaticImage) {
    src = globalThis.astroImage.addStaticImage(resolved);
  }
  return {
    ...attributes,
    src
  };
}

async function resolveAspectRatio({ src, aspectRatio }) {
  if (typeof src === "string") {
    return parseAspectRatio(aspectRatio);
  } else {
    const metadata = "then" in src ? (await src).default : src;
    return parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
  }
}
async function resolveFormats({ src, formats }) {
  const unique = new Set(formats);
  if (typeof src === "string") {
    unique.add(extname(src).replace(".", ""));
  } else {
    const metadata = "then" in src ? (await src).default : src;
    unique.add(extname(metadata.src).replace(".", ""));
  }
  return Array.from(unique).filter(Boolean);
}
async function getPicture(params) {
  const { src, alt, widths, fit, position, background } = params;
  if (!src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  if (!widths || !Array.isArray(widths)) {
    throw new Error("[@astrojs/image] at least one `width` is required. ex: `widths={[100]}`");
  }
  const aspectRatio = await resolveAspectRatio(params);
  if (!aspectRatio) {
    throw new Error("`aspectRatio` must be provided for remote images");
  }
  const allFormats = await resolveFormats(params);
  const lastFormat = allFormats[allFormats.length - 1];
  const maxWidth = Math.max(...widths);
  let image;
  async function getSource(format) {
    const imgs = await Promise.all(
      widths.map(async (width) => {
        const img = await getImage({
          src,
          alt,
          format,
          width,
          fit,
          position,
          background,
          aspectRatio
        });
        if (format === lastFormat && width === maxWidth) {
          image = img;
        }
        return `${img.src} ${width}w`;
      })
    );
    return {
      type: mime.getType(format) || format,
      srcset: imgs.join(",")
    };
  }
  const sources = await Promise.all(allFormats.map((format) => getSource(format)));
  return {
    sources,
    image
  };
}

const $$Astro$6 = createAstro("https://irisclaire.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Image;
  const { loading = "lazy", decoding = "async", ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    warnForMissingAlt();
  }
  const attrs = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${spreadAttributes(attrs)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/@astrojs/image/components/Image.astro");

const $$Astro$5 = createAstro("https://irisclaire.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Picture;
  const {
    src,
    alt,
    sizes,
    widths,
    aspectRatio,
    fit,
    background,
    position,
    formats = ["avif", "webp"],
    loading = "lazy",
    decoding = "async",
    ...attrs
  } = Astro2.props;
  if (alt === void 0 || alt === null) {
    warnForMissingAlt();
  }
  const { image, sources } = await getPicture({
    src,
    widths,
    formats,
    aspectRatio,
    fit,
    background,
    position,
    alt
  });
  delete image.width;
  delete image.height;
  return renderTemplate`${maybeRenderHead()}<picture>
	${sources.map((attrs2) => renderTemplate`<source${spreadAttributes(attrs2)}${addAttribute(sizes, "sizes")}>`)}
	<img${spreadAttributes(image)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}${spreadAttributes(attrs)}>
</picture>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/node_modules/@astrojs/image/components/Picture.astro");

let altWarningShown = false;
function warnForMissingAlt() {
  if (altWarningShown === true) {
    return;
  }
  altWarningShown = true;
  console.warn(`
[@astrojs/image] "alt" text was not provided for an <Image> or <Picture> component.

A future release of @astrojs/image may throw a build error when "alt" text is missing.

The "alt" attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility. Set to an empty string (alt="") if the image is not a key part of the content (it's decoration or a tracking pixel).
`);
}

const heroImage = {"src":"/_astro/header.c424481d.png","width":4684,"height":2635,"format":"png"};

const $$Astro$4 = createAstro("https://irisclaire.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<main class="flex flex-col md:flex-row place-items-center px-10 py-8 md:pt-12 md:pb-24 md:px-32 bg-gradient-to-r from-violet-700 from-10% via-violet-800 to-violet-900 to-70%">
  <div class="py-6 md:order-1 md:block">
    ${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "Application mobile Iris Claire", "widths": [300, 600, 800], "aspectRatio": "1:1", "sizes": "(max-width: 800px) 100vw, 720px", "loading": "eager", "format": "avif" })}
  </div>
  <div>
    <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter text-violet-100">
      Votre compagnon divinatoire personnalisé
    </h1>
    <p class="text-lg mt-4 text-violet-200 max-w-xl">
      Plongez dans votre avenir et découvrez les mystères qui l'entourent ! Vous
      obtiendrez des réponses qui vont aideront à mieux vous comprendre et à
      prendre des décisions.
    </p>
    <div class="mt-6 flex flex-col sm:flex-row gap-10">
      ${renderComponent($$result, "Link", $$Link, { "href": "#", "size": "lg", "href": "https://web3templates.com/templates/astroship-starter-website-template-for-astro", "target": "_blank", "class": "flex gap-5 items-center justify-center rounded-3xl bg-violet-100", "style": "primary", "rel": "noopener" }, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-violet-800 w-8 h-8", "name": "bx:bxl-apple" })}

        App Store
      ` })}
      ${renderComponent($$result, "Link", $$Link, { "size": "md", "style": "primary", "rel": "noopener", "href": "https://github.com/surjithctly/astroship", "class": "flex gap-5 items-center justify-center rounded-3xl bg-violet-100", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-violet-800 hover:text-violet-100 w-8 h-8", "name": "bx:bxl-play-store" })}
        Google Play
      ` })}
    </div>
  </div>
</main>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/hero.astro");

const $$Astro$3 = createAstro("https://irisclaire.com");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Testimonials;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-r from-violet-700 from-10% via-violet-800 to-violet-900 to-70%">
  <h1 class="lg:text-5xl md:text-4xl text-4xl font-semibold px-4 leading-10 text-violet-100 text-center py-10">
    Vos Avis
  </h1>
  <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-8">
    <!-- {/* Avis numero 1 */} -->
    <div class="group w-full h-5/6 bg-white flex flex-col items-center hover:bg-violet-300 cursor-pointer shadow-md md:p-12 p-6 rounded-md">
      <div class="relative -top-24 md:-top-28">
        <div class="flex flex-col items-center justify-center">
          <img src="/avatar/woman_avatar_three.png" alt="profile pictre" class="w-28 h-28">
          <p class="text6base font-semibold leading-4 my-2 text-violet-800">
            Sarh2803
          </p>
          <div class="flex">
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
          </div>
          <p class="text-base font-semibold leading-4 my-2 text-yellow-600 group-hover:text-violet-500 text-center mt-5">
            Utilisateur de l'application Iris Clair
          </p>
        </div>
        <p class="xl:w-80 text-base leading-normal text-center text-violet-800 group-hover:text-violet-100 mt-8">
          Je valide à 100% car pour une fois ce n’est pas une application qui ne
          fait que donner la signification d’une carte et basta. Avec cette
          application vous avez une vraie réponse. Pas de risque de rester dans
          le doute. Pour le moment elle a vu juste à chaque fois
        </p>
      </div>
    </div>
    <!-- {/* Avis numero 1 */} -->
    <!-- {/* Avis numero 2*/} -->
    <div class="group w-full h-5/6 bg-white flex flex-col items-center hover:bg-violet-300  cursor-pointer shadow-md md:p-12 p-6 rounded-md">
      <div class="relative -top-24 md:-top-28">
        <div class="flex flex-col items-center justify-center">
          <img src="/avatar/woman_avatar_one.png" alt="profile pictre" class="w-28 h-28">
          <p class="text6base font-semibold leading-4 my-2 text-violet-800">
            Emma
          </p>
          <div class="flex">
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
          </div>
          <p class="text-base font-semibold leading-4 my-2  text-yellow-600 group-hover:text-violet-500 text-center mt-5">
            Utilisateur de l'application Iris Clair
          </p>
        </div>
        <p class="xl:w-80 text-base leading-normal text-center text-violet-800 group-hover:text-violet-100 mt-8">
          Enfin une appli qui donne de vraie réponse sans nous faire tourner en
          rond ! Etant une personne très pragmatique dans la vie je suis bluffé
          par la rapidité des réponses. Je recommande cette application a tous
          ceux qui cherchent des réponses rapides et directes à leurs questions
          !
        </p>
      </div>
    </div>
    <!-- {/* Avis numero 2 */} -->
    <!-- {/* Avis numero 3 */} -->
    <div class="group w-full h-5/6 bg-white flex flex-col items-center hover:bg-violet-300 cursor-pointer shadow-md md:p-12 p-6 rounded-md">
      <div class="relative -top-24 md:-top-28">
        <div class="flex flex-col items-center justify-center">
          <img src="/avatar/woman_avatar_two.png" alt="profile pictre" class="w-28 h-28">
          <p class="text6base font-semibold leading-4 my-2 text-violet-800">
            Patdu30
          </p>
          <div class="flex">
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "bx:bxs-star", "class": "text-orange-500 h-5 w-5" })}
          </div>
          <p class="text-base font-semibold leading-4 my-2  text-yellow-600 group-hover:text-violet-500 text-center mt-5">
            Utilisateur de l'application Iris Clair
          </p>
        </div>
        <p class="xl:w-80 text-base leading-normal text-center text-violet-800 group-hover:text-violet-100 mt-8">
          Je suis tellement impressionné par cette application. Le tarot de
          IRIS Claire est unique et les réponses sont incroyablement précises
          et utiles. Je l’utilise pour m’accompagner dans ma vie de tous les
          jours, il m’aide à faire les bons choix.
        </p>
      </div>
    </div>
    <!-- {/* Avis numero 3 */} -->
  </div>
</section>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/Testimonials.astro");

function Carousel() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("section", {
      children: [/* @__PURE__ */ jsx("h2", {
        className: "lg:text-5xl md:text-4xl text-4xl font-semibold px-4 leading-10 text-yellow-600 mt-16 text-center",
        children: "Avec Iris Claire, votre avenir est entre vos mains"
      }), /* @__PURE__ */ jsxs("div", {
        className: "2xl:mx-auto 2xl:container flex justify-center",
        children: [/* @__PURE__ */ jsxs("div", {
          className: " 2xl:px-20 px-6 py-12 w-full lg:w-4/5",
          children: [/* @__PURE__ */ jsx(CarouselProvider, {
            className: "relative block sm:hidden",
            isPlaying: false,
            naturalSlideWidth: 100,
            isIntrinsicHeight: true,
            totalSlides: 3,
            interval: 5e3,
            playDirection: "forward",
            infinite: false,
            step: 1,
            children: /* @__PURE__ */ jsxs("div", {
              className: "js-flickity flex justify-center items-center",
              children: [/* @__PURE__ */ jsx(ButtonBack, {
                role: "button",
                "aria-label": "slide backward",
                className: "w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer",
                id: "prev",
                children: /* @__PURE__ */ jsx("svg", {
                  width: 8,
                  height: 14,
                  viewBox: "0 0 8 14",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", {
                    d: "M7 1L1 7L7 13",
                    stroke: "black",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                })
              }), /* @__PURE__ */ jsxs(Slider, {
                children: [/* @__PURE__ */ jsx(Slide, {
                  index: 0,
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full",
                    children: [/* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:block hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/woman_on_left.png",
                        alt: "sitting area",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsxs("div", {
                        className: " pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-10",
                        children: [/* @__PURE__ */ jsx("h2", {
                          className: "text-3xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white",
                          children: "Épanouissement professionnel"
                        }), /* @__PURE__ */ jsx("p", {
                          className: "mt-3 text-md leading-5 lg:text-2xl lg:leading-normal font-bold text-violet-900",
                          children: "Que dois-je faire pour obtenir le job de mes rêves ?"
                        })]
                      })]
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/woman_on_left.png",
                        alt: "sitting area",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "w-full pl-6 pb-6 lg:pl-8 lg:pb-8 relative left-0 bottom-44",
                        children: [/* @__PURE__ */ jsx("h2", {
                          className: "text-3xl leading-6 lg:text-2xl lg:leading-normal font-bold text-white",
                          children: "Épanouissement professionnel"
                        }), /* @__PURE__ */ jsx("p", {
                          className: "mt-3 text-md leading-5 lg:text-2xl lg:leading-normal font-bold text-violet-900",
                          children: "Que dois-je faire pour obtenir le job de mes rêves ?"
                        })]
                      })]
                    })]
                  })
                }), /* @__PURE__ */ jsx(Slide, {
                  index: 1,
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full",
                    children: [/* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:block hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/wooman_on_left_001.png",
                        alt: "chairs",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0",
                        children: [/* @__PURE__ */ jsx("h2", {
                          className: "text-4xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white",
                          children: "Un nouveau départ"
                        }), /* @__PURE__ */ jsx("p", {
                          className: "mt-3 text-md leading-5 lg:text-2xl lg:leading-normal font-bold text-violet-900",
                          children: "Évitez les pensées négatives et éclairez votre chemin vers le bonheur."
                        })]
                      })]
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/wooman_on_left_001.png",
                        alt: "chairs",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "pl-6 pb-6 lg:pl-8 lg:pb-8 relative left-0 bottom-44",
                        children: [/* @__PURE__ */ jsx("h2", {
                          className: "text-4xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white",
                          children: "Un nouveau départ"
                        }), /* @__PURE__ */ jsx("p", {
                          className: "mt-3 text-md leading-5 lg:text-2xl lg:leading-normal font-bold text-violet-300",
                          children: "Évitez les pensées négatives et éclairez votre chemin vers le bonheur."
                        })]
                      })]
                    })]
                  })
                }), /* @__PURE__ */ jsx(Slide, {
                  index: 2,
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full",
                    children: [/* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:block hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/couple.png",
                        alt: "chair",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsx("div", {
                        className: "pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0",
                        children: /* @__PURE__ */ jsx("h1", {
                          className: "text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white",
                          children: "Est-ce le bon?"
                        })
                      })]
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/couple.png",
                        alt: "chair",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsx("div", {
                        className: "pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0",
                        children: /* @__PURE__ */ jsx("h1", {
                          className: "text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white",
                          children: "Est-ce le bon?"
                        })
                      })]
                    })]
                  })
                })]
              }), /* @__PURE__ */ jsx(ButtonNext, {
                role: "button",
                "aria-label": "slide forward",
                className: "w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800",
                id: "next",
                children: /* @__PURE__ */ jsx("svg", {
                  width: 8,
                  height: 14,
                  viewBox: "0 0 8 14",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", {
                    d: "M1 1L7 7L1 13",
                    stroke: "black",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                })
              })]
            })
          }), /* @__PURE__ */ jsx(CarouselProvider, {
            className: "relative hidden sm:block",
            isPlaying: true,
            naturalSlideWidth: 100,
            isIntrinsicHeight: true,
            totalSlides: 3,
            interval: 5e3,
            playDirection: "forward",
            infinite: true,
            step: 1,
            children: /* @__PURE__ */ jsxs("div", {
              className: "flex justify-center items-center",
              children: [/* @__PURE__ */ jsx(ButtonBack, {
                role: "button",
                "aria-label": "slide backward",
                className: "w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer",
                id: "prev",
                children: /* @__PURE__ */ jsx("svg", {
                  width: 8,
                  height: 14,
                  viewBox: "0 0 8 14",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", {
                    d: "M7 1L1 7L7 13",
                    stroke: "black",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                })
              }), /* @__PURE__ */ jsxs(Slider, {
                className: "carousel__sliderLarge",
                children: [/* @__PURE__ */ jsx(Slide, {
                  className: "carousel__inner-slideLarge",
                  index: 0,
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "gallery-cell w-full h-full",
                    children: [/* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:block hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/woman_on_left.png",
                        alt: "sitting area",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "absolute bottom-56 right-36 md:-right-26 w-1/3",
                        children: [/* @__PURE__ */ jsx("h1", {
                          className: "text-xl leading-5 lg:text-6xl lg:leading-normal font-medium text-white text-center",
                          children: "Épanouissement professionnel"
                        }), /* @__PURE__ */ jsx("h2", {
                          className: "text-center text-xl leading-9 lg:text-2xl lg:leading-normal font-medium text-white",
                          children: "Que dois-je faire pour obtenir le job de mes rêves ?"
                        })]
                      })]
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/woman_on_left.png",
                        alt: "sitting area",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsx("div", {
                        className: "pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0",
                        children: /* @__PURE__ */ jsx("h1", {
                          className: "text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white",
                          children: "Lounge Interior"
                        })
                      })]
                    })]
                  })
                }), /* @__PURE__ */ jsx(Slide, {
                  className: "carousel__inner-slideLarge",
                  index: 1,
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "gallery-cell w-full h-full",
                    children: [/* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:block hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/wooman_on_left_001.png",
                        alt: "chairs",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsxs("div", {
                        className: " absolute bottom-56 -right-36 md:-right-26",
                        children: [/* @__PURE__ */ jsx("h1", {
                          className: "w-full text-4xl leading-5 lg:text-6xl  lg:leading-normal font-medium text-white",
                          children: "Un nouveau départ"
                        }), /* @__PURE__ */ jsx("h2", {
                          className: "w-3/4 text-xl leading-9 lg:text-2xl lg:leading-normal font-medium text-white",
                          children: "Évitez les pensées négatives et éclairez votre chemin vers le bonheur."
                        })]
                      })]
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/wooman_on_left_001.png",
                        alt: "pourquoi",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "absolute bottom-44 right-44",
                        children: [/* @__PURE__ */ jsx("h1", {
                          className: "text-xl leading-5 lg:text-6xl lg:leading-normal font-medium text-white",
                          children: "Un nouveau départ"
                        }), /* @__PURE__ */ jsx("h2", {
                          className: "text-sm leading-5 lg:text-base lg:leading-normal font-medium text-white",
                          children: "Évitez les pensées négatives et éclairez votre chemin vers le bonheur."
                        })]
                      })]
                    })]
                  })
                }), /* @__PURE__ */ jsx(Slide, {
                  className: "carousel__inner-slideLarge",
                  index: 2,
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "gallery-cell w-full h-full",
                    children: [/* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:block hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/couple.png",
                        alt: "chair",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsx("div", {
                        className: "pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0",
                        children: /* @__PURE__ */ jsx("h1", {
                          className: "text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white",
                          children: "Est-ce le bon?"
                        })
                      })]
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "relative w-full h-full lg:hidden",
                      children: [/* @__PURE__ */ jsx("img", {
                        src: "/couple.png",
                        alt: "chair",
                        className: "object-center object-cover w-full h-full"
                      }), /* @__PURE__ */ jsx("div", {
                        className: "pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0",
                        children: /* @__PURE__ */ jsx("h1", {
                          className: "text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white",
                          children: "Lounge Interior"
                        })
                      })]
                    })]
                  })
                })]
              }), /* @__PURE__ */ jsx(ButtonNext, {
                role: "button",
                "aria-label": "slide forward",
                className: "w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800",
                id: "next",
                children: /* @__PURE__ */ jsx("svg", {
                  width: 8,
                  height: 14,
                  viewBox: "0 0 8 14",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", {
                    d: "M1 1L7 7L1 13",
                    stroke: "black",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                })
              })]
            })
          })]
        }), /* @__PURE__ */ jsx("style", {
          children: `
                    .gallery-cell {
                        height: 600px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 500px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                    }
                `
        })]
      })]
    })
  });
}
__astro_tag_component__(Carousel, "@astrojs/react");

const phoneDeck = {"src":"/_astro/game_draw.95e213cb.png","width":2635,"height":2635,"format":"png"};

const patternBg$1 = {"src":"/_astro/bg-pattern-3.953aef31.png","width":535,"height":466,"format":"png"};

const $$Astro$2 = createAstro("https://irisclaire.com");
const $$Whychoose = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Whychoose;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col lg:flex-row place-items-center px-10 py-8 md:pt-12 md:pb-12 md:px-44">
  <div class="md:order-2">
    <h1 class="text-2xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter text-violet-800 -ml-3">
      Votre Guide Spirituel Personnel
    </h1>
    <div class="flex justify-center mt-8">
      ${renderComponent($$result, "Icon", $$Icon, { "class": "relative top-0 sm:top-4 -left-4 text-purple-500 w-16 sm:w-10 md:w-8 h-16 sm:h-10 md:h-8", "name": "bx:bxs-star" })}
      <p class="text-lg mt-4 text-violet-800 max-w-xl text-justify">
        <span class="text-orange-500 font-bold">Iris Claire</span>: un tarot
        authentique et moderne qui illumine votre voyage spirituel, vous offrant
        les réponses tant recherchées sur <span class="font-bold">l'amour</span>, la <span class="font-bold">carrière</span> et le <span class="font-bold">bien-être</span>.
      </p>
    </div>
    <div class="flex justify-center">
      ${renderComponent($$result, "Icon", $$Icon, { "class": "relative top-0 sm:top-4 -left-4 text-purple-500 w-16 sm:w-10 md:w-8 h-16 sm:h-10 md:h-8", "name": "bx:bxs-star" })}
      <p class="text-lg mt-4 text-violet-800 max-w-xl text-justify">
        Notre tarot divinatoire est désormais accessible à tous dans le monde
        numérique, offrant des lectures précises grâce à des cartes
        sélectionnées et interprétées par nos experts.
      </p>
    </div>
    <div class="flex justify-center">
      ${renderComponent($$result, "Icon", $$Icon, { "class": "relative top-0 sm:top-4 -left-4 text-purple-500 w-16 sm:w-10 md:w-8 h-16 sm:h-10 md:h-8", "name": "bx:bxs-star" })}
      <p class="text-lg mt-4 text-violet-800 max-w-xl text-justify">
        Libérez le pouvoir du <span class="text-orange-500 font-bold">tarot instantané</span>, recevant des réponses immédiates qui éclairent votre chemin, sans
        attente ni contrainte de lieu.
      </p>
    </div>
  </div>
  <div class="py-6 lg:block drop-shadow-2xl order-1 md:order-1">
    ${renderComponent($$result, "Picture", $$Picture, { "src": patternBg$1, "alt": "Astronaut in the air", "widths": [300, 600, 400], "aspectRatio": "1:1", "sizes": "(max-width: 800px) 100vw, 600px", "loading": "eager", "format": "avif" })}
    ${renderComponent($$result, "Picture", $$Picture, { "class": "absolute top-8 left-0", "src": phoneDeck, "alt": "Astronaut in the air", "widths": [300, 600, 400], "aspectRatio": "1:1", "sizes": "(max-width: 800px) 100vw, 600px", "loading": "eager", "format": "avif" })}
  </div>  
</section>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/whychoose.astro");

const myAnswer = {"src":"/_astro/myanswer.87b61e6b.png","width":2635,"height":2635,"format":"png"};

const patternBg = {"src":"/_astro/bg-pattern.644014d6.png","width":559,"height":447,"format":"png"};

const $$Astro$1 = createAstro("https://irisclaire.com");
const $$Myanswer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Myanswer;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row place-items-center px-10 py-8 md:pt-12 md:pb-12 md:px-44">
  <div class="md:order-1">
    <h1 class="text-4xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter text-violet-800 -ml-3">
      Un Suivi Complet de Votre Parcours
    </h1>
    <div class="flex justify-center mt-8">
      ${renderComponent($$result, "Icon", $$Icon, { "class": "relative top-5 -left-4 text-purple-500 w-5 h-5", "name": "bx:bxs-star" })}
      <p class="text-lg mt-4 text-violet-800 max-w-xl">
        <span class="text-orange-500 font-bold">Iris Claire</span> vous permet de  consultez <span class="font-bold">votre historique</span> à tous moment.
      </p>
    </div>
    <div class="flex justify-center">
      ${renderComponent($$result, "Icon", $$Icon, { "class": "relative top-5 -left-4 text-purple-500 w-5 h-5", "name": "bx:bxs-star" })}
      <p class="text-lg mt-4 text-violet-800 max-w-xl">
        Gardez une trace précieuse dà vos questions avec notre fonctionnalité d'historique consultable à tout moment.
      </p>
    </div>
    <div class="flex justify-center">
      ${renderComponent($$result, "Icon", $$Icon, { "class": "relative top-5 -left-4 text-purple-500 w-5 h-5", "name": "bx:bxs-star" })}
      <p class="text-lg mt-4 text-violet-800 max-w-xl">
        Ne laissez plus <span class="font-bold">vos questions</span> sans réponses ! Avec <span class="text-orange-500 font-bold">Iris Claire</span>, vous pouvez consulter votre tirage à tout moment, recevant ainsi les conseils dont vous avez besoin sans délai.
      </p>
    </div>
  </div>
  <div class="py-6 md:block drop-shadow-2xl order-1 md:order-1">
    ${renderComponent($$result, "Picture", $$Picture, { "src": patternBg, "alt": "Astronaut in the air", "widths": [300, 600, 400], "aspectRatio": "1:1", "sizes": "(max-width: 800px) 100vw, 600px", "loading": "eager", "format": "avif" })}
    ${renderComponent($$result, "Picture", $$Picture, { "class": "absolute top-8 left-0", "src": myAnswer, "alt": "Astronaut in the air", "widths": [300, 600, 400], "aspectRatio": "1:1", "sizes": "(max-width: 800px) 100vw, 600px", "loading": "eager", "format": "avif" })}
  </div>  
</section>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/myanswer.astro");

const features = [{
  title: "Est-ce que les réponses apportées par IRIS Claire sont aussi fiables qu'une consultation chez un voyant ?",
  description: "OUI. La fiabilité et la précision des réponses sont très important chez Iris Claire. L’équipe de IRIS Claire est composée d’un voyant, et de deux tarologues expérimentés et spécialisés dans le Tarot divinatoire, Ensemble ils ont créé IRIS Claire pour offrir des réponses authentiques et précises à vos questions. Vous pouvez avoir pleinement confiance en Iris Claire pour vous guider vers des éclaircissements précieux",
  icon: "bx:bxs-briefcase"
}, {
  title: "Comment se déroule une consultation avec IRIS Claire ?",
  description: "Pour obtenir des réponses à vos questions sans délai d’attente depuis votre mobile rien de plus simple.Téléchargez l’application Iris Claire sur Google play et App Store. Posez votre question. Effectuez un tirage de Tarot Iris Claire.Obtenez une reponse personnalisée immédiatement !",
  icon: "bx:bxs-data"
}, {
  title: "Combien va me couter ma question ?",
  description: "Posez votre première question GRATUITEMENT ! Chez IRIS Claire, nous croyons en l'accessibilité de l'avenir pour tous. Notre service a été conçu pour offrir des réponses abordables à partir de seulement 0,99€ question ! Accédez à votre avenir dès maintenant et découvrez les réponses que vous cherchez.",
  icon: "bx:bxs-bot"
}, {
  title: "Combien de temps faut-il attendre avant de recevoir une réponse ",
  description: "Votre réponse est IMMEDIATEMENT disponible. Quelque soit la complexité de votre question, IRIS Claire vous apporte une réponse immédiate pour vous accompagner dans vos doutes.",
  icon: "bx:bxs-window-alt"
}];
const Faq = () => {
  const [showDescriptions, setShowDescriptions] = useState({});
  const toggleDescription = (index) => {
    setShowDescriptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4",
    children: [/* @__PURE__ */ jsx("h2", {
      className: "font-semibold lg:text-4xl md:text-center text-3xl lg:leading-9 md:leading-7 leading-9 text-yellow-600",
      children: "Questions fréquemment posées"
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-4 flex md:justify-center md:items-start md:flex-row flex-col justify-start items-start mb-8",
      children: /* @__PURE__ */ jsx("div", {
        className: "",
        children: /* @__PURE__ */ jsx("p", {
          className: "font-normal text-base leading-6 text-violet-800 lg:w-full md:w-9/12 ",
          children: "Voici quelques-unes des questions les plus fréquemment posées par nos utilisateurs"
        })
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: " flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8",
      children: [/* @__PURE__ */ jsxs("div", {
        className: " md:w-5/12 lg:w-3/12 w-full ",
        children: [/* @__PURE__ */ jsx("img", {
          src: "/faq/desktop_faq.png",
          alt: "Img of Glass bottle",
          className: "w-full md:block hidden"
        }), /* @__PURE__ */ jsx("img", {
          src: "/faq/mobile_faq.png",
          alt: "Img of Glass bottle",
          className: "w-full md:hidden block "
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: " md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10 py-5",
        children: features.map((feature, index) => /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex justify-between items-center cursor-pointer",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "font-semibold text-lg md:text-xl leading-6 md:leading-5 text-violet-800",
              children: feature.title
            }), /* @__PURE__ */ jsx("button", {
              "aria-label": "toggle",
              className: "cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-800",
              onClick: () => toggleDescription(index),
              children: /* @__PURE__ */ jsxs("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/* @__PURE__ */ jsx("path", {
                  className: showDescriptions[index] ? "hidden" : "block",
                  d: "M10 4.1665V15.8332",
                  stroke: "#5B21B6",
                  strokeWidth: "1.25",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }), /* @__PURE__ */ jsx("path", {
                  d: "M4.16602 10H15.8327",
                  stroke: "#5B21B6",
                  strokeWidth: "1.25",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })]
              })
            })]
          }), /* @__PURE__ */ jsx("p", {
            className: "font-normal text-base leading-6 text-violet-800 mt-4 w-11/12 " + (showDescriptions[index] ? "block" : "hidden"),
            children: feature.description
          }), /* @__PURE__ */ jsx("hr", {
            className: "my-7 bg-gray-200"
          })]
        }, index))
      })]
    })]
  });
};
__astro_tag_component__(Faq, "@astrojs/react");

const $$Astro = createAstro("https://irisclaire.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Hero", $$Hero, {})}
    ${renderComponent($$result3, "WhyChoose", $$Whychoose, {})}
    ${renderComponent($$result3, "HeroSlider", Carousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/HeroSlider.jsx", "client:component-export": "default" })}
    ${renderComponent($$result3, "MyAnswer", $$Myanswer, {})}
    ${renderComponent($$result3, "Testimonials", $$Testimonials, {})}
    ${renderComponent($$result3, "Faq", Faq, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Faq.jsx", "client:component-export": "default" })}
    
  ` })}
` })}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/index.astro");

const $$file = "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Picture as $, index as i };
