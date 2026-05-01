<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$registry/lib/utils.js";
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="card"
	class={cn(
		"text-card-foreground rounded-md bg-card px-4 py-6 flex flex-col gap-4 border-2 shadow-md transition-all hover:shadow-xs",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
