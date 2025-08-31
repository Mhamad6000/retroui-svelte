<!--
Custom Li component for MDX content
-->
<script lang="ts">
	import Text from "$registry/ui/text/text.svelte";
	import { cn } from "$registry/lib/utils.js";

	interface Props {
		children?: any;
		class?: string;
		type?: "doc" | "blog";
	}

	let { children, class: className, type = "doc", ...rest }: Props = $props();
</script>

<Text as="li" class={cn("mb-2", className)} {...rest}>
	{@render children?.()}
</Text>
