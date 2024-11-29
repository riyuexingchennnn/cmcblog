/* empty css                          */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from './astro/server_C8YLoupj.mjs';
import $$PostPage from './PostPage_E3ffnr-i.mjs';
import $$Pagination from './Pagination_BJF-37m6.mjs';
import { P as PAGE_SIZE, $ as $$MainGridLayout } from './MainGridLayout_DvLA9w-m.mjs';
import { a as getSortedPosts } from './content-utils_b_DCDW4M.mjs';

const $$Astro = createAstro("https://riyuexingchennnn.github.io/");
const getStaticPaths = async ({ paginate }) => {
  const allBlogPosts = await getSortedPosts();
  return paginate(allBlogPosts, { pageSize: PAGE_SIZE });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const len = page.data.length;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPage", $$PostPage, { "page": page })} ${renderComponent($$result2, "Pagination", $$Pagination, { "class": "mx-auto onload-animation", "page": page, "style": `animation-delay: calc(var(--content-delay) + ${len * 50}ms)` })} ` })}`;
}, "F:/blog/cmcblog/src/pages/[...page].astro", void 0);

const $$file = "F:/blog/cmcblog/src/pages/[...page].astro";
const $$url = "/[...page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
