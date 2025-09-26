import { defineSiteConfig } from "./hooks/use-site-config.svelte.js";

export const siteConfig = defineSiteConfig({
	name: "Retroui-Svelte",
	description: "A collection of retro-styled UI components for Svelte",
	author: "Mhamad6000",
	keywords: ["svelte", "ui", "components", "retro", "retroui" , "tailwindcss" , "shadcn-svelte" , "retroui-svelte"],
	links: {
		github: "https://github.com/Mhamad6000/retroui-svelte",
	},
	ogImage:"/og.png",
	url: "https://retroui-svelte.netlify.app"
});
