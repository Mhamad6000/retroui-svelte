<script lang="ts">
	import { Portfolio } from "$registry/blocks/portfolio";
	import { RetroCharacters } from "$registry/blocks/retro-characters";
	import CopyCodeButton from "$lib/components/copy-code-button.svelte";
	import * as Tabs from "$registry/ui/tabs/index.js";
	import { Badge } from "$registry/ui/badge/index.js";
	import { Button } from "$registry/ui/button/index.js";
	import { Copy, Check } from "@lucide/svelte";

	import PortfolioSource from "$registry/blocks/portfolio/portfolio.svelte?raw";
	import RetroCharactersSource from "$registry/blocks/retro-characters/retro-characters.svelte?raw";

	const blocks = [
		{
			name: "portfolio",
			title: "Portfolio",
			description:
				"A dark retro portfolio landing page with skills, testimonials, process, experience, and contact sections.",
			component: Portfolio,
			source: PortfolioSource,
			install: "npx shadcn-svelte@latest add https://retroui-svelte.netlify.app/r/portfolio.json",
		},
		{
			name: "retro-characters",
			title: "Retro Characters",
			description:
				"A cream and pink retro cartoon character shop landing page with products, customization form, and footer.",
			component: RetroCharacters,
			source: RetroCharactersSource,
			install:
				"npx shadcn-svelte@latest add https://retroui-svelte.netlify.app/r/retro-characters.json",
		},
	] as const;

	let copied = $state<string | null>(null);

	function copy(text: string, name: string) {
		navigator.clipboard.writeText(text);
		copied = name;
		setTimeout(() => (copied = null), 1500);
	}
</script>

<div class="min-h-screen bg-background pb-16">
	<div class="border-b-2 border-foreground/10">
		<div class="mx-auto max-w-6xl px-4 py-10">
			<Badge class="mb-3 border-2 border-foreground/20 bg-primary text-primary-foreground"
				>Templates</Badge
			>
			<h1 class="font-head text-3xl uppercase md:text-5xl">Ready-made templates</h1>
			<p class="mt-2 max-w-xl text-muted-foreground">
				Drop-in landing page templates built with RetroUI components. Copy the install command or grab
				the source.
			</p>
		</div>
	</div>

	<div class="mx-auto max-w-6xl space-y-20 px-4 pt-12">
		{#each blocks as block (block.name)}
			{@const Component = block.component}
			<div class="space-y-4">
				<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
					<div>
						<h2 class="font-head text-2xl uppercase">{block.title}</h2>
						<p class="max-w-xl text-sm text-muted-foreground">{block.description}</p>
					</div>
					<div class="flex w-full items-center gap-2 md:w-[420px]">
						<code
							class="flex-1 truncate rounded-md border border-foreground/20 bg-card px-3 py-2 font-mono text-xs"
							>{block.install}</code
						>
						<Button
							variant="outline"
							size="icon"
							class="shrink-0"
							onclick={() => copy(block.install, block.name)}
						>
							{#if copied === block.name}
								<Check class="size-4 text-green-500" />
							{:else}
								<Copy class="size-4" />
							{/if}
						</Button>
					</div>
				</div>

				<Tabs.Root value="preview" class="w-full">
					<Tabs.List class="w-full justify-start rounded-none border-b border-foreground/10 pb-0">
						<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
						<Tabs.Trigger value="code">Code</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value="preview" class="border-0 p-0 pt-4">
						<div
							class="h-[calc(100vh-30rem)] overflow-auto rounded-lg border-2 border-foreground/10"
						>
							<Component />
						</div>
					</Tabs.Content>
					<Tabs.Content value="code" class="border-0 p-0 pt-4">
						<div class="relative rounded-lg border-2 border-foreground/10 bg-[#24292e]">
							<CopyCodeButton code={block.source} />
							<pre class="max-h-[600px] overflow-auto p-4 text-sm"><code class="text-[#e1e4e8]"
									>{block.source}</code
								></pre>
						</div>
					</Tabs.Content>
				</Tabs.Root>
			</div>
		{/each}
	</div>
</div>
