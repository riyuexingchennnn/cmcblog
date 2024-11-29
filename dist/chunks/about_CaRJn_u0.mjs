/* empty css                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_C8YLoupj.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_DvLA9w-m.mjs';
import { g as getEntry, i as i18n, I as I18nKey } from './content-utils_b_DCDW4M.mjs';
import $$Markdown from './Markdown_CICvL6xy.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const aboutPost = await getEntry("spec", "about");
  const { Content } = await aboutPost.render();
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.about), "description": i18n(I18nKey.about) }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32"> <div class="card-base z-10 px-9 py-6 relative w-full "> ${renderComponent($$result2, "Markdown", $$Markdown, { "class": "mt-2" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} </div> </div> ` })}`;
}, "F:/blog/cmcblog/src/pages/about.astro", void 0);

const $$file = "F:/blog/cmcblog/src/pages/about.astro";
const $$url = "/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
