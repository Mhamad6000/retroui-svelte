<!--
Custom Link component for MDX content
-->
<script lang="ts">
	import { cn } from "$registry/lib/utils.js";

	interface Props {
		href?: string;
		target?: string;
		rel?: string;
		class?: string;
		children?: any;
		[key: string]: any;
	}

	let { href, target, rel, class: className, children, ...rest }: Props = $props();

	let isExternal = $derived(href?.startsWith("http"));
</script>

{#if !href}
	<a class={className} {...rest}>
		{@render children?.()}
	</a>
{:else if isExternal}
	<a
		{href}
		target={target || "_blank"}
		rel={rel || "noopener noreferrer"}
		class={cn("underline underline-offset-4 hover:decoration-primary", className)}
		{...rest}
	>
		{@render children?.()}
	</a>
{:else}
	<a
		{href}
		class={cn("underline underline-offset-4 hover:decoration-primary", className)}
		{...rest}
	>
		{@render children?.()}
	</a>
{/if}
