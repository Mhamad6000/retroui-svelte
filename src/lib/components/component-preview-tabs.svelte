<script lang="ts">
	import type { Component, Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$registry/lib/utils.js";
	import * as Tabs from "$registry/ui/tabs/index.js";
	import { highlightCode } from "$lib/utils/highlight.js";
	import CopyCodeButton from "./copy-code-button.svelte";
	import ScrollArea from "$registry/ui/scroll-area/scroll-area.svelte";

	let {
		class: className,
		align = "center",
		hideCode = false,
		component,
		example,
		children,
		name,
		...restProps
	}: HTMLAttributes<HTMLElement> & {
		align?: "center" | "start" | "end";
		hideCode?: boolean;
		example?: Snippet;
		component?: Component;
		name: string;
		children?: Snippet;
	} = $props();

	let value: "code" | "preview" = $state("preview");

	// Function to dynamically import preview components
	async function loadPreviewComponent(componentName: string) {
		try {
			// Import the preview component from src/preview/components
			const module = await import(`../../preview/components/${componentName}.svelte`);
			return module.default;
		} catch (error) {
			console.warn(`Could not load preview component: ${componentName}`, error);
			return null;
		}
	}

	// Function to fetch the source code of the preview component
	async function loadPreviewComponentCode(componentName: string) {
		try {
			// Use dynamic import with ?raw suffix to get the source code
			const sourceModule = await import(`../../preview/components/${componentName}.svelte?raw`);
			return sourceModule.default;
		} catch (error) {
			console.warn(`Could not load preview component code: ${componentName}`, error);
			return null;
		}
	}
</script>

{#snippet ExampleFallback()}
	{#if component}
		{@const Component = component}
		<Component />
	{:else}
		{#await loadPreviewComponent(name)}
			<div class="flex items-center justify-center">
				<div class="text-muted-foreground text-sm">Loading preview...</div>
			</div>
		{:then PreviewComponent}
			{#if PreviewComponent}
				<PreviewComponent />
			{:else}
				<p class="text-muted-foreground text-sm">
					No preview component found for
					<code class="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
						{name}
					</code>
					. Create
					<code class="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
						src/preview/components/{name}.svelte
					</code>
					to show a preview.
				</p>
			{/if}
		{:catch error}
			<p class="text-destructive text-sm">
				Error loading preview component
				<code class="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
					{name}
				</code>
				: {error.message}
			</p>
		{/await}
	{/if}
{/snippet}

<div class={cn("group relative flex flex-col gap-2", className)} {...restProps}>
	<Tabs.Root bind:value class="relative mr-auto w-full">
		{#if !hideCode}
			<Tabs.List class="justify-start gap-4 rounded-none w-full pb-4 border-b px-2 md:px-0">
				<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
				<Tabs.Trigger value="code">Code</Tabs.Trigger>
			</Tabs.List>
		{/if}

		<div class="relative mt-2 h-[450px]">
			<Tabs.Content
				value="preview"
				class="border-0 p-0 absolute inset-0 hidden data-[state=active]:block"
			>
				<div class="relative rounded-lg border h-full">
					<div
						data-align={align}
						class="preview flex h-full w-full justify-center p-10 data-[align=start]:items-start data-[align=end]:items-end data-[align=center]:items-center"
					>
						{#if example}
							{@render example()}
						{:else}
							{@render ExampleFallback()}
						{/if}
					</div>
				</div>
			</Tabs.Content>

			<Tabs.Content
				value="code"
				class="border-0 p-0 absolute inset-0 hidden overflow-hidden data-[state=active]:block"
			>
				<div class="relative rounded-lg border h-full overflow-hidden">
					{#if children}
						{@render children()}
					{:else}
						{#await loadPreviewComponentCode(name)}
							<div class="flex h-full items-center justify-center">
								<div class="text-muted-foreground text-sm">Loading code...</div>
							</div>
						{:then sourceCode}
							{#if sourceCode}
								{#await highlightCode(sourceCode, "svelte")}
									<div class="flex h-full items-center justify-center">
										<div class="text-muted-foreground text-sm">Highlighting code...</div>
									</div>
								{:then highlightedHtml}
									<div class="relative h-full">
										<CopyCodeButton code={sourceCode} />
										<ScrollArea orientation="both" class="h-full pb-0" data-pre-wrapper="">
											{@html highlightedHtml}
										</ScrollArea>
									</div>
								{:catch}
									<div class="relative h-full">
										<CopyCodeButton code={sourceCode} />
										<pre class="rounded-lg h-full overflow-auto"><code>{sourceCode}</code></pre>
									</div>
								{/await}
							{:else}
								<div class="flex h-full items-center justify-center">
									<p class="text-muted-foreground text-sm">
										Could not load source code for
										<code
											class="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm"
										>
											{name}
										</code>
									</p>
								</div>
							{/if}
						{:catch error}
							<div class="flex h-full items-center justify-center">
								<p class="text-destructive text-sm">
									Error loading source code: {error.message}
								</p>
							</div>
						{/await}
					{/if}
				</div>
			</Tabs.Content>
		</div>
	</Tabs.Root>
</div>
