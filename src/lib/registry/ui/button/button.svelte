<script lang="ts" module>
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";
	export const buttonVariants = tv({
		base: "font-head transition-all outline-hidden cursor-pointer duration-200 font-medium flex items-center",
		variants: {
			variant: {
				default:
					"shadow-md hover:shadow-none bg-primary text-black border-2 border-black transition hover:translate-y-1 hover:bg-primary-hover",
				secondary:
					"shadow-md hover:shadow-none bg-secondary shadow-primary text-secondary-foreground border-2 border-black transition hover:translate-y-1",
				outline:
					"shadow-md hover:shadow-none bg-transparent border-2 transition hover:translate-y-1",
				link: "bg-transparent hover:underline",
			},
			size: {
				sm: "px-3 py-1 text-sm shadow hover:shadow-none",
				md: "px-4 py-1.5 text-base",
				lg: "px-8 py-3 text-lg",
				icon: "p-2",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
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
		size = "md",
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
