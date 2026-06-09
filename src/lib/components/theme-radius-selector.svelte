<script lang="ts">
	import * as Select from "$registry/ui/select/index.js";
	import {
		availableRadiusStyles,
		type RadiusStyle,
		UserConfigContext,
	} from "$lib/user-config.svelte.js";
	import { cn } from "$registry/lib/utils.js";

	let { class: className = "", ...restProps } = $props();

	const userConfig = UserConfigContext.get();

	const activeRadiusStyle = $derived(
		availableRadiusStyles.find(
			(style) => style.value === userConfig?.current.activeRadiusStyle
		) || availableRadiusStyles[0]
	);

	function handleRadiusStyleChange(value: string | undefined) {
		if (!value || !userConfig) return;

		const radiusStyle = availableRadiusStyles.find((style) => style.value === value);
		if (radiusStyle) {
			userConfig.setRadiusStyle(radiusStyle.value as RadiusStyle);
		}
	}
</script>

<Select.Root
	type="single"
	value={userConfig?.current.activeRadiusStyle}
	onValueChange={handleRadiusStyleChange}
	{...restProps}
>
	<Select.Trigger class={cn("w-[150px]", className)}>
		<div class="flex items-center gap-2">
			<div
				class="size-4 border bg-primary"
				style="border-radius: {activeRadiusStyle.radius}"
			></div>
			{activeRadiusStyle.label}
		</div>
	</Select.Trigger>
	<Select.Content class="z-40">
		{#each availableRadiusStyles as radiusStyle (radiusStyle.value)}
			<Select.Item value={radiusStyle.value}>
				<div class="flex items-center gap-2">
					<div
						class="size-4 border bg-primary"
						style="border-radius: {radiusStyle.radius}"
					></div>
					{radiusStyle.label}
				</div>
			</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
