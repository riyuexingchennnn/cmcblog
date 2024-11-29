import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, f as AstroUserError, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_BDfUpCQ4.mjs';
import { c as createComponent, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_C8YLoupj.mjs';

var LinkPreset = /* @__PURE__ */ ((LinkPreset2) => {
  LinkPreset2[LinkPreset2["Home"] = 0] = "Home";
  LinkPreset2[LinkPreset2["Archive"] = 1] = "Archive";
  LinkPreset2[LinkPreset2["About"] = 2] = "About";
  return LinkPreset2;
})(LinkPreset || {});

const config$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  LinkPreset
}, Symbol.toStringTag, { value: 'Module' }));

const siteConfig = {
  title: "日月星辰",
  subtitle: "个人博客",
  lang: "zh_CN",
  // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,
    // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false
    // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: "assets/images/demo-banner.png",
    // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "top",
    // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,
      // Display the credit text of the banner image
      text: "",
      // Credit text to be displayed
      url: ""
      // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,
    // Display the table of contents on the right side of the post
    depth: 2
    // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [
    // Leave this array empty to use the default favicon
    {
      src: "/favicon/icon.png",
      // Path of the favicon, relative to the /public directory
      theme: "light",
      // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      sizes: "32x32"
      // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
};
const navBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: "旧博客",
      url: "https://wangchuanfu294.github.io",
      // Internal links should not include the base path, as it is automatically added
      external: true
      // Show an external link icon and will open in a new tab
    }
  ]
};
const profileConfig = {
  avatar: "assets/images/avatar.png",
  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "日月星辰",
  bio: "一个不想拯救世界的技术宅",
  links: [
    {
      name: "Twitter",
      icon: "fa6-brands:csdn",
      // Visit https://icones.js.org/ for icon codes
      // You will need to install the corresponding icon set if it's not already included
      // `pnpm add @iconify-json/<icon-set-name>`
      url: "https://blog.csdn.net/m0_72845244?spm=1000.2115.3001.5343"
    },
    {
      name: "bilibili",
      icon: "fa6-brands:bilibili",
      url: "https://space.bilibili.com/2058763975?spm_id_from=333.1007.0.0"
    },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/riyuexingchennnn"
    }
  ]
};
const licenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
};

const config = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  licenseConfig,
  navBarConfig,
  profileConfig,
  siteConfig
}, Symbol.toStringTag, { value: 'Module' }));

var I18nKey = /* @__PURE__ */ ((I18nKey2) => {
  I18nKey2["home"] = "home";
  I18nKey2["about"] = "about";
  I18nKey2["archive"] = "archive";
  I18nKey2["search"] = "search";
  I18nKey2["tags"] = "tags";
  I18nKey2["categories"] = "categories";
  I18nKey2["recentPosts"] = "recentPosts";
  I18nKey2["comments"] = "comments";
  I18nKey2["untitled"] = "untitled";
  I18nKey2["uncategorized"] = "uncategorized";
  I18nKey2["noTags"] = "noTags";
  I18nKey2["wordCount"] = "wordCount";
  I18nKey2["wordsCount"] = "wordsCount";
  I18nKey2["minuteCount"] = "minuteCount";
  I18nKey2["minutesCount"] = "minutesCount";
  I18nKey2["postCount"] = "postCount";
  I18nKey2["postsCount"] = "postsCount";
  I18nKey2["themeColor"] = "themeColor";
  I18nKey2["lightMode"] = "lightMode";
  I18nKey2["darkMode"] = "darkMode";
  I18nKey2["systemMode"] = "systemMode";
  I18nKey2["more"] = "more";
  I18nKey2["author"] = "author";
  I18nKey2["publishedAt"] = "publishedAt";
  I18nKey2["license"] = "license";
  return I18nKey2;
})(I18nKey || {});

const i18nKey = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: I18nKey
}, Symbol.toStringTag, { value: 'Module' }));

