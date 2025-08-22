<script lang="ts" module>
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";
	export const buttonVariants = tv({
		base: "focus-visible:border-ring cursor-pointer focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		variants: {
			variant: {
				// --- Base variants ---
				default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
				secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
				destructive:
					"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline:
					"bg-background border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
				ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				link: "text-primary underline-offset-4 hover:underline",

				// --- Semantic (filled) variants ---
				success:
					"bg-success text-white shadow-xs hover:bg-success/90 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 dark:bg-success/60",
				warning:
					"bg-warning text-white shadow-xs hover:bg-warning/90 focus-visible:ring-warning/20 dark:focus-visible:ring-warning/40 dark:bg-warning/60",
				info: "bg-info text-white shadow-xs hover:bg-info/90 focus-visible:ring-info/20 dark:focus-visible:ring-info/40 dark:bg-info/60",

				// --- Outline variants ---
				"outline-destructive":
					"bg-background border border-destructive text-destructive shadow-xs hover:bg-destructive/10 hover:text-destructive dark:bg-input/30 dark:hover:bg-destructive/20",
				"outline-success":
					"bg-background border border-success text-success shadow-xs hover:bg-success/10 hover:text-success dark:bg-input/30 dark:hover:bg-success/20",
				"outline-warning":
					"bg-background border border-warning text-warning shadow-xs hover:bg-warning/10 hover:text-warning dark:bg-input/30 dark:hover:bg-warning/20",
				"outline-info":
					"bg-background border border-info text-info shadow-xs hover:bg-info/10 hover:text-info dark:bg-input/30 dark:hover:bg-info/20",

				// --- Dashed variants ---
				dashed:
					"bg-background text-accent-foreground border border-input border-dashed hover:bg-accent hover:text-accent-foreground",
				"dashed-destructive":
					"bg-background text-destructive border border-destructive border-dashed hover:bg-destructive/10",
				"dashed-success":
					"bg-background text-success border border-success border-dashed hover:bg-success/10",
				"dashed-warning":
					"bg-background text-warning border border-warning border-dashed hover:bg-warning/10",
				"dashed-info": "bg-background text-info border border-info border-dashed hover:bg-info/10",

				// --- Ghost variants ---
				"ghost-destructive": "bg-transparent text-destructive/90 hover:bg-destructive/10",
				"ghost-success": "bg-transparent text-success/90 hover:bg-success/10",
				"ghost-warning": "bg-transparent text-warning/90 hover:bg-warning/10",
				"ghost-info": "bg-transparent text-info/90 hover:bg-info/10",

				// --- Link variants ---
				"link-destructive": "text-destructive underline-offset-4 hover:underline",
				"link-success": "text-success underline-offset-4 hover:underline",
				"link-warning": "text-warning underline-offset-4 hover:underline",
				"link-info": "text-info underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});
	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? "link" : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
