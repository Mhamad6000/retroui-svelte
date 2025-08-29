<script lang="ts">
	import { page } from "$app/stores";
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { Search, Github, Menu, Sun, Moon } from "lucide-svelte";
	import * as Sheet from "$lib/components/ui/sheet";
	import * as Button from "$lib/components/ui/button";
	import * as Input from "$lib/components/ui/input";
	import Sidebar from "./Sidebar.svelte";
	import SearchDialog from "./SearchDialog.svelte";

	let searchOpen = $state(false);
	let mobileMenuOpen = $state(false);

	function handleSearch(event: KeyboardEvent) {
		if ((event.metaKey || event.ctrlKey) && event.key === "k") {
			event.preventDefault();
			searchOpen = true;
		}
	}
</script>

<svelte:window on:keydown={handleSearch} />

<nav
	class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
>
	<div class="container mx-auto px-4">
		<div class="flex h-14 items-center justify-between">
			<div class="flex items-center space-x-4">
				<Sheet.Root bind:open={mobileMenuOpen}>
					<Sheet.Trigger asChild let:builder>
						<Button.Root builders={[builder]} variant="ghost" size="icon" class="lg:hidden">
							<Menu class="h-5 w-5" />
							<span class="sr-only">Toggle menu</span>
						</Button.Root>
					</Sheet.Trigger>
					<Sheet.Content side="left" class="w-80">
						<Sheet.Header>
							<Sheet.Title>Navigation</Sheet.Title>
						</Sheet.Header>
						<div class="mt-6">
							<Sidebar />
						</div>
					</Sheet.Content>
				</Sheet.Root>

				<a href="/" class="flex items-center space-x-2">
					<div class="text-lg font-bold">Zeno UI</div>
				</a>
			</div>

			<div class="flex items-center space-x-4">
				<div class="relative hidden md:block">
					<Button.Root
						variant="outline"
						class="text-muted-foreground relative w-64 justify-start text-sm"
						onclick={() => (searchOpen = true)}
					>
						<Search class="mr-2 h-4 w-4" />
						Search documentation...
						<kbd
							class="bg-muted pointer-events-none absolute top-1.5 right-1.5 hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex"
						>
							<span class="text-xs">⌘</span>K
						</kbd>
					</Button.Root>
				</div>

				<Button.Root
					variant="ghost"
					size="icon"
					class="md:hidden"
					onclick={() => (searchOpen = true)}
				>
					<Search class="h-5 w-5" />
					<span class="sr-only">Search</span>
				</Button.Root>

				<a href="https://github.com/Mhamad6000/zeno-ui" target="_blank" rel="noopener noreferrer">
					<Button.Root variant="ghost" size="icon">
						<Github class="h-5 w-5" />
						<span class="sr-only">GitHub</span>
					</Button.Root>
				</a>

				<Button.Root variant="ghost" size="icon" onclick={toggleMode}>
					<Sun class="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
					<Moon
						class="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button.Root>
			</div>
		</div>
	</div>
</nav>

<SearchDialog bind:open={searchOpen} />
