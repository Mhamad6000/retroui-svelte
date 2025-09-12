<script lang="ts" module>
	import { cn, type WithElementRef, type WithoutChildren } from "$registry/lib/utils.js";
	import { type VariantProps, tv } from "tailwind-variants";
	import type { HTMLAttributes } from "svelte/elements";

	export const loaderVariants = tv({
		base: "flex gap-1",
		variants: {
			variant: {
				default: "[&>div]:bg-primary [&>div]:border-border",
				secondary: "[&>div]:bg-black [&>div]:border-border",
				outline: "[&>div]:bg-transparent [&>div]:border-border",
			},
			size: {
				sm: "[&>div]:w-2 [&>div]:h-2",
				md: "[&>div]:w-3 [&>div]:h-3",
				lg: "[&>div]:w-4 [&>div]:h-4",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	});

	export type LoaderVariant = VariantProps<typeof loaderVariants>["variant"];
	export type LoaderSize = VariantProps<typeof loaderVariants>["size"];
	export type LoaderProps = WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> & {
		variant?: LoaderVariant;
		size?: LoaderSize;
		count?: number; // number of bouncing dots
		duration?: number; // animation duration in seconds
		delayStep?: number; // delay in ms
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		size = "md",
		count = 3,
		duration = 0.5,
		delayStep = 100,
		...restProps
	}: LoaderProps = $props();
</script>

<div
	bind:this={ref}
	data-slot="loader"
	class={cn(loaderVariants({ variant, size }), className)}
	role="status"
	aria-label="Loading..."
	{...restProps}
>
	{#each Array.from({ length: count }) as _, i}
		<div
			class="animate-bounce border-2"
			style="animation-duration: {duration}s; animation-iteration-count: infinite; animation-delay: {i *
				delayStep}ms;"
		></div>
	{/each}
</div>