const en = {
  [I18nKey.home]: "Home",
  [I18nKey.about]: "About",
  [I18nKey.archive]: "Archive",
  [I18nKey.search]: "Search",
  [I18nKey.tags]: "Tags",
  [I18nKey.categories]: "Categories",
  [I18nKey.recentPosts]: "Recent Posts",
  [I18nKey.comments]: "Comments",
  [I18nKey.untitled]: "Untitled",
  [I18nKey.uncategorized]: "Uncategorized",
  [I18nKey.noTags]: "No Tags",
  [I18nKey.wordCount]: "word",
  [I18nKey.wordsCount]: "words",
  [I18nKey.minuteCount]: "minute",
  [I18nKey.minutesCount]: "minutes",
  [I18nKey.postCount]: "post",
  [I18nKey.postsCount]: "posts",
  [I18nKey.themeColor]: "Theme Color",
  [I18nKey.lightMode]: "Light",
  [I18nKey.darkMode]: "Dark",
  [I18nKey.systemMode]: "System",
  [I18nKey.more]: "More",
  [I18nKey.author]: "Author",
  [I18nKey.publishedAt]: "Published at",
  [I18nKey.license]: "License"
};

const en$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  en
}, Symbol.toStringTag, { value: 'Module' }));

const es = {
  [I18nKey.home]: "Inicio",
  [I18nKey.about]: "Sobre mí",
  [I18nKey.archive]: "Archivo",
  [I18nKey.search]: "Buscar",
  [I18nKey.tags]: "Etiquetas",
  [I18nKey.categories]: "Categorías",
  [I18nKey.recentPosts]: "Publicaciones recientes",
  [I18nKey.comments]: "Comentarios",
  [I18nKey.untitled]: "Sin título",
  [I18nKey.uncategorized]: "Sin categoría",
  [I18nKey.noTags]: "Sin etiquetas",
  [I18nKey.wordCount]: "palabra",
  [I18nKey.wordsCount]: "palabras",
  [I18nKey.minuteCount]: "minuto",
  [I18nKey.minutesCount]: "minutos",
  [I18nKey.postCount]: "publicación",
  [I18nKey.postsCount]: "publicaciones",
  [I18nKey.themeColor]: "Color del tema",
  [I18nKey.lightMode]: "Claro",
  [I18nKey.darkMode]: "Oscuro",
  [I18nKey.systemMode]: "Sistema",
  [I18nKey.more]: "Más",
  [I18nKey.author]: "Autor",
  [I18nKey.publishedAt]: "Publicado el",
  [I18nKey.license]: "Licencia"
};

const es$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  es
}, Symbol.toStringTag, { value: 'Module' }));

const ja = {
  [I18nKey.home]: "Home",
  [I18nKey.about]: "About",
  [I18nKey.archive]: "Archive",
  [I18nKey.search]: "検索",
  [I18nKey.tags]: "タグ",
  [I18nKey.categories]: "カテゴリ",
  [I18nKey.recentPosts]: "最近の投稿",
  [I18nKey.comments]: "コメント",
  [I18nKey.untitled]: "タイトルなし",
  [I18nKey.uncategorized]: "カテゴリなし",
  [I18nKey.noTags]: "タグなし",
  [I18nKey.wordCount]: "文字",
  [I18nKey.wordsCount]: "文字",
  [I18nKey.minuteCount]: "分",
  [I18nKey.minutesCount]: "分",
  [I18nKey.postCount]: "件の投稿",
  [I18nKey.postsCount]: "件の投稿",
  [I18nKey.themeColor]: "テーマカラー",
  [I18nKey.lightMode]: "ライト",
  [I18nKey.darkMode]: "ダーク",
  [I18nKey.systemMode]: "システム",
  [I18nKey.more]: "もっと",
  [I18nKey.author]: "作者",
  [I18nKey.publishedAt]: "公開日",
  [I18nKey.license]: "ライセンス"
};

