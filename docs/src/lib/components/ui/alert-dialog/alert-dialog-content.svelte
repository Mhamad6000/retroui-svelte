<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import AlertDialogOverlay from "./alert-dialog-overlay.svelte";
	import { cn, type WithoutChild, type WithoutChildrenOrChild } from "$lib/utils.js";
	let {
		ref = $bindable(null),
		class: className,
		portalProps,
		...restProps
	}: WithoutChild<AlertDialogPrimitive.ContentProps> & {
		portalProps?: WithoutChildrenOrChild<AlertDialogPrimitive.PortalProps>;
	} = $props();
</script>

<AlertDialogPrimitive.Portal {...portalProps}>
	<AlertDialogOverlay />
	<AlertDialogPrimitive.Content
		bind:ref
		data-slot="alert-dialog-content"
		class={cn(
			"bg-background text-foreground data-[state=open]:animate-in data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-[48%] data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:zoom-out-95 fixed top-1/2 left-1/2 z-50 flex h-fit max-h-[80vh] w-full max-w-[97%] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-y-auto rounded border-2 border-black p-6 shadow-md duration-300",
			className
		)}
		{...restProps}
	/>
</AlertDialogPrimitive.Portal>
