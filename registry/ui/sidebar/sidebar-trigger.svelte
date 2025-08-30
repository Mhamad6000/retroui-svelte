<script lang="ts">
	import { Button, type ButtonVariant } from "$registry/ui/button/index.js";
	import Menu from "@lucide/svelte/icons/menu";

	import type { ComponentProps } from "svelte";
	import { useSidebar } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		class: className,
		onclick,
		variant = "ghost",
		...restProps
	}: ComponentProps<typeof Button> & {
		onclick?: (e: MouseEvent) => void;
		variant?: ButtonVariant;
	} = $props();

	const sidebar = useSidebar();
</script>

<Button
	data-sidebar="trigger"
	data-slot="sidebar-trigger"
	{variant}
	size="icon"
	class={className}
	type="button"
	onclick={(e) => {
		onclick?.(e);
		sidebar.toggle();
	}}
	{...restProps}
>
	<Menu />
	<span class="sr-only">Toggle Sidebar</span>
</Button>
