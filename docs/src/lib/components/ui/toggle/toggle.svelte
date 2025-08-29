<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	export const toggleVariants = tv({
		base: "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",

		variants: {
			variant: {
				default:
					"bg-transparent hover:bg-muted/70 hover:text-muted-foreground data-[state=on]:bg-muted",
				outlined:
					"border-2 border-input bg-transparent hover:bg-accent hover:text-accent-foreground/80 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
				solid:
					"border-2 border-input bg-transparent hover:bg-secondary hover:text-secondary-foreground hover:border-secondary data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground data-[state=on]:border-secondary",
				"outline-muted":
					"border-2 border-input bg-transparent hover:hover:bg-muted/70 hover:hover:text-muted-foreground data-[state=on]:bg-muted",
			},
			size: {
				default: "h-10 px-3 min-w-10",
				sm: "h-9 px-2.5 min-w-9",
				lg: "h-11 px-5 min-w-11",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});
	export type ToggleVariant = VariantProps<typeof toggleVariants>["variant"];
	export type ToggleSize = VariantProps<typeof toggleVariants>["size"];
	export type ToggleVariants = VariantProps<typeof toggleVariants>;
</script>

<script lang="ts">
	import { Toggle as TogglePrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	let {
		ref = $bindable(null),
		pressed = $bindable(false),
		class: className,
		size = "default",
		variant = "default",
		...restProps
	}: TogglePrimitive.RootProps & {
		variant?: ToggleVariant;
		size?: ToggleSize;
	} = $props();
</script>

<TogglePrimitive.Root
	bind:ref
	bind:pressed
	data-slot="toggle"
	class={cn(toggleVariants({ variant, size }), className)}
	{...restProps}
/>
