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

	let { children, class: className, type = "doc", ...rest }: Props = $props();

	const h2Class = type === "blog" ? "mb-4 mt-8" : "border-b pb-1 mb-6";
</script>

<Text as="h2" class={cn(h2Class, className)} {...rest}>
	{@render children?.()}
</Text>
