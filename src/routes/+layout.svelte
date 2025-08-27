<script lang="ts">
	import "../app.css";
	import { Toaster } from "$lib/registry/ui/sonner";

	let { children } = $props();
</script>

<div class="">
	<Toaster theme="light" />

	{@render children()}
</div>
