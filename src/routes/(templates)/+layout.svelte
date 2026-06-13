<script lang="ts">
	import Header from "$lib/layouts/header.svelte";
	import { navigation } from "$lib/navigation";

	let { children } = $props();
</script>

<Header {navigation} />
<main>
	{@render children?.()}
</main>
