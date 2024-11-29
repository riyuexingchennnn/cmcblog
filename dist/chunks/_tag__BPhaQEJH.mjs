/* empty css                          */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from './astro/server_C8YLoupj.mjs';
import $$ArchivePanel from './ArchivePanel_Bk9jSWN7.mjs';
import { i as i18n, I as I18nKey, a as getSortedPosts } from './content-utils_b_DCDW4M.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_DvLA9w-m.mjs';

const $$Astro = createAstro("https://riyuexingchennnn.github.io/");
async function getStaticPaths() {
  const posts = await getSortedPosts();
  const allTags = posts.reduce((acc, post) => {
    post.data.tags.forEach((tag) => acc.add(tag));
    return acc;
  }, /* @__PURE__ */ new Set());
  const allTagsArray = Array.from(allTags);
  return allTagsArray.map((tag) => ({
    params: {
      tag
    }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const tag = Astro2.params.tag;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive), "description": i18n(I18nKey.archive) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivePanel", $$ArchivePanel, { "tags": [tag] })} ` })}`;
}, "F:/blog/cmcblog/src/pages/archive/tag/[tag].astro", void 0);

const $$file = "F:/blog/cmcblog/src/pages/archive/tag/[tag].astro";
const $$url = "/archive/tag/[tag]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
