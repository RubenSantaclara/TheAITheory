import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CNeNZKeq.mjs';
import { manifest } from './manifest_D0EoRmep.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page2 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page3 = () => import('./pages/api/keystatic/_---params_.astro2.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/keystatic/_---params_.astro2.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page2],
    ["src/pages/api/keystatic/[...params].ts", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/keystatic/[...params].astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4ab266e7-8e87-46d9-96c1-2753584002ba",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
