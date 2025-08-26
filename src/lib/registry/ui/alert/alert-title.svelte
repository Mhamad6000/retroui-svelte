<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils.js";
	import { Text } from "$lib/registry/ui/text";
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<Text
	as={"h5"}
	data-slot="alert-title"
	{ref}
	class={cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)}
	{...restProps}
>
	{@render children?.()}
</Text>
