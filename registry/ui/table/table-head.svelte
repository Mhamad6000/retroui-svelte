<script lang="ts">
	import { cn, type WithElementRef } from "$registry/lib/utils.js";
	import type { HTMLThAttributes } from "svelte/elements";
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLThAttributes> = $props();
</script>

<th
	bind:this={ref}
	data-slot="table-head"
	class={cn(
		"text-primary-foreground h-10 bg-clip-padding px-4 text-left align-middle font-medium whitespace-nowrap md:h-12 [&:has([role=checkbox])]:pr-0",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</th>
