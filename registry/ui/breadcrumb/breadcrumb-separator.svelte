<script lang="ts">
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import { cn, type WithElementRef } from "$registry/lib/utils.js";
	import type { HTMLLiAttributes } from "svelte/elements";
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLLiAttributes> = $props();
</script>

<li
	bind:this={ref}
	data-slot="breadcrumb-separator"
	role="presentation"
	aria-hidden="true"
	class={cn("text-muted-foreground [&>svg]:h-4 [&>svg]:w-4", className)}
	{...restProps}
>
	{#if children}
		{@render children?.()}
	{:else}
		<ChevronRightIcon />
	{/if}
</li>
