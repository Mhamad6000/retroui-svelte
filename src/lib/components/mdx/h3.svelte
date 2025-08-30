<!--
Custom H3 component for MDX content
-->
<script lang="ts">
	import Text from "$registry/ui/text/text.svelte";
	import { cn } from "$registry/lib/utils.js";

	interface Props {
		children?: any;
		class?: string;
	}

	let { children, class: className, ...rest }: Props = $props();
</script>

<Text as="h3" class={cn("mb-4", className)} {...rest}>
	{@render children?.()}
</Text>
