import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_C8YLoupj.mjs';
import { formatDateToYYYYMMDD } from './date-utils_OyTxlY41.mjs';
import { u as url, a as $$Icon } from './MainGridLayout_DvLA9w-m.mjs';
import { i as i18n, I as I18nKey } from './content-utils_b_DCDW4M.mjs';

const $$Astro = createAstro("https://riyuexingchennnn.github.io/");
const $$PostMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostMeta;
  const { published, tags, category, hideTagsForMobile = false } = Astro2.props;
  const className = Astro2.props.class;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-wrap text-neutral-500 dark:text-neutral-400 items-center gap-4 gap-x-4 gap-y-2", className], "class:list")}> <!-- publish date --> <div class="flex items-center"> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:calendar-today-outline-rounded", "class": "text-xl" })} </div> <span class="text-50 text-sm font-medium">${formatDateToYYYYMMDD(published)}</span> </div> <!-- categories --> <div class="flex items-center"> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:book-2-outline-rounded", "class": "text-xl" })} </div> <div class="flex flex-row flex-nowrap items-center"> <a${addAttribute(url(`/archive/category/${category || "uncategorized"}/`), "href")}${addAttribute(`View all posts in the ${category} category`, "aria-label")} class="link-lg transition text-50 text-sm font-medium
                            hover:text-[var(--primary)] dark:hover:text-[var(--primary)] whitespace-nowrap"> ${category || i18n(I18nKey.uncategorized)} </a> </div> </div> <!-- tags --> <div${addAttribute(["items-center", { "flex": !hideTagsForMobile, "hidden md:flex": hideTagsForMobile }], "class:list")}> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:tag-rounded", "class": "text-xl" })} </div> <div class="flex flex-row flex-nowrap items-center"> ${tags && tags.length > 0 && tags.map((tag, i) => renderTemplate`<div${addAttribute([{ "hidden": i == 0 }, "mx-1.5 text-[var(--meta-divider)] text-sm"], "class:list")}>/</div>
                <a${addAttribute(url(`/archive/tag/${tag}/`), "href")}${addAttribute(`View all posts with the ${tag} tag`, "aria-label")} class="link-lg transition text-50 text-sm font-medium
                                hover:text-[var(--primary)] dark:hover:text-[var(--primary)] whitespace-nowrap"> ${tag} </a>`)} ${!(tags && tags.length > 0) && renderTemplate`<div class="transition text-50 text-sm font-medium">${i18n(I18nKey.noTags)}</div>`} </div> </div> </div>`;
}, "F:/blog/cmcblog/src/components/PostMeta.astro", void 0);

const $$file = "F:/blog/cmcblog/src/components/PostMeta.astro";
const $$url = undefined;

export { $$PostMeta as default, $$file as file, $$url as url };
