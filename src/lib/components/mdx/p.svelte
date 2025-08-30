<!--
Custom P component for MDX content
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

	const pClass = type === "blog" ? "text-lg text-foreground" : "";
</script>

<Text as="p" class={cn(pClass, className)} {...rest}>
	{@render children?.()}
</Text>
