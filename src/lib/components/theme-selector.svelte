<script lang="ts">
	import * as Select from "$registry/ui/select/index.js";
	import { availableThemes, UserConfigContext } from "$lib/user-config.svelte.js";
	import { cn } from "$registry/lib/utils.js";

	let { class: className = "", ...restProps } = $props();

	const userConfig = UserConfigContext.get();

	function handleThemeChange(value: string | undefined) {
		if (value && userConfig) {
			const theme = availableThemes.find((t) => t.value === value);
			if (theme) {
				userConfig.setTheme(theme.value);
			}
		}
	}
</script>

<Select.Root
	type="single"
	value={userConfig?.current.activeTheme}
	onValueChange={handleThemeChange}
	{...restProps}
>
	<Select.Trigger class={cn("w-[180px]", className)}>
		<div class="flex items-center gap-2">
			<div
				class="size-4 rounded-full border"
				style="background-color: {availableThemes.find(
					(t) => t.value === userConfig?.current.activeTheme
				)?.primary}"
			></div>
			{availableThemes.find((t) => t.value === userConfig?.current.activeTheme)?.label ||
				"Select theme"}
		</div>
	</Select.Trigger>
	<Select.Content class="z-40">
		{#each availableThemes as theme (theme.value)}
			<Select.Item value={theme.value}>
				<div class="flex items-center gap-2">
					<div class="size-4 rounded-full border" style="background-color: {theme.primary}"></div>
					{theme.label}
				</div>
			</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
