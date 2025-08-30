<!-- 
Copy Code Button Component
A specialized copy button for code blocks using registry button styling.

Props:
- code: string - The code text to copy
- class: string - Additional CSS classes

Usage:
<CopyCodeButton code="console.log('hello')" />
-->
<script lang="ts">
	import * as Button from "$registry/ui/button/index.js";

	let {
		code,
		class: className = "",
	}: {
		code: string;
		class?: string;
	} = $props();

	let copied = $state(false);
	let copyTimeout: ReturnType<typeof setTimeout> | null = null;

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;

			if (copyTimeout) clearTimeout(copyTimeout);
			copyTimeout = setTimeout(() => {
				copied = false;
			}, 500);
		} catch (err) {
			console.error("Failed to copy code:", err);
		}
	}
</script>

<Button.Root
	variant="default"
	size="icon"
	class="absolute right-2 top-2 z-10 {className}"
	onclick={copyToClipboard}
	title={copied ? "Copied!" : "Copy code"}
>
	{#if copied}
		<!-- Check icon -->
		<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
			></path>
		</svg>
	{:else}
		<!-- Copy icon -->
		<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
			></path>
		</svg>
	{/if}
</Button.Root>
