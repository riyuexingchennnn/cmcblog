import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_C8YLoupj.mjs';
import { g as getPostUrlBySlug } from './MainGridLayout_DvLA9w-m.mjs';
import $$PostCard from './PostCard_KVlq65Bc.mjs';

const $$Astro = createAstro("https://riyuexingchennnn.github.io/");
const $$PostPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPage;
  const { page } = Astro2.props;
  let delay = 0;
  const interval = 50;
  return renderTemplate`${maybeRenderHead()}<div class="transition flex flex-col rounded-[var(--radius-large)] bg-[var(--card-bg)] py-1 md:py-0 md:bg-transparent md:gap-4 mb-4"> ${page.data.map((entry) => {
    return renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "entry": entry, "title": entry.data.title, "tags": entry.data.tags, "category": entry.data.category, "published": entry.data.published, "url": getPostUrlBySlug(entry.slug), "image": entry.data.image, "description": entry.data.description, "draft": entry.data.draft, "class:list": "onload-animation", "style": `animation-delay: calc(var(--content-delay) + ${delay++ * interval}ms);` })}`;
  })} </div>`;
}, "F:/blog/cmcblog/src/components/PostPage.astro", void 0);

const $$file = "F:/blog/cmcblog/src/components/PostPage.astro";
const $$url = undefined;

export { $$PostPage as default, $$file as file, $$url as url };
