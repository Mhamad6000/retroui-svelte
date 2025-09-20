<script lang="ts">
	import { navigation } from "$lib/navigation";
	import Header from "$lib/layouts/header.svelte";
	let { children } = $props();
</script>

<div class="theme-container">
	<Header {navigation} />
	{@render children()}
</div>
