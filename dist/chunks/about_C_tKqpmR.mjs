import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_C8YLoupj.mjs';
import { g as getImage } from './_astro_assets_BYJOHRE2.mjs';
import Astro__DehHv from './me_sN0zm3ku.mjs';

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./me\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./me.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__DehHv, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h1 id=\"关于作者\">关于作者<a class=\"anchor\" href=\"#关于作者\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h1>\n<p><strong>有事请联系我</strong></p>\n<blockquote>\n<p>csdn网址 <a href=\"https://blog.csdn.net/m0_72845244?type=blog\">https://blog.csdn.net/m0_72845244?type=blog</a></p>\n</blockquote>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./me.png&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}\"></p>");
	

				const frontmatter = {"minutes":1,"words":14,"excerpt":"有事请联系我"};
				const file = "F:/blog/cmcblog/src/content/spec/about.md";
				const url = undefined;
				function rawContent() {
					return "# 关于作者\r\n\r\n**有事请联系我**\r\n\r\n> csdn网址 https://blog.csdn.net/m0_72845244?type=blog\r\n\r\n![](./me.png)\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"关于作者","text":"关于作者#"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
