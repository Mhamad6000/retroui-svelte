<script lang="ts" module>
	import { Separator as SeparatorPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	import { type VariantProps, tv } from "tailwind-variants";

	export const separatorVariants = tv({
		base: "shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
		variants: {
			variant: {
				default: "bg-border",
				primary: "bg-primary",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type SeparatorVariant = VariantProps<typeof separatorVariants>["variant"];
	export type SeparatorProps = SeparatorPrimitive.RootProps & {
		variant?: SeparatorVariant;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		...restProps
	}: SeparatorProps = $props();
</script>

<SeparatorPrimitive.Root
	bind:ref
	data-slot="separator"
	class={cn(separatorVariants({ variant }), className)}
	{...restProps}
/>
