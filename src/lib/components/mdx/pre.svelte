<!-- 
Pre Component
A pre element wrapper that adds copy functionality to code blocks.
Works with MDSX Shiki highlighting.

Usage:
This component is automatically used by MDSX for ```code blocks in markdown.
-->
<script lang="ts">
	import { cn } from "$registry/lib/utils";
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
	let preElement: HTMLDivElement;
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

<div class="relative group">
	<!-- Copy button positioned absolutely over the code block -->
	<CopyCodeButton code={codeText} />

	<div
		bind:this={preElement}
		class={cn("overflow-x-auto rounded-lg relative", className)}
		{...props}
	>
		{@render children()}
	</div>
</div>