const ja$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ja
}, Symbol.toStringTag, { value: 'Module' }));

const ko = {
  [I18nKey.home]: "홈",
  [I18nKey.about]: "소개",
  [I18nKey.archive]: "아카이브",
  [I18nKey.search]: "검색",
  [I18nKey.tags]: "태그",
  [I18nKey.categories]: "카테고리",
  [I18nKey.recentPosts]: "최근 게시물",
  [I18nKey.comments]: "댓글",
  [I18nKey.untitled]: "제목 없음",
  [I18nKey.uncategorized]: "분류되지 않음",
  [I18nKey.noTags]: "태그 없음",
  [I18nKey.wordCount]: "단어",
  [I18nKey.wordsCount]: "단어",
  [I18nKey.minuteCount]: "분",
  [I18nKey.minutesCount]: "분",
  [I18nKey.postCount]: "게시물",
  [I18nKey.postsCount]: "게시물",
  [I18nKey.themeColor]: "테마 색상",
  [I18nKey.lightMode]: "밝은 모드",
  [I18nKey.darkMode]: "어두운 모드",
  [I18nKey.systemMode]: "시스템 모드",
  [I18nKey.more]: "더 보기",
  [I18nKey.author]: "저자",
  [I18nKey.publishedAt]: "게시일",
  [I18nKey.license]: "라이선스"
};

const ko$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ko
}, Symbol.toStringTag, { value: 'Module' }));

const zh_CN = {
  [I18nKey.home]: "主页",
  [I18nKey.about]: "关于",
  [I18nKey.archive]: "归档",
  [I18nKey.search]: "搜索",
  [I18nKey.tags]: "标签",
  [I18nKey.categories]: "分类",
  [I18nKey.recentPosts]: "最新文章",
  [I18nKey.comments]: "评论",
  [I18nKey.untitled]: "无标题",
  [I18nKey.uncategorized]: "未分类",
  [I18nKey.noTags]: "无标签",
  [I18nKey.wordCount]: "字",
  [I18nKey.wordsCount]: "字",
  [I18nKey.minuteCount]: "分钟",
  [I18nKey.minutesCount]: "分钟",
  [I18nKey.postCount]: "篇文章",
  [I18nKey.postsCount]: "篇文章",
  [I18nKey.themeColor]: "主题色",
  [I18nKey.lightMode]: "亮色",
  [I18nKey.darkMode]: "暗色",
  [I18nKey.systemMode]: "跟随系统",
  [I18nKey.more]: "更多",
  [I18nKey.author]: "作者",
  [I18nKey.publishedAt]: "发布于",
  [I18nKey.license]: "许可协议"
};

const zh_CN$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  zh_CN
}, Symbol.toStringTag, { value: 'Module' }));

const zh_TW = {
  [I18nKey.home]: "首頁",
  [I18nKey.about]: "關於",
  [I18nKey.archive]: "彙整",
  [I18nKey.search]: "搜尋",
  [I18nKey.tags]: "標籤",
  [I18nKey.categories]: "分類",
  [I18nKey.recentPosts]: "最新文章",
  [I18nKey.comments]: "評論",
  [I18nKey.untitled]: "無標題",
  [I18nKey.uncategorized]: "未分類",
  [I18nKey.noTags]: "無標籤",
  [I18nKey.wordCount]: "字",
  [I18nKey.wordsCount]: "字",
  [I18nKey.minuteCount]: "分鐘",
  [I18nKey.minutesCount]: "分鐘",
  [I18nKey.postCount]: "篇文章",
  [I18nKey.postsCount]: "篇文章",
  [I18nKey.themeColor]: "主題色",
  [I18nKey.lightMode]: "亮色",
  [I18nKey.darkMode]: "暗色",
  [I18nKey.systemMode]: "跟隨系統",
  [I18nKey.more]: "更多",
  [I18nKey.author]: "作者",
  [I18nKey.publishedAt]: "發佈於",
  [I18nKey.license]: "許可協議"
};

