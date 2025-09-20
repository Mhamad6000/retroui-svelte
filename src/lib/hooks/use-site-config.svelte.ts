export interface SiteConfig {
	name: string;
	url?: string;
	description?: string;
	author?: string;
	keywords?: string[];
	ogImage?: string;
	links?: {
		github?: string;
		twitter?: string;
		discord?: string;
	};
}

export function defineSiteConfig(config: SiteConfig) {
	return config;
}

export function useSiteConfig(): SiteConfig {
	return {
		name: "Retroui-Svelte",
		description: "A collection of retro-styled UI components for Svelte",
		author: "Mhamad6000",
		keywords: ["svelte", "ui", "components", "retro", "retroui" , "tailwindcss" , "shadcn-svelte" , "retroui-svelte"],
		links: {
			github: "https://github.com/Mhamad6000/retroui-svelte"
		},
		ogImage:"/og.png",
		url: "https://retroui-svelte.netlify.app"
	};
}
