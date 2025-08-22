<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	export const badgeVariants = tv({
		base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent",
				secondary:
					"bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 border-transparent",
				destructive:
					"bg-destructive text-white shadow-xs [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",

				// --- Semantic (filled) variants ---
				success:
					"bg-success text-white shadow-xs [a&]:hover:bg-success/90 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 dark:bg-success/60",
				warning:
					"bg-warning text-white shadow-xs [a&]:hover:bg-warning/90 focus-visible:ring-warning/20 dark:focus-visible:ring-warning/40 dark:bg-warning/60",
				info: "bg-info text-white shadow-xs [a&]:hover:bg-info/90 focus-visible:ring-info/20 dark:focus-visible:ring-info/40 dark:bg-info/60",

				// --- Outline variants ---
				"outline-destructive":
					"bg-background border border-destructive text-destructive shadow-xs [a&]:hover:bg-destructive/10 [a&]:hover:text-destructive dark:[a&]:hover:bg-destructive/30",
				"outline-success":
					"bg-background border border-success text-success shadow-xs [a&]:hover:bg-success/10 [a&]:hover:text-success dark:[a&]:hover:bg-success/30",
				"outline-warning":
					"bg-background border border-warning text-warning shadow-xs [a&]:hover:bg-warning/10 [a&]:hover:text-warning dark:[a&]:hover:bg-warning/30",
				"outline-info":
					"bg-background border border-info text-info shadow-xs [a&]:hover:bg-info/10 [a&]:hover:text-info dark:[a&]:hover:bg-info/30",

				// --- Light variants ---
				"light-default":
					"text-foreground bg-primary/10 border border-primary/30 dark:bg-primary/30 dark:border-primary/50 [a&]:hover:bg-primary/20",
				"light-success":
					"text-success bg-success/10 border border-success/30 dark:bg-success/30 dark:border-success/50 [a&]:hover:bg-success/20",
				"light-warning":
					"text-warning bg-warning/10 border border-warning/30 dark:bg-warning/30 dark:border-warning/50 [a&]:hover:bg-warning/20",
				"light-info":
					"text-info bg-info/10 border border-info/30 dark:bg-info/30 dark:border-info/50 [a&]:hover:bg-info/20",
				"light-destructive":
					"text-destructive bg-destructive/10 border border-destructive/30 dark:bg-destructive/30 dark:border-destructive/50 [a&]:hover:bg-destructive/20",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});
	export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils.js";
	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		variant?: BadgeVariant;
	} = $props();
</script>

<svelte:element
	this={href ? "a" : "span"}
	bind:this={ref}
	data-slot="badge"
	{href}
	class={cn(badgeVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
