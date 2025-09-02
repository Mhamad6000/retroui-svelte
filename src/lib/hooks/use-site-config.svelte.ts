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
	// This would typically get the config from context or a store
	// For now, we'll return a default config
	return {
		name: "RetroUI Svelte",
		description: "A collection of retro-styled UI components for Svelte",
		author: "RetroUI Team",
		keywords: ["svelte", "ui", "components", "retro"],
		links: {
			github: "https://github.com/retroui/retroui-svelte"
		}
	};
}
