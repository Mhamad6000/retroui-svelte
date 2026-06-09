<script lang="ts">
	import * as Dialog from "$registry/ui/dialog/index.js";
	import { Button } from "$registry/ui/button/index.js";
	import type { ComponentProps } from "svelte";
	import {
		availableRadiusStyles,
		availableThemes,
		UserConfigContext,
	} from "$lib/user-config.svelte.js";
	import ThemeCustomizerCode from "./theme-customizer-code.svelte";

	let { class: className, variant, size }: ComponentProps<typeof Button> = $props();

	const userConfig = UserConfigContext.get();

	const activeThemeLabel = $derived(
		availableThemes.find((t) => t.value === userConfig?.current.activeTheme)?.label || "Neon Yellow"
	);

	const activeRadiusStyleLabel = $derived(
		availableRadiusStyles.find((style) => style.value === userConfig?.current.activeRadiusStyle)
			?.label || "Rounded"
	);
</script>

<Dialog.Root>
	<Dialog.Trigger class={className}>
		{#snippet child({ props })}
			<Button {variant} {size} {...props}>Copy Code</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content class="outline-none theme-container p-2 md:p-3 md:max-w-3xl">
		<Dialog.Header>
			<Dialog.Title class="capitalize">
				{activeThemeLabel} Theme ({activeRadiusStyleLabel})
			</Dialog.Title>
			<Dialog.Description
				>Copy and paste the following code into your CSS file or use the install command below.</Dialog.Description
			>
		</Dialog.Header>
		<ThemeCustomizerCode />
	</Dialog.Content>
</Dialog.Root>
