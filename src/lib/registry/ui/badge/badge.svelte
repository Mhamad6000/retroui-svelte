<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	export const badgeVariants = tv({
		base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3",
		variants: {
			variant: {
				default: "bg-gray-200 text-gray-700",
				outline: "outline-2 outline-foreground text-foreground",
				solid: "bg-foreground text-background",
				surface: "outline-2 bg-primary text-black",
			},
			size: {
				sm: "px-2 py-1 text-xs",
				md: "px-2.5 py-1.5 text-sm",
				lg: "px-3 py-2 text-base",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	});
	export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
	export type BadgeSize = VariantProps<typeof badgeVariants>["size"];
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils.js";
	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = "default",
		size = "md",
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		variant?: BadgeVariant;
		size?: BadgeSize;
	} = $props();
</script>

<svelte:element
	this={href ? "a" : "span"}
	bind:this={ref}
	data-slot="badge"
	{href}
	class={cn(badgeVariants({ variant, size }), className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