const zh_TW$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  zh_TW
}, Symbol.toStringTag, { value: 'Module' }));

const defaultTranslation = en;
const map = {
  es,
  en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja,
  ja_jp: ja,
  ko,
  ko_kr: ko
};
function getTranslation(lang) {
  return map[lang.toLowerCase()] || defaultTranslation;
}
function i18n(key) {
  const lang = siteConfig.lang || "en";
  return getTranslation(lang)[key];
}

const translation = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  getTranslation,
  i18n
}, Symbol.toStringTag, { value: 'Module' }));

var e=e=>Object.prototype.toString.call(e),t=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),o=t=>"[object Date]"===e(t),n=t=>"[object RegExp]"===e(t),r=t=>"[object Error]"===e(t),s=t=>"[object Boolean]"===e(t),l=t=>"[object Number]"===e(t),i=t=>"[object String]"===e(t),c=Array.isArray,u=Object.getOwnPropertyDescriptor,a=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.keys;function d(e){const t=h(e),o=f(e);for(let n=0;n<o.length;n++)a.call(e,o[n])&&t.push(o[n]);return t}function b(e,t){return !u(e,t)?.writable}function y(e,u){if("object"==typeof e&&null!==e){let a;if(c(e))a=[];else if(o(e))a=new Date(e.getTime?e.getTime():e);else if(n(e))a=new RegExp(e);else if(r(e))a={message:e.message};else if(s(e)||l(e)||i(e))a=Object(e);else {if(t(e))return e.slice();a=Object.create(Object.getPrototypeOf(e));}const f=u.includeSymbols?d:h;for(const t of f(e))a[t]=e[t];return a}return e}var g={includeSymbols:!1,immutable:!1};function m(e,t,o=g){const n=[],r=[];let s=!0;const l=o.includeSymbols?d:h,i=!!o.immutable;return function e(u){const a=i?y(u,o):u,f={};let h=!0;const d={node:a,node_:u,path:[].concat(n),parent:r[r.length-1],parents:r,key:n[n.length-1],isRoot:0===n.length,level:n.length,circular:void 0,isLeaf:!1,notLeaf:!0,notRoot:!0,isFirst:!1,isLast:!1,update:function(e,t=!1){d.isRoot||(d.parent.node[d.key]=e),d.node=e,t&&(h=!1);},delete:function(e){delete d.parent.node[d.key],e&&(h=!1);},remove:function(e){c(d.parent.node)?d.parent.node.splice(d.key,1):delete d.parent.node[d.key],e&&(h=!1);},keys:null,before:function(e){f.before=e;},after:function(e){f.after=e;},pre:function(e){f.pre=e;},post:function(e){f.post=e;},stop:function(){s=!1;},block:function(){h=!1;}};if(!s)return d;function g(){if("object"==typeof d.node&&null!==d.node){d.keys&&d.node_===d.node||(d.keys=l(d.node)),d.isLeaf=0===d.keys.length;for(let e=0;e<r.length;e++)if(r[e].node_===u){d.circular=r[e];break}}else d.isLeaf=!0,d.keys=null;d.notLeaf=!d.isLeaf,d.notRoot=!d.isRoot;}g();const m=t(d,d.node);if(void 0!==m&&d.update&&d.update(m),f.before&&f.before(d,d.node),!h)return d;if("object"==typeof d.node&&null!==d.node&&!d.circular){r.push(d),g();for(const[t,o]of Object.entries(d.keys??[])){n.push(o),f.pre&&f.pre(d,d.node[o],o);const r=e(d.node[o]);i&&p.call(d.node,o)&&!b(d.node,o)&&(d.node[o]=r.node),r.isLast=!!d.keys?.length&&+t==d.keys.length-1,r.isFirst=0==+t,f.post&&f.post(d,r),n.pop();}r.pop();}return f.after&&f.after(d,d.node),d}(e).node}var j=class{#e;#t;constructor(e,t=g){this.#e=e,this.#t=t;}get(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return;t=t[n];}return t}has(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return !1;t=t[n];}return !0}set(e,t){let o=this.#e,n=0;for(n=0;n<e.length-1;n++){const t=e[n];p.call(o,t)||(o[t]={}),o=o[t];}return o[e[n]]=t,t}map(e){return m(this.#e,e,{immutable:!0,includeSymbols:!!this.#t.includeSymbols})}forEach(e){return this.#e=m(this.#e,e,this.#t),this.#e}reduce(e,t){const o=1===arguments.length;let n=o?this.#e:t;return this.forEach(((t,r)=>{t.isRoot&&o||(n=e(t,n,r));})),n}paths(){const e=[];return this.forEach((t=>{e.push(t.path);})),e}nodes(){const e=[];return this.forEach((t=>{e.push(t.node);})),e}clone(){const e=[],o=[],n=this.#t;return t(this.#e)?this.#e.slice():function t(r){for(let t=0;t<e.length;t++)if(e[t]===r)return o[t];if("object"==typeof r&&null!==r){const s=y(r,n);e.push(r),o.push(s);const l=n.includeSymbols?d:h;for(const e of l(r))s[e]=t(r[e]);return e.pop(),o.pop(),s}return r}(this.#e)}};

/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	peek() {
		if (!this.#head) {
			return;
		}

		return this.#head.value;

		// TODO: Node.js 18.
		// return this.#head?.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}

function pLimit(concurrency) {
	validateConcurrency(concurrency);

	const queue = new Queue();
	let activeCount = 0;

	const resumeNext = () => {
		if (activeCount < concurrency && queue.size > 0) {
			queue.dequeue()();
			// Since `pendingCount` has been decreased by one, increase `activeCount` by one.
			activeCount++;
		}
	};

	const next = () => {
		activeCount--;

		resumeNext();
	};

	const run = async (function_, resolve, arguments_) => {
		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		// Queue `internalResolve` instead of the `run` function
		// to preserve asynchronous context.
		new Promise(internalResolve => {
			queue.enqueue(internalResolve);
		}).then(
			run.bind(undefined, function_, resolve, arguments_),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// after the `internalResolve` function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency) {
				resumeNext();
			}
		})();
	};

	const generator = (function_, ...arguments_) => new Promise(resolve => {
		enqueue(function_, resolve, arguments_);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value() {
				queue.clear();
			},
		},
		concurrency: {
			get: () => concurrency,

			set(newConcurrency) {
				validateConcurrency(newConcurrency);
				concurrency = newConcurrency;

				queueMicrotask(() => {
					// eslint-disable-next-line no-unmodified-loop-condition
					while (activeCount < concurrency && queue.size > 0) {
						resumeNext();
					}
				});
			},
		},
	});

	return generator;
}

