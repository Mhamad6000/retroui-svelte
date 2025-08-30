<!--
Page Header Component
A simple page header component for documentation pages.

Props:
- title: string - Page title
- description?: string - Page description

Usage:
<PageHeader title="Page Title" description="Page description" />
-->
<script lang="ts">
	let {
		title,
		description,
	}: {
		title: string;
		description?: string;
	} = $props();
</script>

<header class="mb-8 border-b pb-6">
	<h1 class="text-4xl font-bold tracking-tight text-foreground mb-2">
		{title}
	</h1>
	{#if description}
		<p class="text-lg text-muted-foreground leading-relaxed">
			{description}
		</p>
	{/if}
</header>
