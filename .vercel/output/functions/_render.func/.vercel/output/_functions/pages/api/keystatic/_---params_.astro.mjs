import { m as makeHandler, c as config } from '../../../chunks/keystatic.config_RVQP2JOp.mjs';
export { renderers } from '../../../renderers.mjs';

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	ALL,
	all,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
