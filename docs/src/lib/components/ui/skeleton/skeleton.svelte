<script lang="ts" module>
	import { cn, type WithElementRef, type WithoutChildren } from "$lib/utils.js";
	import { type VariantProps, tv } from "tailwind-variants";
	import type { HTMLAttributes } from "svelte/elements";

	export const skeletonVariants = tv({
		base: "animate-pulse rounded",
		variants: {
			variant: {
				default: "bg-accent",
				primary: "bg-primary/30",
				solid: "bg-foreground/20",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type SkeletonVariant = VariantProps<typeof skeletonVariants>["variant"];
	export type SkeletonProps = WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> & {
		variant?: SkeletonVariant;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		...restProps
	}: SkeletonProps = $props();
</script>

<div
	bind:this={ref}
	data-slot="skeleton"
	class={cn(skeletonVariants({ variant }), className)}
	{...restProps}
></div>
