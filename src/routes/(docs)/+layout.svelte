<script lang="ts">
	import DocsLayout from "$lib/layouts/docs-layout.svelte";
	import { navigation } from "$lib/navigation";
	// import { DocsLayout } from "@svecodocs/kit";

	let { children } = $props();
</script>

<DocsLayout {navigation}>
	{@render children?.()}
</DocsLayout>
