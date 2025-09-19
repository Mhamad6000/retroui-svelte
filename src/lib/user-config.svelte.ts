import { getContext, setContext } from "svelte";
import { browser } from "$app/environment";

export const availableThemes = [
	{ value: "green", label: "Forest Green", primary: "#4caf50" },
	{ value: "orange", label: "Sunset Orange", primary: "#ff6b35" },
	{ value: "yellow", label: "Neon Yellow", primary: "#ffeb3b" },
	{ value: "teal", label: "Ocean Teal", primary: "#26a69a" },
	{ value: "purple", label: "Grape Purple", primary: "#8e24aa" },
	{ value: "gold", label: "Amber Gold", primary: "#ffa000" },
	{ value: "coral", label: "Hot Coral", primary: "#ff5722" },
	{ value: "cyan", label: "Crystal Cyan", primary: "#00bcd4" },
	{ value: "blue", label: "Ocean Blue", primary: "#2196f3" },
	{ value: "red", label: "Crimson Red", primary: "#f44336" },
	{ value: "pink", label: "Blush Pink", primary: "#e91e63" },
	{ value: "indigo", label: "Deep Indigo", primary: "#3f51b5" },
	{ value: "lime", label: "Bright Lime", primary: "#cddc39" },
	{ value: "rose", label: "Rose Pink", primary: "#e91e63" },
	{ value: "sky", label: "Sky Blue", primary: "#03a9f4" },
	{ value: "slate", label: "Modern Slate", primary: "#475569" },
] as const;

export type Theme = (typeof availableThemes)[number]["value"];

export interface UserConfigData {
	activeTheme: Theme;
	layout: "default" | "sidebar" | "fixed";
}

const defaultConfig: UserConfigData = {
	activeTheme: "yellow",
	layout: "default",
};

export class UserConfig {
	current = $state<UserConfigData>(defaultConfig);

	constructor(initialConfig?: Partial<UserConfigData>) {
		if (initialConfig) {
			this.current = { ...defaultConfig, ...initialConfig };
		}

		// Update theme attribute whenever config changes
		if (browser) {
			$effect(() => {
				this.updateThemeAttribute();
			});
		}

		// Initialize theme attribute
		if (browser) {
			this.updateThemeAttribute();
		}
	}

	setTheme(theme: Theme) {
		this.current.activeTheme = theme;
	}

	setLayout(layout: UserConfigData["layout"]) {
		this.current.layout = layout;
	}

	private updateThemeAttribute() {
		if (browser) {
			// Set theme on document element for global access
			if (document.documentElement) {
				document.documentElement.setAttribute("data-theme", this.current.activeTheme);
			}
			
			// Also dispatch a custom event for reactive components
			if (typeof window !== "undefined") {
				window.dispatchEvent(new CustomEvent("theme-changed", { 
					detail: { theme: this.current.activeTheme } 
				}));
			}
		}
	}
}

const USER_CONFIG_KEY = Symbol("user-config");

export const UserConfigContext = {
	set: (config: UserConfig) => setContext(USER_CONFIG_KEY, config),
	get: () => getContext<UserConfig>(USER_CONFIG_KEY),
};
