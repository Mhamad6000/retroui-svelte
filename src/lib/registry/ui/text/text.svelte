<script lang="ts" module>
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";
	export const textVariants = tv({
		base: "font-head",
		variants: {
			as: {
				p: "font-sans text-base",
				li: "font-sans text-base",
				a: "font-sans text-base hover:underline underline-offset-2 decoration-primary",
				h1: "text-4xl lg:text-5xl font-bold",
				h2: "text-3xl lg:text-4xl font-semibold",
				h3: "text-2xl font-medium",
				h4: "text-xl font-normal",
				h5: "text-lg font-normal",
				h6: "text-base font-normal",
			},
		},
		defaultVariants: {
			as: "p",
		},
	});

	export type TextAs = VariantProps<typeof textVariants>["as"];

	export type TextProps = WithElementRef<HTMLAttributes<HTMLElement>> & {
		as?: TextAs;
		class?: string;
	};
</script>

<script lang="ts">
	let {
		class: className,
		as = "p",
		children,
		ref = $bindable(null),
		...restProps
	}: TextProps = $props();
</script>

<svelte:element this={as} class={cn(textVariants({ as }), className)} {...restProps}>
	{@render children?.()}
</svelte:element>