function validateConcurrency(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
const CONTENT_LAYER_TYPE = "content_layer";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

/**
 * Base64 Encodes an arraybuffer
 * @param {ArrayBuffer} arraybuffer
 * @returns {string}
 */

/**
 * Decodes a base64 string into an arraybuffer
 * @param {string} string
 * @returns {ArrayBuffer}
 */
function decode64(string) {
  const binaryString = asciiToBinary(string);
  const arraybuffer = new ArrayBuffer(binaryString.length);
  const dv = new DataView(arraybuffer);

  for (let i = 0; i < arraybuffer.byteLength; i++) {
    dv.setUint8(i, binaryString.charCodeAt(i));
  }

  return arraybuffer;
}

const KEY_STRING =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/**
 * Substitute for atob since it's deprecated in node.
 * Does not do any input validation.
 *
 * @see https://github.com/jsdom/abab/blob/master/lib/atob.js
 *
 * @param {string} data
 * @returns {string}
 */
function asciiToBinary(data) {
  if (data.length % 4 === 0) {
    data = data.replace(/==?$/, "");
  }

  let output = "";
  let buffer = 0;
  let accumulatedBits = 0;

  for (let i = 0; i < data.length; i++) {
    buffer <<= 6;
    buffer |= KEY_STRING.indexOf(data[i]);
    accumulatedBits += 6;
    if (accumulatedBits === 24) {
      output += String.fromCharCode((buffer & 0xff0000) >> 16);
      output += String.fromCharCode((buffer & 0xff00) >> 8);
      output += String.fromCharCode(buffer & 0xff);
      buffer = accumulatedBits = 0;
    }
  }
  if (accumulatedBits === 12) {
    buffer >>= 4;
    output += String.fromCharCode(buffer);
  } else if (accumulatedBits === 18) {
    buffer >>= 2;
    output += String.fromCharCode((buffer & 0xff00) >> 8);
    output += String.fromCharCode(buffer & 0xff);
  }
  return output;
}

const UNDEFINED = -1;
const HOLE = -2;
const NAN = -3;
const POSITIVE_INFINITY = -4;
const NEGATIVE_INFINITY = -5;
const NEGATIVE_ZERO = -6;

/**
 * Revive a value flattened with `devalue.stringify`
 * @param {number | any[]} parsed
 * @param {Record<string, (value: any) => any>} [revivers]
 */
function unflatten(parsed, revivers) {
	if (typeof parsed === 'number') return hydrate(parsed, true);

	if (!Array.isArray(parsed) || parsed.length === 0) {
		throw new Error('Invalid input');
	}

	const values = /** @type {any[]} */ (parsed);

	const hydrated = Array(values.length);

	/**
	 * @param {number} index
	 * @returns {any}
	 */
	function hydrate(index, standalone = false) {
		if (index === UNDEFINED) return undefined;
		if (index === NAN) return NaN;
		if (index === POSITIVE_INFINITY) return Infinity;
		if (index === NEGATIVE_INFINITY) return -Infinity;
		if (index === NEGATIVE_ZERO) return -0;

		if (standalone) throw new Error(`Invalid input`);

		if (index in hydrated) return hydrated[index];

		const value = values[index];

		if (!value || typeof value !== 'object') {
			hydrated[index] = value;
		} else if (Array.isArray(value)) {
			if (typeof value[0] === 'string') {
				const type = value[0];

				switch (type) {
					case 'Date':
						hydrated[index] = new Date(value[1]);
						break;

					case 'Set':
						const set = new Set();
						hydrated[index] = set;
						for (let i = 1; i < value.length; i += 1) {
							set.add(hydrate(value[i]));
						}
						break;

					case 'Map':
						const map = new Map();
						hydrated[index] = map;
						for (let i = 1; i < value.length; i += 2) {
							map.set(hydrate(value[i]), hydrate(value[i + 1]));
						}
						break;

					case 'RegExp':
						hydrated[index] = new RegExp(value[1], value[2]);
						break;

					case 'Object':
						hydrated[index] = Object(value[1]);
						break;

					case 'BigInt':
						hydrated[index] = BigInt(value[1]);
						break;

					case 'null':
						const obj = Object.create(null);
						hydrated[index] = obj;
						for (let i = 1; i < value.length; i += 2) {
							obj[value[i]] = hydrate(value[i + 1]);
						}
						break;

          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const TypedArrayConstructor = globalThis[type];
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            const typedArray = new TypedArrayConstructor(arraybuffer);
            hydrated[index] = typedArray;
            break;
          }

          case "ArrayBuffer": {
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            hydrated[index] = arraybuffer;
            break;
          }

					default:
						throw new Error(`Unknown type ${type}`);
				}
			} else {
				const array = new Array(value.length);
				hydrated[index] = array;

				for (let i = 0; i < value.length; i += 1) {
					const n = value[i];
					if (n === HOLE) continue;

					array[i] = hydrate(n);
				}
			}
		} else {
			/** @type {Record<string, any>} */
			const object = {};
			hydrated[index] = object;

			for (const key in value) {
				const n = value[key];
				object[key] = hydrate(n);
			}
		}

		return hydrated[index];
	}

	return hydrate(0);
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://riyuexingchennnn.github.io/", "SSR": true};
function defineCollection(config) {
  if ("loader" in config) {
    if (config.type && config.type !== CONTENT_LAYER_TYPE) {
      throw new AstroUserError(
        "Collections that use the Content Layer API must have a `loader` defined and no `type` set.",
        "Check your collection definitions in `src/content/config.*`.'"
      );
    }
    config.type = CONTENT_LAYER_TYPE;
  }
  if (!config.type) config.type = "content";
  return config;
}
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(`The collection ${JSON.stringify(collection)} does not exist.`);
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new j(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/深度学习基础.md": () => import('./深度学习基础_C7FBR2PM.mjs'),"/src/content/posts/计算机视觉深度学习入门.md": () => import('./计算机视觉深度学习入门_XkoAV8GY.mjs'),"/src/content/spec/about.md": () => import('./about_zZ6uuzw1.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"spec":{"type":"content","entries":{"about":"/src/content/spec/about.md"}},"posts":{"type":"content","entries":{"深度学习基础":"/src/content/posts/深度学习基础.md","计算机视觉深度学习入门":"/src/content/posts/计算机视觉深度学习入门.md"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/深度学习基础.md": () => import('./深度学习基础_CDpnEhBj.mjs'),"/src/content/posts/计算机视觉深度学习入门.md": () => import('./计算机视觉深度学习入门_UnWyUlcV.mjs'),"/src/content/spec/about.md": () => import('./about_CC-bPGeQ.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

async function getSortedPosts() {
  const allBlogPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true ;
  });
  const sorted = allBlogPosts.sort(
    (a, b) => {
      const dateA = new Date(a.data.published);
      const dateB = new Date(b.data.published);
      return dateA > dateB ? -1 : 1;
    }
  );
  for (let i = 1; i < sorted.length; i++) {
    sorted[i].data.nextSlug = sorted[i - 1].slug;
    sorted[i].data.nextTitle = sorted[i - 1].data.title;
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].data.prevSlug = sorted[i + 1].slug;
    sorted[i].data.prevTitle = sorted[i + 1].data.title;
  }
  return sorted;
}
async function getTagList() {
  const allBlogPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true ;
  });
  const countMap = {};
  allBlogPosts.map((post) => {
    post.data.tags.map((tag) => {
      if (!countMap[tag]) countMap[tag] = 0;
      countMap[tag]++;
    });
  });
  const keys = Object.keys(countMap).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return keys.map((key) => ({ name: key, count: countMap[key] }));
}
async function getCategoryList() {
  const allBlogPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true ;
  });
  const count = {};
  allBlogPosts.map((post) => {
    if (!post.data.category) {
      const ucKey = i18n(I18nKey.uncategorized);
      count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
      return;
    }
    count[post.data.category] = count[post.data.category] ? count[post.data.category] + 1 : 1;
  });
  const lst = Object.keys(count).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  const ret = [];
  for (const c of lst) {
    ret.push({ name: c, count: count[c] });
  }
  return ret;
}

const contentUtils = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  getCategoryList,
  getSortedPosts,
  getTagList
}, Symbol.toStringTag, { value: 'Module' }));

export { I18nKey as I, LinkPreset as L, getSortedPosts as a, getCategoryList as b, getCollection as c, defineCollection as d, getTagList as e, config$1 as f, getEntry as g, config as h, i18n as i, i18nKey as j, en$1 as k, licenseConfig as l, es$1 as m, navBarConfig as n, ja$1 as o, profileConfig as p, ko$1 as q, zh_TW$1 as r, siteConfig as s, translation as t, contentUtils as u, zh_CN$1 as z };
