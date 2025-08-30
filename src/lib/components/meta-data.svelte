<!--
Metadata Component
A reusable component for setting page metadata including SEO, OpenGraph, and Twitter Card tags.

Props:
- title?: string - Page title (defaults to site name)
- description?: string - Page description (defaults to site description)
- keywords?: string[] - Page keywords (defaults to site keywords)
- ogImage?: object - OpenGraph image object with url, width, height
- author?: string - Page author
- type?: string - OpenGraph type (default: "website")

Usage:
<Metadata title="Page Title" description="Page description" />
-->
<script lang="ts">
	import { page } from "$app/state";
	import { siteConfig } from "$lib/site-config";

	let {
		title = siteConfig.name,
		ogImage = siteConfig.ogImage,
		description = siteConfig.description,
		keywords = siteConfig.keywords,
		author = siteConfig.author,
		type = "website",
	}: {
		title?: string;
		ogImage?: typeof siteConfig.ogImage;
		description?: string;
		keywords?: string[];
		author?: string;
		type?: string;
	} = $props();

	const trueTitle = $derived(
		title === siteConfig.name ? siteConfig.name : `${title} - ${siteConfig.name}`
	);

	const currentUrl = $derived(siteConfig.url + page.url.pathname);
</script>

<svelte:head>
	<title>{trueTitle}</title>
	<meta name="description" content={description} />
	{#if keywords && keywords.length > 0}
		<meta name="keywords" content={keywords.join(",")} />
	{/if}
	<meta name="author" content={author} />

	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={siteConfig.url} />
	<meta name="twitter:title" content={trueTitle} />
	<meta name="twitter:description" content={description} />
	{#if ogImage?.url}
		<meta name="twitter:image" content={ogImage.url} />
		<meta name="twitter:image:alt" content={title} />
	{/if}
	<meta name="twitter:creator" content={author} />

	<!-- OpenGraph tags -->
	<meta property="og:title" content={trueTitle} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={currentUrl} />
	{#if ogImage?.url}
		<meta property="og:image" content={ogImage.url} />
		<meta property="og:image:alt" content={title} />
		{#if ogImage.width}
			<meta property="og:image:width" content={ogImage.width.toString()} />
		{/if}
		{#if ogImage.height}
			<meta property="og:image:height" content={ogImage.height.toString()} />
		{/if}
	{/if}
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:locale" content="en_US" />
</svelte:head>
