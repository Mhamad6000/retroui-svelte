<!--
Custom DocPage Component
A documentation page layout component with proper typography and table of contents.

Props:
- component: Svelte component - The main content component to render
- title: string - Page title
- description?: string - Page description
- toc: TOCEntry[] - Table of contents entries

Usage:
<DocPage component={MyComponent} title="API Reference" description="Complete API documentation" toc={tocEntries} />
-->
<script lang="ts">
	import PageHeader from "$lib/components/layout/page-header/page-header.svelte";
	import Toc from "$lib/components/toc/toc.svelte";
	import type { Component } from "svelte";
	import type { TocItem } from "$lib/types.js";
	import MetaData from "./meta-data.svelte";

	let {
		component,
		title,
		description,
		toc = [],
	}: {
		component: Component;
		title: string;
		description?: string;
		toc: TocItem[];
	} = $props();

	const PageComponent = $derived(component);
</script>

<MetaData {title} {description} />

<aside class="sticky">
	<div class="sticky top-24 hidden pl-16 xl:block">
		<Toc toc={{ items: toc }} />
	</div>
</aside>
<div class="mx-auto">
	<aside>
		<Toc toc={{ items: toc }} type="mobile" />
	</aside>
	<main class="mx-auto w-full min-w-0 max-w-[640px] pb-12 2xl:max-w-[760px]" id="main-content">
		<PageHeader {title} {description} />
		<PageComponent />
	</main>
</div>
