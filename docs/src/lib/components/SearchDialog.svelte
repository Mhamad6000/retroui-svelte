<script lang="ts">
	import { Search } from "lucide-svelte";
	import * as Dialog from "$lib/components/ui/dialog";
	import * as Input from "$lib/components/ui/input";
	import { onMount } from "svelte";

	interface Props {
		open: boolean;
	}

	let { open = $bindable() }: Props = $props();
	let searchQuery = $state("");
	let pagefind: any = null;
	let searchResults: any[] = $state([]);
	let loading = $state(false);

	onMount(async () => {
		// @ts-ignore
		if (typeof window !== "undefined" && window.pagefind) {
			// @ts-ignore
			pagefind = window.pagefind;
		}
	});

	async function performSearch() {
		if (!pagefind || !searchQuery.trim()) {
			searchResults = [];
			return;
		}

		loading = true;
		try {
			const search = await pagefind.search(searchQuery);
			const results = await Promise.all(
				search.results.slice(0, 10).map(async (result: any) => {
					const data = await result.data();
					return {
						title: data.meta.title || data.url,
						excerpt: data.excerpt,
						url: data.url,
					};
				})
			);
			searchResults = results;
		} catch (error) {
			console.error("Search error:", error);
			searchResults = [];
		} finally {
			loading = false;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Enter" && searchResults.length > 0) {
			window.location.href = searchResults[0].url;
			open = false;
		}
	}

	$: if (searchQuery) {
		performSearch();
	} else {
		searchResults = [];
	}
</script>

<Dialog.Root bind:open>
	<Dialog.Content class="max-w-2xl">
		<Dialog.Header>
			<Dialog.Title>Search Documentation</Dialog.Title>
		</Dialog.Header>

		<div class="space-y-4">
			<div class="relative">
				<Search class="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
				<Input.Root
					bind:value={searchQuery}
					placeholder="Search documentation..."
					class="pl-10"
					onkeydown={handleKeydown}
				/>
			</div>

			{#if loading}
				<div class="flex items-center justify-center py-6">
					<div class="text-muted-foreground text-sm">Searching...</div>
				</div>
			{:else if searchResults.length > 0}
				<div class="max-h-96 overflow-y-auto">
					<div class="space-y-2">
						{#each searchResults as result}
							<a
								href={result.url}
								class="hover:bg-muted/50 block rounded-lg border p-3 transition-colors"
								onclick={() => (open = false)}
							>
								<div class="text-sm font-medium">{result.title}</div>
								<div class="text-muted-foreground line-clamp-2 text-xs">
									{result.excerpt}
								</div>
							</a>
						{/each}
					</div>
				</div>
			{:else if searchQuery}
				<div class="flex items-center justify-center py-6">
					<div class="text-muted-foreground text-sm">No results found.</div>
				</div>
			{/if}
		</div>
	</Dialog.Content>
</Dialog.Root>
