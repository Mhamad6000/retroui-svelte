<!--
Custom Code component for MDX content
-->
<script lang="ts">
	import { cn } from "$registry/lib/utils.js";

	interface Props {
		class?: string;
		children?: any;
		[key: string]: any;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<code class={cn("relative rounded-sm bg-[#282A36] p-1 text-primary text-sm", className)} {...rest}>
	{@render children?.()}
</code>
