<script lang="ts">
	import type { TableOfContents, TocState } from "./use-toc.svelte.js";
	import { cn } from "$registry/lib/utils.js";
	import { tick } from "svelte";
	import Tree from "./mobile-toc-tree.svelte";

	let {
		tree,
		level = 1,
		tocState,
		closePopover,
	}: {
		tree: TableOfContents;
		level?: number;
		tocState: TocState;
		closePopover: () => void;
	} = $props();
</script>

{#if tree?.items?.length && level < 3}
	<ul
		class={cn("m-0 list-none", {
			"pl-2.5": level !== 1,
		})}
	>
		{#each tree.items as item, index (index)}
			{@const active = tocState.isActive(item)}
			<li class={cn("mt-0")}>
				<a
					onclick={() => tick().then(() => closePopover())}
					href={item.url}
					class={cn(
						"hover:text-foreground ml-5 inline-block py-0.5 pb-2 no-underline  transition-colors",
						active ? "text-foreground" : "text-muted-foreground",
						tocState.isLastItem(item) && "pb-0"
					)}
				>
					{item.title}
				</a>
				{#if item.items?.length}
					<Tree tree={item} level={level + 1} {tocState} {closePopover} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}
