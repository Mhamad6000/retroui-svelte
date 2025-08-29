<script lang="ts" module>
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";
	export const buttonVariants = tv({
		base: "font-head transition-all text-center shrink-0 inline-flex outline-hidden cursor-pointer duration-200 font-medium items-center justify-center data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		variants: {
			variant: {
				default:
					"hover:shadow-none bg-primary text-black border-2 border-black transition hover:translate-y-1 hover:bg-primary-hover",
				secondary:
					"hover:shadow-none bg-secondary shadow-primary text-secondary-foreground border-2 border-black transition hover:translate-y-1",
				outline: "hover:shadow-none bg-transparent border-2 transition hover:translate-y-1",
				link: "bg-transparent hover:underline",
				ghost:
					"bg-transparent border-transparent hover:border-border transition border-2 hover:text-foreground",
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
				icon: "size-9",
			},
			shadow: {
				true: "shadow-md hover:shadow-none",
				false: "shadow-none",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	});
	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
	export type ButtonShadow = VariantProps<typeof buttonVariants>["shadow"];
	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
			shadow?: ButtonShadow;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = "default",
		size = "md",
		shadow = true,
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
		class={cn(buttonVariants({ variant, size, shadow }), className)}
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
		class={cn(buttonVariants({ variant, size, shadow }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
