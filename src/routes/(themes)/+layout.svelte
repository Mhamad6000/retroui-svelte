<script lang="ts">
	import Header from "$lib/layouts/header.svelte";
	import { navigation } from "$lib/navigation";

	let { children } = $props();

	// Initialize user config
</script>

<div class="" data-theme="purple">
	<Header {navigation} />
	{@render children?.()}
</div>
