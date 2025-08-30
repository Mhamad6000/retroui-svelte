<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";
	import { cn, type WithElementRef } from "$registry/lib/utils.js";
	let {
		ref = $bindable(null),
		class: className,
		href = undefined,
		child,
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		child?: Snippet<[{ props: HTMLAnchorAttributes }]>;
	} = $props();
	const attrs = $derived({
		"data-slot": "breadcrumb-link",
		class: cn(
			"font-medium transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
			className
		),
		href,
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: attrs })}
{:else}
	<a bind:this={ref} {...attrs}>
		{@render children?.()}
	</a>
{/if}
