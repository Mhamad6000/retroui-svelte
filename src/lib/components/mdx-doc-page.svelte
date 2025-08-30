<!--
MDX DocPage Wrapper
A component that combines MDX content with the DocPage layout
Use this to render MDX files with proper documentation layout

Usage:
<MdxDocPage title="API Reference" description="Complete API documentation" {toc}>
  <YourMdxComponent />
</MdxDocPage>
-->
<script lang="ts">
	import DocPage from "./doc-page.svelte";
	import type { TOCEntry } from "$lib/types.js";

	let {
		title,
		description,
		toc = [],
		children,
		...rest
	}: {
		title: string;
		description?: string;
		toc?: TOCEntry[];
		children?: any;
		[key: string]: any;
	} = $props();
</script>

<!-- Use DocPage layout with MDX content -->
<DocPage {title} {description} {toc} {...rest}>
	<div class="prose prose-lg max-w-none dark:prose-invert">
		{@render children?.()}
	</div>
</DocPage>
