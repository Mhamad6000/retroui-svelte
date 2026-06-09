<script lang="ts" module>
	interface BaseThemeVariables {
		light: Record<string, string>;
		dark: Record<string, string>;
	}

	function getThemeCode(theme: BaseThemeVariables | undefined, radius: string) {
		if (!theme) {
			return "";
		}

		const themeVariables = {
			light: { ...theme.light, radius },
			dark: { ...theme.dark, radius },
		};

		const fixedVars = `@theme inline {
        --font-head: "Archivo Black", sans-serif;
        --font-sans: "Space Grotesk", sans-serif;
        --shadow-xs: 1px 1px 0 0 var(--border);
        --shadow-sm: 2px 2px 0 0 var(--border);
        --shadow: 3px 3px 0 0 var(--border);
        --shadow-md: 4px 4px 0 0 var(--border);
        --shadow-lg: 6px 6px 0 0 var(--border);
        --shadow-xl: 10px 10px 0 1px var(--border);
        --shadow-2xl: 16px 16px 0 1px var(--border);
        --radius-sm: calc(var(--radius) - 4px);
        --radius-md: calc(var(--radius) - 2px);
        --radius-lg: var(--radius);
        --radius-xl: calc(var(--radius) + 4px);

        --color-background: var(--background);
        --color-foreground: var(--foreground);
        --color-primary: var(--primary);
        --color-primary-foreground: var(--primary-foreground);
        --color-secondary: var(--secondary);
        --color-secondary-foreground: var(--secondary-foreground);
        --color-primary-hover: var(--primary-hover);
        --color-card: var(--card);
        --color-card-foreground: var(--card-foreground);
        --color-muted: var(--muted);
        --color-muted-foreground: var(--muted-foreground);
        --color-accent: var(--accent);
        --color-accent-foreground: var(--accent-foreground);
        --color-destructive: var(--destructive);
        --color-destructive-foreground: var(--destructive-foreground);
        --color-border: var(--border);
}
        
`;

		const rootSection =
			":root {\n" +
			Object.entries(themeVariables.light)
				.map((entry) => "  --" + entry[0] + ": " + entry[1] + ";")
				.join("\n") +
			"\n}\n\n.dark {\n" +
			Object.entries(themeVariables.dark)
				.map((entry) => "  --" + entry[0] + ": " + entry[1] + ";")
				.join("\n") +
			"\n}\n";

		return fixedVars + rootSection;
	}

	// Convert ThemeData to BaseThemeVariables format
	function convertThemeData(themeData: any): BaseThemeVariables | undefined {
		if (!themeData || !themeData.light || !themeData.dark) return undefined;

		return {
			light: themeData.light as Record<string, string>,
			dark: themeData.dark as Record<string, string>,
		};
	}
</script>

<script lang="ts">
	import { getThemeData } from "$lib/themes-data.js";
	import { getRadiusStyleValue, UserConfigContext } from "$lib/user-config.svelte.js";
	import { highlightCode } from "$lib/utils/highlight";
	import ScrollArea from "$registry/ui/scroll-area/scroll-area.svelte";
	import CopyCodeButton from "./copy-code-button.svelte";
	import { PMCommand } from "$lib/components/pm-command";

	const userConfig = UserConfigContext.get();

	const activeThemeData = $derived(
		convertThemeData(getThemeData(userConfig?.current.activeTheme || "yellow"))
	);
	const activeRadius = $derived(getRadiusStyleValue(userConfig?.current.activeRadiusStyle));
	const activeThemeCode = $derived(getThemeCode(activeThemeData, activeRadius));

	const installArgs = $derived([
		"shadcn-svelte@latest",
		"add",
		`https://retroui-svelte.netlify.app/r/theme-${userConfig?.current.activeTheme || "yellow"}.json`,
		`https://retroui-svelte.netlify.app/r/radius-${userConfig?.current.activeRadiusStyle || "rounded"}.json`,
	]);
</script>

<PMCommand command="execute" args={installArgs} />

<div class="">
	{#await highlightCode(activeThemeCode, "css")}
		<div class="flex h-full items-center justify-center">
			<div class="text-muted-foreground text-sm">Highlighting code...</div>
		</div>
	{:then highlightedHtml}
		<div class="relative h-full rounded-lg overflow-hidden">
			<CopyCodeButton code={activeThemeCode} />
			<ScrollArea orientation="both" class="h-[50vh] pb-0" data-pre-wrapper="">
				{@html highlightedHtml}
			</ScrollArea>
		</div>
	{:catch}
		<div class="relative h-full">
			<CopyCodeButton code={activeThemeCode} />
			<pre class="rounded-lg h-full overflow-auto"><code>{activeThemeCode}</code></pre>
		</div>
	{/await}
</div>
