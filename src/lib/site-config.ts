import { defineSiteConfig } from "./hooks/use-site-config.svelte.js";

export const siteConfig = defineSiteConfig({
	name: "RetroUI Svelte",
	url: "https://retroui-svelte.dev",
	description: "A collection of retro-styled UI components for Svelte",
	author: "RetroUI Team",
	keywords: ["svelte", "ui", "components", "retro", "retroui"],
	links: {
		github: "https://github.com/Mhamad6000/retroui-svelte",
	},
});
