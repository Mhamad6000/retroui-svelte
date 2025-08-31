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
		links = [],
	}: {
		component: Component;
		title: string;
		description?: string;
		toc: TocItem[];
		links?: { title: string; href: string }[];
	} = $props();
	console.log(links);
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
		<PageHeader {title} {description} {links} />
		<PageComponent />
	</main>
</div>
