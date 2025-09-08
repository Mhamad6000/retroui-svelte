<script lang="ts">
	import { availableThemes, UserConfigContext } from "$lib/user-config.svelte.js";
	import { Button } from "$registry/ui/button/index.js";
	import ThemeSelector from "./theme-selector.svelte";

	const userConfig = UserConfigContext.get();

	function handleThemeSelect(theme: (typeof availableThemes)[number]) {
		if (userConfig) {
			userConfig.setTheme(theme.value);
		}
	}
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-lg font-semibold">Theme</h2>
			<p class="text-muted-foreground text-sm">
				Choose the theme for your UI. Click on a theme below to preview it.
			</p>
		</div>
		<ThemeSelector />
	</div>

	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
		{#each availableThemes as theme (theme.value)}
			<Button
				variant={userConfig?.current.activeTheme === theme.value ? "default" : "outline"}
				size="sm"
				class="h-auto flex-col gap-2 p-3"
				onclick={() => handleThemeSelect(theme)}
			>
				<div class="size-6 rounded-full border-2" style="background-color: {theme.primary}"></div>
				<span class="text-xs">{theme.label}</span>
			</Button>
		{/each}
	</div>

	<div class="text-muted-foreground text-xs">
		Themes change the primary color and component styling. The current theme is applied to the
		preview below.
	</div>
</div>
