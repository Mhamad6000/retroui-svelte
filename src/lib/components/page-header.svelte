<script lang="ts">
	import { Badge } from "$registry/ui/badge";
	import ExternalLink from "@lucide/svelte/icons/external-link";

	let {
		title,
		description,
		links = [],
	}: {
		title: string;
		description?: string;
		links?: { title: string; href: string }[];
	} = $props();
</script>

<header class="mb-8 border-b pb-6">
	<h1 class="text-4xl font-head lg:text-5xl font-bold tracking-tight text-foreground mb-2">
		{title}
	</h1>
	{#if description}
		<p class="text-lg text-muted-foreground leading-relaxed">
			{description}
		</p>
	{/if}
	{#if links.length > 0}
		<div class="mt-4 flex flex-wrap gap-2">
			{#each links as link}
				<Badge
					href={link.href}
					variant="default"
					size="sm"
					target={link.href.startsWith("https") ? "_blank" : undefined}
					rel={link.href.startsWith("https") ? "noopener noreferrer" : undefined}
				>
					{link.title}
					<ExternalLink />
				</Badge>
			{/each}
		</div>
	{/if}
</header>
