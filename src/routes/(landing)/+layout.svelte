<script lang="ts">
	import { navigation } from "$lib/navigation";
	import Header from "$lib/layouts/header.svelte";
	import MetaData from "$lib/components/meta-data.svelte";
	let { children } = $props();
</script>

<MetaData />

<div>
	<Header {navigation} />
	{@render children()}
</div>
