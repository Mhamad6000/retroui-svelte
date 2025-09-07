<script lang="ts">
	import Header from "$lib/layouts/header.svelte";
	import { navigation } from "$lib/navigation";
	import "../../themes.css";
	let { children } = $props();
</script>

<Header {navigation} />
{@render children?.()}
