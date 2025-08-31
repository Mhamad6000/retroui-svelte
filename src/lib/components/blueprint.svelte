<script lang="ts" module>
	export { default as h1 } from "$lib/components/mdx/h1.svelte";
	export { default as h2 } from "$lib/components/mdx/h2.svelte";
	export { default as h3 } from "$lib/components/mdx/h3.svelte";
	export { default as h4 } from "$lib/components/mdx/h4.svelte";
	export { default as h5 } from "$lib/components/mdx/h5.svelte";
	export { default as h6 } from "$lib/components/mdx/h6.svelte";
	export { default as p } from "$lib/components/mdx/p.svelte";
	export { default as code } from "$lib/components/mdx/code.svelte";
	export { default as pre } from "$lib/components/mdx/pre.svelte";
	export { default as img } from "$lib/components/mdx/img.svelte";
	export { default as li } from "$lib/components/mdx/li.svelte";
	export { default as a } from "$lib/components/mdx/link.svelte";
</script>

<script lang="ts">
	let {
		children,
		...rest
	}: {
		children?: any;
		[key: string]: any;
	} = $props();
</script>

<!-- Render MDX content with custom components -->
<div class="prose prose-lg max-w-none dark:prose-invert">
	{@render children?.()}
</div>
