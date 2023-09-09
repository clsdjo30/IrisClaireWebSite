/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, d as renderSlot, e as renderComponent, F as Fragment } from '../astro.6b89a777.mjs';
import { d as $$Container, e as $$Icon, $ as $$Layout } from './404.astro.23edde4b.mjs';
import { b as $$Sectionhead } from './_category_.astro.66f95600.mjs';
/* empty css                             */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'svgo';
/* empty css                          *//* empty css                         */import 'react';
import 'react/jsx-runtime';
/* empty css                          */
const $$Astro$2 = createAstro("https://irisclaire.com");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    size = "md",
    style = "primary",
    block,
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    md: "px-5 py-2.5",
    lg: "px-6 py-3"
  };
  const styles = {
    outline: "border-2 border-black hover:bg-black text-black hover:text-white",
    primary: "bg-black text-white hover:bg-slate-900  border-2 border-transparent",
    secondary: "bg-violet-600 text-violet-100 font-semibold rounded-full bg-violet-100 border px-8 focus:outline-none hover:bg-violet-900 hover:text-violet-100 text-lg"
  };
  return renderTemplate`${maybeRenderHead()}<button${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</button>`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/ui/button.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://irisclaire.com");
const $$Contactform = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contactform;
  return renderTemplate(_a || (_a = __template(["<!-- To make this contact form work, create your free access key from https://web3forms.com/\n     Then you will get all form submissions in your email inbox. -->", '<form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation astro-UWNXE3I2" novalidate>\n  <input type="hidden" name="access_key" value="411bcb43-e90a-4556-b995-2585eab897c4" class="astro-UWNXE3I2">\n  <!-- Create your free access key from https://web3forms.com/ -->\n  <input type="checkbox" class="hidden astro-UWNXE3I2" style="display:none" name="botcheck">\n  <div class="mb-5 astro-UWNXE3I2">\n    <input type="text" placeholder="Nom et Pr\xE9nom" required class="w-full px-4 py-3 border placeholder:font-extralight placeholder:text-violet-700 rounded-md outline-none focus:ring-4 border-violet-400 focus:border-violet-900 focus:text-violet-900 ring-violet-100 astro-UWNXE3I2" name="name">\n    <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Merci de renseigner votre nom et pr\xE9nom.\n    </div>\n  </div>\n  <div class="mb-5 astro-UWNXE3I2">\n    <label for="email_address" class="sr-only astro-UWNXE3I2">Email Address</label><input id="email_address" type="email" placeholder="Email" name="email" required class="w-full px-4 py-3 border placeholder:font-extralight placeholder:text-violet-700 rounded-md outline-none focus:ring-4 border-violet-400 focus:border-violet-900 focus:text-violet-900 ring-violet-100 astro-UWNXE3I2">\n    <div class="empty-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Merci de renseigner votre email.\n    </div>\n    <div class="invalid-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Merci de renseigner un email valide.\n    </div>\n  </div>\n  <div class="mb-3 astro-UWNXE3I2">\n    <textarea name="message" required placeholder="Votre message" class="w-full px-4 py-3 h-36 border placeholder:font-extralight placeholder:text-violet-700 rounded-md outline-none focus:ring-4 border-violet-400 focus:border-violet-900 focus:text-violet-900 ring-violet-100 astro-UWNXE3I2"></textarea>\n    <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Merci de saisir votre message.\n    </div>\n  </div>\n  ', '\n  <div id="result" class="mt-3 text-center astro-UWNXE3I2"></div>\n</form>\n\n\n\n<script>\n  const form = document.getElementById("form");\n  const result = document.getElementById("result");\n\n  form.addEventListener("submit", function (e) {\n    e.preventDefault();\n    form.classList.add("was-validated");\n    if (!form.checkValidity()) {\n      form.querySelectorAll(":invalid")[0].focus();\n      return;\n    }\n    const formData = new FormData(form);\n    const object = Object.fromEntries(formData);\n    const json = JSON.stringify(object);\n\n    result.innerHTML = "Sending...";\n\n    fetch("https://api.web3forms.com/submit", {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n        Accept: "application/json",\n      },\n      body: json,\n    })\n      .then(async (response) => {\n        let json = await response.json();\n        if (response.status == 200) {\n          result.classList.add("text-green-500");\n          result.innerHTML = json.message;\n        } else {\n          console.log(response);\n          result.classList.add("text-red-500");\n          result.innerHTML = json.message;\n        }\n      })\n      .catch((error) => {\n        console.log(error);\n        result.innerHTML = "Something went wrong!";\n      })\n      .then(function () {\n        form.reset();\n        form.classList.remove("was-validated");\n        setTimeout(() => {\n          result.style.display = "none";\n        }, 5000);\n      });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Button", $$Button, { "type": "submit", "size": "lg", "block": true, "style": "secondary", "class": "astro-UWNXE3I2" }, { "default": ($$result2) => renderTemplate`Envoyer` }));
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/components/contactform.astro");

const $$Astro = createAstro("https://irisclaire.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`Nous sommes à votre écoute` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Contact` })}` })}

    ${maybeRenderHead()}<div class="w-11/12 grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-5 lg:mt-20">
      <div>
        <h2 class="text-4xl font-bold text-violet-700 lg:tracking-tight">
          Contacter Iris Claire
        </h2>
        <p class="text-base font-semibold leading-relaxed text-violet-900 mt-3">
          Pour toute question, n'hésitez pas à nous contacter via le formulaire.
          Nous vous répondrons dans les meilleurs délais.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-orange-700 w-4 h-4", "name": "uil:map-marker" })}
            <span class="text-sm font-semibold leading-relaxed text-violet-900">
              99 Avenue Achille Peretti , 9220 Neuilly-sur-Seine
            </span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-orange-700 w-4 h-4", "name": "uil:envelope" })}<a href="mailto:contact@irisclaire.com">
              <span class="text-sm font-semibold leading-relaxed text-violet-900">
                contact@irisclaire.com
              </span>
              </a>
          </div>
         
        </div>
      </div>
      <div class="mb-20">
        ${renderComponent($$result3, "Contactform", $$Contactform, {})}
      </div>
    </div>
  ` })}
` })}`;
}, "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/contact.astro");

const $$file = "C:/Users/leser/REACT_ NATIVE/IRIS_CLAIRE/IrisClaireWebSite/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
