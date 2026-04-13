import { m as makeHandler, c as config } from '../../../chunks/keystatic.config_RVQP2JOp.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const handler = makeHandler({ config });
const GET = handler;
const POST = handler;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
