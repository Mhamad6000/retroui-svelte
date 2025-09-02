<!-- 
Pre Component
A pre element wrapper that adds copy functionality to code blocks.
Works with MDSX Shiki highlighting.

Usage:
This component is automatically used by MDSX for ```code blocks in markdown.
-->
<script lang="ts">
	import { cn } from "$registry/lib/utils";
	import ScrollArea from "$registry/ui/scroll-area/scroll-area.svelte";
	import CopyCodeButton from "../copy-code-button.svelte";

	let {
		class: className = "",
		children,
		...props
	}: {
		class?: string;
		children: import("svelte").Snippet;
		[key: string]: any;
	} = $props();

	// Extract the code text from the rendered content for copying
	let preElement: HTMLPreElement;
	let codeText = $state("");

	$effect(() => {
		if (preElement) {
			// Extract text content from the pre element for copying
			const codeElement = preElement.querySelector("code");
			if (codeElement) {
				codeText = codeElement.textContent || "";
			}
		}
	});
</script>

<ScrollArea orientation="both" data-pre-wrapper="">
	<!-- Copy button positioned absolutely over the code block -->

	<pre bind:this={preElement} class={cn("text-sm", className)} {...props}>
		{@render children()}
	</pre>
</ScrollArea>
<CopyCodeButton code={codeText} />
