<script lang="ts">
	import type { Component, Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$registry/lib/utils.js";
	import * as Tabs from "$registry/ui/tabs/index.js";
	import { highlightCode } from "$lib/utils/highlight.js";
	import CopyCodeButton from "./copy-code-button.svelte";
	import ScrollArea from "$registry/ui/scroll-area/scroll-area.svelte";
	import {
		previewComponents,
		previewComponentSources,
		type PreviewComponentName,
	} from "../../preview/index.js";

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

	// Get the preview component from the imported map
	function getPreviewComponent(componentName: string): Component | null {
		return previewComponents[componentName as PreviewComponentName] || null;
	}

	// Get the source code from the imported map
	function getPreviewComponentCode(componentName: string): string | null {
		return previewComponentSources[componentName as PreviewComponentName] || null;
	}
</script>

{#snippet ExampleFallback()}
	{#if component}
		{@const Component = component}
		<Component />
	{:else}
		{@const PreviewComponent = getPreviewComponent(name)}
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
						{@const sourceCode = getPreviewComponentCode(name)}
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
									<code class="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
										{name}
									</code>
								</p>
							</div>
						{/if}
					{/if}
				</div>
			</Tabs.Content>
		</div>
	</Tabs.Root>
</div>
