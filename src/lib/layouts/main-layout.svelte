<script lang="ts">
	import type { Snippet } from "svelte";
	import type { Navigation } from "$lib/utils/navigation.js";
	interface Props {
		children: Snippet;
		navigation: Navigation;
	}
	let { children, navigation }: Props = $props();

	let open = $state(false);
</script>

<!-- Header -->

<!-- Main Content -->
<main class="">
	{@render children?.()}
</main>
