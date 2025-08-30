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

	const liClass = type === "blog" ? "text-lg text-foreground ml-4 lg:ml-8 mb-2" : "mb-2";
</script>

<Text as="li" class={cn(liClass, className)} {...rest}>
	{@render children?.()}
</Text>
