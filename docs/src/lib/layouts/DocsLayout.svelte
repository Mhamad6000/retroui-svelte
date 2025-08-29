<script lang="ts">
	import "../../app.css";
	import { ModeWatcher } from "mode-watcher";
	import { toggleMode } from "mode-watcher";
	import { Sun, Moon, Github } from "lucide-svelte";

	interface Props {
		title?: string;
		description?: string;
	}

	let {
		title = "Zeno UI",
		description = "Beautiful and accessible components built with SvelteKit",
	}: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<ModeWatcher />

<div class="bg-background min-h-screen">
	<nav class="bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur">
		<div class="container mx-auto px-4">
			<div class="flex h-14 items-center justify-between">
				<a href="/" class="flex items-center space-x-2">
					<div class="text-lg font-bold">Zeno UI</div>
				</a>
				<div class="flex items-center space-x-4">
					<button
						onclick={toggleMode}
						class="text-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 items-center justify-center rounded-md"
					>
						<Sun class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon class="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span class="sr-only">Toggle theme</span>
					</button>
					<a
						href="https://github.com/Mhamad6000/zeno-ui"
						class="text-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium"
					>
						<Github class="mr-2 h-4 w-4" />
						GitHub
					</a>
				</div>
			</div>
		</div>
	</nav>
	<div class="container mx-auto px-4 pt-8">
		<div class="flex">
			<div class="hidden w-64 flex-shrink-0 lg:block">
				<nav class="sticky top-20 space-y-6">
					<div>
						<h3 class="mb-2 text-sm font-medium">Getting Started</h3>
						<ul class="space-y-1">
							<li>
								<a href="/" class="hover:bg-muted block rounded-md px-2 py-1 text-sm"
									>Introduction</a
								>
							</li>
							<li>
								<a
									href="/docs/installation"
									class="hover:bg-muted block rounded-md px-2 py-1 text-sm">Installation</a
								>
							</li>
						</ul>
					</div>
					<div>
						<h3 class="mb-2 text-sm font-medium">Components</h3>
						<ul class="space-y-1">
							<li>
								<a
									href="/docs/components/accordion"
									class="hover:bg-muted block rounded-md px-2 py-1 text-sm">Accordion</a
								>
							</li>
							<li>
								<a
									href="/docs/components/button"
									class="hover:bg-muted block rounded-md px-2 py-1 text-sm">Button</a
								>
							</li>
							<li>
								<a
									href="/docs/components/card"
									class="hover:bg-muted block rounded-md px-2 py-1 text-sm">Card</a
								>
							</li>
						</ul>
					</div>
					<div>
						<h3 class="mb-2 text-sm font-medium">Blocks</h3>
						<ul class="space-y-1">
							<li>
								<a
									href="/docs/blocks/authentication"
									class="hover:bg-muted block rounded-md px-2 py-1 text-sm">Authentication</a
								>
							</li>
						</ul>
					</div>
					<div>
						<h3 class="mb-2 text-sm font-medium">Charts</h3>
						<ul class="space-y-1">
							<li>
								<a
									href="/docs/charts/area"
									class="hover:bg-muted block rounded-md px-2 py-1 text-sm">Area Chart</a
								>
							</li>
						</ul>
					</div>
					<div>
						<h3 class="mb-2 text-sm font-medium">Colors</h3>
						<ul class="space-y-1">
							<li>
								<a
									href="/docs/colors/default"
									class="hover:bg-muted block rounded-md px-2 py-1 text-sm">Default</a
								>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<main class="flex-1 lg:pl-8">
				<div class="prose prose-gray dark:prose-invert max-w-4xl">
					<slot />
				</div>
			</main>
		</div>
	</div>
</div>
