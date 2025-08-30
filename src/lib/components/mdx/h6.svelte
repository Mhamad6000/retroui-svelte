<!--
Custom H6 component for MDX content
-->
<script lang="ts">
	import Text from "$registry/ui/text/text.svelte";

	interface Props {
		children?: any;
		class?: string;
	}

	let { children, class: className, ...rest }: Props = $props();
</script>

<Text as="h6" class={className} {...rest}>
	{@render children?.()}
</Text>
