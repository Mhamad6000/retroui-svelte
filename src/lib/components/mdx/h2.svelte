<!--
Custom H2 component for MDX content
-->
<script lang="ts">
	import Text from "$registry/ui/text/text.svelte";
	import { cn } from "$registry/lib/utils.js";

	interface Props {
		children?: any;
		class?: string;
		type?: "doc" | "blog";
	}

	let { children, class: className, ...rest }: Props = $props();
</script>

<Text as="h2" class={cn("border-b pb-1 mb-6", className)} {...rest}>
	{@render children?.()}
</Text>
