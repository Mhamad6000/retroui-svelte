<!--
Custom Img component for MDX content
-->
<script lang="ts">
	import { cn } from "$registry/lib/utils.js";

	interface Props {
		src?: string;
		alt?: string;
		class?: string;
		[key: string]: any;
	}

	let { src, alt, class: className, ...rest }: Props = $props();
</script>

<img {src} {alt} class={cn("mx-auto w-full max-w-[600px] my-8", className)} {...rest} />
