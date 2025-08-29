<script lang="ts" module>
	import { cn } from "$lib/utils.js";
	import type { VariantProps } from "tailwind-variants";
	import { tv } from "tailwind-variants";

	export const radioVariants = tv({
		base: "border-border border-2 shrink-0 transition-[color,box-shadow] outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
		variants: {
			variant: {
				default: "",
				outline: "",
				solid: "",
			},
			size: {
				sm: "h-4 w-4",
				md: "h-5 w-5",
				lg: "h-6 w-6",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	});

	export const radioIndicatorVariants = tv({
		base: "flex",
		variants: {
			variant: {
				default: "bg-primary border-2 border-border",
				outline: "border-2 border-border",
				solid: "bg-border",
			},
			size: {
				sm: "h-2 w-2",
				md: "h-2.5 w-2.5",
				lg: "h-3.5 w-3.5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	});

	export type RadioVariant = VariantProps<typeof radioVariants>["variant"];
	export type RadioSize = VariantProps<typeof radioVariants>["size"];
</script>

<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
	import { type WithoutChildrenOrChild } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		size = "md",
		...restProps
	}: WithoutChildrenOrChild<RadioGroupPrimitive.ItemProps> & {
		variant?: RadioVariant;
		size?: RadioSize;
	} = $props();
</script>

<RadioGroupPrimitive.Item
	bind:ref
	data-slot="radio-group-item"
	class={cn(radioVariants({ variant, size }), className)}
	{...restProps}
>
	{#snippet children({ checked })}
		<div data-slot="radio-group-indicator" class="flex items-center justify-center">
			{#if checked}
				<span class={radioIndicatorVariants({ variant, size })}></span>
			{/if}
		</div>
	{/snippet}
</RadioGroupPrimitive.Item>
