<script lang="ts">
	import ThemeSelector from "./theme-selector.svelte";
	import ThemeRadiusSelector from "./theme-radius-selector.svelte";
	import ThemeCustomizerCopyCodeButton from "./theme-customizer-copy-code-button.svelte";
</script>

<div class="flex flex-col gap-6 w-full my-10">
	<div class="flex items-center justify-between w-full">
		<div>
			<h2 class="text-lg font-semibold">Theme</h2>
			<p class="text-muted-foreground text-sm">
				Choose the theme for your UI. Click on a theme below to preview it.
			</p>
		</div>
	</div>
	<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
		<div class="flex flex-wrap items-center gap-2">
			<ThemeSelector />
			<ThemeRadiusSelector />
		</div>
		<ThemeCustomizerCopyCodeButton variant="secondary" size="sm" />
	</div>
</div>
