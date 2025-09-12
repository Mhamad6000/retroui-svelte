<script lang="ts" module>
	import { cn, type WithElementRef } from "$registry/lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";
	export const buttonVariants = tv({
		base: "font-head transition-all shadow-md hover:shadow-none text-center shrink-0 inline-flex outline-hidden cursor-pointer duration-200 font-medium items-center justify-center data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		variants: {
			variant: {
				default:
					"hover:shadow-none bg-primary text-primary-foreground border-2 border-border transition hover:translate-y-1 hover:bg-primary-hover",
				secondary:
					"hover:shadow-none bg-secondary shadow-primary text-secondary-foreground border-2 border-border transition hover:translate-y-1",
				destructive:
					"hover:shadow-none bg-destructive text-destructive-foreground border-2 border-border transition hover:translate-y-1 hover:bg-destructive-hover",
				outline: "hover:shadow-none bg-transparent border-2 transition hover:translate-y-1",
				link: "bg-transparent hover:underline !shadow-none !border-none",
				ghost:
					"bg-transparent border-transparent !shadow-none hover:border-border transition border-2 hover:text-foreground",
			},
			// size: {
			// 	sm: "px-3 py-1 text-sm",
			// 	md: "px-4 py-1.5 text-base",
			// 	lg: "px-8 py-3 text-lg",
			// 	icon: "p-2",
			// },
			size: {
				md: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 px-6 has-[>svg]:px-4",
				icon: "size-8",
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
