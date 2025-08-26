<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	export const alertVariants = tv({
		base: "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 border-2 p-4 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
		variants: {
			variant: {
				default: "bg-background text-foreground",
				solid: "bg-black text-white",
			},
			status: {
				error: "bg-red-300 text-red-800 border-red-800",
				success: "bg-green-300 text-green-800 border-green-800",
				warning: "bg-yellow-300 text-yellow-800 border-yellow-800",
				info: "bg-blue-300 text-blue-800 border-blue-800",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});
	export type AlertVariant = VariantProps<typeof alertVariants>["variant"];
	export type AlertStatus = VariantProps<typeof alertVariants>["status"];
</script>

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils.js";
	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		status,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: AlertVariant;
		status?: AlertStatus;
	} = $props();
</script>

<div
	bind:this={ref}
	data-slot="alert"
	class={cn(alertVariants({ variant, status }), className)}
	{...restProps}
	role="alert"
>
	{@render children?.()}
</div>
