import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_C8YLoupj.mjs';
import { U as UNCATEGORIZED, g as getPostUrlBySlug } from './MainGridLayout_DvLA9w-m.mjs';
import { a as getSortedPosts, i as i18n, I as I18nKey } from './content-utils_b_DCDW4M.mjs';

const $$Astro = createAstro("https://riyuexingchennnn.github.io/");
const $$ArchivePanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArchivePanel;
  const { keyword, tags, categories } = Astro2.props;
  let posts = await getSortedPosts();
  if (Array.isArray(tags) && tags.length > 0) {
    posts = posts.filter(
      (post) => Array.isArray(post.data.tags) && post.data.tags.some((tag) => tags.includes(tag))
    );
  }
  if (Array.isArray(categories) && categories.length > 0) {
    posts = posts.filter(
      (post) => post.data.category && categories.includes(post.data.category) || !post.data.category && categories.includes(UNCATEGORIZED)
    );
  }
  const groups = (() => {
    const groupedPosts = posts.reduce(
      (grouped, post) => {
        const year = post.data.published.getFullYear();
        if (!grouped[year]) {
          grouped[year] = [];
        }
        grouped[year].push(post);
        return grouped;
      },
      {}
    );
    const groupedPostsArray = Object.keys(groupedPosts).map((key) => ({
      year: Number.parseInt(key),
      posts: groupedPosts[Number.parseInt(key)]
    }));
    groupedPostsArray.sort((a, b) => b.year - a.year);
    return groupedPostsArray;
  })();
  function formatDate(date) {
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${month}-${day}`;
  }
  function formatTag(tag) {
    return tag.map((t) => `#${t}`).join(" ");
  }
  return renderTemplate`${maybeRenderHead()}<div class="card-base px-8 py-6"> ${groups.map((group) => renderTemplate`<div> <div class="flex flex-row w-full items-center h-[3.75rem]"> <div class="w-[15%] md:w-[10%] transition text-2xl font-bold text-right text-75">${group.year}</div> <div class="w-[15%] md:w-[10%]"> <div class="h-3 w-3 bg-none rounded-full outline outline-[var(--primary)] mx-auto -outline-offset-[2px] z-50 outline-3"></div> </div> <div class="w-[70%] md:w-[80%] transition text-left text-50">${group.posts.length} ${i18n(I18nKey.postsCount)}</div> </div> ${group.posts.map((post) => renderTemplate`<a${addAttribute(getPostUrlBySlug(post.slug), "href")}${addAttribute(post.data.title, "aria-label")} class="group btn-plain block h-10 w-full rounded-lg hover:text-[initial]"> <div class="flex flex-row justify-start items-center h-full"> <!-- date --> <div class="w-[15%] md:w-[10%] transition text-sm text-right text-50"> ${formatDate(post.data.published)} </div> <!-- dot and line --> <div class="w-[15%] md:w-[10%] relative dash-line h-full flex items-center"> <div class="transition-all mx-auto w-1 h-1 rounded group-hover:h-5
                                bg-[oklch(0.5_0.05_var(--hue))] group-hover:bg-[var(--primary)]
                                outline outline-4 z-50
                                outline-[var(--card-bg)]
                                group-hover:outline-[var(--btn-plain-bg-hover)]
                                group-active:outline-[var(--btn-plain-bg-active)]
                                "></div> </div> <!-- post title --> <div class="w-[70%] md:max-w-[65%] md:w-[65%] text-left font-bold
                                group-hover:translate-x-1 transition-all group-hover:text-[var(--primary)]
                                text-75 pr-8 whitespace-nowrap overflow-ellipsis overflow-hidden"> ${post.data.title} </div> <!-- tag list --> <div class="hidden md:block md:w-[15%] text-left text-sm transition
                            whitespace-nowrap overflow-ellipsis overflow-hidden
                            text-30">${formatTag(post.data.tags)}</div> </div> </a>`)} </div>`)} </div>`;
}, "F:/blog/cmcblog/src/components/ArchivePanel.astro", void 0);

const $$file = "F:/blog/cmcblog/src/components/ArchivePanel.astro";
const $$url = undefined;

export { $$ArchivePanel as default, $$file as file, $$url as url };
