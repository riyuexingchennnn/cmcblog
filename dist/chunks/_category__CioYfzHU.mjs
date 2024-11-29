/* empty css                          */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from './astro/server_C8YLoupj.mjs';
import { i as i18n, I as I18nKey, b as getCategoryList } from './content-utils_b_DCDW4M.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_DvLA9w-m.mjs';
import $$ArchivePanel from './ArchivePanel_Bk9jSWN7.mjs';

const $$Astro = createAstro("https://riyuexingchennnn.github.io/");
async function getStaticPaths() {
  const categories = await getCategoryList();
  return categories.map((category) => {
    return {
      params: {
        category: category.name
      }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const category = Astro2.params.category;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive), "description": i18n(I18nKey.archive) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivePanel", $$ArchivePanel, { "categories": [category] })} ` })}`;
}, "F:/blog/cmcblog/src/pages/archive/category/[category].astro", void 0);

const $$file = "F:/blog/cmcblog/src/pages/archive/category/[category].astro";
const $$url = "/archive/category/[category]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
