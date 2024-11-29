/* empty css                          */
import { c as createComponent, r as renderTemplate, a as renderComponent } from './astro/server_C8YLoupj.mjs';
import { $ as $$MainGridLayout, U as UNCATEGORIZED } from './MainGridLayout_DvLA9w-m.mjs';
import $$ArchivePanel from './ArchivePanel_Bk9jSWN7.mjs';
import { i as i18n, I as I18nKey } from './content-utils_b_DCDW4M.mjs';

const $$Uncategorized = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivePanel", $$ArchivePanel, { "categories": [UNCATEGORIZED] })} ` })}`;
}, "F:/blog/cmcblog/src/pages/archive/category/uncategorized.astro", void 0);

const $$file = "F:/blog/cmcblog/src/pages/archive/category/uncategorized.astro";
const $$url = "/archive/category/uncategorized/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Uncategorized,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
