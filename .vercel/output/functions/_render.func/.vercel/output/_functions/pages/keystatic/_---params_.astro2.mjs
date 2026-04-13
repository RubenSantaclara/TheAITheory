import { c as createComponent, g as renderHead, r as renderTemplate } from '../../chunks/astro/server_BijgFaLd.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${renderHead()}</head> <body> <div id="keystatic-app"></div> </body></html>`;
}, "Z:/WORKSPACES/PROJECTS/TheAITheory/src/pages/keystatic/[...params].astro", void 0);

const $$file = "Z:/WORKSPACES/PROJECTS/TheAITheory/src/pages/keystatic/[...params].astro";
const $$url = "/keystatic/[...params]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
