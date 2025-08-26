<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: AccordionPrimitive.ItemProps = $props();
</script>

<AccordionPrimitive.Item
	bind:ref
	data-slot="accordion-item"
	class={cn(
		"bg-background text-foreground overflow-hidden border-2 shadow-md transition-all hover:shadow-sm data-[state=open]:shadow-sm",
		className
	)}
	{...restProps}
/>
