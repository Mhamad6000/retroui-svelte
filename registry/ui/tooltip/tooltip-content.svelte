<script lang="ts" module>
	import { cn } from "$registry/lib/utils.js";
	import type { VariantProps } from "tailwind-variants";
	import { tv } from "tailwind-variants";

	export const tooltipContentVariants = tv({
		base: "z-50 rounded-md overflow-hidden border-2 border-border px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--bits-tooltip-content-transform-origin) w-fit text-balance",
		variants: {
			variant: {
				default: "bg-background text-foreground",
				primary: "bg-primary text-primary-foreground shadow-primary",
				solid: "bg-black text-white shadow-black",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type TooltipVariant = VariantProps<typeof tooltipContentVariants>["variant"];
</script>

<script lang="ts">
	import { Tooltip as TooltipPrimitive } from "bits-ui";

	let {
		ref = $bindable(null),
		class: className,
		sideOffset = 4,
		side = "top",
		variant = "default",
		children,
		arrowClasses,
		...restProps
	}: TooltipPrimitive.ContentProps & {
		variant?: TooltipVariant;
		arrowClasses?: string;
	} = $props();
</script>

<TooltipPrimitive.Portal>
	<TooltipPrimitive.Content
		bind:ref
		data-slot="tooltip-content"
		{sideOffset}
		{side}
		class={cn(tooltipContentVariants({ variant }), className)}
		{...restProps}
	>
		{@render children?.()}
	</TooltipPrimitive.Content>
</TooltipPrimitive.Portal>
