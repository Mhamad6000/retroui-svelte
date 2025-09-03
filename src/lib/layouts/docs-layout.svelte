<script lang="ts">
	import type { Navigation } from "$lib/utils/navigation.js";
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
		navigation: Navigation;
	}
	let { children, navigation }: Props = $props();
</script>

<div
	class="relative flex w-full flex-1 flex-row-reverse px-4 py-8 lg:pl-0 lg:pr-8 xl:gap-4"
	id="content"
>
	{@render children?.()}
</div>
