<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$registry/lib/utils.js";
	import { Text } from "$registry/ui/text";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<Text as={"h3"} data-slot="card-title" {ref} class={cn("mb-2", className)} {...restProps}>
	{@render children?.()}
</Text>
