<script lang="ts">
	import { Avatar as AvatarPrimitive } from "bits-ui";
	import { cn } from "$registry/lib/utils.js";
	let {
		ref = $bindable(null),
		loadingStatus = $bindable("loading"),
		class: className,
		...restProps
	}: AvatarPrimitive.RootProps = $props();
</script>

<AvatarPrimitive.Root
	bind:ref
	bind:loadingStatus
	data-slot="avatar"
	class={cn("relative flex h-12 w-12 overflow-hidden rounded-full border-2", className)}
	{...restProps}
/>
