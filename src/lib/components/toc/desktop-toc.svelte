<script lang="ts">
	import List from "phosphor-svelte/lib/List";
	import TocTree from "./toc-tree.svelte";
	import type { TableOfContents, TocState } from "./use-toc.svelte.js";
	import { cn } from "$registry/lib/utils.js";

	let {
		tree,
		tocState,
		class: className,
	}: { tree: TableOfContents; tocState: TocState; class?: string } = $props();
</script>

<div class={cn("w-[220px] max-w-[220px] space-y-2 text-sm", className)}>
	<div class="text-muted-foreground -ml-px flex items-center gap-1.5">
		<List class="size-4 shrink-0" />
		<p class="text-muted-foreground text-sm">On this page</p>
	</div>
	<div class="relative mt-4">
		<div
			class="bg-foreground absolute -left-[0.5px] top-0 h-5 w-0.5 rounded-full"
			style="transition: top 0.25s; top:{tocState.markerTopStyle};"
		></div>
		<TocTree {tree} {tocState} />
	</div>
</div>
