<script lang="ts">
	import { Copy, Check } from "lucide-svelte";
	import * as Button from "$lib/components/ui/button";

	interface Props {
		code: string;
		language?: string;
	}

	let { code, language = "bash" }: Props = $props();
	let copied = $state(false);

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	}
</script>

<div class="relative">
	<pre class="bg-muted overflow-x-auto rounded-lg border p-4 text-sm"><code
			class="language-{language}">{code}</code
		></pre>
	<Button.Root
		size="icon"
		variant="ghost"
		class="absolute top-2 right-2 h-8 w-8"
		onclick={copyToClipboard}
	>
		{#if copied}
			<Check class="h-4 w-4" />
		{:else}
			<Copy class="h-4 w-4" />
		{/if}
	</Button.Root>
</div>
