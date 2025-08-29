<script lang="ts" module>
	import { Checkbox as CheckboxPrimitive } from "bits-ui";
	import CheckIcon from "@lucide/svelte/icons/check";
	import MinusIcon from "@lucide/svelte/icons/minus";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";
	import { type VariantProps, tv } from "tailwind-variants";
	export const checkboxVariants = tv({
		base: "font-head cursor-pointer font-medium flex items-center",
		variants: {
			variant: {
				default: "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground ",
				outline: "",
				solid: "data-[state=checked]:bg-foreground data-[state=checked]:text-background",
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
	export type CheckboxVariant = VariantProps<typeof checkboxVariants>["variant"];
	export type CheckboxSize = VariantProps<typeof checkboxVariants>["size"];
	export type CheckboxProps = WithoutChildrenOrChild<CheckboxPrimitive.RootProps> & {
		variant?: CheckboxVariant;
		size?: CheckboxSize;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		size,
		variant,
		class: className,
		...restProps
	}: CheckboxProps = $props();
</script>

<!-- dark:bg-input/30 data-[state=checked]:border-primary -->
<CheckboxPrimitive.Root
	bind:ref
	data-slot="checkbox"
	class={cn(
		"border-input aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer flex size-4 shrink-0 items-center justify-center border-2 outline-none focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50",
		checkboxVariants({
			variant,
			size,
		}),
		className
	)}
	bind:checked
	bind:indeterminate
	{...restProps}
>
	{#snippet children({ checked, indeterminate })}
		<div data-slot="checkbox-indicator" class="text-current transition-none">
			{#if checked}
				<CheckIcon class="size-3.5" />
			{:else if indeterminate}
				<MinusIcon class="size-3.5" />
			{/if}
		</div>
	{/snippet}
</CheckboxPrimitive.Root>
