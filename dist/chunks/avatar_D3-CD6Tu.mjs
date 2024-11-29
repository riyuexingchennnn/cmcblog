const avatar = new Proxy({"src":"/_astro/avatar.CPRSuycf.png","width":576,"height":576,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "F:/blog/cmcblog/src/assets/images/avatar.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("F:/blog/cmcblog/src/assets/images/avatar.png");
							return target[name];
						}
					});

export { avatar as default };
