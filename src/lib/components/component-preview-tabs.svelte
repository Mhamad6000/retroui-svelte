<script lang="ts">
	import type { Component, Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$registry/lib/utils.js";
	import * as Tabs from "$registry/ui/tabs/index.js";
	import { highlightCode } from "$lib/utils/highlight.js";
	import CopyCodeButton from "./copy-code-button.svelte";

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

<div class={cn("group relative mb-12 mt-4 flex flex-col gap-2", className)} {...restProps}>
	<Tabs.Root class="relative mr-auto w-full" bind:value>
		<div class="flex items-center justify-between">
			{#if !hideCode}
				<Tabs.List class="justify-start gap-4 rounded-none bg-transparent px-2 md:px-0">
					<Tabs.Trigger value="preview" class="">Preview</Tabs.Trigger>
					<Tabs.Trigger value="code" class="">Code</Tabs.Trigger>
				</Tabs.List>
			{/if}
		</div>
	</Tabs.Root>
	<div data-tab={value} class="data-[tab=code]:border-code relative rounded-lg border md:-mx-4">
		<div
			data-slot="preview"
			data-active={value === "preview"}
			class="invisible data-[active=true]:visible"
		>
			<div
				data-align={align}
				class="preview flex h-[450px] w-full justify-center p-10 data-[align=start]:items-start data-[align=end]:items-end data-[align=center]:items-center"
			>
				{#if example}
					{@render example()}
				{:else}
					{@render ExampleFallback()}
				{/if}
			</div>
		</div>
		<div
			data-slot="code"
			data-active={value === "code"}
			class="group **:[figure]:!m-0 **:[pre]:h-[450px] absolute inset-0 hidden overflow-hidden data-[active=true]:block"
		>
			{#if children}
				{@render children()}
			{:else}
				{#await loadPreviewComponentCode(name)}
					<div class="flex h-[450px] items-center justify-center">
						<div class="text-muted-foreground text-sm">Loading code...</div>
					</div>
				{:then sourceCode}
					{#if sourceCode}
						{#await highlightCode(sourceCode, "svelte")}
							<div class="flex h-[450px] items-center justify-center">
								<div class="text-muted-foreground text-sm">Highlighting code...</div>
							</div>
						{:then highlightedHtml}
							<div class="relative h-[450px] overflow-hidden group">
								<!-- Copy button -->
								<CopyCodeButton code={sourceCode} />
								<!-- Highlighted code -->
								<div class="h-full overflow-auto rounded-lg bg-gray-950 text-sm p-4">
									{@html highlightedHtml}
								</div>
							</div>
						{:catch}
							<div class="relative h-[450px] overflow-auto group">
								<CopyCodeButton code={sourceCode} />
								<pre
									class=" h-full overflow-auto rounded-lg bg-gray-950 p-4 text-sm text-gray-100"><code
										>{sourceCode}</code
									></pre>
							</div>
						{/await}
					{:else}
						<div class="flex h-[450px] items-center justify-center">
							<p class="text-muted-foreground text-sm">
								Could not load source code for
								<code class="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
									{name}
								</code>
							</p>
						</div>
					{/if}
				{:catch error}
					<div class="flex h-[450px] items-center justify-center">
						<p class="text-destructive text-sm">
							Error loading source code: {error.message}
						</p>
					</div>
				{/await}
			{/if}
		</div>
	</div>
</div>

<style>
	/* Custom styles for Shiki code blocks */
	:global(.shiki) {
		background: #0d1117 !important;
		border-radius: 0.5rem;
		overflow: auto;
		height: 100%;
	}

	:global(.shiki pre) {
		background: transparent !important;
		margin: 0;
		padding: 1rem;
		overflow: auto;
		height: 100%;
		font-size: 0.875rem;
		line-height: 1.5;
	}

	:global(.shiki code) {
		background: transparent !important;
		font-family: "JetBrains Mono", "Fira Code", "Cascadia Code", "Source Code Pro", Consolas,
			"Liberation Mono", Menlo, Courier, monospace;
	}

	/* Custom scrollbar for code blocks */
	:global(.shiki pre::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
	}

	:global(.shiki pre::-webkit-scrollbar-track) {
		background: #161b22;
		border-radius: 4px;
	}

	:global(.shiki pre::-webkit-scrollbar-thumb) {
		background: #30363d;
		border-radius: 4px;
	}

	:global(.shiki pre::-webkit-scrollbar-thumb:hover) {
		background: #484f58;
	}
</style>
