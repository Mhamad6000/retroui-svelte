import { getContext, setContext } from "svelte";
import { browser } from "$app/environment";

export const availableThemes = [
	{ value: "blue", label: "Blue", primary: "#2563eb" },
	{ value: "green", label: "Green", primary: "#65a30d" },
	{ value: "amber", label: "Amber", primary: "#d97706" },
	{ value: "rose", label: "Rose", primary: "#e11d48" },
	{ value: "purple", label: "Purple", primary: "#9333ea" },
	{ value: "orange", label: "Orange", primary: "#ea580c" },
	{ value: "teal", label: "Teal", primary: "#0d9488" },
	{ value: "mono", label: "Mono", primary: "#57534e" },
	{ value: "scaled", label: "Scaled", primary: "#2563eb" },
	{ value: "red", label: "Red", primary: "#dc2626" },
	{ value: "yellow", label: "Yellow", primary: "#facc15" },
	{ value: "violet", label: "Violet", primary: "#7c3aed" },
] as const;

export type Theme = (typeof availableThemes)[number]["value"];

export interface UserConfigData {
	activeTheme: Theme;
	layout: "default" | "sidebar" | "fixed";
}

const defaultConfig: UserConfigData = {
	activeTheme: "purple",
	layout: "default",
};

export class UserConfig {
	current = $state<UserConfigData>(defaultConfig);

	constructor(initialConfig?: Partial<UserConfigData>) {
		if (initialConfig) {
			this.current = { ...defaultConfig, ...initialConfig };
		}

		// Load from localStorage if in browser
		if (browser) {
			this.loadFromStorage();
		}

		// Save to localStorage whenever config changes
		if (browser) {
			$effect(() => {
				this.saveToStorage();
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

	private loadFromStorage() {
		try {
			const stored = localStorage.getItem("user-config");
			if (stored) {
				const parsed = JSON.parse(stored);
				this.current = { ...defaultConfig, ...parsed };
				this.updateThemeAttribute();
			}
		} catch (error) {
			console.warn("Failed to load user config from localStorage:", error);
		}
	}

	private saveToStorage() {
		try {
			localStorage.setItem("user-config", JSON.stringify(this.current));
		} catch (error) {
			console.warn("Failed to save user config to localStorage:", error);
		}
	}

	private updateThemeAttribute() {
		if (browser && document.documentElement) {
			document.documentElement.setAttribute("data-theme", this.current.activeTheme);
		}
	}
}

const USER_CONFIG_KEY = Symbol("user-config");

export const UserConfigContext = {
	set: (config: UserConfig) => setContext(USER_CONFIG_KEY, config),
	get: () => getContext<UserConfig>(USER_CONFIG_KEY),
};
