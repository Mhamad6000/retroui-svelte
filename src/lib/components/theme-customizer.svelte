<script lang="ts">
	import ThemeSelector from "./theme-selector.svelte";
</script>

<div class="flex flex-col gap-6 w-full my-10">
	<div class="flex items-center justify-between w-full">
		<div>
			<h2 class="text-lg font-semibold">Theme</h2>
			<p class="text-muted-foreground text-sm">
				Choose the theme for your UI. Click on a theme below to preview it.
			</p>
		</div>
		<ThemeSelector />
	</div>
</div>
